import type { KeyFigure, NeedCard, NewsItem, Zone } from "./types";

// Contenus de la page d'accueil, repris à l'identique de la maquette.
// Ce fichier est la seule source de vérité : il sera remplacé par les données du CMS.

export const hero = {
  titleLines: ["Groupe vétérinaire expert", "de la filière porcine"],
  subtitle:
    "Santé, technique et données au service de la performance de vos élevages, du sevrage à l'abattage.",
  poster: "/images/home/hero-porcelets.jpg",
  video: { webm: "/videos/hero-porcelets.webm", mp4: "/videos/hero-porcelets.mp4" },
};

export const keyFigures: KeyFigure[] = [
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "green" },
  { value: 20, label: "vétérinaires", accent: "salmon" },
  { value: 35, label: "collaborateurs", accent: "gold" },
  { value: 35, suffix: "k+", label: "Porc soigné", accent: "blue" },
];

export const needs = {
  title: "De quoi avez-vous besoin ?",
  subtitle: "Accédez directement à ce que vous cherchez.",
  items: [
    {
      title: "Joindre un vétérinaire",
      description:
        "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.",
      cta: { label: "Contacter un cabinet", href: "/contact" },
      image: {
        src: "/images/home/need-veterinaire.jpg",
        alt: "Vétérinaire examinant un porc en extérieur",
      },
    },
    {
      title: "Trouver une réponse",
      description:
        "Publications, cas cliniques et actualités, nos travaux en accès libre, filtrables par thématique.",
      cta: { label: "Explorer les publications", href: "/publications" },
      image: {
        src: "/images/home/need-publications.jpg",
        alt: "Vétérinaire présentant des données scientifiques",
      },
    },
    {
      title: "Travailler avec nous",
      description:
        "Stages, postes, partenariats et essais terrain, rejoignez le groupe ou collaborez avec lui.",
      cta: { label: "Voir les opportunités", href: "/recrutement" },
      image: {
        src: "/images/home/need-recrutement.jpg",
        alt: "Équipe échangeant autour d'une table",
      },
    },
  ] satisfies NeedCard[],
};

const paysDeLaLoire = [
  {
    name: "Loire-Atlantique (44)",
    cities:
      "Nantes 44000, Saint-Nazaire 44600, Saint-Herblain 44800, Rezé 44400, Saint-Sébastien-sur-Loire 44230, Orvault 44700, Vertou 44120, La Baule-Escoublac 44500, Pornic 44210, Guérande 44350, Châteaubriant 44110, Ancenis 44150",
  },
  {
    name: "Maine-et-Loire (49)",
    cities:
      "Angers 49000, Cholet 49300, Saumur 49400,\nTrélazé 49800, Avrillé 49240, Les Ponts-de-Cé 49130, Beaupréau 49600,\nSegré 49500, Baugé 49150",
  },
  {
    name: "Maine-et-Loire (49)",
    cities:
      "Angers 49000, Cholet 49300, Saumur 49400,\nTrélazé 49800, Avrillé 49240, Les Ponts-de-Cé 49130, Beaupréau 49600,\nSegré 49500, Baugé 49150",
  },
];

export const zones = {
  title: "Nos cabinets, près de vos élevages",
  subtitle: "Nos zone d’interventions",
  items: [
    {
      id: "zone-1",
      region: "Pay de la Loire",
      badge: "4 départements",
      accent: "blue",
      departments: paysDeLaLoire,
      map: { lat: 48.22, lng: -3.0, zoom: 8 },
    },
    {
      id: "zone-2",
      region: "Pay de la Loire",
      badge: "5 départements",
      accent: "gold",
      departments: paysDeLaLoire,
      map: { lat: 47.4, lng: -0.9, zoom: 8 },
    },
    {
      id: "zone-3",
      region: "Pay de la Loire",
      badge: "5 départements",
      accent: "green",
      departments: paysDeLaLoire,
      map: { lat: 48.0, lng: 0.2, zoom: 8 },
    },
  ] satisfies Zone[],
};

const newsExcerpt = "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.";

export const news = {
  title: "Publications & actualités",
  items: [
    {
      id: "news-1",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "orange",
    },
    {
      id: "news-2",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "amber",
    },
    {
      id: "news-3",
      category: "Actualité",
      title: "Pay de la Loire",
      excerpt: newsExcerpt,
      author: "Fanny",
      date: "2026-09-03",
      href: "/publications",
      tone: "azure",
    },
  ] satisfies NewsItem[],
};
