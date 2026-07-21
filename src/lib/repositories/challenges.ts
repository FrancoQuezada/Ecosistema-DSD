import "server-only";

import { getSupabaseServerClient } from "@/lib/supabase/serverClient";
import type { Challenge, EstadoDesafio } from "@/lib/types";

const DESAFIOS_TABLE = "desafios";

const ESTADO_DESAFIO_VALUES: readonly EstadoDesafio[] = [
  "postulado",
  "en_revision",
  "evaluado",
  "priorizado",
  "seleccionado",
  "convertido_en_proyecto",
  "cerrado",
];

function isEstadoDesafio(value: unknown): value is EstadoDesafio {
  return ESTADO_DESAFIO_VALUES.includes(value as EstadoDesafio);
}

/**
 * Public, non-sensitive projection of a challenge row. Deliberately excludes
 * proponente_contacto, restricciones_datos, observaciones and other
 * evaluation-only fields that must never reach the public /desafios page.
 */
export type PublicChallenge = Pick<
  Challenge,
  | "id_desafio"
  | "nombre_desafio"
  | "descripcion_problema"
  | "proponente_nombre"
  | "unidad_organizacion"
  | "usuario_objetivo"
  | "tipo_solucion_esperada"
  | "impacto_esperado"
  | "estado_desafio"
  | "fecha_postulacion"
>;

// Written as a single literal (not built via array.join, which widens to
// `string`) so the Supabase query builder can type-check the select clause.
const PUBLIC_CHALLENGE_COLUMNS =
  "id_desafio, nombre_desafio, descripcion_problema, proponente_nombre, unidad_organizacion, usuario_objetivo, tipo_solucion_esperada, impacto_esperado, estado_desafio, fecha_postulacion";

type PublicChallengeRow = Record<string, unknown>;

function toSafeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function mapRowToPublicChallenge(row: PublicChallengeRow): PublicChallenge {
  return {
    id_desafio: toSafeString(row.id_desafio),
    nombre_desafio: toSafeString(row.nombre_desafio),
    descripcion_problema: toSafeString(row.descripcion_problema),
    proponente_nombre: toSafeString(row.proponente_nombre),
    unidad_organizacion: toSafeString(row.unidad_organizacion),
    usuario_objetivo: toSafeString(row.usuario_objetivo),
    tipo_solucion_esperada: toSafeString(row.tipo_solucion_esperada),
    impacto_esperado: toSafeString(row.impacto_esperado),
    estado_desafio: isEstadoDesafio(row.estado_desafio)
      ? row.estado_desafio
      : "postulado",
    fecha_postulacion: toSafeString(row.fecha_postulacion),
  };
}

export type ListPublicChallengesResult =
  | { status: "not_configured" }
  | { status: "error"; message: string }
  | { status: "ok"; challenges: PublicChallenge[] };

/**
 * Lists challenges authorized for public display: rows where `publicado`
 * is true. A challenge becomes public only when the comité explicitly marks
 * it, so a fresh postulación never appears on /desafios by default. See
 * supabase/migrations/0001_desafios_public_read.sql for the RLS policy.
 */
export async function listPublicChallenges(): Promise<ListPublicChallengesResult> {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return { status: "not_configured" };
  }

  const { data, error } = await supabase
    .from(DESAFIOS_TABLE)
    .select(PUBLIC_CHALLENGE_COLUMNS)
    .eq("publicado", true)
    .order("fecha_postulacion", { ascending: false });

  if (error) {
    console.error("listPublicChallenges query error", error);
    return { status: "error", message: error.message };
  }

  return {
    status: "ok",
    challenges: (data ?? []).map((row) =>
      mapRowToPublicChallenge(row as PublicChallengeRow),
    ),
  };
}
