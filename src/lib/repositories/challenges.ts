import type {
  EstadoDesafio,
  NivelAccesoDatos,
  PublicChallenge,
  PublicChallengeDetail,
  TipoProponente,
} from "@/lib/types";
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

const publicChallengeDetailSelect = [
  "id_desafio",
  "nombre_desafio",
  "estado_desafio",
  "origen_desafio",
  "proponente_nombre",
  "unidad_organizacion",
  "tipo_proponente",
  "fecha_postulacion",
  "descripcion_problema",
  "necesidad_oportunidad",
  "usuario_objetivo",
  "stakeholder_principal",
  "sponsor_academico",
  "tipo_solucion_esperada",
  "area_aplicacion",
  "datos_disponibles",
  "nivel_acceso_datos",
  "impacto_esperado",
  "beneficiarios",
  "factibilidad_preliminar",
  "riesgos_restricciones",
  "horizonte_desarrollo",
  "potencial_continuidad",
].join(", ");

const challengeStatuses = [
  "recibido",
  "postulado",
  "en_revision",
  "requiere_ajustes",
  "evaluado",
  "priorizado",
  "seleccionado",
  "banco_espera",
  "rechazado",
  "convertido_en_proyecto",
  "cerrado",
] as const satisfies readonly EstadoDesafio[];

const proposerTypes = [
  "estudiante",
  "academico",
  "unidad_interna",
  "socio_externo",
  "otro",
] as const satisfies readonly TipoProponente[];

const dataAccessLevels = [
  "sin_datos",
  "publico",
  "interno",
  "privado",
  "restringido",
  "sensible",
  "por_definir",
] as const satisfies readonly NivelAccesoDatos[];

export type ListPublicChallengesResult =
  | {
      status: "success";
      challenges: PublicChallenge[];
    }
  | {
      status: "error";
      challenges: [];
    };

export type GetPublicChallengeResult =
  | {
      status: "success";
      challenge: PublicChallengeDetail;
    }
  | {
      status: "not_found" | "error";
      challenge: null;
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

function toProposerType(value: unknown): TipoProponente | null {
  return proposerTypes.includes(value as TipoProponente)
    ? (value as TipoProponente)
    : null;
}

function toDataAccessLevel(value: unknown): NivelAccesoDatos | null {
  return dataAccessLevels.includes(value as NivelAccesoDatos)
    ? (value as NivelAccesoDatos)
    : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
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

function toPublicChallengeDetail(
  row: Record<string, unknown>,
): PublicChallengeDetail {
  return {
    ...toPublicChallenge(row),
    origen_desafio: toNullableText(row.origen_desafio),
    tipo_proponente: toProposerType(row.tipo_proponente),
    fecha_postulacion: toNullableText(row.fecha_postulacion),
    necesidad_oportunidad: toNullableText(row.necesidad_oportunidad),
    stakeholder_principal: toNullableText(row.stakeholder_principal),
    sponsor_academico: toNullableText(row.sponsor_academico),
    area_aplicacion: toNullableText(row.area_aplicacion),
    datos_disponibles: toNullableText(row.datos_disponibles),
    nivel_acceso_datos: toDataAccessLevel(row.nivel_acceso_datos),
    beneficiarios: toNullableText(row.beneficiarios),
    factibilidad_preliminar: toNullableText(row.factibilidad_preliminar),
    riesgos_restricciones: toNullableText(row.riesgos_restricciones),
    horizonte_desarrollo: toNullableText(row.horizonte_desarrollo),
    potencial_continuidad: toNullableText(row.potencial_continuidad),
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

/**
 * Returns one published challenge for the public detail page.
 * An unpublished row is indistinguishable from a missing row because RLS
 * filters it before it reaches this anonymous client.
 */
export async function getPublicChallenge(
  id: string,
): Promise<GetPublicChallengeResult> {
  if (!isUuid(id)) {
    return { status: "not_found", challenge: null };
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    if (process.env.NODE_ENV !== "production") {
      console.error(
        "[Challenges] Supabase no está configurado para el detalle público.",
        getSupabaseEnvDiagnostics(),
      );
    }

    return { status: "error", challenge: null };
  }

  const { data, error } = await supabase
    .from("desafios")
    .select(publicChallengeDetailSelect)
    .eq("id_desafio", id)
    .maybeSingle();

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Challenges] Supabase detail select error", error);
    }

    return { status: "error", challenge: null };
  }

  if (!isRecord(data)) {
    return { status: "not_found", challenge: null };
  }

  return {
    status: "success",
    challenge: toPublicChallengeDetail(data),
  };
}
