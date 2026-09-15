import { addresses, formatAddress } from "./contact-details";
import { zones as homeZones } from "./home";
import type { CabinetPage, NavLink, TeamMember, ValuesContent } from "./types";

// Pages "Les cabinets" : groupe Hyovet Services + une page par cabinet.
// Hyovet reprend la maquette ; Selas de Surfonds est personnalisée à partir de l'arborescence client.
// Zones : contenus provisoires à remplacer via le CMS.

// Trombinoscopes — portraits recadrés dans /images/team/<dossier>.
// Sans photo, la carte affiche un avatar aux couleurs du thème ; sans profil, pas de bouton LinkedIn.
const teamMember =
  (folder: string) =>
  (name: string, { photo, linkedin }: { photo?: string; linkedin?: string } = {}): TeamMember => ({
    name,
    photo: photo && `/images/team/${folder}/${photo}.jpg`,
    linkedin: linkedin && `https://www.linkedin.com/in/${linkedin}/`,
  });

const hyovetServiceMember = teamMember("hyovetservice");
const hyovetMember = teamMember("hyovet");
const surfondsMember = teamMember("surfonds");

const operationalTeam: TeamMember[] = [
  hyovetServiceMember("Guillaume Bartet", { photo: "guillaume-bartet", linkedin: "guillaume-bartet-5072a544" }),
  hyovetServiceMember("Laura Noffe", { photo: "laura-noffe", linkedin: "laura-noffe" }),
  hyovetServiceMember("Camille Ousset", { photo: "camille-ousset" }),
  hyovetServiceMember("Céline Chauvel", { photo: "celine-chauvel", linkedin: "c%C3%A9line-chauvel" }),
  hyovetServiceMember("Gwenaël Choupaux"),
  hyovetServiceMember("Karine Andrieux", { photo: "karine-andrieux", linkedin: "karine-andrieux-04757737a" }),
  hyovetServiceMember("Sophie Destouches", { photo: "sophie-destouches", linkedin: "sophie-destouches-849430306" }),
  hyovetServiceMember("Magali Ferte", { photo: "magali-ferte", linkedin: "magali-ferte-6258363b8" }),
  hyovetServiceMember("Alicia Lormel", { linkedin: "alicia-lormel-50270720b" }),
  hyovetServiceMember("Marina Rouxel", { photo: "marina-rouxel" }),
];

const technicianTeam: TeamMember[] = [
  hyovetServiceMember("Audrey Soulabaille", { linkedin: "audrey-soulabaille-b42952127" }),
  hyovetServiceMember("Pierre Cade"),
  hyovetServiceMember("Laëtitia Faes"), // profil à confirmer (mention Cooperl)
  hyovetServiceMember("Ludivine Engoulvent"),
];

// Portraits extraits des trombinoscopes vétérinaires — à remplacer par les photos originales.
const hyovetVets: TeamMember[] = [
  hyovetMember("Fanny Brun", { photo: "fanny-brun", linkedin: "fanny-brun-814521109" }),
  hyovetMember("Elisabeth Chabeauti", { photo: "elisabeth-chabeauti" }),
  hyovetMember("Isabelle Delaunay", { photo: "isabelle-delaunay" }),
  hyovetMember("Camille Demoitié", { photo: "camille-demoitie", linkedin: "camille-demoiti%C3%A9-31238718b" }),
  hyovetMember("Nathalie Deville", { photo: "nathalie-deville" }),
  hyovetMember("Matthieu Froget", { photo: "matthieu-froget" }),
  hyovetMember("Inés García Viñado", {
    photo: "ines-garcia-vinado",
    linkedin: "in%C3%A9s-garc%C3%ADa-vi%C3%B1ado-0b14b178",
  }),
  hyovetMember("Héloïse Guillou-Mouchet", {
    photo: "heloise-guillou-mouchet",
    linkedin: "h%C3%A9lo%C3%AFse-guillou-mouchet-4639731ba",
  }),
  hyovetMember("Adélaïde Maligorne", { photo: "adelaide-maligorne" }),
  hyovetMember("Michel Ouisse", { photo: "michel-ouisse" }),
  hyovetMember("Christine Puech", { photo: "christine-puech" }),
  hyovetMember("Christophe Renoult", { photo: "christophe-renoult", linkedin: "christophe-renoult-b07906222" }),
  hyovetMember("Jessica Rouillier", { photo: "jessica-rouillier" }),
  hyovetMember("Jean-Noël Sialelli", {
    photo: "jean-noel-sialelli",
    linkedin: "jean-no%C3%ABl-sialelli-a669501a2",
  }),
  hyovetMember("Karine Thirouard", { photo: "karine-thirouard" }),
  hyovetMember("Hervé Tosser", { photo: "herve-tosser" }),
];

const surfondsVets: TeamMember[] = [
  surfondsMember("Thibaut Billy", { photo: "thibaut-billy", linkedin: "thibaut-billy-a2655b15b" }),
  surfondsMember("Marius Bota", { photo: "marius-bota", linkedin: "marius-bota-a2613830b" }),
  surfondsMember("Julie Crepon-Lavergne", {
    photo: "julie-crepon-lavergne",
    linkedin: "julie-lavergne-crepon-020a10215",
  }),
  surfondsMember("Annette Fichtl", { photo: "annette-fichtl" }),
  surfondsMember("Christian Spindler", { photo: "christian-spindler" }),
];

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
      { label: "Opérationnel", jobTitle: "Opérationnel", tone: "blue" as const, members: operationalTeam },
      { label: "Les techniciens", jobTitle: "Technicien", tone: "green" as const, members: technicianTeam },
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
      address: addresses.hyovet,
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
          map: { lat: 48.25, lng: -3.2, zoom: 8, query: formatAddress(addresses.hyovet) },
        },
      ],
    },
    team: {
      title: "L'équipe Hyovet Services",
      subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
      groups: [{ label: "Les vétérinaires", jobTitle: "Vétérinaire", tone: "white", members: hyovetVets }],
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
      location: "La Chapelle-Saint-Aubin, Sarthe (72)",
      address: addresses.surfonds,
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
          map: { lat: 47.3, lng: 0.4, zoom: 6, query: formatAddress(addresses.surfonds) },
        },
      ],
    },
    team: {
      title: "L'équipe Selas de Surfonds",
      subtitle: "Des vétérinaires mobiles, au plus près de vos élevages.",
      groups: [
        {
          label: "Les vétérinaires",
          jobTitle: "Vétérinaire",
          tone: "white",
          members: surfondsVets,
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
