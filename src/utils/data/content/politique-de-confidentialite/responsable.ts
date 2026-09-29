import "server-only";
import { addresses, emails, formatAddress } from "@/utils/data/content/shared/coordonnees";
import { companies } from "@/utils/data/content/shared/entreprises";
import type { LegalSectionContent } from "@/utils/types/legal";

const { hyovetServices } = companies;

export const responsable: LegalSectionContent = {
  id: "responsable",
  title: "Qui est responsable de vos données ?",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Le responsable du traitement est ",
        { type: "strong", text: hyovetServices.name },
        `, ${hyovetServices.legalForm.toLowerCase()} (${hyovetServices.siren} ${hyovetServices.rcs}), ${formatAddress(addresses.hyovet)}, représentée par ${hyovetServices.representative}.`,
      ],
    },
    {
      type: "paragraph",
      content: [
        "Pour toute question sur vos données : ",
        { type: "link", label: emails.contact.label, href: emails.contact.href },
        ". Délégué à la protection des données : ",
        { type: "toComplete", text: "nom et contact du DPO, ou « aucun DPO désigné »" },
        ".",
      ],
    },
  ],
};
