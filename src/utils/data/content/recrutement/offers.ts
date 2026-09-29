import "server-only";
import { emails } from "@/utils/data/content/shared/coordonnees";
import type { JobOffersContent, SpontaneousContent } from "@/utils/types/recrutement";

// Section "Offres en cours" : offres, libellés des filtres et bandeau candidature spontanée.

const description =
  "Suivi d'élevages naisseurs-engraisseurs, montée en compétence encadrée, participation aux travaux JRP.";

export const offers: JobOffersContent = {
  title: "Offres en cours",
  filters: {
    cabinetsLabel: "Tous les cabinets",
    contractsLabel: "Tous contrats",
    empty: "Aucune offre ne correspond à ces filtres pour le moment. Écrivez-nous, on lit toutes les candidatures.",
  },
  applyLabel: "Postuler",
  // Offres provisoires de la maquette.
  items: [
    {
      id: "veterinaire-porcin-junior-plestan",
      cabinet: { theme: "hyovet", label: "Hyovet" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "Plestan (22)",
      description,
    },
    {
      id: "veterinaire-porcin-confirme-plestan",
      cabinet: { theme: "hyovet", label: "Hyovet" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "Plestan (22)",
      description,
    },
    {
      id: "veterinaire-porcin-junior-surfonds",
      cabinet: { theme: "surfonds", label: "Selas de Surfonds" },
      contract: "CDI",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "La Chapelle-Saint-Aubin (72)",
      description,
    },
    {
      id: "stage-veterinaire-surfonds",
      cabinet: { theme: "surfonds", label: "Selas de Surfonds" },
      contract: "Stage",
      title: "Vétérinaire porcin junior — binôme 6 mois",
      location: "La Chapelle-Saint-Aubin (72)",
      description,
    },
  ],
};

export const spontaneous: SpontaneousContent = {
  title: "Pas d'offre qui vous correspond ?",
  subtitle: "Stage, thèse, premier poste, écrivez-nous, on lit tout.",
  cta: { label: "Candidature spontanée", href: emails.recruitment.href },
};
