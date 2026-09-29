import "server-only";
import type { ValuesContent } from "@/utils/types/cabinet";

/** Valeurs propres à Surfonds (thème mauve/rose). */
export const values: ValuesContent = {
  title: "Nos valeurs",
  subtitle: "Ce qui guide l'équipe de Surfonds, au cabinet comme en élevage.",
  items: [
    {
      icon: "clock",
      title: "Disponibilité",
      description: "Être mobile, c'est aussi être ultra-disponible : un service réactif face aux urgences de terrain.",
      tone: "plum",
    },
    {
      icon: "target",
      title: "Objectivité et performance",
      description: "Les données de vos salles traduites en plans d'actions concrets. Pas de blabla.",
      tone: "rose",
    },
    {
      icon: "sync",
      title: "Adaptabilité et pragmatisme",
      description: "Des protocoles ajustés aux cahiers des charges et à vos objectifs de transmission.",
      tone: "mauve",
    },
  ],
};
