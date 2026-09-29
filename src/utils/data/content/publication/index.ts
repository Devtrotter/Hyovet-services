import "server-only";
import { placeholderPublications } from "@/utils/data/content/publications/articles";
import { sdrpEngraissement } from "./maitrise-sdrp-engraissement-suivi-serologique";
import type { Tone } from "@/utils/types/common";
import type { NewsItem } from "@/utils/types/sections";
import type { PublicationDetail } from "@/utils/types/publication";

export const publicationDetails: PublicationDetail[] = [sdrpEngraissement];

export const publicationHref = (slug: string) => `/publications/${slug}`;

export const getPublication = (slug: string) => publicationDetails.find((item) => item.slug === slug);

/** Carte de liste dérivée d'une publication détaillée : un seul contenu, deux affichages. */
const toCard = (detail: PublicationDetail, tone: Tone = "azure"): NewsItem => ({
  id: detail.slug,
  category: detail.category,
  title: detail.title,
  excerpt: detail.summary,
  author: detail.authors[0]?.name ?? "",
  date: detail.date,
  href: publicationHref(detail.slug),
  tone,
  tags: detail.tags,
});

/** Publications listées : celles qui ont une page de détail, puis les entrées provisoires. */
export const publications: NewsItem[] = [
  ...publicationDetails.map((detail) => toCard(detail)),
  ...placeholderPublications,
];

/** Article mis en avant dans le hero (carte bleue de la maquette). */
export const featuredPublication: NewsItem = publications[0];

export { articleLabels } from "./labels";
