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
    <footer className="mt-auto bg-[#2f3a43] text-white">
      <div className="h-[5px] bg-[#00a499]/85" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 text-[0.8125rem] text-white/80 md:grid-cols-[minmax(160px,220px)_minmax(220px,0.8fr)_minmax(280px,1.2fr)] md:items-start lg:px-8">
        <a
          aria-label="Universidad de Santiago de Chile"
          className="inline-flex w-full max-w-[220px] items-center"
          href="https://www.usach.cl"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/logos/usach-s1.png"
            alt="Universidad de Santiago de Chile"
            width={220}
            height={70}
            className="h-auto w-full brightness-0 invert"
            sizes="220px"
          />
        </a>

        <section
          aria-labelledby={`footer-${footerBlocks[0].id}`}
          className="border-l-[3px] border-[#00a499]/60 pl-3"
        >
          <h2
            id={`footer-${footerBlocks[0].id}`}
            className="font-semibold text-white"
          >
            {footerBlocks[0].title}
          </h2>
          <p className="mt-1 leading-6 text-white/76">{footerBlocks[0].text}</p>
        </section>

        <div
          aria-label="Créditos, colaboradores y alcance"
          className="grid gap-4 md:justify-self-end lg:grid-cols-2"
        >
          {footerBlocks.slice(1).map((block) => (
            <section key={block.id} aria-labelledby={`footer-${block.id}`}>
              <h2
                id={`footer-${block.id}`}
                className="font-semibold text-white"
              >
                {block.title}
              </h2>
              <p className="mt-1 leading-6 text-white/76">{block.text}</p>
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-5 lg:px-8">
        <div className="border-t border-white/10 pt-4 text-xs leading-5 text-white/55">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>
              Departamento de Ingeniería Industrial | Universidad de Santiago de
              Chile
            </p>
            <p>
              Foto principal: Gatotienesueño,{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Casa_Central_USACH.jpg"
                className="underline decoration-white/25 underline-offset-4 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Casa Central USACH
              </a>
              , CC BY 4.0.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
