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
    <footer className="bg-[#0b1621] text-white">
      <div className="h-1 bg-[#12c7c0]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div className="max-w-xs">
            <div className="inline-flex rounded-lg bg-white/[0.03] p-4 ring-1 ring-white/10">
              <Image
                src="/logos/usach-placeholder.svg"
                alt="Marca referencial USACH. Reemplazar por el logotipo oficial de la Universidad de Santiago de Chile."
                width={236}
                height={86}
                className="h-auto w-56"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {footerBlocks.map((block) => (
              <section
                key={block.id}
                aria-labelledby={`footer-${block.id}`}
                className="border-t border-white/12 pt-5"
              >
                <h2
                  id={`footer-${block.id}`}
                  className="text-sm font-semibold uppercase tracking-[0.14em] text-white"
                >
                  {block.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {block.text}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Departamento de Ingeniería Industrial | Universidad de Santiago de Chile</p>
          <p>
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
