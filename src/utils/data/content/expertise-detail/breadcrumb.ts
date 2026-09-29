import "server-only";
import { expertiseHref } from "./href";
import type { NavLink } from "@/utils/types/common";
import type { ExpertiseDetail } from "@/utils/types/expertise";

/** Fil d'Ariane d'une page de détail, repris par le hero et par le JSON-LD. */
export const expertiseBreadcrumb = ({ slug, name }: ExpertiseDetail): NavLink[] => [
  { label: "Accueil", href: "/" },
  { label: "Nos Expertises", href: "/expertise" },
  { label: name, href: expertiseHref(slug) },
];
