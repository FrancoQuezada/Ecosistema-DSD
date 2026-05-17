import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#111a24]">
      <Image
        src="/images/casa-central-usach.jpg"
        alt="Casa Central de la Universidad de Santiago de Chile"
        fill
        priority
        className="object-cover opacity-48"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,26,36,0.97)_0%,rgba(17,26,36,0.86)_48%,rgba(17,26,36,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white/86 backdrop-blur">
            Departamento de Ingeniería Industrial | USACH
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ecosistema de Desarrollo de Soluciones Digitales
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Iniciativa académica orientada a transformar desafíos reales en
            prototipos, MVP, pilotos y soluciones digitales aplicadas con valor
            formativo, institucional, investigativo y social.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/desafios/nuevo"
              className="rounded-lg bg-[#12c7c0] px-5 py-3 text-center text-sm font-semibold text-[#0f172a] transition hover:bg-[#5eead4]"
            >
              Proponer un desafío
            </Link>
            <Link
              href="/portafolio"
              className="rounded-lg border border-white/24 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Ver portafolio
            </Link>
          </div>
          <dl className="mt-12 grid max-w-3xl gap-4 border-t border-white/14 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Flujo
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                Desafío a portafolio
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Participantes
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                Estudiantes y comunidad
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Estructura
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                7 ejes de trabajo
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
