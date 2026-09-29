import "server-only";
import { news } from "@/utils/data/content/home/news";
import type { ExpertiseDetail } from "@/utils/types/expertise";
import type { KeyFigure } from "@/utils/types/sections";

// Éléments communs aux 5 pages de détail.
// Chiffres et "preuves" sont PROVISOIRES : à remplacer par le client via le futur CMS.

export const placeholderFigures: KeyFigure[] = [
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "emerald" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "coral" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "sun" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "cyan" },
];

export const heroSubtitle =
  "La science vétérinaire et l'analyse des données de terrain au service de la rentabilité, de la sérénité et de la pérennité de votre élevage.";

export const proofs = (): ExpertiseDetail["proofs"] => ({
  title: "Nos preuves",
  items: news.items,
  cta: { label: "Voir les publications", href: "/publications" },
});
