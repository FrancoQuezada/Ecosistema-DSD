import { SectionHeading } from "@/components/ui/SectionHeading";

const axes = [
  {
    title: "Banco de desafíos",
    text: "Entrada estructurada de problemas reales, necesidades y oportunidades de digitalización.",
  },
  {
    title: "Taller o curso semestral",
    text: "Desarrollo guiado por equipos estudiantiles con foco formativo y validación temprana.",
  },
  {
    title: "Laboratorio de continuidad",
    text: "Espacio para sostener proyectos con potencial después del ciclo de asignatura.",
  },
  {
    title: "Infraestructura tecnológica",
    text: "Base técnica, repositorios, despliegue y prácticas para prototipos mantenibles.",
  },
  {
    title: "Portafolio de soluciones",
    text: "Vitrina de prototipos, MVP, pilotos y soluciones adoptadas o transferibles.",
  },
  {
    title: "Gobernanza y transferencia",
    text: "Criterios de priorización, continuidad, propiedad, adopción y cierre documentado.",
  },
  {
    title: "Comunidad y cultura digital",
    text: "Participación sostenida de estudiantes, académicos, unidades internas y socios.",
  },
];

export function EcosystemAxes() {
  return (
    <section className="bg-white py-20" id="ejes">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Siete ejes"
          title="Una estructura para pasar de ideas dispersas a soluciones sostenibles"
          description="El MVP organiza el ecosistema en capacidades que permiten captar desafíos, desarrollarlos, validarlos y decidir su continuidad."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis, index) => (
            <article
              key={axis.title}
              className="rounded-lg border border-[#d8ded8] bg-[#fbfcfa] p-6"
            >
              <span className="mb-5 flex size-10 items-center justify-center rounded-lg bg-[#e5f2ee] text-sm font-bold text-[#0f5f55]">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-[#17211f]">
                {axis.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#52615d]">
                {axis.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
