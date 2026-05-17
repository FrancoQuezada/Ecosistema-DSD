import type { SimpleIcon } from "simple-icons";
import {
  siEslint,
  siFigma,
  siGit,
  siGithub,
  siJupyter,
  siLatex,
  siMarkdown,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siOverleaf,
  siPandas,
  siPostgresql,
  siPrettier,
  siPython,
  siReact,
  siResend,
  siStreamlit,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

import { SectionHeader } from "@/components/ui/SectionHeader";

type ToolCategory =
  | "IA y asistencia al desarrollo"
  | "Código y colaboración"
  | "Frontend y web"
  | "Datos y backend"
  | "Despliegue y comunicación"
  | "Diseño y documentación"
  | "Calidad y prototipos";

type Tool = {
  name: string;
  category: ToolCategory;
  icon?: SimpleIcon;
  fallbackInitials: string;
};

const tools: Tool[] = [
  {
    name: "ChatGPT",
    category: "IA y asistencia al desarrollo",
    fallbackInitials: "GPT",
  },
  {
    name: "OpenAI",
    category: "IA y asistencia al desarrollo",
    fallbackInitials: "AI",
  },
  {
    name: "GitHub",
    category: "Código y colaboración",
    icon: siGithub,
    fallbackInitials: "GH",
  },
  {
    name: "Git",
    category: "Código y colaboración",
    icon: siGit,
    fallbackInitials: "Git",
  },
  {
    name: "Visual Studio Code",
    category: "Código y colaboración",
    fallbackInitials: "VS",
  },
  {
    name: "Next.js",
    category: "Frontend y web",
    icon: siNextdotjs,
    fallbackInitials: "N",
  },
  {
    name: "React",
    category: "Frontend y web",
    icon: siReact,
    fallbackInitials: "R",
  },
  {
    name: "TypeScript",
    category: "Frontend y web",
    icon: siTypescript,
    fallbackInitials: "TS",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend y web",
    icon: siTailwindcss,
    fallbackInitials: "TW",
  },
  {
    name: "Supabase",
    category: "Datos y backend",
    icon: siSupabase,
    fallbackInitials: "SB",
  },
  {
    name: "PostgreSQL",
    category: "Datos y backend",
    icon: siPostgresql,
    fallbackInitials: "PG",
  },
  {
    name: "Vercel",
    category: "Despliegue y comunicación",
    icon: siVercel,
    fallbackInitials: "V",
  },
  {
    name: "Resend",
    category: "Despliegue y comunicación",
    icon: siResend,
    fallbackInitials: "RE",
  },
  {
    name: "Figma",
    category: "Diseño y documentación",
    icon: siFigma,
    fallbackInitials: "FG",
  },
  {
    name: "Overleaf",
    category: "Diseño y documentación",
    icon: siOverleaf,
    fallbackInitials: "OL",
  },
  {
    name: "LaTeX",
    category: "Diseño y documentación",
    icon: siLatex,
    fallbackInitials: "TeX",
  },
  {
    name: "Python",
    category: "Datos y backend",
    icon: siPython,
    fallbackInitials: "PY",
  },
  {
    name: "Jupyter",
    category: "Datos y backend",
    icon: siJupyter,
    fallbackInitials: "JP",
  },
  {
    name: "Pandas",
    category: "Datos y backend",
    icon: siPandas,
    fallbackInitials: "PD",
  },
  {
    name: "Markdown",
    category: "Diseño y documentación",
    icon: siMarkdown,
    fallbackInitials: "MD",
  },
  {
    name: "Node.js",
    category: "Frontend y web",
    icon: siNodedotjs,
    fallbackInitials: "ND",
  },
  {
    name: "npm",
    category: "Frontend y web",
    icon: siNpm,
    fallbackInitials: "npm",
  },
  {
    name: "ESLint",
    category: "Calidad y prototipos",
    icon: siEslint,
    fallbackInitials: "ES",
  },
  {
    name: "Prettier",
    category: "Calidad y prototipos",
    icon: siPrettier,
    fallbackInitials: "PR",
  },
  {
    name: "Playwright",
    category: "Calidad y prototipos",
    fallbackInitials: "PW",
  },
  {
    name: "Streamlit",
    category: "Calidad y prototipos",
    icon: siStreamlit,
    fallbackInitials: "ST",
  },
];

const categorySummaries = [
  {
    category: "IA y asistencia al desarrollo",
    text: "Aceleración de diseño, programación y revisión técnica.",
  },
  {
    category: "Código y colaboración",
    text: "Versionamiento, revisión y coordinación del trabajo técnico.",
  },
  {
    category: "Frontend y web",
    text: "Construcción de interfaces, prototipos y experiencias operativas.",
  },
  {
    category: "Datos y backend",
    text: "Persistencia, análisis y experimentación técnica.",
  },
  {
    category: "Despliegue y comunicación",
    text: "Publicación, operación y notificación de resultados.",
  },
  {
    category: "Diseño y documentación",
    text: "Especificación, prototipado y transferencia de conocimiento.",
  },
  {
    category: "Calidad y prototipos",
    text: "Consistencia, pruebas futuras y prototipos exploratorios.",
  },
] satisfies Array<{ category: ToolCategory; text: string }>;

function ToolIcon({ tool }: { tool: Tool }) {
  if (!tool.icon) {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f766e]/10 text-xs font-bold text-[#0f766e] sm:h-10 sm:w-10">
        {tool.fallbackInitials}
      </span>
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-[#17212b] ring-1 ring-slate-200 sm:h-10 sm:w-10">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
      >
        <path d={tool.icon.path} />
      </svg>
    </span>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article
      aria-label={`${tool.name}, ${tool.category}`}
      className="group/tool min-w-[9.5rem] rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-[#12c7c0] hover:shadow-lg hover:shadow-slate-900/10 focus-within:border-[#12c7c0] sm:min-w-[12rem] sm:p-5"
    >
      <div className="flex items-center gap-3">
        <ToolIcon tool={tool} />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#17212b] sm:text-base">
            {tool.name}
          </h3>
          <p className="mt-1 truncate text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#0f766e] opacity-0 transition-opacity duration-300 group-hover/tool:opacity-100 group-focus-within/tool:opacity-100">
            {tool.category}
          </p>
        </div>
      </div>
    </article>
  );
}

function ToolSet({ hiddenFromScreenReaders = false }) {
  return (
    <div
      aria-hidden={hiddenFromScreenReaders ? "true" : undefined}
      className={`tools-marquee-set ${
        hiddenFromScreenReaders ? "tools-marquee-duplicates" : ""
      }`}
    >
      {tools.map((tool) => (
        <ToolCard
          key={`${hiddenFromScreenReaders ? "copy" : "main"}-${tool.name}`}
          tool={tool}
        />
      ))}
    </div>
  );
}

export function ToolsMarquee() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Herramientas habilitantes"
          title="Un stack tecnológico para prototipar, desplegar y escalar soluciones digitales"
          description="El ecosistema utiliza herramientas de inteligencia artificial, desarrollo web, datos, colaboración, despliegue, documentación y comunicación para acelerar el paso desde un desafío real hacia un prototipo, MVP, piloto o solución transferible."
        />

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm shadow-slate-900/5 sm:p-5">
          <div
            aria-label="Herramientas tecnológicas del ecosistema"
            className="tools-marquee-viewport overflow-hidden py-2"
          >
            <div className="tools-marquee-track">
              <ToolSet />
              <ToolSet hiddenFromScreenReaders />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {categorySummaries.map((item) => (
            <article
              key={item.category}
              className="rounded-lg border border-slate-200 bg-white/80 p-4"
            >
              <h3 className="text-sm font-semibold text-[#17212b]">
                {item.category}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
