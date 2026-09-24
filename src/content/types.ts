import type { PostalAddress } from "./contact-details";

export type Accent = "green" | "salmon" | "gold" | "blue" | "emerald" | "coral" | "sun" | "cyan";
export type Tone = "orange" | "amber" | "azure";

export interface NavLink {
  label: string;
  href: string;
  /** Sous-menu (menu déroulant desktop / liste imbriquée mobile) */
  children?: Array<NavLink & { description?: string }>;
  /** Lien de pied du menu déroulant (ex. "Toutes nos expertises") */
  allLabel?: string;
}

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
  image: { src: string; alt: string };
}

export interface Department {
  name: string;
  cities: string;
}

export interface MapView {
  lat: number;
  lng: number;
  zoom: number;
  /** Lieu à marquer sur la carte */
  query?: string;
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
  image?: { src: string; alt: string };
}

export interface Cabinet {
  name: string;
  tagline: string;
  logo: { src: string; width: number; height: number };
  href: string;
}

export type StepTone = "blue" | "green" | "gold";

export interface Domain {
  title: string;
  description: string;
  cta: NavLink;
  image: { src: string; alt: string };
}

export interface Step {
  title: string;
  description: string;
  tone: StepTone;
}

export type ServiceTone = "blue" | "green" | "gold" | "salmon";

export interface TextItem {
  title: string;
  description: string;
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

// ---------- Cabinets ----------
export type CabinetTheme = "hyovet" | "surfonds";
export type ValueIcon = "chart" | "eye" | "team" | "clock" | "target" | "sync" | "heart" | "scale" | "handshake";
export type ValueTone = "blue" | "green" | "gold" | "plum" | "rose" | "mauve";

export interface ValueItem {
  icon: ValueIcon;
  title: string;
  description: string;
  tone: ValueTone;
}

export interface ValuesContent {
  title: string;
  subtitle: string;
  items: ValueItem[];
}

export interface TeamMember {
  name: string;
  role?: string;
  /** Sans photo, un avatar aux couleurs du thème est affiché. */
  photo?: string;
  linkedin?: string;
}

export interface TeamGroup {
  label: string;
  /** Intitulé de poste des membres, repris dans les données structurées (schema.org Person). */
  jobTitle: string;
  tone: "blue" | "green" | "white";
  members: TeamMember[];
}

export interface TeamContent {
  title: string;
  subtitle: string;
  groups: TeamGroup[];
}

export interface TimelineItem {
  title: string;
  description: string;
  color: "hyovet" | "surfonds" | "group";
}

export interface CabinetPage {
  slug: string;
  name: string;
  theme: CabinetTheme;
  menuDescription: string;
  seoDescription: string;
  hero: { title: string; subtitle: string; cta: NavLink; image?: { src: string; alt: string } };
  about: {
    title: string;
    paragraphs: string[];
    logo: { src: string; width: number; height: number; alt: string };
    location: string;
    /** Adresse postale (données structurées) */
    address: PostalAddress;
    specialtiesLabel: string;
    specialties: string[];
  };
  values: ValuesContent;
  zones: { title: string; subtitle: string; items: Zone[] };
  team: TeamContent;
}
