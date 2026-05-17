import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#d8ded8] bg-[#17211f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">Ecosistema DSD</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
            Plataforma MVP para conectar desafíos reales, docencia, laboratorio,
            investigación aplicada, continuidad y transferencia de soluciones
            digitales.
          </p>
          <p className="mt-4 text-xs leading-5 text-white/50">
            Foto principal: Gatotienesueño,{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Casa_Central_USACH.jpg"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Casa Central USACH
            </a>
            , CC BY 4.0.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/58">
            Plataforma
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
            <Link href="/desafios" className="hover:text-white">
              Banco de desafíos
            </Link>
            <Link href="/desafios/nuevo" className="hover:text-white">
              Nuevo desafío
            </Link>
            <Link href="/portafolio" className="hover:text-white">
              Portafolio
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/58">
            Estado MVP
          </p>
          <p className="mt-4 text-sm leading-6 text-white/72">
            Opera con datos mock y almacenamiento local del navegador para
            formularios. No incluye autenticación ni base de datos.
          </p>
        </div>
      </div>
    </footer>
  );
}
