import type { Metadata } from "next";
import Link from "next/link";

import {
  getWorkshopDocs,
  type WorkshopDoc,
  type WorkshopMarkdownBlock,
} from "@/lib/workshopDocs";

export const metadata: Metadata = {
  title: "Taller | Ecosistema DSD",
  description:
    "Información del Taller de Desarrollo de MVPs Digitales del Ecosistema DSD.",
};

export const dynamic = "force-static";

export default function WorkshopPage() {
  const docs = getWorkshopDocs();
  const overview = docs[0];

  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#12c7c0]">
              Taller
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Taller de Desarrollo de MVPs Digitales
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Visualización pública del plan de taller: objetivos, ejes,
              metodología, ambiente de desarrollo, planificación semanal,
              entregables y conceptos clave.
            </p>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-sm shadow-black/10">
            <h2 className="text-lg font-semibold text-white">
              Estructura del taller
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Contenido cargado desde los Markdown versionados en el repositorio
              para mantener una sola fuente de verdad.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Metric label="Documentos" value={String(docs.length)} />
              <Metric label="Semanas" value="16" />
              <Metric label="Formato" value="Sprint Studio" />
              <Metric label="Salida" value="MVP + demo" />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <nav
            aria-label="Secciones del taller"
            className="flex gap-2 overflow-x-auto pb-1"
          >
            {docs.map((doc) => (
              <Link
                key={doc.meta.slug}
                href={`#${doc.meta.slug}`}
                className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-[#0f766e] hover:bg-[#ecfeff] hover:text-[#0f766e]"
              >
                {doc.meta.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 lg:sticky lg:top-28">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
              Índice
            </h2>
            <ol className="mt-4 space-y-2">
              {docs.map((doc) => (
                <li key={doc.meta.slug}>
                  <Link
                    href={`#${doc.meta.slug}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-[#17212b]"
                  >
                    {doc.meta.title}
                  </Link>
                </li>
              ))}
            </ol>
          </aside>

          <div className="space-y-6">
            {overview ? (
              <section className="rounded-lg border border-[#12c7c0]/30 bg-[#ecfeff] p-6 shadow-sm shadow-slate-900/5">
                <h2 className="text-2xl font-semibold text-[#17212b]">
                  Resumen ejecutivo
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {overview.meta.summary}
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <SummaryItem
                    title="Foco"
                    text="Convertir desafíos formulados en MVPs funcionales."
                  />
                  <SummaryItem
                    title="Método"
                    text="Avance semanal con revisión, crítica, construcción y evidencia."
                  />
                  <SummaryItem
                    title="Cierre"
                    text="Elevator pitch y demo ante actores clave."
                  />
                </div>
              </section>
            ) : null}

            {docs.map((doc, index) => (
              <WorkshopDocSection doc={doc} key={doc.meta.slug} open={index < 2} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-3">
      <strong className="block text-xl font-semibold text-white">{value}</strong>
      <span className="mt-1 block text-xs text-slate-300">{label}</span>
    </div>
  );
}

function SummaryItem({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-[#12c7c0]/30 bg-white p-4">
      <h3 className="text-sm font-semibold text-[#17212b]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

function WorkshopDocSection({
  doc,
  open,
}: {
  doc: WorkshopDoc;
  open: boolean;
}) {
  return (
    <section
      className="scroll-mt-28 rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/5"
      id={doc.meta.slug}
    >
      <details open={open} className="group">
        <summary className="flex cursor-pointer list-none flex-col gap-3 p-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f766e]">
              Módulo {doc.meta.order + 1}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#17212b]">
              {doc.meta.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {doc.meta.summary}
            </p>
          </div>
          <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 group-open:bg-[#0f766e] group-open:text-white">
            Ver contenido
          </span>
        </summary>

        <div className="border-t border-slate-200 px-6 pb-8 pt-6">
          <div className="space-y-5">
            {doc.blocks.map((block, index) => (
              <MarkdownBlock block={block} key={`${doc.meta.slug}-${index}`} />
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}

function MarkdownBlock({ block }: { block: WorkshopMarkdownBlock }) {
  if (block.type === "heading") {
    const className =
      block.level === 1
        ? "text-2xl font-semibold text-[#17212b]"
        : block.level === 2
          ? "pt-3 text-xl font-semibold text-[#17212b]"
          : "pt-2 text-lg font-semibold text-[#17212b]";
    const HeadingTag = `h${Math.min(block.level + 1, 4)}` as
      | "h2"
      | "h3"
      | "h4";

    return <HeadingTag className={className}>{renderInline(block.text)}</HeadingTag>;
  }

  if (block.type === "paragraph") {
    return (
      <p className="max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
        {renderInline(block.text)}
      </p>
    );
  }

  if (block.type === "unordered-list") {
    return (
      <ul className="grid max-w-4xl gap-2 pl-0">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#12c7c0]" />
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ordered-list") {
    return (
      <ol className="grid max-w-4xl gap-2">
        {block.items.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 text-sm leading-6 text-slate-600"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-[#ecfeff] text-xs font-semibold text-[#0f766e]">
              {index + 1}
            </span>
            <span className="pt-1">{renderInline(item)}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {block.headers.map((header) => (
                <th
                  className="px-4 py-3 font-semibold text-[#17212b]"
                  key={header}
                  scope="col"
                >
                  {renderInline(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {block.rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}-${row.join("-")}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    className="px-4 py-3 align-top leading-6 text-slate-600"
                    key={`${cellIndex}-${cell}`}
                  >
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <hr className="border-slate-200" />;
}

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-[#17212b]"
          key={`${part}-${index}`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong className="font-semibold text-[#17212b]" key={`${part}-${index}`}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}
