import "server-only";
import hyovetLogo from "@public/images/logos/hyovet.png";
import surfondsLogo from "@public/images/logos/selas-de-surfonds.png";
import { addresses, emails, formatAddress, phone } from "@/utils/data/content/shared/coordonnees";
import type { CabinetContact } from "@/utils/types/contact";

// Colonne de droite de la page contact : accroche puis coordonnées de chaque cabinet.

export const contactAside = {
  title: "Besoin d'une réponse rapide ?",
  subtitle: "Appelez directement le cabinet le plus proche de votre élevage.",
};

export const cabinetContacts: CabinetContact[] = [
  {
    theme: "hyovet",
    logo: { src: hyovetLogo, width: 338, height: 118, alt: "Hyovet" },
    title: "Hyovet — Plestan",
    address: addresses.hyovet,
    hours: "Lun–Ven · 8h30–18h",
    note: "Astreinte 7j/7 pour les élevages suivis",
    map: { lat: 48.42, lng: -2.45, zoom: 9, query: formatAddress(addresses.hyovet) },
    phone,
    email: emails.contact,
  },
  {
    theme: "surfonds",
    logo: { src: surfondsLogo, width: 572, height: 348, alt: "Selas de Surfonds" },
    title: "Selas de Surfonds — près du Mans",
    address: addresses.surfonds,
    hours: "Lun–Ven · 8h30–18h",
    note: "Interventions multi-régions",
    map: { lat: 48.04, lng: 0.16, zoom: 9, query: formatAddress(addresses.surfonds) },
    phone,
    email: emails.contact,
  },
];
