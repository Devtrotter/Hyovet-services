import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const donneesPersonnelles: LegalSectionContent = {
  id: "donnees-personnelles",
  title: "Données personnelles et cookies",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Le traitement de vos données personnelles et l'usage des cookies sont décrits dans notre ",
        { type: "internal", label: "politique de confidentialité", href: "/politique-de-confidentialite" },
        ".",
      ],
    },
  ],
};
