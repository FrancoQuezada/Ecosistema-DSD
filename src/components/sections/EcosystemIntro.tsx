import type { ReactNode } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

type PillarIconName = "learning" | "institution" | "continuity";

type Pillar = {
  title: string;
  text: string;
  iconName: PillarIconName;
};

const processSteps = [
  "Desafío real",
  "Trabajo formativo",
  "Prototipo/MVP",
  "Continuidad",
];

const institutionalValues = [
  "Integra docencia, investigación aplicada y vinculación con el medio.",
  "Ordena necesidades reales en desafíos evaluables y priorizables.",
  "Documenta resultados para sostener continuidad, adopción o transferencia.",
];

const pillars: Pillar[] = [
  {
    title: "Aprendizaje aplicado",
    text: "Los estudiantes trabajan sobre problemas reales, con restricciones, usuarios y criterios de validación.",
    iconName: "learning",
  },
  {
    title: "Valor institucional",
    text: "Las unidades internas pueden transformar necesidades operacionales, docentes o analíticas en soluciones digitales evaluables.",
    iconName: "institution",
  },
  {
    title: "Continuidad y transferencia",
    text: "Los prototipos con evidencia pueden avanzar hacia laboratorio, piloto, adopción, transferencia o cierre documentado.",
    iconName: "continuity",
  },
];

const pillarIcons: Record<PillarIconName, ReactNode> = {
  learning: (
    <>
      <path d="M4 7.5 12 4l8 3.5-8 3.5L4 7.5z" />
      <path d="M7 10v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V10" />
      <path d="M20 8v5" />
    </>
  ),
  institution: (
    <>
      <path d="M4 10h16" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
      <path d="M3 18h18" />
      <path d="M12 4 4 8h16L12 4z" />
    </>
  ),
  continuity: (
    <>
      <path d="M7 7h8a4 4 0 0 1 4 4v1" />
      <path d="m16 4 3 3-3 3" />
      <path d="M17 17H9a4 4 0 0 1-4-4v-1" />
      <path d="m8 20-3-3 3-3" />
    </>
  ),
};

function PillarIcon({ iconName }: { iconName: PillarIconName }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ecfeff] text-[#0f766e] ring-1 ring-[#99f6e4]">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {pillarIcons[iconName]}
      </svg>
    </span>
  );
}

export function EcosystemIntro() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Qué es el ecosistema"
          title="Una plataforma académica para transformar desafíos reales en soluciones digitales aplicadas"
          description="El ecosistema articula docencia, investigación aplicada, vinculación con el medio e infraestructura tecnológica para convertir necesidades reales en prototipos, MVP, pilotos y soluciones digitales con potencial de continuidad."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
              Idea central
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#17212b]">
              Una fábrica académica de soluciones digitales aplicadas
            </h3>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
              Funciona como una fábrica académica de soluciones digitales:
              recibe desafíos, forma equipos, desarrolla prototipos, valida con
              usuarios y selecciona proyectos con potencial de continuidad o
              transferencia.
            </p>

            <div className="mt-7 rounded-lg border border-[#99f6e4] bg-[#f0fdfa] p-4">
              <ol className="grid gap-3 md:grid-cols-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-md border border-[#ccfbf1] bg-white px-3 py-3 text-sm font-semibold text-[#17212b]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                    {index < processSteps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto hidden text-[#0f766e] md:inline"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <aside className="rounded-lg border border-[#134e4a]/20 bg-[#17212b] p-6 text-white shadow-sm shadow-slate-900/10 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#12c7c0]">
              Valor que articula
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Aprendizaje, evidencia y continuidad en un mismo ciclo
            </h3>
            <ul className="mt-6 space-y-4">
              {institutionalValues.map((value) => (
                <li key={value} className="flex gap-3 text-sm leading-6">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#12c7c0]"
                  />
                  <span className="text-slate-200">{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:border-[#12c7c0] hover:shadow-lg hover:shadow-slate-900/10"
            >
              <PillarIcon iconName={pillar.iconName} />
              <h3 className="mt-5 text-lg font-semibold text-[#17212b]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
