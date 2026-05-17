type AxisCardProps = {
  index: number;
  title: string;
  text: string;
};

export function AxisCard({ index, title, text }: AxisCardProps) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-[#99f6e4] hover:shadow-md hover:shadow-slate-900/8">
      <span className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[#ecfeff] text-sm font-bold text-[#0f766e] ring-1 ring-[#99f6e4]">
        {index}
      </span>
      <h3 className="text-lg font-semibold text-[#17212b]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}
