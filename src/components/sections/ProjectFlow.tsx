import { SectionHeading } from "@/components/ui/SectionHeading";

const flowSteps = [
  "Postulación del desafío",
  "Revisión inicial",
  "Evaluación y priorización",
  "Selección como proyecto",
  "Desarrollo en curso, taller o laboratorio",
  "Validación con usuarios",
  "Evaluación de continuidad",
  "Paso a laboratorio, piloto, adopción, transferencia o cierre",
  "Ingreso al portafolio de soluciones",
];

export function ProjectFlow() {
  return (
    <section className="bg-[#f7f8f5] py-20" id="flujo">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Flujo operacional"
          title="Del desafío al portafolio"
          description="El flujo hace visible cada decisión: qué entra, qué se prioriza, cómo se desarrolla, cuándo se valida y qué camino de continuidad corresponde."
          align="center"
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {flowSteps.map((step, index) => (
            <li
              key={step}
              className="relative rounded-lg border border-[#d8ded8] bg-white p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b7791f]">
                Etapa {index + 1}
              </span>
              <p className="mt-3 text-base font-semibold leading-6 text-[#17211f]">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
