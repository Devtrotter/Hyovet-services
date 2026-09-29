// Types transverses : couleurs, liens, adresses, cartes.

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

export interface PostalAddress {
  street: string;
  postalCode: string;
  city: string;
  department: string;
}

export interface MapView {
  lat: number;
  lng: number;
  zoom: number;
  /** Lieu à marquer sur la carte */
  query?: string;
}

export interface Cabinet {
  name: string;
  tagline: string;
  logo: { src: string; width: number; height: number };
  href: string;
}
