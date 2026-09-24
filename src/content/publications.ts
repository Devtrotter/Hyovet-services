import type { NewsItem, Tone } from "./types";

// Page "Publications et actualités" — contenus repris de la maquette.
// Les articles sont provisoires (même texte que la maquette) : ils viendront du CMS.

export const publicationsIntro = {
  title: { highlight: "Publications", rest: " et actualités" },
  subtitle:
    "Travaux publiés en congrès, cas cliniques vus en élevage et actualités sanitaires : toute la production du groupe, au même endroit.",
  search: {
    label: "Rechercher une publication",
    placeholder: "Rechercher : SDRP, iléite, biosécurité…",
    submitLabel: "Rechercher",
  },
};

export const publicationsList = {
  /** "12 publications" — le compte suit la liste, il n'est jamais saisi à la main. */
  countLabel: (count: number) => `${count} ${count > 1 ? "publications" : "publication"}`,
  allLabel: "Tout",
  categoryFilterLabel: "Filtrer par thématique",
  tagLabel: "Sélectionner un tag",
  tagPlaceholder: "Sélectionner des tags",
  empty: "Aucune publication ne correspond à cette recherche.",
  previousLabel: "Page précédente",
  nextLabel: "Page suivante",
  /** Nombre d'articles par page (2 rangées de 3 sur grand écran) */
  perPage: 6,
};

const excerpt = "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.";

const tones: Tone[] = ["orange", "amber", "azure"];
const categories = ["Publications", "Retours terrain", "Actualités"];
const authors = ["Fanny", "Christophe", "Karine"];
const placeholderTags = ["Santé animale", "Biosécurité", "Reproduction", "Données d'élevage"];

/**
 * Articles provisoires : titre et extrait repris de la maquette, catégories et dates variées
 * pour que la recherche, le tri et la pagination soient utilisables avant la mise en ligne du CMS.
 */
const placeholderPublications: NewsItem[] = Array.from({ length: 14 }, (_, index) => {
  const month = 9 - Math.floor(index / 2);
  const day = index % 2 === 0 ? 3 : 18;
  return {
    id: `publication-${index + 1}`,
    category: categories[index % categories.length],
    title: "Pay de la Loire",
    excerpt,
    author: authors[index % authors.length],
    date: `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    href: "/publications",
    tone: tones[index % tones.length],
    tags: [placeholderTags[index % placeholderTags.length]],
  };
});

export const newsletter = {
  title: "L'essentiel sanitaire du mois, en 5 minutes de lecture",
  subtitle:
    "Alertes en cours, saisonnalité des pathologies et un conseil d'élevage concret : ce que nos vétérinaires auraient dit en salle d'attente, dans votre boîte mail.",
  placeholder: "votre@email.fr",
  submitLabel: "S'inscrire",
  consent: {
    before: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la ",
    link: { label: "politique de confidentialité", href: "/politique-de-confidentialite" },
    after: " (RGPD). *",
  },
  success: "Merci, votre inscription a bien été prise en compte.",
};

// ---------- Détail d'une publication ----------

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

export const publicationDetails: PublicationDetail[] = [
  {
    slug: "maitrise-sdrp-engraissement-suivi-serologique",
    category: "Publications",
    source: "JRD 2026",
    place: "Saint-Malo",
    date: "2026-02-04",
    title: "Maîtrise du SDRP en engraissement, retour sur trois ans de suivi sérologique",
    summary:
      "Le syndrome dysgénésique et respiratoire porcin (SDRP) reste l'une des premières causes de pertes économiques en engraissement. Nous présentons les résultats de trois ans de suivi sérologique mené dans 18 élevages naisseurs-engraisseurs des Côtes-d'Armor.",
    tags: ["Santé animale", "SDRP", "Suivi sérologique"],
    // PDF à déposer dans public/documents/ ; sans l'entrée `document`, l'encart n'est pas affiché.
    document: {
      label: "Télécharger le PDF",
      href: "/documents/jrp-2026-sdrp-engraissement.pdf",
      meta: "Poster JRP 2026 · 1,2 Mo",
    },
    authors: [
      { name: "Dr Marc Le Bihan", role: "Vétérinaire — Hyovet" },
      { name: "Dr Anne Le Goff", role: "Vétérinaire associée — Hyovet" },
    ],
    blocks: [
      {
        type: "lead",
        label: "Résumé.",
        text: "Le syndrome dysgénésique et respiratoire porcin (SDRP) reste l'une des premières causes de pertes économiques en engraissement. Nous présentons les résultats de trois ans de suivi sérologique mené dans 18 élevages naisseurs-engraisseurs des Côtes-d'Armor.",
      },
      { type: "heading", text: "Matériel et méthode" },
      {
        type: "text",
        text: "Un protocole de prélèvements trimestriels a été mis en place : buvards salivaires par case en entrée et sortie d'engraissement, complétés par des sérologies ELISA sur 15 sujets par bande.",
      },
      {
        type: "list",
        items: [
          "18 élevages suivis, statuts initiaux stables et instables",
          "4 200 prélèvements analysés sur la période 2023-2025",
          "Indicateurs croisés : séroconversion, IC, GMQ, taux de pertes",
        ],
      },
      { type: "figure", caption: "Figure 1 — Cinétique des séroconversions observées par trimestre." },
      { type: "heading", text: "Résultats" },
      {
        type: "text",
        text: "Les élevages ayant stabilisé leur statut ont gagné en moyenne 0,12 point d'indice de consommation et réduit leurs pertes en engraissement de 1,8 point. La détection précoce par buvards salivaires a permis d'anticiper deux recirculations virales avant expression clinique.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "text",
        text: "Un monitoring sérologique régulier, couplé à une lecture rigoureuse des indicateurs technico-économiques, constitue un outil de pilotage efficace du SDRP en engraissement. La méthode est transposable à tout élevage naisseur-engraisseur.",
      },
    ],
  },
];

export const publicationHref = (slug: string) => `/publications/${slug}`;

/** Carte de liste dérivée d'une publication détaillée : un seul contenu, deux affichages. */
const toCard = (detail: PublicationDetail, tone: Tone = "azure"): NewsItem => ({
  id: detail.slug,
  category: detail.category,
  title: detail.title,
  excerpt: detail.summary,
  author: detail.authors[0]?.name ?? "",
  date: detail.date,
  href: publicationHref(detail.slug),
  tone,
  tags: detail.tags,
});

/** Publications listées : celles qui ont une page de détail, puis les entrées provisoires. */
export const publications: NewsItem[] = [
  ...publicationDetails.map((detail) => toCard(detail)),
  ...placeholderPublications,
];

/** Article mis en avant dans le hero (carte bleue de la maquette). */
export const featuredPublication: NewsItem = publications[0];

export const getPublication = (slug: string) => publicationDetails.find((item) => item.slug === slug);

export const articleLabels = {
  back: "Toutes les publications",
  documentLabel: "Document",
  authorsLabel: "Auteurs",
  related: "Dans la même thématique",
};
