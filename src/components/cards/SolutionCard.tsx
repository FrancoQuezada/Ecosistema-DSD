import Image from "next/image";

import type { SolutionPortfolioItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

type SolutionCardProps = {
  solution: SolutionPortfolioItem;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#d8ded8] bg-white shadow-sm shadow-[#17211f]/5">
      <div className="relative aspect-[16/9] bg-[#eef2ee]">
        <Image
          src={solution.imagen_demo}
          alt={`Vista referencial de ${solution.nombre_solucion}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#0f5f55]">
              {solution.area_aplicacion}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17211f]">
              {solution.nombre_solucion}
            </h3>
          </div>
          <StatusBadge type="maturity" status={solution.estado_madurez} />
        </div>

        <p className="mt-4 text-sm leading-6 text-[#52615d]">
          {solution.resumen_publico}
        </p>

        <div className="mt-5">
          <p className="text-sm font-semibold text-[#17211f]">
            Funcionalidades clave
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#52615d]">
            {solution.funcionalidades_clave.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-[#b7791f]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {solution.usuarios_beneficiarios.map((user) => (
            <span
              key={user}
              className="rounded-full bg-[#eef2ee] px-3 py-1 text-xs font-medium text-[#52615d]"
            >
              {user}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
