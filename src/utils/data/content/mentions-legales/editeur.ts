import "server-only";
import { siteConfig } from "@/utils/config/site";
import { addresses, emails, formatAddress, phone } from "@/utils/data/content/shared/coordonnees";
import { companies } from "@/utils/data/content/shared/entreprises";
import type { LegalSectionContent } from "@/utils/types/legal";

const { hyovetServices } = companies;

export const editeur: LegalSectionContent = {
  id: "editeur",
  title: "Éditeur du site",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Le site ",
        { type: "strong", text: siteConfig.url.replace("https://", "") },
        " est édité par ",
        { type: "strong", text: hyovetServices.name },
        `, ${hyovetServices.legalForm.toLowerCase()} au capital de ${hyovetServices.capital}, immatriculée sous le numéro ${hyovetServices.siren} ${hyovetServices.rcs}. Elle réunit les moyens des cabinets Hyovet et Selas de Surfonds, ses associés.`,
      ],
    },
    {
      type: "list",
      items: [
        [`Siège social : ${formatAddress(addresses.hyovet)}`],
        [`Numéro de TVA intracommunautaire : ${hyovetServices.vat}`],
        ["Email : ", { type: "link", label: emails.contact.label, href: emails.contact.href }],
        ["Téléphone : ", { type: "link", label: phone.label, href: phone.href }],
        [`Directeur de la publication : ${hyovetServices.representative}`],
      ],
    },
  ],
};
