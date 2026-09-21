import type { EstadoDesafio, PublicChallenge } from "@/lib/types";
import { getSupabaseEnvDiagnostics } from "@/lib/supabase/client";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const publicChallengeSelect = [
  "id_desafio",
  "nombre_desafio",
  "estado_desafio",
  "descripcion_problema",
  "proponente_nombre",
  "unidad_organizacion",
  "usuario_objetivo",
  "tipo_solucion_esperada",
  "impacto_esperado",
].join(", ");

const challengeStatuses = [
  "recibido",
  "postulado",
  "en_revision",
  "evaluado",
  "priorizado",
  "seleccionado",
  "convertido_en_proyecto",
  "cerrado",
] as const satisfies readonly EstadoDesafio[];

export type ListPublicChallengesResult =
  | {
      status: "success";
      challenges: PublicChallenge[];
    }
  | {
      status: "error";
      challenges: [];
    };

function toNullableText(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();

  return text || null;
}

function toChallengeId(value: unknown): string | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  return toNullableText(value);
}

function toChallengeStatus(value: unknown): EstadoDesafio | null {
  return challengeStatuses.includes(value as EstadoDesafio)
    ? (value as EstadoDesafio)
    : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toPublicChallenge(row: Record<string, unknown>): PublicChallenge {
  return {
    id_desafio: toChallengeId(row.id_desafio),
    nombre_desafio: toNullableText(row.nombre_desafio),
    estado_desafio: toChallengeStatus(row.estado_desafio),
    descripcion_problema: toNullableText(row.descripcion_problema),
    proponente_nombre: toNullableText(row.proponente_nombre),
    unidad_organizacion: toNullableText(row.unidad_organizacion),
    usuario_objetivo: toNullableText(row.usuario_objetivo),
    tipo_solucion_esperada: toNullableText(row.tipo_solucion_esperada),
    impacto_esperado: toNullableText(row.impacto_esperado),
  };
}

/**
 * Lists the fields needed by public challenge cards using the anonymous key.
 * RLS policies remain responsible for deciding which rows the anon role sees.
 */
export async function listPublicChallenges(): Promise<ListPublicChallengesResult> {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "[Challenges] Supabase no está configurado para la lectura pública.",
        getSupabaseEnvDiagnostics(),
      );
    }

    return { status: "error", challenges: [] };
  }

  const { data, error } = await supabase
    .from("desafios")
    .select(publicChallengeSelect)
    .order("fecha_postulacion", { ascending: false });

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Challenges] Supabase select error", error);
    }

    return { status: "error", challenges: [] };
  }

  const rows: unknown[] = Array.isArray(data) ? data : [];
  const challenges = rows.filter(isRecord).map(toPublicChallenge);

  return { status: "success", challenges };
}
