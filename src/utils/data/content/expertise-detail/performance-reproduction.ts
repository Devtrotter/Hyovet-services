import "server-only";
import { heroSubtitle, placeholderFigures, proofs } from "./shared";
import { performanceReproductionSections } from "./performance-reproduction-sections";
import type { ExpertiseDetail } from "@/utils/types/expertise";

// Seule page reprise à l'identique de la maquette.
export const performanceReproduction: ExpertiseDetail = {
  slug: "performance-reproduction",
  name: "Performance Reproduction",
  menuDescription: "Échographie ovarienne, conduite d'élevage",
  seoDescription:
    "Échographie ovarienne et suivi de reproduction de la truie : datation des chaleurs, retours en chaleur, taux de mise bas et homogénéité des portées.",
  hero: { title: "Échographie ovarienne et performance reproduction de la truie", subtitle: heroSubtitle },
  figures: placeholderFigures,
  ...performanceReproductionSections,
  proofs: proofs(),
};
