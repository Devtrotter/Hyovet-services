import "server-only";
import { siteConfig } from "@/utils/config/site";
import { addresses, emails, formatAddress } from "@/utils/data/content/shared/coordonnees";
import type { LegalSectionContent } from "@/utils/types/legal";

export const droits: LegalSectionContent = {
  id: "droits",
  title: "Vos droits",
  blocks: [
    { type: "paragraph", content: ["Vous disposez des droits suivants sur vos données :"] },
    {
      type: "list",
      items: [
        ["accès, rectification et effacement ;"],
        ["limitation du traitement et opposition, notamment pour un traitement fondé sur notre intérêt légitime ;"],
        ["portabilité des données que vous nous avez fournies ;"],
        ["retrait de votre consentement à tout moment, pour ce qui repose sur votre accord ;"],
        ["définition de directives sur le sort de vos données après votre décès."],
      ],
    },
    {
      type: "paragraph",
      content: [
        "Pour les exercer, écrivez à ",
        { type: "link", label: emails.contact.label, href: emails.contact.href },
        ` ou par courrier à ${siteConfig.name}, ${formatAddress(addresses.hyovet)}. Nous vous répondons dans un délai d'un mois. Une pièce d'identité ne pourra vous être demandée qu'en cas de doute raisonnable sur votre identité.`,
      ],
    },
    {
      type: "paragraph",
      content: [
        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : ",
        { type: "link", label: "cnil.fr/fr/plaintes", href: "https://www.cnil.fr/fr/plaintes", external: true },
        " ou 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
      ],
    },
  ],
};
