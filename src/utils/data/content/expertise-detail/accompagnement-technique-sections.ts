import "server-only";
import type { ExpertiseDetail } from "@/utils/types/expertise";

type Sections = Pick<ExpertiseDetail, "services" | "situations">;

export const accompagnementTechniqueSections: Sections = {
  services: {
    title: "Ce qu'on fait",
    subtitle: "Quatre prestations, du bâtiment au bien-être des animaux.",
    items: [
      {
        title: "Diagnostic ventilation",
        description: "Mesures d'ambiance, débits et températures pour corriger les défauts de ventilation.",
      },
      {
        title: "Qualité de l'eau",
        description: "Analyses, débits aux abreuvoirs et traitement de l'eau adaptés à chaque stade.",
      },
      {
        title: "Réussite du sevrage",
        description: "Gestion des diarrhées en post-sevrage : ambiance, alimentation et conduite.",
      },
      {
        title: "Bien-être animal",
        description: "Confort, enrichissement et conformité aux cahiers des charges (bio, Label Rouge…).",
      },
    ],
  },
  situations: {
    title: "Pour qui, quand ?",
    subtitle: "Les situations où nous appeler dans les mots du terrain.",
    items: [
      {
        title: "Mes porcelets décrochent après le sevrage",
        description: "Bilan ambiance, eau et alimentation en post-sevrage avec un plan d'action concret.",
      },
      {
        title: "Il fait trop chaud ou trop humide en salle",
        description: "Diagnostic de la ventilation et réglages des régulateurs, salle par salle.",
      },
      {
        title: "Je passe en production sous label",
        description: "Accompagnement des adaptations techniques exigées par le cahier des charges.",
      },
    ],
  },
};
