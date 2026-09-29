import "server-only";
import { addresses } from "@/utils/data/content/shared/coordonnees";
import type { CabinetPage } from "@/utils/types/cabinet";

/** Bloc "Le cabinet" + fiche d'identité (logo, localisation, spécialités). */
export const about: CabinetPage["about"] = {
  title: "Le cabinet",
  paragraphs: [
    "Basée près du Mans, la Selas de Surfonds est un cabinet vétérinaire indépendant et spécialisé. Si notre ancrage sarthois est fort, la mobilité de nos vétérinaires l'est tout autant : nous intervenons de la Seine-Maritime à la Gironde, en passant par le Cher.",
    "Cette flexibilité géographique nous permet d'accompagner des structures porcines aux profils très variés : suivi sanitaire de pointe, aide à la décision réactive et accompagnement technique sur-mesure.",
  ],
  logo: { src: "/images/logos/selas-de-surfonds.png", width: 572, height: 348, alt: "Selas de Surfonds" },
  location: "La Chapelle-Saint-Aubin, Sarthe (72)",
  address: addresses.surfonds,
  specialtiesLabel: "Nos spécialités :",
  specialties: ["Suivi sanitaire de pointe", "Aide à la décision"],
};
