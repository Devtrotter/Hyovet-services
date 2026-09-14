import { expertiseHref } from "./expertises";
import type { Domain, Step } from "./types";

// Contenus de la page "Nos domaines d'expertise", repris à l'identique de la maquette.

export const expertiseHero = {
  titleLines: ["Nos domaines d'expertise", "vétérinaire porcine"],
  subtitle:
    "La science vétérinaire et l'analyse des données de terrain au service de la rentabilité, de la sérénité et de la pérennité de votre élevage.",
  poster: "/images/expertise/hero-poster.jpg",
  video: { webm: "/videos/expertise.webm", mp4: "/videos/expertise.mp4" },
};

const reproduction: Domain = {
  title: "Performance Reproduction",
  description: "Échographie ovarienne, conduite d'élevage",
  cta: { label: "Découvrir", href: expertiseHref("performance-reproduction") },
  image: { src: "/images/expertise/reproduction.jpg", alt: "Sonde d'échographie vétérinaire" },
};

// Ordre de la maquette (grille 3 × 2, la carte "Performance Reproduction" y figure deux fois).
export const domains: Domain[] = [
  reproduction,
  {
    title: "Suivi Sanitaire & Prophylaxie",
    description: "Biosécurité, plans de vaccination, audit sanitaire.",
    cta: { label: "Découvrir", href: expertiseHref("suivi-sanitaire-prophylaxie") },
    image: { src: "/images/expertise/suivi-sanitaire.jpg", alt: "Technicien en tenue de protection dans un élevage porcin" },
  },
  {
    title: "Accompagnement Technique",
    description: "Ventilation, confort de l'animal, sevrage.",
    cta: { label: "Découvrir", href: expertiseHref("accompagnement-technique") },
    image: { src: "/images/expertise/accompagnement-technique.jpg", alt: "Vétérinaire et éleveur échangeant dans un bâtiment d'élevage" },
  },
  reproduction,
  {
    title: "Médecines douces",
    description: "Acupuncture, phytothérapie, homéopathie.",
    cta: { label: "Découvrir", href: expertiseHref("medecines-douces") },
    image: { src: "/images/expertise/medecines-douces.jpg", alt: "Aiguilles d'acupuncture" },
  },
  {
    title: "Solutions Digitales & Data",
    description: "Valorisation des données d'élevage.",
    cta: { label: "Découvrir", href: expertiseHref("solutions-digitales-data") },
    image: { src: "/images/expertise/solutions-digitales.jpg", alt: "Tablette affichant des données d'élevage devant des porcs" },
  },
];

export const method = {
  title: "Comment on travaille",
  subtitle: "De l'innovation de terrain, pas des solutions théoriques depuis un bureau.",
  steps: [
    {
      title: "Diagnostic sur le terrain",
      description: "On vient voir : visite, prélèvements, mesures d'ambiance, lecture des données de l'élevage.",
      tone: "blue",
    },
    {
      title: "Plan d'action concret",
      description:
        "Des mesures applicables dès la semaine suivante, hiérarchisées avec vous selon leur coût et leur impact.",
      tone: "green",
    },
    {
      title: "Suivi des indicateurs",
      description: "GTTT, GTE, sérologies : on mesure les résultats et on ajuste, bande après bande.",
      tone: "gold",
    },
  ] satisfies Step[],
};

export const publicationsCta = {
  title: "Nos méthodes s'appuient sur nos travaux publiés",
  cta: { label: "Voir les publications", href: "/publications" },
};
