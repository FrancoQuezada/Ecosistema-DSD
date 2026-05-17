"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

type SolutionIconName =
  | "browser"
  | "chart"
  | "sliders"
  | "spark"
  | "tree"
  | "loop"
  | "target"
  | "rocket";

type SolutionType = {
  id: string;
  title: string;
  shortDescription: string;
  useCases: string;
  examples: string;
  valueForEcosystem: string;
  iconName: SolutionIconName;
};

const solutionTypes: SolutionType[] = [
  {
    id: "aplicaciones-web",
    title: "Aplicaciones web",
    shortDescription:
      "Plataformas accesibles desde navegador para gestionar procesos, usuarios, información o flujos de trabajo.",
    useCases:
      "Útiles cuando se requiere interacción frecuente, formularios, paneles, usuarios y persistencia de datos.",
    examples:
      "Portales internos, sistemas de seguimiento, plataformas de postulación, herramientas de gestión académica.",
    valueForEcosystem:
      "Permiten convertir procesos dispersos en sistemas trazables y reutilizables.",
    iconName: "browser",
  },
  {
    id: "dashboards",
    title: "Dashboards",
    shortDescription:
      "Paneles visuales para explorar datos, indicadores y estados de avance.",
    useCases:
      "Útiles cuando se necesita monitorear desempeño, comunicar evidencia o apoyar decisiones.",
    examples:
      "Seguimiento de proyectos, indicadores docentes, visualización de encuestas, reportes de operación.",
    valueForEcosystem:
      "Transforman datos en información comprensible para usuarios, académicos y responsables de decisión.",
    iconName: "chart",
  },
  {
    id: "simuladores",
    title: "Simuladores",
    shortDescription:
      "Entornos digitales para representar escenarios, procesos o sistemas.",
    useCases:
      "Útiles para docencia, análisis de alternativas, experimentación y comprensión de sistemas complejos.",
    examples:
      "Simuladores logísticos, productivos, energéticos, financieros o de toma de decisiones.",
    valueForEcosystem:
      "Apoyan aprendizaje aplicado y permiten experimentar sin intervenir directamente un sistema real.",
    iconName: "sliders",
  },
  {
    id: "herramientas-ia",
    title: "Herramientas con IA",
    shortDescription:
      "Soluciones que integran modelos de inteligencia artificial para asistir análisis, clasificación, generación o interacción.",
    useCases:
      "Útiles cuando se requiere analizar documentos, automatizar revisión, generar apoyo conversacional o extraer información.",
    examples:
      "Asistentes documentales, clasificadores, chatbots, generadores de reportes, analizadores de texto.",
    valueForEcosystem:
      "Amplían las capacidades de prototipado y permiten explorar nuevas formas de apoyo a usuarios.",
    iconName: "spark",
  },
  {
    id: "apoyo-decisiones",
    title: "Sistemas de apoyo a decisiones",
    shortDescription:
      "Herramientas que integran datos, modelos, criterios y visualización para apoyar decisiones complejas.",
    useCases:
      "Útiles cuando existen múltiples alternativas, restricciones, actores o criterios de evaluación.",
    examples:
      "Sistemas de priorización, asignación de recursos, planificación académica, selección de proyectos.",
    valueForEcosystem:
      "Conectan la formación en ingeniería industrial con problemas reales de decisión.",
    iconName: "tree",
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones",
    shortDescription:
      "Flujos digitales que reducen tareas repetitivas, ordenan información o conectan procesos.",
    useCases:
      "Útiles cuando existen tareas manuales frecuentes, carga administrativa o traspaso repetitivo de información.",
    examples:
      "Correos automáticos, actualización de estados, generación de reportes, integración de formularios.",
    valueForEcosystem:
      "Liberan tiempo operativo y mejoran la consistencia de procesos internos.",
    iconName: "loop",
  },
  {
    id: "optimizadores",
    title: "Optimizadores",
    shortDescription:
      "Herramientas basadas en modelos matemáticos, heurísticas o algoritmos para encontrar mejores decisiones.",
    useCases:
      "Útiles cuando el problema involucra asignación, planificación, programación, rutas, recursos o restricciones.",
    examples:
      "Optimización de horarios, asignación de equipos, planificación de producción, ruteo, programación de recursos.",
    valueForEcosystem:
      "Permiten materializar capacidades analíticas avanzadas en herramientas utilizables.",
    iconName: "target",
  },
  {
    id: "prototipos-transferibles",
    title: "Prototipos transferibles",
    shortDescription:
      "Versiones iniciales de soluciones con potencial de continuidad, adopción o transferencia.",
    useCases:
      "Útiles cuando una solución demuestra valor más allá del curso o actividad inicial.",
    examples:
      "MVP con usuarios reales, pilotos institucionales, demos para partners, herramientas derivadas de investigación.",
    valueForEcosystem:
      "Conectan docencia, investigación aplicada y vinculación con el medio.",
    iconName: "rocket",
  },
];

const iconPaths: Record<SolutionIconName, ReactNode> = {
  browser: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 7h.01" />
      <path d="M10 7h.01" />
      <path d="M8 14h8" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h17" />
      <rect x="7" y="11" width="3" height="5" rx="1" />
      <rect x="12" y="8" width="3" height="8" rx="1" />
      <rect x="17" y="6" width="3" height="10" rx="1" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10" />
      <path d="M18 7h2" />
      <circle cx="16" cy="7" r="2" />
      <path d="M4 12h3" />
      <path d="M11 12h9" />
      <circle cx="9" cy="12" r="2" />
      <path d="M4 17h12" />
      <path d="M20 17h0" />
      <circle cx="18" cy="17" r="2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3z" />
      <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z" />
      <path d="M19 14l.6 1.6L21 16l-1.4.4L19 18l-.6-1.6L17 16l1.4-.4L19 14z" />
    </>
  ),
  tree: (
    <>
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <rect x="4" y="17" width="6" height="4" rx="1" />
      <rect x="14" y="17" width="6" height="4" rx="1" />
      <path d="M12 7v4" />
      <path d="M7 17v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
    </>
  ),
  loop: (
    <>
      <path d="M7 7h8a4 4 0 0 1 4 4v1" />
      <path d="M16 4l3 3-3 3" />
      <path d="M17 17H9a4 4 0 0 1-4-4v-1" />
      <path d="M8 20l-3-3 3-3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18 6l3-3" />
      <path d="M16 4h5v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 15l-3-3a9 9 0 0 1 8-8l3 3a9 9 0 0 1-8 8z" />
      <path d="M9 12l-4 1 1-4" />
      <path d="M12 15l-1 4 4-1" />
      <circle cx="16" cy="8" r="1.5" />
      <path d="M7 17l-3 3" />
    </>
  ),
};

function SolutionIcon({ iconName }: { iconName: SolutionIconName }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ecfeff] text-[#0f766e] ring-1 ring-[#99f6e4]">
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
        {iconPaths[iconName]}
      </svg>
    </span>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f766e]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export function SolutionTypes() {
  const [selectedId, setSelectedId] = useState(solutionTypes[0].id);
  const selected =
    solutionTypes.find((solutionType) => solutionType.id === selectedId) ??
    solutionTypes[0];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Tipos de soluciones"
          title="Soluciones digitales con foco en uso, evidencia y aprendizaje"
          description="El ecosistema prioriza entregables que puedan validarse con usuarios y documentarse para continuidad académica, institucional o de transferencia."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionTypes.map((solutionType) => {
              const isSelected = solutionType.id === selected.id;

              return (
                <button
                  key={solutionType.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(solutionType.id)}
                  className={`group rounded-lg border p-5 text-left shadow-sm transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#0f766e]/15 ${
                    isSelected
                      ? "border-[#12c7c0] bg-[#ecfeff] shadow-md shadow-slate-900/10"
                      : "border-slate-200 bg-white shadow-slate-900/5 hover:-translate-y-1 hover:border-[#12c7c0] hover:shadow-lg hover:shadow-slate-900/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <SolutionIcon iconName={solutionType.iconName} />
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[#17212b]">
                        {solutionType.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {solutionType.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <aside
            aria-live="polite"
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 lg:sticky lg:top-24"
          >
            <div className="flex items-start gap-4">
              <SolutionIcon iconName={selected.iconName} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f766e]">
                  Tipo seleccionado
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#17212b]">
                  {selected.title}
                </h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              {selected.shortDescription}
            </p>

            <div className="mt-6 space-y-5 border-t border-slate-200 pt-6">
              <DetailBlock title="Casos de uso" text={selected.useCases} />
              <DetailBlock title="Ejemplos" text={selected.examples} />
              <DetailBlock
                title="Valor para el ecosistema"
                text={selected.valueForEcosystem}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
