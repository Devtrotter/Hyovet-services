import "server-only";
import type { PostalAddress } from "@/utils/types/common";

// Coordonnées officielles : source unique pour tout le site, y compris les données structurées et le llms.txt.

const mail = (address: string) => ({ label: address, href: `mailto:${address}` });

/** Numéro unique pour tout le site (accueil, cabinets, bandeaux) */
export const phone = { label: "02 96 30 70 43", href: "tel:+33296307043" };

export const emails = {
  /** Contact général */
  contact: mail("accueil@hyovetservices.com"),
  recruitment: mail("recrutement@hyovetservices.com"),
};

export const addresses = {
  /** Hyovet et Hyovet Services */
  hyovet: {
    street: "5 Parc d'Activités Carrefour de Penthièvre",
    postalCode: "22640",
    city: "Plestan",
    department: "Côtes-d'Armor",
  },
  surfonds: {
    street: "37, rue Ettore Bugatti",
    postalCode: "72650",
    city: "La Chapelle-Saint-Aubin",
    department: "Sarthe",
  },
} satisfies Record<string, PostalAddress>;

/** "5 Parc d'Activités…, 22640 Plestan" */
export const formatAddress = ({ street, postalCode, city }: PostalAddress) => `${street}, ${postalCode} ${city}`;
