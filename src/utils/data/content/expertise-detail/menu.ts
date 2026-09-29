import "server-only";
import { expertiseDetails } from "./index";
import { expertiseHref } from "./href";
import type { NavLink } from "@/utils/types/common";

/** Entrées du menu déroulant "Expertise" */
export const expertiseMenu: NonNullable<NavLink["children"]> = expertiseDetails.map((item) => ({
  label: item.name,
  href: expertiseHref(item.slug),
  description: item.menuDescription,
}));
