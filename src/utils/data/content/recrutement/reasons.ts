import "server-only";
import type { ReasonsContent } from "@/utils/types/recrutement";

// Section "Pourquoi nous rejoindre" : quatre cartes à pictogramme.

export const reasons: ReasonsContent = {
  title: "Pourquoi nous rejoindre",
  subtitle: "Quatre bonnes raisons de venir voir par vous-même.",
  items: [
    {
      icon: "team",
      title: "Jamais seul face à un cas",
      description:
        "Binômes vétérinaires, réunions de cas hebdomadaires et 20 confrères joignables : le collectif fait partie du contrat.",
      tone: "blue",
    },
    {
      icon: "data",
      title: "La data comme outil de terrain",
      description:
        "GTTT, GTE, monitoring sérologique : ici les décisions se prennent avec des chiffres, et vous apprenez à les faire parler.",
      tone: "green",
    },
    {
      icon: "scope",
      title: "Des pratiques plus larges qu'on ne croit",
      description:
        "Du suivi sanitaire aux médecines complémentaires, de la reproduction à l'audit bâtiment : on ne fait pas deux journées pareilles.",
      tone: "gold",
    },
    {
      icon: "territory",
      title: "Un vrai équilibre, un vrai territoire",
      description:
        "Astreintes partagées, secteurs raisonnables, et deux régions où l'on vit bien, la Bretagne et la Sarthe.",
      tone: "blue",
    },
  ],
};
