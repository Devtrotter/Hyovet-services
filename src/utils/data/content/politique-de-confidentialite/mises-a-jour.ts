import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const misesAJour: LegalSectionContent = {
  id: "mises-a-jour",
  title: "Évolution de cette politique",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Cette politique peut évoluer, par exemple lors de l'ouverture de la newsletter ou d'un espace recrutement. Consultez également nos ",
        { type: "internal", label: "mentions légales", href: "/mentions-legales" },
        ".",
      ],
    },
  ],
};
