import Link from "next/link";

import { SolutionCard } from "@/components/cards/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { EcosystemAxes } from "@/components/sections/EcosystemAxes";
import { Hero } from "@/components/sections/Hero";
import { ProjectFlow } from "@/components/sections/ProjectFlow";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { solutions } from "@/data/solutions";

const ecosystemHighlights = [
  {
    title: "Aprendizaje aplicado",
    text: "Los estudiantes trabajan sobre problemas reales, con restricciones, usuarios y criterios de validación.",
  },
  {
    title: "Valor institucional",
    text: "Las unidades internas pueden transformar necesidades operacionales, docentes o analíticas en soluciones digitales evaluables.",
  },
  {
    title: "Continuidad y transferencia",
    text: "Los prototipos con evidencia pueden avanzar hacia laboratorio, piloto, adopción, transferencia o cierre documentado.",
  },
];

const solutionTypes = [
  "Aplicaciones web",
  "Dashboards",
  "Simuladores",
  "Herramientas con IA",
  "Sistemas de apoyo a decisiones",
  "Automatizaciones",
  "Optimizadores",
  "Prototipos transferibles",
];

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

const toolGroups = [
  {
    title: "IA y asistencia al desarrollo",
    tools: ["ChatGPT", "OpenAI Codex", "Claude Code"],
  },
  {
    title: "Código y colaboración",
    tools: ["GitHub", "Git", "Visual Studio Code"],
  },
  {
    title: "Frontend y web",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js / npm"],
  },
  {
    title: "Datos y backend",
    tools: ["Supabase", "PostgreSQL", "Python", "Jupyter", "Pandas"],
  },
  {
    title: "Despliegue y notificaciones",
    tools: ["Vercel", "Resend"],
  },
  {
    title: "Diseño y documentación",
    tools: ["Figma", "Overleaf / LaTeX", "Markdown", "Notion o Google Drive"],
  },
  {
    title: "Calidad y prototipos",
    tools: ["ESLint", "Prettier", "Playwright", "Streamlit"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeader
              eyebrow="Qué es el ecosistema"
              title="Una plataforma académica para convertir desafíos reales en soluciones digitales aplicadas"
              description="El Ecosistema de Desarrollo de Soluciones Digitales es una iniciativa del Departamento de Ingeniería Industrial orientada a transformar desafíos reales en prototipos, MVP, pilotos y soluciones digitales aplicadas."
            />
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {ecosystemHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
                >
                  <h3 className="text-lg font-semibold text-[#17212b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectFlow />
      <EcosystemAxes />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Tipos de soluciones"
            title="Soluciones digitales con foco en uso, evidencia y aprendizaje"
            description="El ecosistema prioriza entregables que puedan validarse con usuarios y documentarse para continuidad académica, institucional o de transferencia."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {solutionTypes.map((type) => (
              <Badge key={type} variant="accent" className="px-4 py-2 text-sm">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Herramientas habilitantes"
            title="Un stack de trabajo para docencia, prototipado y transferencia"
            description="El ecosistema combina herramientas de inteligencia artificial, desarrollo web, datos, colaboración, despliegue y documentación para sostener proyectos desde la formulación del desafío hasta su validación."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
              >
                <h3 className="text-lg font-semibold text-[#17212b]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="neutral"
                      className="px-3 py-1.5 text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-600">
            Playwright y algunos entornos de prototipado se consideran como
            capacidades futuras o complementarias según el alcance de cada
            proyecto.
          </p>
        </div>
      </section>

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
