import "server-only";
import type { CabinetPage } from "@/utils/types/cabinet";
import { about } from "./about";
import { team } from "./team";
import { values } from "./values";
import { zones } from "./zones";

// Page cabinet Selas de Surfonds — personnalisée à partir de l'arborescence client.
export const selasDeSurfonds: CabinetPage = {
  slug: "selas-de-surfonds",
  name: "Selas de Surfonds",
  theme: "surfonds",
  menuDescription: "La mobilité au service des éleveurs — Sarthe (72)",
  seoDescription:
    "Selas de Surfonds, cabinet vétérinaire porcin indépendant basé près du Mans (Sarthe) : des vétérinaires mobiles de la Seine-Maritime à la Gironde.",
  hero: {
    title: "La rigueur technique en mouvement, partout où sont nos éleveurs",
    subtitle:
      "Un cabinet vétérinaire indépendant et spécialisé, basé près du Mans, qui s'est affranchi des frontières régionales pour suivre les élevages porcins.",
    cta: { label: "Contacter Surfonds", href: "/contact" },
  },
  about,
  values,
  zones,
  team,
};
