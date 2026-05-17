import type { EstadoDesafio, EstadoMadurezSolucion } from "@/lib/types";

const challengeLabels: Record<EstadoDesafio, string> = {
  postulado: "Postulado",
  en_revision: "En revisión",
  evaluado: "Evaluado",
  priorizado: "Priorizado",
  seleccionado: "Seleccionado",
  convertido_en_proyecto: "Proyecto",
  cerrado: "Cerrado",
};

const challengeClasses: Record<EstadoDesafio, string> = {
  postulado: "border-[#cbd5d1] bg-white text-[#52615d]",
  en_revision: "border-[#b8c7e5] bg-[#eef2fb] text-[#174ea6]",
  evaluado: "border-[#d2c39f] bg-[#f3f0e8] text-[#7a5b15]",
  priorizado: "border-[#9ec7bd] bg-[#e5f2ee] text-[#0f5f55]",
  seleccionado: "border-[#d9b268] bg-[#fbf0d8] text-[#7a4f05]",
  convertido_en_proyecto: "border-[#a9b9d8] bg-[#e8eef9] text-[#123c7d]",
  cerrado: "border-[#d6d6d6] bg-[#f1f1f1] text-[#5f6361]",
};

const maturityLabels: Record<EstadoMadurezSolucion, string> = {
  prototipo: "Prototipo",
  mvp_validado: "MVP validado",
  piloto: "Piloto",
  adoptada: "Adoptada",
  transferible: "Transferible",
};

const maturityClasses: Record<EstadoMadurezSolucion, string> = {
  prototipo: "border-[#b8c7e5] bg-[#eef2fb] text-[#174ea6]",
  mvp_validado: "border-[#9ec7bd] bg-[#e5f2ee] text-[#0f5f55]",
  piloto: "border-[#d2c39f] bg-[#f3f0e8] text-[#7a5b15]",
  adoptada: "border-[#a9b9d8] bg-[#e8eef9] text-[#123c7d]",
  transferible: "border-[#d9b268] bg-[#fbf0d8] text-[#7a4f05]",
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
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
}
