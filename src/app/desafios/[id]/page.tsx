import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { StatusBadge } from "@/components/ui/StatusBadge";
import { getPublicChallenge } from "@/lib/repositories/challenges";

type ChallengeDetailPageProps = {
  params: Promise<{ id: string }>;
};

function displayValue(value: string | null) {
  return value ?? "No informado";
}

function formatLabel(value: string | null) {
  if (!value) {
    return "No informado";
  }

  const normalized = value.replaceAll("_", " ");
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function formatDate(value: string | null) {
  if (!value) {
    return "No informado";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function DetailField({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div>
      <dt className="text-sm font-semibold text-[#17212b]">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-600">
        {displayValue(value)}
      </dd>
    </div>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-[#17212b]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  await connection();

  const { id } = await params;
  const result = await getPublicChallenge(id);

  if (result.status === "not_found") {
    notFound();
  }

  if (result.status === "error") {
    return (
      <main className="min-h-[60vh] bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/desafios"
            className="text-sm font-semibold text-[#0f766e] hover:underline"
          >
            ← Volver al banco de desafíos
          </Link>
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-8">
            <h1 className="text-xl font-semibold text-[#17212b]">
              No fue posible cargar el desafío
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Intenta nuevamente más tarde. Si el problema continúa, contacta
              al equipo del ecosistema.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const challenge = result.challenge;

  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-14 text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Link
            href="/desafios"
            className="text-sm font-semibold text-[#5eead4] hover:underline"
          >
            ← Volver al banco de desafíos
          </Link>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {displayValue(challenge.id_desafio)}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {displayValue(challenge.nombre_desafio)}
              </h1>
            </div>

            {challenge.estado_desafio ? (
              <StatusBadge type="challenge" status={challenge.estado_desafio} />
            ) : null}
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-5xl gap-6 px-5 py-12 lg:px-8">
        <DetailSection title="Identificación y origen">
          <dl className="grid gap-6 md:grid-cols-2">
            <DetailField
              label="Fecha de postulación"
              value={formatDate(challenge.fecha_postulacion)}
            />
            <DetailField
              label="Origen del desafío"
              value={formatLabel(challenge.origen_desafio)}
            />
            <DetailField
              label="Proponente"
              value={challenge.proponente_nombre}
            />
            <DetailField
              label="Tipo de proponente"
              value={formatLabel(challenge.tipo_proponente)}
            />
            <DetailField
              label="Unidad u organización"
              value={challenge.unidad_organizacion}
            />
            <DetailField
              label="Sponsor académico"
              value={challenge.sponsor_academico}
            />
          </dl>
        </DetailSection>

        <DetailSection title="Problema y usuarios">
          <dl className="grid gap-6">
            <DetailField
              label="Descripción del problema"
              value={challenge.descripcion_problema}
            />
            <DetailField
              label="Necesidad u oportunidad"
              value={challenge.necesidad_oportunidad}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <DetailField
                label="Usuario objetivo"
                value={challenge.usuario_objetivo}
              />
              <DetailField
                label="Stakeholder principal"
                value={challenge.stakeholder_principal}
              />
            </div>
          </dl>
        </DetailSection>

        <DetailSection title="Solución y datos">
          <dl className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailField
                label="Solución esperada"
                value={challenge.tipo_solucion_esperada}
              />
              <DetailField
                label="Área de aplicación"
                value={challenge.area_aplicacion}
              />
            </div>
            <DetailField
              label="Datos disponibles"
              value={challenge.datos_disponibles}
            />
            <DetailField
              label="Nivel de acceso a los datos"
              value={formatLabel(challenge.nivel_acceso_datos)}
            />
          </dl>
        </DetailSection>

        <DetailSection title="Impacto y desarrollo">
          <dl className="grid gap-6">
            <DetailField
              label="Impacto esperado"
              value={challenge.impacto_esperado}
            />
            <DetailField
              label="Beneficiarios"
              value={challenge.beneficiarios}
            />
            <DetailField
              label="Factibilidad preliminar"
              value={challenge.factibilidad_preliminar}
            />
            <DetailField
              label="Riesgos y restricciones"
              value={challenge.riesgos_restricciones}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <DetailField
                label="Horizonte de desarrollo"
                value={challenge.horizonte_desarrollo}
              />
              <DetailField
                label="Potencial de continuidad"
                value={challenge.potencial_continuidad}
              />
            </div>
          </dl>
        </DetailSection>
      </main>
    </div>
  );
}
