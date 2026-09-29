import type { StaticImageData } from "next/image";
import type { Accent, MapView, NavLink, Tone } from "./common";

// Types des sections réutilisées d'une page à l'autre.

export interface KeyFigure {
  value: number;
  suffix?: string;
  label: string;
  accent: Accent;
}

export interface NeedCard {
  title: string;
  description: string;
  cta: NavLink;
  image: { src: StaticImageData; alt: string };
}

export interface Department {
  name: string;
  cities: string;
}

export interface Zone {
  id: string;
  region: string;
  badge?: string;
  accent: Accent;
  departments: Department[];
  map: MapView;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  href: string;
  tone: Tone;
  /** Thématiques, utilisées par le filtre de la page publications */
  tags?: string[];
  /** Chaîne acceptée pour les images construites dynamiquement (ex. publications) */
  image?: { src: string | StaticImageData; alt: string };
}

export interface TextItem {
  title: string;
  description: string;
}
