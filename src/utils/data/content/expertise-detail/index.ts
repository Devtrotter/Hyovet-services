import "server-only";
import { accompagnementTechnique } from "./accompagnement-technique";
import { medecinesDouces } from "./medecines-douces";
import { performanceReproduction } from "./performance-reproduction";
import { solutionsDigitalesData } from "./solutions-digitales-data";
import { suiviSanitaireProphylaxie } from "./suivi-sanitaire-prophylaxie";
import type { ExpertiseDetail } from "@/utils/types/expertise";

// Pages de détail des domaines d'expertise (/expertise/[slug]).
// "Performance Reproduction" reprend la maquette à l'identique.
// Les 4 autres pages utilisent des textes PROVISOIRES rédigés à partir de l'arborescence :
// à faire valider / remplacer par le client (Ludivine Engoulvent) via le futur CMS.
export const expertiseDetails: ExpertiseDetail[] = [
  performanceReproduction,
  suiviSanitaireProphylaxie,
  accompagnementTechnique,
  medecinesDouces,
  solutionsDigitalesData,
];

export const getExpertiseDetail = (slug: string) => expertiseDetails.find((item) => item.slug === slug);

export { expertiseHref } from "./href";
export { expertiseBreadcrumb } from "./breadcrumb";
