import { cabinetsMenu } from "./cabinets";
import { expertiseMenu } from "./expertises";
import type { Cabinet, NavLink } from "./types";

export const site = {
  name: "Hyovet Services",
  url: "https://www.hyovetservices.com",
  description:
    "Groupe vétérinaire expert de la filière porcine : santé, technique et données au service de la performance de vos élevages, du sevrage à l'abattage.",
  phone: { label: "02 96 00 00 00", href: "tel:+33296000000" },
  email: { label: "contact@hyovet.fr", href: "mailto:contact@hyovet.fr" },
} as const;

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Expertise", href: "/expertise", children: expertiseMenu, allLabel: "Toutes nos expertises" },
  { label: "Cabinets", href: "/cabinets", children: cabinetsMenu },
  // Pages pas encore créées : à réactiver à leur mise en ligne.
  // { label: "Publication", href: "/publications" },
  // { label: "Recrutement", href: "/recrutement" },
];

export const contactLink: NavLink = { label: "Nous contacter", href: "/contact" };

export const footerNav: NavLink[][] = [
  [
    { label: "Accueil", href: "/" },
    { label: "Les Cabinets", href: "/cabinets" },
    { label: "Expertises", href: "/expertise" },
  ],
  [
    { label: "Publications", href: "/publications" },
    { label: "Recrutement", href: "/recrutement" },
    { label: "Contact", href: "/contact" },
  ],
];

export const addresses = ["Hyovet — Plestan (22)", "Selas de Surfonds — Surfonds (72)"];

export const cabinets: Cabinet[] = [
  {
    name: "Hyovet",
    tagline: "L'ancrage breton, 15\nvétérinaires 100 % porcins",
    logo: { src: "/images/logos/hyovet.png", width: 338, height: 118 },
    href: "/cabinets/hyovet",
  },
  {
    name: "Selas de Surfonds",
    tagline: "La mobilité, partout où\nsont les éleveurs",
    logo: { src: "/images/logos/selas-de-surfonds.png", width: 572, height: 348 },
    href: "/cabinets/selas-de-surfonds",
  },
];

export const legalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export const socials = {
  linkedin: "https://www.linkedin.com/company/hyovet-services",
  youtube: "https://www.youtube.com/@hyovetservices",
};

/** Bandeau "Parlons de votre élevage" (pages expertise et cabinets) */
export const contactBanner = {
  title: "Parlons de votre élevage",
  subtitle: "Un vétérinaire du domaine vous rappelle sous 24 h ouvrées.",
  phone: { label: "01 00 00 00 00", href: "tel:+33100000000" },
  form: { label: "Formulaire de contact", href: "/contact" },
};
