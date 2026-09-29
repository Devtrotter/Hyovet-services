import "server-only";
import type { TimelineItem } from "@/utils/types/cabinet";

/** "Notre ADN" : texte d'introduction et frise chronologique du groupe. */
export const adn = {
  title: "Notre ADN",
  paragraphs: [
    "Hyovet Services est né de l'alliance de deux cabinets vétérinaires spécialisés en médecine porcine. Chacun conserve son autonomie, son identité et son équipe ; ensemble, ils partagent leurs données, leurs protocoles et leur expérience de terrain.",
    "Notre mission : mettre la science vétérinaire et l'analyse des données de terrain au service de la rentabilité, de la sérénité et de la pérennité de vos élevages.",
  ],
  timeline: [
    {
      title: "2007 - Plestan (22)",
      description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
      color: "hyovet",
    },
    {
      title: "2007 - Plestan (22)",
      description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
      color: "surfonds",
    },
    {
      title: "Aujourd'hui — Hyovet Services",
      description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
      color: "group",
    },
  ] satisfies TimelineItem[],
};
