import "server-only";
import type { CabinetTheme } from "@/utils/types/cabinet";
import type { NavLink } from "@/utils/types/common";

/** Dernier niveau du fil d'Ariane de la page groupe */
export const breadcrumbLabel = "Hyovet Service";

/** Hero du groupe : fond bicolore et deux accès cabinets. */
export const hero: {
  titleLines: string[];
  subtitle: string;
  actions: Array<NavLink & { theme: CabinetTheme }>;
} = {
  titleLines: ["L'expertise vétérinaire", "porcine au cœur du", "Grand Ouest"],
  subtitle:
    "Deux cabinets indépendants, une alliance au service des éleveurs : Hyovet en Bretagne, la Selas de Surfonds dans la Sarthe et partout où sont les élevages.",
  actions: [
    { label: "Découvrir Hyovet", href: "/cabinets/hyovet", theme: "hyovet" },
    { label: "Découvrir Surfonds", href: "/cabinets/selas-de-surfonds", theme: "surfonds" },
  ],
};
