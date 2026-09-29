import "server-only";
import type { Tone } from "@/utils/types/common";
import type { NewsItem } from "@/utils/types/sections";

const excerpt = "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.";

const tones: Tone[] = ["orange", "amber", "azure"];
const categories = ["Publications", "Retours terrain", "Actualités"];
const authors = ["Fanny", "Christophe", "Karine"];
const placeholderTags = ["Santé animale", "Biosécurité", "Reproduction", "Données d'élevage"];

/**
 * Articles provisoires : titre et extrait repris de la maquette, catégories et dates variées
 * pour que la recherche, le tri et la pagination soient utilisables avant la mise en ligne du CMS.
 */
export const placeholderPublications: NewsItem[] = Array.from({ length: 14 }, (_, index) => {
  const month = 9 - Math.floor(index / 2);
  const day = index % 2 === 0 ? 3 : 18;
  return {
    id: `publication-${index + 1}`,
    category: categories[index % categories.length],
    title: "Pay de la Loire",
    excerpt,
    author: authors[index % authors.length],
    date: `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    href: "/publications",
    tone: tones[index % tones.length],
    tags: [placeholderTags[index % placeholderTags.length]],
  };
});
