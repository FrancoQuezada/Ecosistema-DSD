import { SolutionCard } from "@/components/cards/SolutionCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { solutions } from "@/data/solutions";

const filters = [
  "Todas",
  "Aplicaciones web",
  "Dashboards",
  "Pilotos",
  "MVP validado",
  "Transferibles",
];

export default function PortfolioPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Portafolio de soluciones"
            title="Vitrina pública de prototipos, MVP y pilotos aplicados"
            description="El portafolio documenta soluciones digitales originadas desde desafíos reales, con estado de madurez, área de aplicación, funcionalidades clave y potencial de continuidad o transferencia."
            tone="dark"
          />
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#17212b]">
                  Exploración del portafolio
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Filtros visuales de referencia para futuras versiones con
                  búsqueda y gestión real.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <Badge
                    key={filter}
                    variant={index === 0 ? "accent" : "neutral"}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {solutions.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.id_solucion} solution={solution} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-lg font-semibold text-[#17212b]">
                Portafolio en preparación
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Las soluciones aparecerán cuando existan proyectos validados o
                con cierre documentado.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <SectionHeader
              eyebrow="Crecimiento semestral"
              title="Un portafolio que madura con cada ciclo académico"
              description="Cada semestre puede sumar nuevos prototipos, MVP y pilotos al portafolio, siempre que cuenten con documentación mínima, validación con usuarios y una decisión clara de continuidad o cierre."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
