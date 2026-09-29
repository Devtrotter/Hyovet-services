import "server-only";
import { siteConfig } from "@/utils/config/site";
import type { LegalSectionContent } from "@/utils/types/legal";

export const responsabilite: LegalSectionContent = {
  id: "responsabilite",
  title: "Responsabilité et liens externes",
  blocks: [
    {
      type: "paragraph",
      content: [
        `Les informations publiées sur ce site sont données à titre indicatif et ne remplacent pas l'avis d'un vétérinaire sur votre élevage. ${siteConfig.name} ne peut être tenue responsable des contenus des sites externes vers lesquels renvoient des liens (réseaux sociaux, Google Maps, Ordre des vétérinaires…).`,
      ],
    },
  ],
};
