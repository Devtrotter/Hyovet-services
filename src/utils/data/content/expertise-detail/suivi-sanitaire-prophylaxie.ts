import "server-only";
import { heroSubtitle, placeholderFigures, proofs } from "./shared";
import { suiviSanitaireSections } from "./suivi-sanitaire-prophylaxie-sections";
import type { ExpertiseDetail } from "@/utils/types/expertise";

export const suiviSanitaireProphylaxie: ExpertiseDetail = {
  slug: "suivi-sanitaire-prophylaxie",
  name: "Suivi Sanitaire & Prophylaxie",
  menuDescription: "Biosécurité, plans de vaccination, audit sanitaire",
  seoDescription:
    "Suivi sanitaire des élevages porcins : biosécurité, plans de vaccination, audits sanitaires et démédication raisonnée.",
  hero: { title: "Suivi sanitaire et prophylaxie de votre élevage porcin", subtitle: heroSubtitle },
  figures: placeholderFigures,
  ...suiviSanitaireSections,
  proofs: proofs(),
};
