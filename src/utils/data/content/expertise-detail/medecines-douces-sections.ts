import "server-only";
import type { ExpertiseDetail } from "@/utils/types/expertise";

type Sections = Pick<ExpertiseDetail, "services" | "situations">;

export const medecinesDoucesSections: Sections = {
  services: {
    title: "Ce qu'on fait",
    subtitle: "Quatre approches complémentaires des traitements conventionnels.",
    items: [
      {
        title: "Acupuncture",
        description: "Séances ciblées sur les troubles de la reproduction et le bien-être des reproducteurs.",
      },
      {
        title: "Phytothérapie",
        description: "Plantes et extraits pour soutenir la digestion et l'immunité, notamment en élevage bio.",
      },
      {
        title: "Homéopathie",
        description: "Protocoles d'appui autour de la mise bas et du sevrage, en complément du suivi vétérinaire.",
      },
      {
        title: "Plan de réduction des intrants",
        description: "Intégration des médecines douces dans une stratégie globale de démédication.",
      },
    ],
  },
  situations: {
    title: "Pour qui, quand ?",
    subtitle: "Les situations où nous appeler dans les mots du terrain.",
    items: [
      {
        title: "Je suis en élevage biologique",
        description: "Des alternatives validées pour limiter les traitements allopathiques autorisés.",
      },
      {
        title: "Je veux soutenir mes truies autour de la mise bas",
        description: "Protocoles de phytothérapie et d'acupuncture adaptés au péri-partum.",
      },
      {
        title: "Je cherche à réduire les antibiotiques",
        description: "Des solutions complémentaires intégrées à votre plan sanitaire.",
      },
    ],
  },
};
