import Link from "next/link";

import { ChallengeCard } from "@/components/cards/ChallengeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challengeEvaluations, challenges } from "@/data/challenges";

const scoreByChallengeId = new Map(
  challengeEvaluations.map((evaluation) => [
    evaluation.id_desafio,
    evaluation.puntaje_total,
  ]),
);

const criteria = [
  "Claridad del problema",
  "Usuario y stakeholder identificados",
  "Impacto esperado",
  "Factibilidad técnica",
  "Disponibilidad de datos",
  "Valor formativo",
  "Potencial de continuidad",
];

export default function ChallengesPage() {
  return (
    <div className="bg-[#f7f8f5]">
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <SectionHeading
            eyebrow="Banco de desafíos"
            title="Entrada ordenada para problemas con potencial digital"
            description="El banco permite formular, revisar y priorizar desafíos que puedan convertirse en proyectos de curso, taller o laboratorio."
          />
          <Link
            href="/desafios/nuevo"
            className="rounded-lg bg-[#0f5f55] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0b4c44]"
          >
            Postular desafío
          </Link>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-lg border border-[#d8ded8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#17211f]">
              Criterios de evaluación
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#52615d]">
              Cada desafío se pondera sobre 100 puntos con los pesos definidos
              en el módulo de scoring.
            </p>
            <ul className="mt-6 space-y-3">
              {criteria.map((criterion) => (
                <li key={criterion} className="flex gap-3 text-sm text-[#52615d]">
                  <span className="mt-1.5 size-2 rounded-full bg-[#0f5f55]" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[#d8ded8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#17211f]">
              Camino esperado
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Postulación",
                "Revisión",
                "Priorización",
                "Proyecto",
                "Validación",
                "Continuidad",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-lg bg-[#f7f8f5] px-4 py-3 text-sm font-semibold text-[#17211f]"
                >
                  {index + 1}. {step}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#52615d]">
              En esta primera versión la información es mock y no hay flujo de
              aprobación real. La estructura está lista para conectarse a una
              tabla de desafíos y evaluaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-[#17211f]">
              Desafíos registrados
            </h2>
            <p className="text-sm text-[#52615d]">
              Vista pública preliminar de desafíos disponibles para revisión y
              priorización.
            </p>
          </div>

          {challenges.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id_desafio}
                  challenge={challenge}
                  score={scoreByChallengeId.get(challenge.id_desafio)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-[#cbd5d1] bg-white p-10 text-center">
              <h3 className="text-lg font-semibold text-[#17211f]">
                Aún no hay desafíos publicados
              </h3>
              <p className="mt-2 text-sm text-[#52615d]">
                Cuando el banco reciba postulaciones, aparecerán en esta vista.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
