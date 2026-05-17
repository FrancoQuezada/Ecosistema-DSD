import type { Challenge } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

type ChallengeCardProps = {
  challenge: Challenge;
  score?: number;
  compact?: boolean;
};

export function ChallengeCard({ challenge, score, compact }: ChallengeCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:border-[#99f6e4] hover:shadow-md hover:shadow-slate-900/8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {challenge.id_desafio}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17212b]">
            {challenge.nombre_desafio}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge type="challenge" status={challenge.estado_desafio} />
          {typeof score === "number" ? (
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
              {score}/100
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {challenge.descripcion_problema}
      </p>

      <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-[#17212b]">Proponente</dt>
          <dd className="mt-1 text-slate-600">{challenge.proponente_nombre}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Unidad</dt>
          <dd className="mt-1 text-slate-600">
            {challenge.unidad_organizacion}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Usuario objetivo</dt>
          <dd className="mt-1 text-slate-600">{challenge.usuario_objetivo}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Solución esperada</dt>
          <dd className="mt-1 text-slate-600">
            {challenge.tipo_solucion_esperada}
          </dd>
        </div>
      </dl>

      {!compact ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-[#17212b]">
            Impacto esperado
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {challenge.impacto_esperado}
          </p>
        </div>
      ) : null}
    </article>
  );
}
