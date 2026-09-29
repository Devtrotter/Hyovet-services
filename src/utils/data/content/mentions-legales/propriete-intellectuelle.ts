import "server-only";
import { siteConfig } from "@/utils/config/site";
import type { LegalSectionContent } from "@/utils/types/legal";

export const proprieteIntellectuelle: LegalSectionContent = {
  id: "propriete-intellectuelle",
  title: "Propriété intellectuelle",
  blocks: [
    {
      type: "paragraph",
      content: [
        `L'ensemble des contenus de ce site (textes, logos, photographies, vidéos, mise en page) est protégé par le droit d'auteur et le droit des marques. Toute reproduction ou réutilisation, totale ou partielle, sans l'autorisation écrite de ${siteConfig.name} est interdite.`,
      ],
    },
    {
      type: "paragraph",
      content: [
        "Les portraits des membres de l'équipe sont publiés avec leur autorisation. Crédits photos et vidéos : ",
        { type: "toComplete", text: "photographes, banques d'images et licences" },
        ".",
      ],
    },
  ],
};
