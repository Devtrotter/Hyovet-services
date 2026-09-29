import "server-only";
import { addresses, formatAddress } from "@/utils/data/content/shared/coordonnees";
import { companies } from "@/utils/data/content/shared/entreprises";
import type { LegalInline, LegalSectionContent } from "@/utils/types/legal";
import type { PostalAddress } from "@/utils/types/common";

type Company = (typeof companies)[keyof typeof companies];

/** Identité légale d'un cabinet + son inscription à l'Ordre régional. */
const cabinet = (company: Company, address: PostalAddress, council: string): LegalInline[] => [
  { type: "strong", text: company.name },
  ` — ${company.legalForm} au capital de ${company.capital}, ${company.siren} ${company.rcs}, TVA ${company.vat} — ${formatAddress(address)}. Représentée par ${company.representative}. Inscrite au tableau de l'Ordre des vétérinaires, Conseil régional de l'Ordre ${council}, sous le n° `,
  { type: "toComplete", text: "numéro d'inscription à l'Ordre" },
  ".",
];

export const cabinets: LegalSectionContent = {
  id: "cabinets",
  title: "Cabinets vétérinaires",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Les soins et prestations vétérinaires présentés sur ce site sont assurés par deux sociétés d'exercice vétérinaire indépendantes :",
      ],
    },
    {
      type: "list",
      items: [
        cabinet(companies.hyovet, addresses.hyovet, "de Bretagne"),
        cabinet(companies.surfonds, addresses.surfonds, "des Pays de la Loire"),
      ],
    },
    {
      type: "paragraph",
      content: [
        "Les vétérinaires exercent dans le respect du code de déontologie vétérinaire (articles R. 242-32 et suivants du code rural et de la pêche maritime), consultable sur ",
        { type: "link", label: "le site de l'Ordre national des vétérinaires", href: "https://www.veterinaire.fr", external: true },
        ". Titre professionnel : vétérinaire, délivré en ",
        { type: "toComplete", text: "État de délivrance du diplôme (ex. France)" },
        ".",
      ],
    },
    {
      type: "paragraph",
      content: [
        "Assurance responsabilité civile professionnelle : ",
        { type: "toComplete", text: "assureur et zone de couverture" },
        ".",
      ],
    },
  ],
};
