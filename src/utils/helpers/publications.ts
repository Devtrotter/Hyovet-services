import type { NewsItem } from "@/utils/types/sections";

// Recherche, filtres et pagination de la page /publications : tout vit dans l'URL.

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

export interface PublicationsQuery {
  q?: string;
  categorie?: string;
  tag?: string;
  page?: string;
}

interface Options {
  items: NewsItem[];
  perPage: number;
  query: PublicationsQuery;
}

/** Thématiques et tags proposés sont déduits des publications, jamais saisis deux fois. */
export function filterPublications({ items, perPage, query: params }: Options) {
  const categories = [...new Set(items.map((item) => item.category))];
  const tags = [...new Set(items.flatMap((item) => item.tags ?? []))].sort((a, b) => a.localeCompare(b));
  const query = params.q?.trim() ?? "";
  const category = categories.includes(params.categorie ?? "") ? params.categorie! : "";
  const tag = tags.includes(params.tag ?? "") ? params.tag! : "";

  const needle = normalize(query);
  const matching = items.filter((item) => {
    if (category && item.category !== category) return false;
    if (tag && !(item.tags ?? []).includes(tag)) return false;
    if (!needle) return true;
    return normalize(`${item.title} ${item.excerpt} ${item.category} ${(item.tags ?? []).join(" ")}`).includes(needle);
  });

  const sorted = [...matching].sort((a, b) => b.date.localeCompare(a.date));
  const pageCount = Math.max(1, Math.ceil(sorted.length / perPage));
  const page = Math.min(Math.max(Number(params.page) || 1, 1), pageCount);
  const start = (page - 1) * perPage;

  const view = { query, category, tag, categories, tags, page, pageCount, total: sorted.length };
  return { ...view, items: sorted.slice(start, start + perPage) };
}

/** Lien conservant les filtres en cours, en ne changeant que ce qui est demandé. */
export const publicationsHrefFor =
  ({ query, category, tag, page }: { query: string; category: string; tag: string; page: number }) =>
  (changes: { category?: string; page?: number }) => {
    const next = new URLSearchParams();
    const nextCategory = changes.category ?? category;
    const nextPage = changes.page ?? (changes.category === undefined ? page : 1);
    if (query) next.set("q", query);
    if (nextCategory) next.set("categorie", nextCategory);
    if (tag) next.set("tag", tag);
    if (nextPage > 1) next.set("page", String(nextPage));
    const search = next.toString();
    return search ? `/publications?${search}` : "/publications";
  };
