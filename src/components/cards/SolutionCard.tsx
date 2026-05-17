import Image from "next/image";

import type { SolutionPortfolioItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Badge } from "@/components/ui/Badge";

type SolutionCardProps = {
  solution: SolutionPortfolioItem;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  const hasDemo = solution.demo_url && solution.demo_url !== "#";
  const hasRepository = solution.repositorio_url && solution.repositorio_url !== "#";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition hover:border-[#99f6e4] hover:shadow-md hover:shadow-slate-900/8">
      <div className="relative aspect-[16/9] bg-[#eef2ee]">
        <Image
          src={solution.imagen_demo}
          alt={`Vista referencial de ${solution.nombre_solucion}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Badge variant="accent">{solution.tipo_solucion}</Badge>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#17212b]">
              {solution.nombre_solucion}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {solution.area_aplicacion}
            </p>
          </div>
          <StatusBadge type="maturity" status={solution.estado_madurez} />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {solution.resumen_publico}
        </p>

        <div className="mt-5">
          <p className="text-sm font-semibold text-[#17212b]">
            Funcionalidades clave
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {solution.funcionalidades_clave.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-[#12c7c0]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {solution.usuarios_beneficiarios.map((user) => (
            <span
              key={user}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {user}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-200 pt-5">
          {hasDemo ? (
            <a
              href={solution.demo_url}
              className="text-sm font-semibold text-[#0f766e] underline decoration-[#99f6e4] underline-offset-4 hover:text-[#115e59]"
            >
              Ver demo
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-400">
              Demo no disponible
            </span>
          )}
          {hasRepository ? (
            <a
              href={solution.repositorio_url}
              className="text-sm font-semibold text-[#0f766e] underline decoration-[#99f6e4] underline-offset-4 hover:text-[#115e59]"
            >
              Repositorio
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-400">
              Repositorio pendiente
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
