import "server-only";
import { emails } from "@/utils/data/content/shared/coordonnees";
import type { LegalSectionContent } from "@/utils/types/legal";

export const equipe: LegalSectionContent = {
  id: "equipe",
  title: "Photos et noms des membres de l'équipe",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Les noms, portraits et liens LinkedIn des membres de l'équipe sont publiés avec leur autorisation. Chacun peut en demander le retrait à tout moment auprès de ",
        { type: "link", label: emails.contact.label, href: emails.contact.href },
        ".",
      ],
    },
  ],
};
