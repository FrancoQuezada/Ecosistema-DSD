import type { EstadoDesafio, EstadoMadurezSolucion } from "@/lib/types";

const challengeLabels: Record<EstadoDesafio, string> = {
  postulado: "Postulado",
  en_revision: "En revisión",
  evaluado: "Evaluado",
  priorizado: "Priorizado",
  seleccionado: "Seleccionado",
  convertido_en_proyecto: "Convertido en proyecto",
  cerrado: "Cerrado",
};

const challengeClasses: Record<EstadoDesafio, string> = {
  postulado: "border-slate-200 bg-white text-slate-600",
  en_revision: "border-sky-200 bg-sky-50 text-sky-700",
  evaluado: "border-amber-200 bg-amber-50 text-amber-800",
  priorizado: "border-teal-200 bg-teal-50 text-teal-700",
  seleccionado: "border-cyan-200 bg-cyan-50 text-cyan-800",
  convertido_en_proyecto: "border-blue-200 bg-blue-50 text-blue-800",
  cerrado: "border-slate-200 bg-slate-100 text-slate-600",
};

const maturityLabels: Record<EstadoMadurezSolucion, string> = {
  prototipo: "Prototipo",
  mvp_validado: "MVP validado",
  piloto: "Piloto",
  adoptada: "Adoptada",
  transferible: "Transferible",
};

const maturityClasses: Record<EstadoMadurezSolucion, string> = {
  prototipo: "border-sky-200 bg-sky-50 text-sky-700",
  mvp_validado: "border-teal-200 bg-teal-50 text-teal-700",
  piloto: "border-amber-200 bg-amber-50 text-amber-800",
  adoptada: "border-blue-200 bg-blue-50 text-blue-800",
  transferible: "border-cyan-200 bg-cyan-50 text-cyan-800",
};

type StatusBadgeProps =
  | {
      type: "challenge";
      status: EstadoDesafio;
    }
  | {
      type: "maturity";
      status: EstadoMadurezSolucion;
    };

export function StatusBadge(props: StatusBadgeProps) {
  const label =
    props.type === "challenge"
      ? challengeLabels[props.status]
      : maturityLabels[props.status];
  const className =
    props.type === "challenge"
      ? challengeClasses[props.status]
      : maturityClasses[props.status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold leading-none ${className}`}
    >
      {label}
    </span>
  );
}
