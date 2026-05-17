type StatCardProps = {
  label: string;
  value: string | number;
  description?: string;
};

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5">
      <p className="text-sm font-semibold text-slate-600">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-[#17212b]">
        {value}
      </p>
      {description ? (
        <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
      ) : null}
    </article>
  );
}
