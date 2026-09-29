import "server-only";
import type { CabinetTheme } from "@/utils/types/cabinet";
import type { NavLink } from "@/utils/types/common";

interface ShowcaseItem {
  theme: CabinetTheme;
  logo: { src: string; width: number; height: number; alt: string };
  title: string;
  description: string;
  cta: NavLink;
}

/** "Deux cabinets, deux personnalités" : une carte par cabinet. */
export const showcase: { title: string; subtitle: string; items: ShowcaseItem[] } = {
  title: "Deux cabinets, deux personnalités",
  subtitle: "Une même exigence scientifique, deux ancrages complémentaires.",
  items: [
    {
      theme: "hyovet",
      logo: { src: "/images/logos/hyovet.png", width: 338, height: 118, alt: "Hyovet" },
      title: "L'ancrage breton au service de la performance sanitaire",
      description:
        "15 vétérinaires dédiés exclusivement à la médecine porcine, au cœur de la première région porcine de France.",
      cta: { label: "Découvrir Hyovet", href: "/cabinets/hyovet" },
    },
    {
      theme: "surfonds",
      logo: { src: "/images/logos/selas-de-surfonds.png", width: 572, height: 348, alt: "Selas de Surfonds" },
      title: "La rigueur technique en mouvement, partout où sont nos éleveurs",
      description:
        "Des vétérinaires mobiles qui interviennent de la Seine-Maritime à la Gironde, en passant par le Cher.",
      // Libellé de la maquette ("Découvrir Hyovet") corrigé pour correspondre à la destination.
      cta: { label: "Découvrir Surfonds", href: "/cabinets/selas-de-surfonds" },
    },
  ],
};
