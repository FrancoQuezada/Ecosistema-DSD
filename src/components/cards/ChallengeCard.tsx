import Link from "next/link";

import { StatusBadge } from "@/components/ui/StatusBadge";
import type { PublicChallenge } from "@/lib/types";

type ChallengeCardProps = {
  challenge: PublicChallenge;
  score?: number;
  compact?: boolean;
};

function displayValue(value: string | null) {
  return value ?? "No informado";
}

export function ChallengeCard({ challenge, score, compact }: ChallengeCardProps) {
  const content = (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition group-hover:border-[#99f6e4] group-hover:shadow-md group-hover:shadow-slate-900/8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {displayValue(challenge.id_desafio)}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17212b] transition group-hover:text-[#0f766e]">
            {displayValue(challenge.nombre_desafio)}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {challenge.estado_desafio ? (
            <StatusBadge type="challenge" status={challenge.estado_desafio} />
          ) : (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              Estado no informado
            </span>
          )}
          {typeof score === "number" ? (
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
              {score}/100
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
        {displayValue(challenge.descripcion_problema)}
      </p>

      <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-[#17212b]">Proponente</dt>
          <dd className="mt-1 text-slate-600">
            {displayValue(challenge.proponente_nombre)}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Unidad</dt>
          <dd className="mt-1 text-slate-600">
            {displayValue(challenge.unidad_organizacion)}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Usuario objetivo</dt>
          <dd className="mt-1 text-slate-600">
            {displayValue(challenge.usuario_objetivo)}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17212b]">Solución esperada</dt>
          <dd className="mt-1 text-slate-600">
            {displayValue(challenge.tipo_solucion_esperada)}
          </dd>
        </div>
      </dl>

      {!compact ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-[#17212b]">
            Impacto esperado
          </p>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {displayValue(challenge.impacto_esperado)}
          </p>
        </div>
      ) : null}

      {challenge.id_desafio ? (
        <p className="mt-6 text-sm font-semibold text-[#0f766e]">
          Ver detalle <span aria-hidden="true">→</span>
        </p>
      ) : null}
    </article>
  );

  if (!challenge.id_desafio) {
    return content;
  }

  return (
    <Link
      href={`/desafios/${encodeURIComponent(challenge.id_desafio)}`}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f766e]/20"
      aria-label={`Ver detalle de ${displayValue(challenge.nombre_desafio)}`}
    >
      {content}
    </Link>
  );
}
