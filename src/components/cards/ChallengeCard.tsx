import type { Challenge } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

type ChallengeCardProps = {
  challenge: Challenge;
  score?: number;
  compact?: boolean;
};

export function ChallengeCard({ challenge, score, compact }: ChallengeCardProps) {
  return (
    <article className="rounded-lg border border-[#d8ded8] bg-white p-6 shadow-sm shadow-[#17211f]/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#66736f]">
            {challenge.id_desafio}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17211f]">
            {challenge.nombre_desafio}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge type="challenge" status={challenge.estado_desafio} />
          {typeof score === "number" ? (
            <span className="rounded-full border border-[#d2c39f] bg-[#f3f0e8] px-3 py-1 text-xs font-semibold text-[#7a5b15]">
              {score}/100
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#52615d]">
        {challenge.descripcion_problema}
      </p>

      <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-[#17211f]">Proponente</dt>
          <dd className="mt-1 text-[#52615d]">{challenge.proponente_nombre}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17211f]">Unidad</dt>
          <dd className="mt-1 text-[#52615d]">
            {challenge.unidad_organizacion}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17211f]">Usuario objetivo</dt>
          <dd className="mt-1 text-[#52615d]">{challenge.usuario_objetivo}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#17211f]">Solución esperada</dt>
          <dd className="mt-1 text-[#52615d]">
            {challenge.tipo_solucion_esperada}
          </dd>
        </div>
      </dl>

      {!compact ? (
        <div className="mt-6 rounded-lg bg-[#f7f8f5] p-4">
          <p className="text-sm font-semibold text-[#17211f]">
            Impacto esperado
          </p>
          <p className="mt-2 text-sm leading-6 text-[#52615d]">
            {challenge.impacto_esperado}
          </p>
        </div>
      ) : null}
    </article>
  );
}
