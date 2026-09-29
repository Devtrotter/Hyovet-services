import "server-only";
import type { ValuesContent } from "@/utils/types/cabinet";

/** Valeurs du groupe — reprises telles quelles par la page cabinet Hyovet. */
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
