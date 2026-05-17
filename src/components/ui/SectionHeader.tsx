type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`${isCentered ? "mx-auto text-center" : "text-left"} max-w-3xl`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-[#12c7c0]" : "text-[#0f766e]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          isDark ? "text-white" : "text-[#17212b]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
