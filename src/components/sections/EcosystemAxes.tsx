import { AxisCard } from "@/components/cards/AxisCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <section className="bg-white py-24" id="ejes">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Ejes principales"
          title="Siete capacidades para sostener el ecosistema"
          description="Los ejes ordenan la operación académica: desde la captura de desafíos hasta la continuidad, transferencia y construcción de comunidad digital."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis, index) => (
            <AxisCard
              key={axis.title}
              index={index + 1}
              title={axis.title}
              text={axis.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
