import type { NavLink, PostalAddress } from "./common";
import type { Zone } from "./sections";
import type { TeamContent } from "./team";

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
