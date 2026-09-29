import "server-only";
import type { ExpertiseDetail } from "@/utils/types/expertise";

type Sections = Pick<ExpertiseDetail, "services" | "situations">;

export const solutionsDigitalesSections: Sections = {
  services: {
    title: "Ce qu'on fait",
    subtitle: "Quatre prestations pour transformer vos données en décisions.",
    items: [
      {
        title: "Analyse GTTT / GTE",
        description: "Lecture de vos résultats techniques et économiques et comparaison aux références.",
      },
      {
        title: "Tableaux de bord",
        description: "Indicateurs clés suivis bande après bande sur les meilleurs outils du marché.",
      },
      {
        title: "Indices de consommation",
        description: "Identification des pertes d'efficacité alimentaire et leviers d'amélioration.",
      },
      {
        title: "Conseil stratégique",
        description: "Traduction des indicateurs en décisions pour piloter et transmettre l'exploitation.",
      },
    ],
  },
  situations: {
    title: "Pour qui, quand ?",
    subtitle: "Les situations où nous appeler dans les mots du terrain.",
    items: [
      {
        title: "J'ai des données mais je ne sais pas quoi en faire",
        description: "Mise en forme et lecture commentée de vos indicateurs avec votre vétérinaire.",
      },
      {
        title: "Mon indice de consommation se dégrade",
        description: "Analyse croisée alimentation, sanitaire et bâtiment pour trouver la cause.",
      },
      {
        title: "Je prépare la transmission de l'élevage",
        description: "Bilan technico-économique et plan de progrès pour valoriser l'exploitation.",
      },
    ],
  },
};
