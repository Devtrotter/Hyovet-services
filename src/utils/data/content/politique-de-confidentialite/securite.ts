import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const securite: LegalSectionContent = {
  id: "securite",
  title: "Sécurité",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Le site est accessible uniquement en connexion chiffrée (HTTPS). Les données transmises par le formulaire ne sont accessibles qu'aux personnes habilitées à traiter votre demande.",
      ],
    },
  ],
};
