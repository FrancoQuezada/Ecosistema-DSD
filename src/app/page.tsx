import Link from "next/link";

import { SolutionCard } from "@/components/cards/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { EcosystemAxes } from "@/components/sections/EcosystemAxes";
import { EcosystemIntro } from "@/components/sections/EcosystemIntro";
import { Hero } from "@/components/sections/Hero";
import { ProjectFlow } from "@/components/sections/ProjectFlow";
import { SolutionTypes } from "@/components/sections/SolutionTypes";
import { ToolsMarquee } from "@/components/sections/ToolsMarquee";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { solutions } from "@/data/solutions";

const participants = [
  {
    title: "Estudiantes",
    text: "Desarrollan prototipos, documentan aprendizajes, validan con usuarios y fortalecen competencias técnicas y de producto.",
  },
  {
    title: "Académicos",
    text: "Acompañan el valor formativo, patrocinan desafíos, orientan criterios metodológicos y articulan investigación aplicada.",
  },
  {
    title: "Unidades internas",
    text: "Proponen desafíos, entregan contexto operativo, facilitan usuarios y evalúan si la solución aporta valor institucional.",
  },
  {
    title: "Partners externos",
    text: "Conectan problemas de entorno, datos, usuarios y oportunidades de transferencia con impacto social o productivo.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <EcosystemIntro />

      <ProjectFlow />
      <EcosystemAxes />

      <SolutionTypes />

      <ToolsMarquee />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Participa"
            title="Una comunidad digital con roles claros"
            description="Conecta estudiantes, académicos, unidades internas y partners externos para desarrollar soluciones digitales con valor formativo, institucional, investigativo y social."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {participants.map((participant) => (
              <article
                key={participant.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
              >
                <h3 className="text-lg font-semibold text-[#17212b]">
                  {participant.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {participant.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Portafolio destacado"
              title="Soluciones que documentan avance y potencial de continuidad"
              description="Una muestra inicial de soluciones digitales originadas desde desafíos reales, con estado de madurez, área de aplicación y funcionalidades clave."
            />
            <Link
              href="/portafolio"
              className="rounded-lg border border-[#0f766e] px-4 py-2 text-center text-sm font-semibold text-[#0f766e] transition hover:bg-[#ecfeff]"
            >
              Ver portafolio
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutions.slice(0, 3).map((solution) => (
              <SolutionCard key={solution.id_solucion} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Banco de desafíos"
        title="¿Tienes un problema que podría transformarse en solución digital?"
        description="Propón un desafío para revisión inicial. El ecosistema evaluará claridad, usuarios, impacto, factibilidad, disponibilidad de datos, valor formativo y potencial de continuidad."
        primaryHref="/desafios/nuevo"
        primaryLabel="Proponer un desafío"
        secondaryHref="/desafios"
        secondaryLabel="Conocer el banco"
      />
    </>
  );
}
