import "server-only";
import { heroSubtitle, placeholderFigures, proofs } from "./shared";
import { accompagnementTechniqueSections } from "./accompagnement-technique-sections";
import type { ExpertiseDetail } from "@/utils/types/expertise";

export const accompagnementTechnique: ExpertiseDetail = {
  slug: "accompagnement-technique",
  name: "Accompagnement Technique",
  menuDescription: "Ventilation, confort de l'animal, sevrage",
  seoDescription:
    "Accompagnement technique et bâtiment en élevage porcin : ventilation, confort et bien-être animal, qualité de l'eau et sevrage.",
  hero: { title: "Accompagnement technique et bâtiment en élevage porcin", subtitle: heroSubtitle },
  figures: placeholderFigures,
  ...accompagnementTechniqueSections,
  proofs: proofs(),
};
