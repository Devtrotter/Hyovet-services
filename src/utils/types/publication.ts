// Types propres aux publications (liste et page de détail).

export interface ArticleBlock {
  /** `lead` : chapô avec amorce en gras · `heading` : sous-titre · `text` : paragraphe · `list` : puces · `figure` : visuel légendé */
  type: "lead" | "heading" | "text" | "list" | "figure";
  /** Amorce en gras du chapô ("Résumé.") */
  label?: string;
  text?: string;
  items?: string[];
  /** Légende sous le visuel ; l'image elle-même reste à fournir. */
  caption?: string;
  image?: { src: string; alt: string };
}

export interface PublicationAuthor {
  name: string;
  role: string;
  photo?: string;
}

export interface PublicationDetail {
  slug: string;
  category: string;
  /** Congrès ou source ("JRD 2026") */
  source?: string;
  /** "Saint-Malo · 4 février 2026" */
  place?: string;
  date: string;
  title: string;
  /** Chapô repris en méta-description et en extrait de partage */
  summary: string;
  tags: string[];
  document?: { label: string; href: string; meta: string };
  authors: PublicationAuthor[];
  blocks: ArticleBlock[];
}

/** Libellés partagés par le hero et le corps d'une publication */
export interface ArticleLabels {
  back: string;
  documentLabel: string;
  authorsLabel: string;
  related: string;
}

/** Libellés de la liste des publications : filtres, compte et pagination */
export interface PublicationsListLabels {
  countLabel: (count: number) => string;
  allLabel: string;
  categoryFilterLabel: string;
  tagLabel: string;
  tagPlaceholder: string;
  empty: string;
  previousLabel: string;
  nextLabel: string;
}
