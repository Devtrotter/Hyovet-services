import "server-only";
import type { ExpertiseDetail } from "@/utils/types/expertise";

type Sections = Pick<ExpertiseDetail, "services" | "situations">;

export const suiviSanitaireSections: Sections = {
  services: {
    title: "Ce qu'on fait",
    subtitle: "Quatre prestations pour sécuriser durablement le statut sanitaire.",
    items: [
      {
        title: "Audit de biosécurité",
        description: "Visite complète du site, circuits, quais et sas : un plan d'action hiérarchisé et chiffré.",
      },
      {
        title: "Plans de vaccination",
        description: "Protocoles adaptés au statut de l'élevage (PCV2, SDRP, iléite…) et suivi de leur efficacité.",
      },
      {
        title: "Suivi sérologique",
        description: "Prélèvements et profils sérologiques pour objectiver la circulation des pathogènes.",
      },
      {
        title: "Démédication raisonnée",
        description: "Réduction des traitements antibiotiques sans perte de performances, étape par étape.",
      },
    ],
  },
  situations: {
    title: "Pour qui, quand ?",
    subtitle: "Les situations où nous appeler dans les mots du terrain.",
    items: [
      {
        title: "Les toux reviennent à chaque bande",
        description: "Profils sérologiques et nécropsies pour identifier l'agent en cause et adapter la vaccination.",
      },
      {
        title: "Je prépare un contrôle DDPP",
        description: "Audit de biosécurité et mise à jour du registre et des protocoles avant la visite.",
      },
      {
        title: "Je veux réduire les antibiotiques",
        description: "Plan de démédication progressif appuyé sur les indicateurs sanitaires de l'élevage.",
      },
    ],
  },
};
