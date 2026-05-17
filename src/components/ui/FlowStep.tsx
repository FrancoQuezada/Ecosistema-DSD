type FlowStepProps = {
  index: number;
  title: string;
  subtitle?: string;
  description?: string;
  compact?: boolean;
};

export function FlowStep({
  index,
  title,
  subtitle,
  description,
  compact = false,
}: FlowStepProps) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#17212b] text-sm font-semibold text-white">
          {index}
        </span>
        <div>
          <p
            className={`font-semibold leading-6 text-[#17212b] ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {title}
          </p>
          {subtitle ? (
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0f766e]">
              {subtitle}
            </p>
          ) : null}
          {description ? (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}
