import "server-only";
import { heroSubtitle, placeholderFigures, proofs } from "./shared";
import { solutionsDigitalesSections } from "./solutions-digitales-data-sections";
import type { ExpertiseDetail } from "@/utils/types/expertise";

export const solutionsDigitalesData: ExpertiseDetail = {
  slug: "solutions-digitales-data",
  name: "Solutions Digitales & Data",
  menuDescription: "Valorisation des données d'élevage",
  seoDescription:
    "Valorisation des données d'élevage porcin : GTTT, GTE, indices de consommation et taux de pertes traduits en leviers économiques.",
  hero: { title: "Solutions digitales et valorisation des données d'élevage", subtitle: heroSubtitle },
  figures: placeholderFigures,
  ...solutionsDigitalesSections,
  proofs: proofs(),
};
