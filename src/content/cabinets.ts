import { zones as homeZones } from "./home";
import type { CabinetPage, NavLink, TeamMember, ValuesContent } from "./types";

// Pages "Les cabinets" : groupe Hyovet Services + une page par cabinet.
// Hyovet reprend la maquette ; Selas de Surfonds est personnalisée à partir de l'arborescence client.
// Portraits, noms et zones : contenus provisoires à remplacer via le CMS.

const placeholderMember: TeamMember = {
  name: "Dr Anne Le Goff",
  role: "Vétérinaire associée — Hyovet\nPrésidente du groupe",
  photo: "/images/team/placeholder.jpg",
  linkedin: "https://www.linkedin.com/",
};

const members = (count: number, role = placeholderMember.role): TeamMember[] =>
  Array.from({ length: count }, () => ({ ...placeholderMember, role }));

export const groupValues: ValuesContent = {
  title: "Nos valeurs",
  subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
  items: [
    {
      icon: "chart",
      title: "L'innovation de terrain",
      description: "Des essais menés dans vos élevages, des protocoles validés par la donnée, pas par la mode.",
      tone: "blue",
    },
    {
      icon: "eye",
      title: "La simplicité et l'agilité numérique",
      description: "Des outils digitaux simples, des réponses rapides, des comptes rendus lisibles.",
      tone: "green",
    },
    {
      icon: "team",
      title: "La force du collectif",
      description: "Deux équipes, un réseau : chaque éleveur bénéficie de l'expérience de tous.",
      tone: "gold",
    },
  ],
};

// ---------- Page groupe ----------
export const groupPage = {
  breadcrumbLabel: "Hyovet Service",
  hero: {
    titleLines: ["L'expertise vétérinaire", "porcine au cœur du", "Grand Ouest"],
    subtitle:
      "Deux cabinets indépendants, une alliance au service des éleveurs : Hyovet en Bretagne, la Selas de Surfonds dans la Sarthe et partout où sont les élevages.",
    actions: [
      { label: "Découvrir Hyovet", href: "/cabinets/hyovet", theme: "hyovet" as const },
      { label: "Découvrir Surfonds", href: "/cabinets/selas-de-surfonds", theme: "surfonds" as const },
    ],
  },
  adn: {
    title: "Notre ADN",
    paragraphs: [
      "Hyovet Services est né de l'alliance de deux cabinets vétérinaires spécialisés en médecine porcine. Chacun conserve son autonomie, son identité et son équipe ; ensemble, ils partagent leurs données, leurs protocoles et leur expérience de terrain.",
      "Notre mission : mettre la science vétérinaire et l'analyse des données de terrain au service de la rentabilité, de la sérénité et de la pérennité de vos élevages.",
    ],
    timeline: [
      {
        title: "2007 - Plestan (22)",
        description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
        color: "hyovet" as const,
      },
      {
        title: "2007 - Plestan (22)",
        description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
        color: "surfonds" as const,
      },
      {
        title: "Aujourd'hui — Hyovet Services",
        description: "Création de la Selas Vétérinaire de la Hunaudaye, devenue Hyovet.",
        color: "group" as const,
      },
    ],
  },
  values: groupValues,
  team: {
    title: "L'équipe Hyovet Services",
    subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
    groups: [
      { label: "Les vétérinaires", tone: "blue" as const, members: members(4) },
      { label: "L'équipe technique", tone: "green" as const, members: members(4) },
    ],
  },
  cabinets: {
    title: "Deux cabinets, deux personnalités",
    subtitle: "Une même exigence scientifique, deux ancrages complémentaires.",
    items: [
      {
        theme: "hyovet" as const,
        logo: { src: "/images/logos/hyovet.png", width: 338, height: 118, alt: "Hyovet" },
        title: "L'ancrage breton au service de la performance sanitaire",
        description:
          "15 vétérinaires dédiés exclusivement à la médecine porcine, au cœur de la première région porcine de France.",
        cta: { label: "Découvrir Hyovet", href: "/cabinets/hyovet" },
      },
      {
        theme: "surfonds" as const,
        logo: { src: "/images/logos/selas-de-surfonds.png", width: 572, height: 348, alt: "Selas de Surfonds" },
        title: "La rigueur technique en mouvement, partout où sont nos éleveurs",
        description:
          "Des vétérinaires mobiles qui interviennent de la Seine-Maritime à la Gironde, en passant par le Cher.",
        // Libellé de la maquette ("Découvrir Hyovet") corrigé pour correspondre à la destination.
        cta: { label: "Découvrir Surfonds", href: "/cabinets/selas-de-surfonds" },
      },
    ],
  },
};

// ---------- Pages cabinet ----------
export const cabinetPages: CabinetPage[] = [
  {
    slug: "hyovet",
    name: "Hyovet",
    theme: "hyovet",
    menuDescription: "L'ancrage breton — Plestan (22)",
    seoDescription:
      "Hyovet, cabinet vétérinaire porcin basé à Plestan (Côtes-d'Armor) : 15 vétérinaires dédiés à la médecine porcine, suivi d'élevage, urgences et démédication.",
    hero: {
      title: "L'ancrage breton au service de la performance sanitaire",
      subtitle:
        "« Ensemble, donnons du sens à l'élevage ! » — 15 vétérinaires dédiés exclusivement à la médecine porcine, issus de la Selas Vétérinaire de la Hunaudaye.",
      cta: { label: "Contacter Hyovet", href: "/contact" },
    },
    about: {
      title: "Le cabinet",
      paragraphs: [
        "Créé en 2007 à Plestan sous le nom de Selas Vétérinaire de la Hunaudaye, Hyovet réunit aujourd'hui 15 vétérinaires dédiés exclusivement à la médecine porcine, au cœur de la première région porcine de France.",
        "Suivi d'élevage, urgences, pharmacie et essais terrain : une équipe complète au service du statut sanitaire et de la performance de vos bandes.",
      ],
      logo: { src: "/images/logos/hyovet.png", width: 338, height: 118, alt: "Hyovet" },
      location: "Plestan, Côtes-d'Armor (22)",
      specialtiesLabel: "Nos spécialités :",
      specialties: ["Sécurisation du statut sanitaire", "Démédication"],
    },
    values: groupValues,
    zones: {
      title: homeZones.title,
      subtitle: homeZones.subtitle,
      items: [
        {
          ...homeZones.items[0],
          badge: undefined,
          map: { lat: 48.25, lng: -3.2, zoom: 8, query: "Plestan, Côtes-d'Armor" },
        },
      ],
    },
    team: {
      title: "L'équipe Hyovet Services",
      subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
      groups: [{ label: "Les vétérinaires", tone: "white", members: members(4) }],
    },
  },
  {
    slug: "selas-de-surfonds",
    name: "Selas de Surfonds",
    theme: "surfonds",
    menuDescription: "La mobilité au service des éleveurs — Sarthe (72)",
    seoDescription:
      "Selas de Surfonds, cabinet vétérinaire porcin indépendant basé près du Mans (Sarthe) : des vétérinaires mobiles de la Seine-Maritime à la Gironde.",
    hero: {
      title: "La rigueur technique en mouvement, partout où sont nos éleveurs",
      subtitle:
        "Un cabinet vétérinaire indépendant et spécialisé, basé près du Mans, qui s'est affranchi des frontières régionales pour suivre les élevages porcins.",
      cta: { label: "Contacter Surfonds", href: "/contact" },
    },
    about: {
      title: "Le cabinet",
      paragraphs: [
        "Basée près du Mans, la Selas de Surfonds est un cabinet vétérinaire indépendant et spécialisé. Si notre ancrage sarthois est fort, la mobilité de nos vétérinaires l'est tout autant : nous intervenons de la Seine-Maritime à la Gironde, en passant par le Cher.",
        "Cette flexibilité géographique nous permet d'accompagner des structures porcines aux profils très variés : suivi sanitaire de pointe, aide à la décision réactive et accompagnement technique sur-mesure.",
      ],
      logo: { src: "/images/logos/selas-de-surfonds.png", width: 572, height: 348, alt: "Selas de Surfonds" },
      location: "Surfonds, Sarthe (72)",
      specialtiesLabel: "Nos spécialités :",
      specialties: ["Suivi sanitaire de pointe", "Aide à la décision"],
    },
    values: {
      title: "Nos valeurs",
      subtitle: "Ce qui guide l'équipe de Surfonds, au cabinet comme en élevage.",
      items: [
        {
          icon: "clock",
          title: "Disponibilité",
          description: "Être mobile, c'est aussi être ultra-disponible : un service réactif face aux urgences de terrain.",
          tone: "plum",
        },
        {
          icon: "target",
          title: "Objectivité et performance",
          description: "Les données de vos salles traduites en plans d'actions concrets. Pas de blabla.",
          tone: "rose",
        },
        {
          icon: "sync",
          title: "Adaptabilité et pragmatisme",
          description: "Des protocoles ajustés aux cahiers des charges et à vos objectifs de transmission.",
          tone: "mauve",
        },
      ],
    },
    zones: {
      title: "Nos cabinets, près de vos élevages",
      subtitle: "Nos zone d’interventions",
      items: [
        {
          id: "zone-surfonds",
          region: "De la Seine-Maritime à la Gironde",
          accent: "blue",
          departments: [
            { name: "Sarthe (72)", cities: "Le Mans 72000, Surfonds 72370, La Flèche 72200, Sablé-sur-Sarthe 72300" },
            { name: "Seine-Maritime (76)", cities: "Rouen 76000, Dieppe 76200, Le Havre 76600" },
            { name: "Cher (18) · Gironde (33)", cities: "Bourges 18000, Vierzon 18100 · Bordeaux 33000, Libourne 33500" },
          ],
          map: { lat: 47.3, lng: 0.4, zoom: 6, query: "Surfonds, Sarthe" },
        },
      ],
    },
    team: {
      title: "L'équipe Selas de Surfonds",
      subtitle: "Des vétérinaires mobiles, au plus près de vos élevages.",
      groups: [
        {
          label: "Les vétérinaires",
          tone: "white",
          members: members(4, "Vétérinaire associée — Surfonds\nSuivi d'élevage"),
        },
      ],
    },
  },
];

export const getCabinetPage = (slug: string) => cabinetPages.find((page) => page.slug === slug);

/** Entrées du menu déroulant "Cabinets" */
export const cabinetsMenu: NonNullable<NavLink["children"]> = [
  { label: "Hyovet Services", href: "/cabinets", description: "Le groupe : deux cabinets, une alliance" },
  ...cabinetPages.map((page) => ({
    label: page.name,
    href: `/cabinets/${page.slug}`,
    description: page.menuDescription,
  })),
];
