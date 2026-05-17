import { ChallengeCard } from "@/components/cards/ChallengeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challengeEvaluations, challenges } from "@/data/challenges";
import type { EstadoDesafio } from "@/lib/types";

const scoreByChallengeId = new Map(
  challengeEvaluations.map((evaluation) => [
    evaluation.id_desafio,
    evaluation.puntaje_total,
  ]),
);

const statusLabels: Record<EstadoDesafio, string> = {
  postulado: "Postulados",
  en_revision: "En revisión",
  evaluado: "Evaluados",
  priorizado: "Priorizados",
  seleccionado: "Seleccionados",
  convertido_en_proyecto: "Proyectos",
  cerrado: "Cerrados",
};

function countByStatus(status: EstadoDesafio) {
  return challenges.filter((challenge) => challenge.estado_desafio === status)
    .length;
}

export default function AdminChallengesPage() {
  const evaluatedCount = challengeEvaluations.length;
  const averageScore =
    evaluatedCount > 0
      ? Math.round(
          challengeEvaluations.reduce(
            (total, evaluation) => total + evaluation.puntaje_total,
            0,
          ) / evaluatedCount,
        )
      : 0;

  return (
    <div className="bg-[#f7f8f5]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Panel interno MVP"
            title="Administración simple de desafíos"
            description="Vista interna inicial con datos mock. No incluye autenticación todavía; en producción debe protegerse con control de acceso institucional."
          />
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="rounded-lg border border-[#d8ded8] bg-white p-5">
            <p className="text-sm font-semibold text-[#52615d]">
              Total desafíos
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#17211f]">
              {challenges.length}
            </p>
          </div>
          <div className="rounded-lg border border-[#d8ded8] bg-white p-5">
            <p className="text-sm font-semibold text-[#52615d]">Evaluados</p>
            <p className="mt-2 text-3xl font-semibold text-[#17211f]">
              {evaluatedCount}
            </p>
          </div>
          <div className="rounded-lg border border-[#d8ded8] bg-white p-5">
            <p className="text-sm font-semibold text-[#52615d]">
              Puntaje promedio
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#17211f]">
              {averageScore}/100
            </p>
          </div>
          <div className="rounded-lg border border-[#d8ded8] bg-white p-5">
            <p className="text-sm font-semibold text-[#52615d]">
              Seleccionados
            </p>
            <p className="mt-2 text-3xl font-semibold text-[#17211f]">
              {countByStatus("seleccionado")}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-lg border border-[#d8ded8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#17211f]">
              Distribución por estado
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(Object.keys(statusLabels) as EstadoDesafio[]).map((status) => (
                <div
                  key={status}
                  className="rounded-lg bg-[#f7f8f5] px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66736f]">
                    {statusLabels[status]}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#17211f]">
                    {countByStatus(status)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#17211f]">
              Lista de desafíos
            </h2>
            <p className="mt-2 text-sm text-[#52615d]">
              Cada tarjeta conserva detalles útiles para revisión, evaluación y
              priorización.
            </p>
          </div>

          {challenges.length > 0 ? (
            <div className="grid gap-5">
              {challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id_desafio}
                  challenge={challenge}
                  score={scoreByChallengeId.get(challenge.id_desafio)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-[#cbd5d1] bg-white p-10 text-center">
              <h3 className="text-lg font-semibold text-[#17211f]">
                No hay desafíos para revisar
              </h3>
              <p className="mt-2 text-sm text-[#52615d]">
                Cuando existan postulaciones, el panel mostrará su estado y
                ficha resumida.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
