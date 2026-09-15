// Coordonnées officielles (emails et adresses postales) : source unique pour tout le site,
// y compris les données structurées et le llms.txt. Aucun import ici, pour éviter les dépendances circulaires.

const mail = (address: string) => ({ label: address, href: `mailto:${address}` });

/** Numéro unique pour tout le site (accueil, cabinets, bandeaux) */
export const phone = { label: "02 96 30 70 43", href: "tel:+33296307043" };

export const emails = {
  /** Contact général */
  contact: mail("accueil@hyovetservices.com"),
  recruitment: mail("recrutement@hyovetservices.com"),
};

export interface PostalAddress {
  street: string;
  postalCode: string;
  city: string;
  department: string;
}

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

/** Identité légale des sociétés (registres INSEE / RNE / BODACC). */
export const companies = {
  hyovetServices: {
    name: "Hyovet Services",
    legalForm: "Société civile de moyens",
    capital: "1 000 €",
    siren: "921 819 322",
    rcs: "RCS Saint-Malo",
    vat: "FR06921819322",
    representative: "Jean-Noël Sialelli, gérant",
  },
  hyovet: {
    name: "Hyovet",
    legalForm: "Société d'exercice libéral par actions simplifiée (SELAS) de vétérinaires",
    capital: "50 000 €",
    siren: "493 718 720",
    rcs: "RCS Saint-Malo",
    vat: "FR25493718720",
    representative: "Jean-Noël Sialelli, président",
  },
  surfonds: {
    name: "Selas de Surfonds",
    legalForm: "Société d'exercice libéral par actions simplifiée (SELAS) de vétérinaires",
    capital: "10 000 €",
    siren: "921 133 849",
    rcs: "RCS Le Mans",
    vat: "FR84921133849",
    representative: "Christian Spindler, président",
  },
};
