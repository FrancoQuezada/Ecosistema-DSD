import { readFileSync } from "node:fs";
import { join } from "node:path";

export type WorkshopDocMeta = {
  title: string;
  slug: string;
  section: string;
  order: number;
  summary: string;
};

export type WorkshopMarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "rule" };

export type WorkshopDoc = {
  fileName: string;
  meta: WorkshopDocMeta;
  blocks: WorkshopMarkdownBlock[];
};

const workshopDocFiles = [
  "00_taller_overview.md",
  "01_objetivos_resultados.md",
  "02_ejes_contenido.md",
  "03_metodologia_sprint_studio.md",
  "04_ambiente_desarrollo.md",
  "05_clase_a_clase_16_semanas.md",
  "06_entregables_hitos_evaluacion.md",
  "07_preguntas_conceptos_clave.md",
];

export function getWorkshopDocs(): WorkshopDoc[] {
  return workshopDocFiles
    .map((fileName) => parseWorkshopDoc(fileName))
    .sort((a, b) => a.meta.order - b.meta.order);
}

function parseWorkshopDoc(fileName: string): WorkshopDoc {
  const raw = readFileSync(join(process.cwd(), "docs", fileName), "utf8");
  const { frontmatter, markdown } = splitFrontmatter(raw);
  const meta = parseFrontmatter(frontmatter);

  return {
    fileName,
    meta,
    blocks: parseMarkdownBlocks(markdown),
  };
}

function splitFrontmatter(raw: string): {
  frontmatter: string;
  markdown: string;
} {
  if (!raw.startsWith("---")) {
    return { frontmatter: "", markdown: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end < 0) {
    return { frontmatter: "", markdown: raw };
  }

  return {
    frontmatter: raw.slice(3, end).trim(),
    markdown: raw.slice(end + 4).trim(),
  };
}

function parseFrontmatter(frontmatter: string): WorkshopDocMeta {
  const values = Object.fromEntries(
    frontmatter
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        const key = line.slice(0, separator).trim();
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^"|"$/g, "");
        return [key, value];
      }),
  );

  return {
    title: values.title ?? "Documento del taller",
    slug: values.slug ?? "taller",
    section: values.section ?? "taller",
    order: Number(values.order ?? 0),
    summary: values.summary ?? "",
  };
}

function parseMarkdownBlocks(markdown: string): WorkshopMarkdownBlock[] {
  const lines = markdown.split("\n");
  const blocks: WorkshopMarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      blocks.push({ type: "rule" });
      index += 1;
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2],
      });
      index += 1;
      continue;
    }

    if (isTableLine(line) && isTableSeparator(lines[index + 1]?.trim())) {
      const tableLines: string[] = [];
      while (isTableLine(lines[index]?.trim())) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      blocks.push(parseTable(tableLines));
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (/^-\s+/.test(lines[index]?.trim())) {
        items.push(lines[index].trim().replace(/^-\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "unordered-list", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (/^\d+\.\s+/.test(lines[index]?.trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ordered-list", items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,4})\s+/.test(lines[index].trim()) &&
      !/^---+$/.test(lines[index].trim()) &&
      !isTableLine(lines[index].trim()) &&
      !/^-\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function isTableLine(line: string | undefined): boolean {
  return Boolean(line?.startsWith("|") && line.endsWith("|"));
}

function isTableSeparator(line: string | undefined): boolean {
  if (!line) return false;
  return /^(\|\s*:?-+:?\s*)+\|$/.test(line);
}

function parseTable(lines: string[]): WorkshopMarkdownBlock {
  const [headerLine, , ...rowLines] = lines;
  return {
    type: "table",
    headers: splitTableCells(headerLine),
    rows: rowLines.map(splitTableCells),
  };
}

function splitTableCells(line: string): string[] {
  return line
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}
