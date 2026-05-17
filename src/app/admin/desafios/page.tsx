import { ChallengeCard } from "@/components/cards/ChallengeCard";
import { StatCard } from "@/components/cards/StatCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { challengeEvaluations, challenges } from "@/data/challenges";
import type { EstadoDesafio } from "@/lib/types";

const scoreByChallengeId = new Map(
  challengeEvaluations.map((evaluation) => [
    evaluation.id_desafio,
    evaluation.puntaje_total,
  ]),
);

function countByStatus(status: EstadoDesafio) {
  return challenges.filter((challenge) => challenge.estado_desafio === status)
    .length;
}

export default function AdminChallengesPage() {
  const receivedCount = challenges.length;
  const reviewingCount = countByStatus("en_revision");
  const selectedCount = countByStatus("seleccionado");
  const projectCount = countByStatus("convertido_en_proyecto");

  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Panel interno mock"
              title="Panel interno de desafíos"
              description="Vista de apoyo para revisar postulaciones, estados y puntajes simulados. Esta versión usa datos mock y no reemplaza un panel administrativo institucional."
              tone="dark"
            />
            <Badge variant="dark">Datos mock</Badge>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <StatCard
            label="Desafíos recibidos"
            value={receivedCount}
            description="Total de registros disponibles en datos mock."
          />
          <StatCard
            label="En revisión"
            value={reviewingCount}
            description="Desafíos pendientes de análisis o reformulación."
          />
          <StatCard
            label="Seleccionados"
            value={selectedCount}
            description="Desafíos priorizados para desarrollo académico."
          />
          <StatCard
            label="Convertidos en proyecto"
            value={projectCount}
            description="Desafíos ya vinculados a un proyecto."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-5">
            <p className="text-sm font-semibold text-cyan-900">
              Alcance de esta versión
            </p>
            <p className="mt-2 text-sm leading-6 text-cyan-900/80">
              Versión preliminar: este panel utiliza datos mock. La gestión real
              requerirá autenticación y roles.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Listado"
              title="Desafíos registrados"
              description="Tarjetas de revisión con estado, puntaje cuando existe evaluación y antecedentes principales para priorización."
            />
            <div className="flex flex-wrap gap-2">
              <Badge variant="neutral">
                {challengeEvaluations.length} evaluaciones
              </Badge>
              <Badge variant="accent">{receivedCount} desafíos</Badge>
            </div>
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
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
              <h3 className="text-lg font-semibold text-[#17212b]">
                No hay desafíos para revisar
              </h3>
              <p className="mt-2 text-sm text-slate-600">
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
