// Documents légaux modélisés en données : la page ne contient plus de JSX juridique.

/** Fragment de texte : chaîne simple, ou élément enrichi (gras, lien, mention à compléter). */
export type LegalInline =
  | string
  | { type: "strong"; text: string }
  /** Lien externe (nouvel onglet) ou mailto/tel si `external` est absent */
  | { type: "link"; label: string; href: string; external?: boolean }
  /** Lien interne au site (next/link) */
  | { type: "internal"; label: string; href: string }
  /** Information légale manquante, à fournir par le client */
  | { type: "toComplete"; text: string };

export type LegalBlock =
  | { type: "paragraph"; content: LegalInline[] }
  | { type: "list"; items: LegalInline[][] }
  | { type: "table"; columns: string[]; rows: string[][] }
  /** Réglage du consentement aux cartes Google (composant client) */
  | { type: "mapsConsent" };

export interface LegalSectionContent {
  /** Ancre de la section (#id) */
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocumentContent {
  /** Id du titre de page, pour `aria-labelledby` */
  id: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: LegalSectionContent[];
}
