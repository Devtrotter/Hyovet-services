import type { StaticImageData } from "next/image";
import type { NavLink } from "./common";
import type { KeyFigure, NewsItem, TextItem } from "./sections";

export type StepTone = "blue" | "green" | "gold";
export type ServiceTone = "blue" | "green" | "gold" | "salmon";

export interface Domain {
  title: string;
  description: string;
  cta: NavLink;
  image: { src: StaticImageData; alt: string };
}

export interface Step {
  title: string;
  description: string;
  tone: StepTone;
}

export interface ExpertiseDetail {
  slug: string;
  /** Nom court (fil d'Ariane, menu, carte) */
  name: string;
  /** Accroche courte du menu déroulant */
  menuDescription: string;
  seoDescription: string;
  hero: { title: string; subtitle: string };
  figures: KeyFigure[];
  services: { title: string; subtitle: string; items: TextItem[] };
  situations: { title: string; subtitle: string; items: TextItem[] };
  proofs: { title: string; items: NewsItem[]; cta: NavLink };
}
