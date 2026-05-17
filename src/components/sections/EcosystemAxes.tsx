"use client";

import { useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

type EcosystemAxis = {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  function: string;
  actors: string;
  outputs: string;
};

const axes: EcosystemAxis[] = [
  {
    id: "banco-desafios",
    number: 1,
    title: "Banco de desafíos",
    shortDescription:
      "Entrada estructurada de problemas, necesidades y oportunidades de digitalización.",
    function:
      "Captura, organiza y prioriza desafíos provenientes de estudiantes, académicos, unidades internas y partners externos.",
    actors:
      "Proponentes, coordinación del ecosistema, comité evaluador, académicos sponsor.",
    outputs:
      "Ficha de desafío, banco de desafíos, matriz de selección y desafíos priorizados.",
  },
  {
    id: "taller-curso",
    number: 2,
    title: "Taller o curso semestral",
    shortDescription:
      "Espacio formativo donde los desafíos seleccionados se transforman en prototipos o MVP.",
    function:
      "Articula aprendizaje aplicado, trabajo en equipo, uso de herramientas digitales, desarrollo web, datos, IA y validación temprana.",
    actors:
      "Estudiantes, profesores, ayudantes, mentores técnicos y usuarios del desafío.",
    outputs:
      "Prototipos funcionales, MVP, documentación, repositorios y presentaciones finales.",
  },
  {
    id: "laboratorio-continuidad",
    number: 3,
    title: "Laboratorio de continuidad",
    shortDescription:
      "Espacio para sostener proyectos con potencial después del ciclo de asignatura.",
    function:
      "Permite mejorar técnicamente los proyectos, robustecer prototipos, desarrollar pilotos y preparar soluciones para adopción o transferencia.",
    actors:
      "Ayudantes, tesistas, memoristas, académicos sponsor, líderes técnicos y partners.",
    outputs:
      "Versiones mejoradas, pilotos, memorias, tesis, documentación técnica y soluciones transferibles.",
  },
  {
    id: "infraestructura-tecnologica",
    number: 4,
    title: "Infraestructura tecnológica",
    shortDescription:
      "Base técnica común para desarrollar, documentar, desplegar y mantener soluciones.",
    function:
      "Entrega estándares, repositorios, plantillas, guías de documentación, control de accesos y herramientas de apoyo al desarrollo.",
    actors:
      "Líder técnico, equipos de desarrollo, coordinación del ecosistema y responsables de proyecto.",
    outputs:
      "Repositorios GitHub, plantillas, documentación técnica, guías de IA, entornos de prueba y estándares mínimos.",
  },
  {
    id: "portafolio-soluciones",
    number: 5,
    title: "Portafolio de soluciones",
    shortDescription:
      "Vitrina de prototipos, MVP, pilotos y soluciones adoptadas o transferibles.",
    function:
      "Permite visibilizar resultados, clasificar soluciones según madurez y facilitar su difusión, continuidad o transferencia.",
    actors:
      "Coordinación del ecosistema, equipos de proyecto, responsables técnicos, usuarios y stakeholders.",
    outputs:
      "Ficha de solución, página de portafolio, demos, repositorios, estado de madurez y contactos.",
  },
  {
    id: "gobernanza-transferencia",
    number: 6,
    title: "Gobernanza y transferencia",
    shortDescription:
      "Criterios, roles y reglas para seleccionar, priorizar, continuar, cerrar o transferir proyectos.",
    function:
      "Define mecanismos de decisión, propiedad intelectual, relación con partners, continuidad, adopción institucional y cierre documentado.",
    actors:
      "Comité del ecosistema, coordinación, académicos, responsables institucionales y partners.",
    outputs:
      "Criterios de selección, matriz de continuidad, reglas de acceso, decisiones de continuidad y acuerdos de transferencia.",
  },
  {
    id: "comunidad-cultura-digital",
    number: 7,
    title: "Comunidad y cultura digital",
    shortDescription:
      "Participación sostenida de estudiantes, académicos, unidades internas y socios externos.",
    function:
      "Promueve colaboración, aprendizaje aplicado, mentorías, demo days, difusión de resultados y cultura de innovación digital.",
    actors:
      "Estudiantes, académicos, alumni, ayudantes, mentores, unidades internas y partners externos.",
    outputs:
      "Demo days, charlas, mentorías, comunidad de práctica, casos de éxito y redes de colaboración.",
  },
];

const axesById = new Map(axes.map((axis) => [axis.id, axis]));

const diagramCells = [
  { type: "axis", axisId: "banco-desafios" },
  { type: "axis", axisId: "taller-curso" },
  { type: "axis", axisId: "laboratorio-continuidad" },
  { type: "axis", axisId: "comunidad-cultura-digital" },
  { type: "center" },
  { type: "axis", axisId: "infraestructura-tecnologica" },
  { type: "axis", axisId: "gobernanza-transferencia" },
  { type: "axis", axisId: "portafolio-soluciones" },
  { type: "note" },
] as const;

function DiagramLines() {
  const targets = [
    [50, 50],
    [150, 50],
    [250, 50],
    [50, 150],
    [250, 150],
    [50, 250],
    [150, 250],
  ];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-6 hidden h-[calc(100%-3rem)] w-[calc(100%-3rem)] lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 300 300"
    >
      {targets.map(([x, y]) => (
        <line
          key={`${x}-${y}`}
          x1="150"
          x2={x}
          y1="150"
          y2={y}
          stroke="#cbd5e1"
          strokeDasharray="5 7"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
      ))}
      <circle
        cx="150"
        cy="150"
        fill="none"
        r="43"
        stroke="#99f6e4"
        strokeDasharray="6 7"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function AxisButton({
  axis,
  isSelected,
  onSelect,
}: {
  axis: EcosystemAxis;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`min-h-36 rounded-lg border p-4 text-left shadow-sm transition focus:outline-none focus:ring-4 focus:ring-[#12c7c0]/25 lg:min-h-[158px] ${
        isSelected
          ? "border-[#0f766e] bg-[#ecfeff] shadow-md shadow-slate-900/10"
          : "border-slate-200 bg-white hover:border-[#99f6e4] hover:bg-slate-50"
      }`}
    >
      <span
        className={`flex size-8 items-center justify-center rounded-lg text-xs font-bold ${
          isSelected ? "bg-[#0f766e] text-white" : "bg-slate-100 text-slate-600"
        }`}
      >
        {axis.number}
      </span>
      <span className="mt-3 block text-sm font-semibold leading-5 text-[#17212b]">
        {axis.title}
      </span>
      <span className="mt-2 block text-xs leading-5 text-slate-600">
        {axis.shortDescription}
      </span>
    </button>
  );
}

function CenterNode() {
  return (
    <div className="flex min-h-36 flex-col items-center justify-center rounded-lg border-2 border-[#12c7c0] bg-[#0f172a] p-5 text-center shadow-lg shadow-slate-900/15 lg:min-h-[158px]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67e8f9]">
        Centro
      </p>
      <p className="mt-2 text-xl font-semibold text-white">Ecosistema DSD</p>
      <p className="mt-2 max-w-52 text-xs leading-5 text-slate-300">
        Articula desafíos, proyectos, continuidad y portafolio.
      </p>
    </div>
  );
}

function AxisDetail({ axis }: { axis: EcosystemAxis }) {
  const details = [
    { label: "Función dentro del ecosistema", value: axis.function },
    { label: "Actores involucrados", value: axis.actors },
    { label: "Entregables principales", value: axis.outputs },
  ];

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#0f766e] text-sm font-bold text-white">
          {axis.number}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
            Eje seleccionado
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#17212b]">
            {axis.title}
          </h3>
        </div>
      </div>
      <p className="mt-5 text-base leading-7 text-slate-600">
        {axis.shortDescription}
      </p>
      <div className="mt-6 space-y-5">
        {details.map((detail) => (
          <div key={detail.label} className="border-t border-slate-200 pt-5">
            <h4 className="text-sm font-semibold text-[#17212b]">
              {detail.label}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function EcosystemAxes() {
  const [selectedAxisId, setSelectedAxisId] = useState(axes[0].id);
  const selectedAxis =
    axes.find((axis) => axis.id === selectedAxisId) ?? axes[0];

  return (
    <section className="bg-white py-24" id="ejes">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="EJES PRINCIPALES"
          title="Un ecosistema articulado por siete ejes funcionales"
          description="Cada eje cumple una función específica dentro del ciclo de captura, desarrollo, continuidad y transferencia de soluciones digitales."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-start">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-900/5 sm:p-6">
            <div className="relative rounded-lg bg-white p-4 sm:p-5 lg:p-6">
              <DiagramLines />

              <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {diagramCells.map((cell) => {
                  if (cell.type === "center") {
                    return <CenterNode key="center" />;
                  }

                  if (cell.type === "note") {
                    return (
                      <div
                        key="note"
                        className="hidden min-h-[158px] rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500 lg:flex lg:items-center"
                      >
                        Selecciona un eje para revisar su función, actores y
                        entregables dentro del ecosistema.
                      </div>
                    );
                  }

                  const axis = axesById.get(cell.axisId);

                  if (!axis) {
                    return null;
                  }

                  return (
                    <AxisButton
                      key={axis.id}
                      axis={axis}
                      isSelected={axis.id === selectedAxisId}
                      onSelect={() => setSelectedAxisId(axis.id)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <AxisDetail axis={selectedAxis} />
          </div>
        </div>
      </div>
    </section>
  );
}
