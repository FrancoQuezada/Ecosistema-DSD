import Link from "next/link";

import { SolutionCard } from "@/components/cards/SolutionCard";
import { EcosystemAxes } from "@/components/sections/EcosystemAxes";
import { Hero } from "@/components/sections/Hero";
import { ProjectFlow } from "@/components/sections/ProjectFlow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";

const purposeItems = [
  {
    title: "Problemas reales como punto de partida",
    text: "Las unidades, académicos y socios externos pueden formular necesidades concretas para ser evaluadas y priorizadas.",
  },
  {
    title: "Aprendizaje aplicado",
    text: "Los estudiantes desarrollan competencias técnicas, analíticas y de producto trabajando con usuarios y restricciones reales.",
  },
  {
    title: "Continuidad institucional",
    text: "Los prototipos con valor no quedan aislados: se documentan, validan y pueden pasar a laboratorio, piloto o adopción.",
  },
];

const howItWorks = [
  "Captura desafíos con información mínima para evaluar claridad, impacto, datos y factibilidad.",
  "Prioriza iniciativas con criterios explícitos y pesos definidos para decisión académica.",
  "Desarrolla prototipos o MVP en cursos, talleres y laboratorio con usuarios reales.",
  "Evalúa continuidad para decidir adopción, transferencia, piloto o cierre documentado.",
];

const solutionTypes = [
  "Aplicaciones web de gestión",
  "Dashboards e indicadores",
  "Automatización de procesos",
  "Portales de vinculación",
  "Herramientas de documentación",
  "Analítica aplicada e IA responsable",
];

const participants = [
  {
    title: "Estudiantes",
    text: "Participan en equipos de desarrollo, validan hipótesis y construyen entregables técnicos y documentales.",
  },
  {
    title: "Académicos",
    text: "Aportan patrocinio, criterios formativos, líneas de investigación y acompañamiento metodológico.",
  },
  {
    title: "Unidades internas",
    text: "Proponen problemas, entregan contexto operativo y validan si una solución aporta valor real.",
  },
  {
    title: "Socios externos",
    text: "Conectan desafíos de entorno, datos, usuarios y oportunidades de transferencia aplicada.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-[#f7f8f5] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Propósito"
            title="Convertir desafíos académicos y organizacionales en soluciones digitales útiles"
            description="El ecosistema ordena la colaboración entre docencia, investigación aplicada, unidades internas y aliados externos para crear prototipos que puedan madurar con evidencia."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {purposeItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#d8ded8] bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[#17211f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#52615d]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Un modelo simple para capturar, desarrollar y decidir"
            description="La plataforma parte con datos mock, pero el diseño separa tipos, datos y componentes para conectar luego una base real."
          />
          <div className="grid gap-4">
            {howItWorks.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border border-[#d8ded8] bg-[#fbfcfa] p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#17211f] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-[#52615d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EcosystemAxes />
      <ProjectFlow />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Tipos de solución"
            title="Resultados digitales orientados a uso, validación y continuidad"
            description="El foco no está en producir prototipos aislados, sino entregables con usuarios, criterios de validación y próximos pasos claros."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutionTypes.map((type) => (
              <div
                key={type}
                className="rounded-lg border border-[#d8ded8] bg-[#fbfcfa] px-5 py-4 text-sm font-semibold text-[#17211f]"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f5] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Participación"
            title="Roles claros para una comunidad digital académica"
            description="El ecosistema funciona cuando cada actor entiende qué aporta y en qué etapa participa."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {participants.map((participant) => (
              <article
                key={participant.title}
                className="rounded-lg border border-[#d8ded8] bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[#17211f]">
                  {participant.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#52615d]">
                  {participant.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Portafolio"
              title="Soluciones en desarrollo y continuidad"
              description="Una primera vista de prototipos y MVP que muestran cómo los desafíos pueden transformarse en activos digitales reutilizables."
            />
            <Link
              href="/portafolio"
              className="rounded-lg border border-[#0f5f55] px-4 py-2 text-center text-sm font-semibold text-[#0f5f55] transition hover:bg-[#e5f2ee]"
            >
              Ver portafolio completo
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutions.slice(0, 3).map((solution) => (
              <SolutionCard key={solution.id_solucion} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17211f] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3b13d]">
              Banco de desafíos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              ¿Tienes un problema que podría transformarse en solución digital?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              Postula un desafío para revisión inicial. El comité podrá evaluar
              claridad, usuarios, impacto, factibilidad, datos y potencial de
              continuidad.
            </p>
          </div>
          <Link
            href="/desafios/nuevo"
            className="rounded-lg bg-[#f3b13d] px-5 py-3 text-center text-sm font-semibold text-[#17211f] transition hover:bg-[#ffd071]"
          >
            Postular desafío
          </Link>
        </div>
      </section>
    </>
  );
}
