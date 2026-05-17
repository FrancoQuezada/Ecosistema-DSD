import Link from "next/link";

import { ChallengeCard } from "@/components/cards/ChallengeCard";
import { Badge } from "@/components/ui/Badge";
import { FlowStep } from "@/components/ui/FlowStep";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { challengeEvaluations, challenges } from "@/data/challenges";

const scoreByChallengeId = new Map(
  challengeEvaluations.map((evaluation) => [
    evaluation.id_desafio,
    evaluation.puntaje_total,
  ]),
);

const suitableChallenges = [
  "Problemas con usuarios o stakeholders identificables.",
  "Procesos que puedan mejorar con información, automatización o visualización.",
  "Necesidades con impacto formativo, institucional, investigativo o social.",
  "Desafíos con datos disponibles, o con datos que puedan levantarse de forma responsable.",
  "Oportunidades que puedan validarse en un semestre, taller o laboratorio.",
];

const lifecycle = [
  {
    title: "Recibido",
    description: "El desafío ingresa al banco con antecedentes mínimos.",
  },
  {
    title: "En revisión",
    description: "Se analiza claridad, usuarios, datos, impacto y factibilidad.",
  },
  {
    title: "Seleccionado",
    description: "El comité prioriza el desafío para desarrollo académico.",
  },
  {
    title: "Convertido en proyecto",
    description: "Se define alcance, equipo, sponsor y criterios de validación.",
  },
];

export default function ChallengesPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <SectionHeader
            eyebrow="Banco de desafíos"
            title="Un punto de entrada para necesidades con potencial digital"
            description="El banco reúne problemas reales propuestos por estudiantes, académicos, unidades internas y partners externos. Su función es ordenar la revisión, priorización y conversión de desafíos en proyectos desarrollables."
            tone="dark"
          />
          <Link
            href="/desafios/nuevo"
            className="rounded-lg bg-[#12c7c0] px-5 py-3 text-center text-sm font-semibold text-[#0f172a] transition hover:bg-[#5eead4]"
          >
            Proponer un desafío
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-[#17212b]">
              ¿Qué desafíos son adecuados?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              No todo problema requiere software. El ecosistema prioriza
              desafíos donde una solución digital pueda ser acotada, validada y
              documentada con usuarios reales.
            </p>
            <ul className="mt-6 space-y-3">
              {suitableChallenges.map((criterion) => (
                <li key={criterion} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-1.5 size-2 rounded-full bg-[#12c7c0]" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-[#17212b]">
              Ciclo de vida del desafío
            </h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {lifecycle.map((step, index) => (
                <FlowStep
                  key={step.title}
                  index={index + 1}
                  title={step.title}
                  description={step.description}
                  compact
                />
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Desafíos mock"
              title="Desafíos registrados para revisión"
              description="Esta vista usa datos de ejemplo para mostrar cómo se visualizará el banco cuando exista persistencia real."
            />
            <div className="flex flex-wrap gap-2">
              <Badge variant="accent">{challenges.length} desafíos</Badge>
              <Badge variant="neutral">
                {challengeEvaluations.length} evaluados
              </Badge>
            </div>
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
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
              <h3 className="text-lg font-semibold text-[#17212b]">
                Aún no hay desafíos publicados
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Cuando el banco reciba postulaciones, aparecerán en esta vista.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
