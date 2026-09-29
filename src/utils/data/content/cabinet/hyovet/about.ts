import "server-only";
import { addresses } from "@/utils/data/content/shared/coordonnees";
import type { CabinetPage } from "@/utils/types/cabinet";

/** Bloc "Le cabinet" + fiche d'identité (logo, localisation, spécialités). */
export const about: CabinetPage["about"] = {
  title: "Le cabinet",
  paragraphs: [
    "Créé en 2007 à Plestan sous le nom de Selas Vétérinaire de la Hunaudaye, Hyovet réunit aujourd'hui 15 vétérinaires dédiés exclusivement à la médecine porcine, au cœur de la première région porcine de France.",
    "Suivi d'élevage, urgences, pharmacie et essais terrain : une équipe complète au service du statut sanitaire et de la performance de vos bandes.",
  ],
  logo: { src: "/images/logos/hyovet.png", width: 338, height: 118, alt: "Hyovet" },
  location: "Plestan, Côtes-d'Armor (22)",
  address: addresses.hyovet,
  specialtiesLabel: "Nos spécialités :",
  specialties: ["Sécurisation du statut sanitaire", "Démédication"],
};
