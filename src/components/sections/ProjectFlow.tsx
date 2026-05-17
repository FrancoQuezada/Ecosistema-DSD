import { FlowStep } from "@/components/ui/FlowStep";
import { SectionHeader } from "@/components/ui/SectionHeader";

const flowSteps = [
  {
    title: "Desafío",
    description:
      "Una unidad, académico, estudiante o partner formula una necesidad real.",
  },
  {
    title: "Proyecto",
    description:
      "El desafío seleccionado se traduce en alcance, equipo, sponsor y criterios.",
  },
  {
    title: "Prototipo/MVP",
    description:
      "El equipo desarrolla una solución aplicada en curso, taller o laboratorio.",
  },
  {
    title: "Validación",
    description:
      "Usuarios y stakeholders revisan utilidad, adopción y mejoras necesarias.",
  },
  {
    title: "Continuidad",
    description:
      "El comité decide laboratorio, piloto, adopción, transferencia o cierre.",
  },
  {
    title: "Portafolio",
    description:
      "Las soluciones con evidencia se documentan como activos del ecosistema.",
  },
];

export function ProjectFlow() {
  return (
    <section className="bg-slate-50 py-24" id="flujo">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Desafío → Proyecto → Prototipo/MVP → Validación → Continuidad → Portafolio"
          description="El flujo explicita cómo una necesidad se transforma en trabajo formativo aplicado y cómo se decide si avanza a piloto, adopción, transferencia o cierre documentado."
          align="center"
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flowSteps.map((step, index) => (
            <FlowStep
              key={step.title}
              index={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
