import "server-only";
import { cabinetPages } from "@/utils/data/content/cabinet";
import type { Cabinet, NavLink } from "@/utils/types/common";

/** Entrées du menu déroulant "Cabinets" */
export const cabinetsMenu: NonNullable<NavLink["children"]> = [
  { label: "Hyovet Services", href: "/cabinets", description: "Le groupe : deux cabinets, une alliance" },
  ...cabinetPages.map((page) => ({
    label: page.name,
    href: `/cabinets/${page.slug}`,
    description: page.menuDescription,
  })),
];

/** Cartes cabinets du pied de page */
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
