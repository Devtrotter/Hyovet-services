import type { StaticImageData } from "next/image";
import type { CabinetTheme } from "./cabinet";
import type { MapView, PostalAddress } from "./common";

// Types de la page contact.

/** Coordonnées complètes d'un cabinet (carte de la colonne de droite + carte Google). */
export interface CabinetContact {
  theme: CabinetTheme;
  logo: { src: StaticImageData; width: number; height: number; alt: string };
  title: string;
  address: PostalAddress;
  hours: string;
  /** Précision affichée sous les horaires (astreinte, zone d'intervention…) */
  note: string;
  map: MapView;
  phone: { label: string; href: string };
  email: { label: string; href: string };
}
