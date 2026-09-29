import "server-only";
import type { ExpertiseDetail } from "@/utils/types/expertise";

type Sections = Pick<ExpertiseDetail, "services" | "situations">;

export const performanceReproductionSections: Sections = {
  services: {
    title: "Ce qu'on fait",
    subtitle: "Quatre prestations, de l'échographie à l'optimisation des portées.",
    items: [
      {
        title: "Échographie ovarienne",
        description:
          "Visualisation des ovaires pour dater précisément les chaleurs et objectiver les troubles de la reproduction, exclusivité française.",
      },
      {
        title: "Suivi de reproduction",
        description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
      },
      {
        title: "Échographie ovarienne",
        description:
          "Visualisation des ovaires pour dater précisément les chaleurs et objectiver les troubles de la reproduction, exclusivité française.",
      },
      {
        title: "Suivi de reproduction",
        description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
      },
    ],
  },
  situations: {
    title: "Pour qui, quand ?",
    subtitle: "Les situations où nous appeler dans les mots du terrain.",
    items: [
      {
        title: "Mon taux de mise bas baisse depuis trois bandes",
        description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
      },
      {
        title: "Des retours en chaleur inexpliqués",
        description:
          "Datation précise des ovulations pour distinguer problème de détection, d’insémination ou d’embryon.",
      },
      {
        title: "Mes portées sont trop hétérogènes",
        description: "Analyse de la préparation des truies et plan d’action sur l’alimentation de gestation.",
      },
    ],
  },
};
