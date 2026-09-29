import "server-only";
import type { Step } from "@/utils/types/expertise";

// Les trois étapes de la méthode de travail ; le `tone` colore le numéro de chaque carte.
export const method = {
  title: "Comment on travaille",
  subtitle: "De l'innovation de terrain, pas des solutions théoriques depuis un bureau.",
  steps: [
    {
      title: "Diagnostic sur le terrain",
      description: "On vient voir : visite, prélèvements, mesures d'ambiance, lecture des données de l'élevage.",
      tone: "blue",
    },
    {
      title: "Plan d'action concret",
      description:
        "Des mesures applicables dès la semaine suivante, hiérarchisées avec vous selon leur coût et leur impact.",
      tone: "green",
    },
    {
      title: "Suivi des indicateurs",
      description: "GTTT, GTE, sérologies : on mesure les résultats et on ajuste, bande après bande.",
      tone: "gold",
    },
  ] satisfies Step[],
};

// Bandeau fermant la section méthode : renvoi vers les publications qui l'étayent.
export const publicationsCta = {
  title: "Nos méthodes s'appuient sur nos travaux publiés",
  cta: { label: "Voir les publications", href: "/publications" },
};
