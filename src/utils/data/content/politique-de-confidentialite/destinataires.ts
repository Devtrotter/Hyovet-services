import "server-only";
import { siteConfig } from "@/utils/config/site";
import type { LegalSectionContent } from "@/utils/types/legal";

export const destinataires: LegalSectionContent = {
  id: "destinataires",
  title: "Qui peut accéder à vos données ?",
  blocks: [
    {
      type: "list",
      items: [
        [`Les équipes habilitées de ${siteConfig.name}, de Hyovet et de la Selas de Surfonds, selon votre demande ;`],
        [
          "nos prestataires techniques, uniquement pour les besoins du service : Vercel Inc. (hébergement du site) et ",
          { type: "toComplete", text: "prestataire d'envoi des emails du formulaire, une fois choisi" },
          ".",
        ],
      ],
    },
  ],
};
