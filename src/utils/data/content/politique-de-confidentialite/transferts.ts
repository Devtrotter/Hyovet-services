import "server-only";
import type { LegalSectionContent } from "@/utils/types/legal";

export const transferts: LegalSectionContent = {
  id: "transferts",
  title: "Transferts hors de l'Union européenne",
  blocks: [
    {
      type: "paragraph",
      content: [
        "Notre hébergeur Vercel Inc. et Google (cartes, uniquement après votre accord) sont établis aux États-Unis. Ces transferts sont encadrés par la décision d'adéquation « Data Privacy Framework » de la Commission européenne, à laquelle ces sociétés ont adhéré, et par des clauses contractuelles types.",
      ],
    },
  ],
};
