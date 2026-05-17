import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#17211f]">
      <Image
        src="/images/casa-central-usach.jpg"
        alt="Casa Central de la Universidad de Santiago de Chile"
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,33,31,0.94)_0%,rgba(23,33,31,0.78)_44%,rgba(23,33,31,0.35)_100%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-20 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-white/22 bg-white/10 px-4 py-2 text-sm font-semibold text-white/82 backdrop-blur">
            Departamento de Ingeniería Industrial | USACH
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ecosistema de Desarrollo de Soluciones Digitales
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Un espacio académico y operacional para transformar problemas reales
            en prototipos, MVP y soluciones digitales con continuidad,
            validación y transferencia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/desafios/nuevo"
              className="rounded-lg bg-[#f3b13d] px-5 py-3 text-center text-sm font-semibold text-[#17211f] transition hover:bg-[#ffd071]"
            >
              Postular un desafío
            </Link>
            <Link
              href="/portafolio"
              className="rounded-lg border border-white/24 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
            >
              Ver portafolio
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/18 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Ejes
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">7</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Flujo
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">9 etapas</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                Estado
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">MVP</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
