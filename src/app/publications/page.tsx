import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactBanner } from "@/components/ui/ContactBanner/ContactBanner";
import { publications, publicationsIntro, publicationsList } from "@/content/publications";
import { contactBanner } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { NewsletterSignup } from "@/sections/publications/NewsletterSignup/NewsletterSignup";
import { PublicationsHero } from "@/sections/publications/PublicationsHero/PublicationsHero";
import { PublicationsList } from "@/sections/publications/PublicationsList/PublicationsList";
import styles from "./publications.module.scss";

export const metadata: Metadata = pageMetadata({
  title: "Publications et actualités",
  description: publicationsIntro.subtitle,
  path: "/publications",
});

type SearchParams = Promise<{ q?: string; categorie?: string; tag?: string; page?: string }>;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

// Thématiques et tags proposés : déduits des publications, jamais saisis deux fois.
const allCategories = [...new Set(publications.map((item) => item.category))];
const allTags = [...new Set(publications.flatMap((item) => item.tags ?? []))].sort((a, b) => a.localeCompare(b));

export default async function PublicationsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const category = allCategories.includes(params.categorie ?? "") ? params.categorie! : "";
  const tag = allTags.includes(params.tag ?? "") ? params.tag! : "";

  const needle = normalize(query);
  const matching = publications.filter((item) => {
    if (category && item.category !== category) return false;
    if (tag && !(item.tags ?? []).includes(tag)) return false;
    if (!needle) return true;
    return normalize(`${item.title} ${item.excerpt} ${item.category} ${(item.tags ?? []).join(" ")}`).includes(needle);
  });

  const sorted = [...matching].sort((a, b) => b.date.localeCompare(a.date));

  const pageCount = Math.max(1, Math.ceil(sorted.length / publicationsList.perPage));
  const page = Math.min(Math.max(Number(params.page) || 1, 1), pageCount);
  const start = (page - 1) * publicationsList.perPage;
  const items = sorted.slice(start, start + publicationsList.perPage);

  /** Lien conservant les filtres en cours, en ne changeant que ce qui est demandé. */
  const hrefFor = (changes: { category?: string; page?: number }) => {
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

  return (
    <>
      <PublicationsHero id="publications-title" query={query} />
      <PublicationsList
        items={items}
        total={sorted.length}
        page={page}
        pageCount={pageCount}
        categories={allCategories}
        category={category}
        tags={allTags}
        tag={tag}
        hrefFor={hrefFor}
      />
      <NewsletterSignup />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
