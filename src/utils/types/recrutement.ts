import type { CabinetTheme } from "./cabinet";

// Types de la page recrutement : hero, raisons, récits et offres.

export type HighlightTone = "blue" | "white" | "gold";

export interface Highlight {
  value: string;
  label: string;
  tone: HighlightTone;
}

export type ReasonIcon = "team" | "data" | "scope" | "territory";

export interface Reason {
  icon: ReasonIcon;
  title: string;
  description: string;
  tone: "blue" | "green" | "gold";
}

export interface ReasonsContent {
  title: string;
  subtitle: string;
  items: Reason[];
}

export interface Story {
  title: string;
  description: string;
  /** Sans image, un aplat de remplacement est affiché (visuels à fournir). */
  image?: { src: string; alt: string };
}

export interface StoriesContent {
  title: string;
  subtitle: string;
  items: Story[];
}

export interface JobOffer {
  id: string;
  cabinet: { theme: CabinetTheme; label: string };
  contract: string;
  title: string;
  location: string;
  description: string;
}

export interface JobOffersContent {
  title: string;
  filters: { cabinetsLabel: string; contractsLabel: string; empty: string };
  applyLabel: string;
  items: JobOffer[];
}

export interface SpontaneousContent {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}
