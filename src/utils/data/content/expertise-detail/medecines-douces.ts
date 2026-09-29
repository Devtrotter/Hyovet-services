import "server-only";
import { heroSubtitle, placeholderFigures, proofs } from "./shared";
import { medecinesDoucesSections } from "./medecines-douces-sections";
import type { ExpertiseDetail } from "@/utils/types/expertise";

export const medecinesDouces: ExpertiseDetail = {
  slug: "medecines-douces",
  name: "Médecines douces",
  menuDescription: "Acupuncture, phytothérapie, homéopathie",
  seoDescription:
    "Médecines complémentaires en élevage porcin : acupuncture, phytothérapie et homéopathie en appui des traitements conventionnels.",
  hero: { title: "Médecines douces au service de la santé de vos porcs", subtitle: heroSubtitle },
  figures: placeholderFigures,
  ...medecinesDoucesSections,
  proofs: proofs(),
};
