import "server-only";
import { emails } from "@/utils/data/content/shared/coordonnees";
import type { LegalSectionContent } from "@/utils/types/legal";

// Durées de conservation alignées sur les référentiels CNIL, à valider par le client.
export const donnees: LegalSectionContent = {
  id: "donnees",
  title: "Quelles données et pour quoi faire ?",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Nous ne collectons que les données nécessaires. Aucune donnée n'est vendue ni utilisée à des fins publicitaires.",
      ],
    },
    {
      type: "table",
      columns: ["Situation", "Données", "Finalité", "Base légale", "Durée de conservation"],
      rows: [
        [
          "Formulaire de contact, email ou appel",
          "Nom, email, téléphone (facultatif), profil, motif, message",
          "Répondre à votre demande et vous orienter vers le bon cabinet",
          "Intérêt légitime à répondre aux sollicitations ; mesures précontractuelles pour une demande de suivi",
          "3 ans à compter de notre dernier échange",
        ],
        [
          `Candidature (formulaire ou ${emails.recruitment.label})`,
          "Coordonnées, CV, lettre de motivation, échanges",
          "Étudier votre candidature et vous recontacter",
          "Mesures précontractuelles",
          "2 ans après le dernier contact si la candidature n'est pas retenue, sauf opposition de votre part",
        ],
        [
          "Navigation sur le site",
          "Adresse IP, date et heure, pages consultées, navigateur (journaux techniques)",
          "Faire fonctionner et sécuriser le site",
          "Intérêt légitime",
          "Durée limitée fixée par l'hébergeur, à des fins de sécurité uniquement",
        ],
        [
          "Affichage d'une carte Google Maps",
          "Adresse IP et cookies Google",
          "Afficher la localisation des cabinets et des zones d'intervention",
          "Votre consentement, donné en cliquant sur « Afficher la carte »",
          "Votre choix est mémorisé 13 mois ; cookies selon la politique de Google",
        ],
      ],
    },
  ],
};
