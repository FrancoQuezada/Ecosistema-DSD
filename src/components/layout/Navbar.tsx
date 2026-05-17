import Link from "next/link";

const navItems = [
  { href: "/desafios", label: "Desafíos" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/admin/desafios", label: "Admin" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d8ded8] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg bg-[#0f5f55] text-sm font-bold text-white">
            DSD
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-[#17211f]">
              Ecosistema DSD
            </span>
            <span className="block text-xs text-[#66736f]">
              Ingeniería Industrial USACH
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#52615d] transition hover:bg-[#eef2ee] hover:text-[#17211f]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/desafios/nuevo"
            className="rounded-lg bg-[#0f5f55] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b4c44]"
          >
            Postular desafío
          </Link>
        </div>
      </nav>
    </header>
  );
}
