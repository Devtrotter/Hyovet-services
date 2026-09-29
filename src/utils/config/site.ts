import { cabinetsMenu } from "@/utils/data/content/shared/cabinets";
import { emails, phone } from "@/utils/data/content/shared/coordonnees";
import { expertiseMenu } from "@/utils/data/content/expertise-detail/menu";
import type { NavLink } from "@/utils/types/common";

// Identité et navigation du site : structure, pas contenu éditorial.

export const siteConfig = {
  name: "Hyovet Services",
  url: "https://www.hyovetservices.com",
  description:
    "Groupe vétérinaire expert de la filière porcine : santé, technique et données au service de la performance de vos élevages, du sevrage à l'abattage.",
  locale: "fr_FR",
  phone,
  email: emails.contact,
  recruitmentEmail: emails.recruitment,
} as const;

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Expertise", href: "/expertise", children: expertiseMenu, allLabel: "Toutes nos expertises" },
  { label: "Cabinets", href: "/cabinets", children: cabinetsMenu },
  { label: "Publication", href: "/publications" },
  { label: "Recrutement", href: "/recrutement" },
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

export const legalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export const socials = [
  { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/hyovet-services" },
  { network: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCFEtf1sZxiD2wDW6DfUynvg" },
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/hyovetservices/" },
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592987887140" },
] as const;
