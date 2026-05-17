import type { ChallengeEvaluation, ContinuityEvaluation } from "@/lib/types";

type ChallengeEvaluationScoreFields = Pick<
  ChallengeEvaluation,
  | "claridad_problema_puntaje"
  | "usuario_stakeholder_puntaje"
  | "impacto_esperado_puntaje"
  | "factibilidad_tecnica_puntaje"
  | "disponibilidad_datos_puntaje"
  | "valor_formativo_puntaje"
  | "potencial_continuidad_puntaje"
>;

type ContinuityEvaluationScoreFields = Pick<
  ContinuityEvaluation,
  | "usuario_real_interesado_puntaje"
  | "impacto_potencial_puntaje"
  | "madurez_tecnica_puntaje"
  | "documentacion_puntaje"
  | "factibilidad_escalamiento_puntaje"
  | "alineamiento_institucional_puntaje"
  | "equipo_disponible_puntaje"
>;

export const challengeEvaluationWeights = {
  claridad_problema_puntaje: 0.15,
  usuario_stakeholder_puntaje: 0.15,
  impacto_esperado_puntaje: 0.2,
  factibilidad_tecnica_puntaje: 0.15,
  disponibilidad_datos_puntaje: 0.1,
  valor_formativo_puntaje: 0.15,
  potencial_continuidad_puntaje: 0.1,
} satisfies Record<keyof ChallengeEvaluationScoreFields, number>;

export const continuityEvaluationWeights = {
  usuario_real_interesado_puntaje: 0.2,
  impacto_potencial_puntaje: 0.1,
  madurez_tecnica_puntaje: 0.15,
  documentacion_puntaje: 0.15,
  factibilidad_escalamiento_puntaje: 0.15,
  alineamiento_institucional_puntaje: 0.05,
  equipo_disponible_puntaje: 0.2,
} satisfies Record<keyof ContinuityEvaluationScoreFields, number>;

const SCORE_MAX = 5;

function clampScore(value: number) {
  return Math.max(0, Math.min(SCORE_MAX, value));
}

function roundScore(value: number) {
  return Math.round(value * 10) / 10;
}

export function calculateChallengeEvaluationScore(
  scores: ChallengeEvaluationScoreFields,
) {
  const total = Object.entries(challengeEvaluationWeights).reduce(
    (accumulator, [criterion, weight]) => {
      const score = scores[criterion as keyof ChallengeEvaluationScoreFields];
      return accumulator + (clampScore(score) / SCORE_MAX) * weight * 100;
    },
    0,
  );

  return roundScore(total);
}

export function calculateContinuityEvaluationScore(
  scores: ContinuityEvaluationScoreFields,
) {
  const total = Object.entries(continuityEvaluationWeights).reduce(
    (accumulator, [criterion, weight]) => {
      const score =
        scores[criterion as keyof ContinuityEvaluationScoreFields];
      return accumulator + (clampScore(score) / SCORE_MAX) * weight * 100;
    },
    0,
  );

  return roundScore(total);
}
