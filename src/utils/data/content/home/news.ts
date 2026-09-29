import "server-only";
import type { NewsItem } from "@/utils/types/sections";

const newsExcerpt = "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.";

// Dernières publications mises en avant sur l'accueil ; le `tone` colore chaque carte.
export const news = {
  title: "Publications & actualités",
  items: [
    {
      id: "news-1",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "orange",
    },
    {
      id: "news-2",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "amber",
    },
    {
      id: "news-3",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "azure",
    },
  ] satisfies NewsItem[],
};
