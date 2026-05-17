type BadgeVariant = "accent" | "neutral" | "dark" | "outline";

const variants: Record<BadgeVariant, string> = {
  accent: "border-[#99f6e4] bg-[#ecfeff] text-[#0f766e]",
  neutral: "border-slate-200 bg-white text-slate-600",
  dark: "border-white/15 bg-white/10 text-white",
  outline: "border-[#cbd5e1] bg-transparent text-slate-700",
};

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
