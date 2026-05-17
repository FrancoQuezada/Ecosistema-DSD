import Image from "next/image";

export function Footer() {
  const linkClassName =
    "font-medium text-white underline decoration-[#00a499]/70 underline-offset-4 transition hover:text-[#5eead4] focus:outline-none focus:ring-2 focus:ring-[#00a499] focus:ring-offset-2 focus:ring-offset-[#2f3a43]";

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
          aria-labelledby="footer-ecosistema-dsd"
          className="border-l-[3px] border-[#00a499]/60 pl-3"
        >
          <h2 id="footer-ecosistema-dsd" className="font-semibold text-white">
            Ecosistema DSD
          </h2>
          <p className="mt-1 leading-6 text-white/76">
            Ecosistema de Desarrollo de Soluciones Digitales.
            <br />
            Desarrollado por{" "}
            <a
              className={linkClassName}
              href="https://francoquezada.github.io/academic-page/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dr. Franco Quezada Valenzuela
            </a>
            .
          </p>
        </section>

        <div
          aria-label="Universidad y alcance"
          className="grid gap-4 md:justify-self-end lg:grid-cols-2"
        >
          <section aria-labelledby="footer-universidad">
            <h2 id="footer-universidad" className="font-semibold text-white">
              Universidad
            </h2>
            <p className="mt-1 leading-6 text-white/76">
              <a
                className={linkClassName}
                href="https://www.usach.cl"
                rel="noopener noreferrer"
                target="_blank"
              >
                Universidad de Santiago de Chile
              </a>
            </p>
          </section>

          <section aria-labelledby="footer-alcance">
            <h2 id="footer-alcance" className="font-semibold text-white">
              Alcance
            </h2>
            <p className="mt-1 leading-6 text-white/76">
              Iniciativa académica orientada al desarrollo de prototipos, MVP,
              pilotos y soluciones digitales aplicadas. No constituye una
              plataforma comercial ni un servicio institucional definitivo.
            </p>
          </section>
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
                rel="noopener noreferrer"
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
