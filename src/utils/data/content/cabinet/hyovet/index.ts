import "server-only";
import { groupValues } from "@/utils/data/content/cabinets/values";
import type { CabinetPage } from "@/utils/types/cabinet";
import { about } from "./about";
import { team } from "./team";
import { zones } from "./zones";

// Page cabinet Hyovet — reprend la maquette ; valeurs partagées avec le groupe.
export const hyovet: CabinetPage = {
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
  about,
  values: groupValues,
  zones,
  team,
};
