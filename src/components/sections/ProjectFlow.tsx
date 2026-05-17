import { FlowStep } from "@/components/ui/FlowStep";
import { SectionHeader } from "@/components/ui/SectionHeader";

const flowSteps = [
  {
    title: "Desafío",
    subtitle: "Entrada de una necesidad real",
    description:
      "Una unidad, académico, estudiante o partner formula un problema u oportunidad.",
  },
  {
    title: "Proyecto",
    subtitle: "Formulación y alcance",
    description:
      "El desafío seleccionado se traduce en equipo, sponsor, objetivo y criterios.",
  },
  {
    title: "Prototipo/MVP",
    subtitle: "Desarrollo aplicado",
    description:
      "El equipo construye una primera solución funcional en curso, taller o laboratorio.",
  },
  {
    title: "Validación",
    subtitle: "Prueba con usuarios",
    description:
      "Usuarios y stakeholders revisan utilidad, adopción y mejoras necesarias.",
  },
  {
    title: "Continuidad",
    subtitle: "Decisión de avance",
    description:
      "El comité define si el proyecto pasa a laboratorio, piloto, adopción, transferencia o cierre.",
  },
  {
    title: "Portafolio",
    subtitle: "Visibilización",
    description:
      "Las soluciones con evidencia se documentan como activos del ecosistema.",
  },
];

function ProcessStepper() {
  return (
    <div className="mt-12 rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 md:p-6">
      <ol className="relative grid gap-5 md:grid-cols-6 md:gap-3">
        <div
          aria-hidden="true"
          className="absolute left-5 top-0 h-full w-px bg-slate-200 md:left-[8.333%] md:right-[8.333%] md:top-5 md:h-px md:w-auto"
        />
        <div
          aria-hidden="true"
          className="absolute left-5 top-0 h-full w-px bg-[#00a499]/45 md:left-[8.333%] md:right-[8.333%] md:top-5 md:h-px md:w-auto"
        />
        {flowSteps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#0f766e] text-sm font-semibold text-white shadow-sm shadow-slate-900/15">
                {index + 1}
              </span>
              <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 md:min-h-32 md:w-full">
                <h3 className="text-sm font-semibold leading-5 text-[#17212b]">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0f766e]">
                  {step.subtitle}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProjectFlow() {
  return (
    <section className="bg-slate-50 py-24" id="flujo">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="CÓMO FUNCIONA"
          title="De desafío a solución digital"
          description="El flujo explicita cómo una necesidad se transforma en trabajo formativo aplicado y cómo se decide si avanza a piloto, adopción, transferencia o cierre documentado."
          align="center"
        />

        <ProcessStepper />

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flowSteps.map((step, index) => (
            <FlowStep
              key={step.title}
              index={index + 1}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
