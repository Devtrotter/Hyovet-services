import { emails } from "./contact-details";
import type { CabinetTheme } from "./types";

// Page "Recrutement" — contenus repris de la maquette.
// Les récits et les offres sont provisoires : ils seront remplacés par les contenus réels (puis le CMS).

export const recruitmentIntro = {
  title: { before: "Rejoindre\nl'", highlight: "aventure" },
  subtitle:
    "Vous finissez l'école véto et la filière porcine ne vous a jamais été racontée ? C'est justement pour ça qu'il faut venir voir. Médecine de population, data, binômes : un métier qui ne ressemble pas aux idées reçues.",
  primaryCta: { label: "Voir les offres en cours", href: "#offres" },
  secondaryCta: { label: "Candidature spontanée", href: emails.recruitment.href },
};

export type HighlightTone = "blue" | "white" | "gold";

export interface Highlight {
  value: string;
  label: string;
  tone: HighlightTone;
}

/** Cartes inclinées du hero (l'inclinaison est portée par le SCSS). */
export const highlights: Highlight[] = [
  { value: "6 mois", label: "En binôme avec un senior pour débuter", tone: "blue" },
  { value: "20", label: "confrères joignables, jamais seul·e face à un cas", tone: "white" },
  { value: "2 régions", label: "Bretagne & Sarthe — des secteurs raisonnables", tone: "gold" },
];

export type ReasonIcon = "team" | "data" | "scope" | "territory";

export interface Reason {
  icon: ReasonIcon;
  title: string;
  description: string;
  tone: "blue" | "green" | "gold";
}

export const reasons: { title: string; subtitle: string; items: Reason[] } = {
  title: "Pourquoi nous rejoindre",
  subtitle: "Quatre bonnes raisons de venir voir par vous-même.",
  items: [
    {
      icon: "team",
      title: "Jamais seul face à un cas",
      description:
        "Binômes vétérinaires, réunions de cas hebdomadaires et 20 confrères joignables : le collectif fait partie du contrat.",
      tone: "blue",
    },
    {
      icon: "data",
      title: "La data comme outil de terrain",
      description:
        "GTTT, GTE, monitoring sérologique : ici les décisions se prennent avec des chiffres, et vous apprenez à les faire parler.",
      tone: "green",
    },
    {
      icon: "scope",
      title: "Des pratiques plus larges qu'on ne croit",
      description:
        "Du suivi sanitaire aux médecines complémentaires, de la reproduction à l'audit bâtiment : on ne fait pas deux journées pareilles.",
      tone: "gold",
    },
    {
      icon: "territory",
      title: "Un vrai équilibre, un vrai territoire",
      description:
        "Astreintes partagées, secteurs raisonnables, et deux régions où l'on vit bien, la Bretagne et la Sarthe.",
      tone: "blue",
    },
  ],
};

export interface Story {
  title: string;
  description: string;
  /** Sans image, un aplat de remplacement est affiché (visuels à fournir). */
  image?: { src: string; alt: string };
}

export const stories: { title: string; subtitle: string; items: Story[] } = {
  title: "La filière porcine, sans les clichés",
  subtitle: "Ce que le métier est vraiment, raconté par ceux qui le font.",
  // Textes provisoires de la maquette : les trois récits sont à écrire avec les vétérinaires.
  items: [
    {
      title: "C'est de la médecine de population, au long cours",
      description:
        "Vous suivez les mêmes élevages pendant des années. Chaque visite s'appuie sur l'historique, les données de la bande et un objectif sanitaire construit avec l'éleveur. On soigne un troupeau comme on gère un service hospitalier.",
    },
    {
      title: "C'est de la médecine de population, au long cours",
      description:
        "Vous suivez les mêmes élevages pendant des années. Chaque visite s'appuie sur l'historique, les données de la bande et un objectif sanitaire construit avec l'éleveur. On soigne un troupeau comme on gère un service hospitalier.",
    },
    {
      title: "C'est de la médecine de population, au long cours",
      description:
        "Vous suivez les mêmes élevages pendant des années. Chaque visite s'appuie sur l'historique, les données de la bande et un objectif sanitaire construit avec l'éleveur. On soigne un troupeau comme on gère un service hospitalier.",
    },
  ],
};

export interface JobOffer {
  id: string;
  cabinet: { theme: CabinetTheme; label: string };
  contract: string;
  title: string;
  location: string;
  description: string;
}

export const offers: {
  title: string;
  filters: { cabinetsLabel: string; contractsLabel: string; empty: string };
  applyLabel: string;
  items: JobOffer[];
} = {
  title: "Offres en cours",
  filters: {
    cabinetsLabel: "Tous les cabinets",
    contractsLabel: "Tous contrats",
    empty: "Aucune offre ne correspond à ces filtres pour le moment. Écrivez-nous, on lit toutes les candidatures.",
  },
  applyLabel: "Postuler",
  // Offres provisoires de la maquette.
  items: [
    {
      id: "veterinaire-porcin-junior-plestan",
      cabinet: { theme: "hyovet", label: "Hyovet" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "Plestan (22)",
      description:
        "Suivi d'élevages naisseurs-engraisseurs, montée en compétence encadrée, participation aux travaux JRP.",
    },
    {
      id: "veterinaire-porcin-confirme-plestan",
      cabinet: { theme: "hyovet", label: "Hyovet" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "Plestan (22)",
      description:
        "Suivi d'élevages naisseurs-engraisseurs, montée en compétence encadrée, participation aux travaux JRP.",
    },
    {
      id: "veterinaire-porcin-junior-surfonds",
      cabinet: { theme: "surfonds", label: "Selas de Surfonds" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "La Chapelle-Saint-Aubin (72)",
      description:
        "Suivi d'élevages naisseurs-engraisseurs, montée en compétence encadrée, participation aux travaux JRP.",
    },
    {
      id: "stage-veterinaire-surfonds",
      cabinet: { theme: "surfonds", label: "Selas de Surfonds" },
      contract: "Stage",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "La Chapelle-Saint-Aubin (72)",
      description:
        "Suivi d'élevages naisseurs-engraisseurs, montée en compétence encadrée, participation aux travaux JRP.",
    },
  ],
};

export const spontaneous = {
  title: "Pas d'offre qui vous correspond ?",
  subtitle: "Stage, thèse, premier poste, écrivez-nous, on lit tout.",
  cta: { label: "Candidature spontanée", href: emails.recruitment.href },
};
