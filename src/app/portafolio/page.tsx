import { SolutionCard } from "@/components/cards/SolutionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";

export default function PortfolioPage() {
  return (
    <div className="bg-[#f7f8f5]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Portafolio de soluciones"
            title="Prototipos, MVP y pilotos con trazabilidad"
            description="El portafolio muestra soluciones digitales originadas desde desafíos reales, junto con su estado de madurez, beneficiarios, responsables y potencial de transferencia."
          />
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {solutions.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.id_solucion} solution={solution} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-[#cbd5d1] bg-white p-10 text-center">
              <h2 className="text-lg font-semibold text-[#17211f]">
                Portafolio en preparación
              </h2>
              <p className="mt-2 text-sm text-[#52615d]">
                Las soluciones aparecerán cuando existan proyectos validados o
                con cierre documentado.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
