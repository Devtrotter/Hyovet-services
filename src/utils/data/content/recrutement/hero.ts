import "server-only";
import { emails } from "@/utils/data/content/shared/coordonnees";
import type { Highlight } from "@/utils/types/recrutement";

// Hero de la page "Recrutement" : accroche, CTA et cartes "chiffres".

export const recruitmentIntro = {
  title: { before: "Rejoindre\nl'", highlight: "aventure" },
  subtitle:
    "Vous finissez l'école véto et la filière porcine ne vous a jamais été racontée ? C'est justement pour ça qu'il faut venir voir. Médecine de population, data, binômes : un métier qui ne ressemble pas aux idées reçues.",
  primaryCta: { label: "Voir les offres en cours", href: "#offres" },
  secondaryCta: { label: "Candidature spontanée", href: emails.recruitment.href },
};

/** Cartes inclinées du hero (l'inclinaison est portée par le SCSS). */
export const highlights: Highlight[] = [
  { value: "6 mois", label: "En binôme avec un senior pour débuter", tone: "blue" },
  { value: "20", label: "confrères joignables, jamais seul·e face à un cas", tone: "white" },
  { value: "2 régions", label: "Bretagne & Sarthe — des secteurs raisonnables", tone: "gold" },
];
