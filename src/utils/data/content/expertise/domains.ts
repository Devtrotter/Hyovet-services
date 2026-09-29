import "server-only";
import reproductionImg from "@public/images/expertise/reproduction.jpg";
import suiviSanitaireImg from "@public/images/expertise/suivi-sanitaire.jpg";
import accompagnementImg from "@public/images/expertise/accompagnement-technique.jpg";
import medecinesDoucesImg from "@public/images/expertise/medecines-douces.jpg";
import solutionsDigitalesImg from "@public/images/expertise/solutions-digitales.jpg";
import type { Domain } from "@/utils/types/expertise";

// Extraite car reprise deux fois dans la grille de la maquette.
const reproduction: Domain = {
  title: "Performance Reproduction",
  description: "Échographie ovarienne, conduite d'élevage",
  cta: { label: "Découvrir", href: "/expertise/performance-reproduction" },
  image: { src: reproductionImg, alt: "Sonde d'échographie vétérinaire" },
};

// Ordre de la maquette (grille 3 × 2, la carte "Performance Reproduction" y figure deux fois).
export const domains: Domain[] = [
  reproduction,
  {
    title: "Suivi Sanitaire & Prophylaxie",
    description: "Biosécurité, plans de vaccination, audit sanitaire.",
    cta: { label: "Découvrir", href: "/expertise/suivi-sanitaire-prophylaxie" },
    image: { src: suiviSanitaireImg, alt: "Technicien en tenue de protection dans un élevage porcin" },
  },
  {
    title: "Accompagnement Technique",
    description: "Ventilation, confort de l'animal, sevrage.",
    cta: { label: "Découvrir", href: "/expertise/accompagnement-technique" },
    image: { src: accompagnementImg, alt: "Vétérinaire et éleveur échangeant dans un bâtiment d'élevage" },
  },
  reproduction,
  {
    title: "Médecines douces",
    description: "Acupuncture, phytothérapie, homéopathie.",
    cta: { label: "Découvrir", href: "/expertise/medecines-douces" },
    image: { src: medecinesDoucesImg, alt: "Aiguilles d'acupuncture" },
  },
  {
    title: "Solutions Digitales & Data",
    description: "Valorisation des données d'élevage.",
    cta: { label: "Découvrir", href: "/expertise/solutions-digitales-data" },
    image: { src: solutionsDigitalesImg, alt: "Tablette affichant des données d'élevage devant des porcs" },
  },
];
