import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const cookies: LegalSectionContent = {
  id: "cookies",
  title: "Cookies et traceurs",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Ce site n'utilise ",
        { type: "strong", text: "aucun cookie de mesure d'audience ni publicitaire" },
        ". Seuls les éléments suivants peuvent être enregistrés dans votre navigateur :",
      ],
    },
    {
      type: "list",
      items: [
        [
          { type: "strong", text: "Votre choix concernant les cartes" },
          " (stockage local, 13 mois) : nécessaire pour ne pas vous redemander votre accord à chaque page.",
        ],
        [
          { type: "strong", text: "Cookies Google Maps" },
          " : déposés par Google uniquement si vous choisissez d'afficher une carte. Voir la ",
          {
            type: "link",
            label: "politique de confidentialité de Google",
            href: "https://policies.google.com/privacy?hl=fr",
            external: true,
          },
          ".",
        ],
      ],
    },
    { type: "paragraph", content: ["Vous pouvez modifier votre choix à tout moment :"] },
    { type: "mapsConsent" },
    {
      type: "paragraph",
      content: [
        "Les liens vers nos réseaux sociaux (LinkedIn, YouTube, Instagram, Facebook) sont de simples liens : aucun contenu de ces réseaux n'est chargé sur le site tant que vous ne cliquez pas.",
      ],
    },
  ],
};
