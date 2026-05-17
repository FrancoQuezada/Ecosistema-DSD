import Image from "next/image";

const footerBlocks = [
  {
    id: "ecosistema-dsd",
    title: "Ecosistema DSD",
    text: "Ecosistema de Desarrollo de Soluciones Digitales. Departamento de Ingeniería Industrial, Universidad de Santiago de Chile.",
  },
  {
    id: "equipo-colaboradores",
    title: "Equipo y colaboradores",
    text: "Estudiantes, académicos, ayudantes, tesistas, memoristas, unidades internas y partners.",
  },
  {
    id: "alcance",
    title: "Alcance",
    text: "Iniciativa académica orientada al desarrollo de prototipos, MVP, pilotos y soluciones digitales aplicadas. No constituye una plataforma comercial ni un servicio institucional definitivo.",
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[#12c7c0] bg-[#111a24] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] lg:gap-14">
          <div className="flex items-start">
            <div>
              <Image
                src="/logos/usach-placeholder.svg"
                alt="Placeholder del logo USACH. Reemplazar por el logotipo oficial de la Universidad de Santiago de Chile."
                width={172}
                height={78}
                className="h-auto w-40 md:w-44"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerBlocks.map((block) => (
              <section key={block.id} aria-labelledby={`footer-${block.id}`}>
                <h2
                  id={`footer-${block.id}`}
                  className="text-base font-semibold text-white"
                >
                  {block.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {block.text}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-xs leading-5 text-slate-400">
            Foto principal: Gatotienesueño,{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Casa_Central_USACH.jpg"
              className="underline decoration-slate-500 underline-offset-4 transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Casa Central USACH
            </a>
            , CC BY 4.0.
          </p>
        </div>
      </div>
    </footer>
  );
}
