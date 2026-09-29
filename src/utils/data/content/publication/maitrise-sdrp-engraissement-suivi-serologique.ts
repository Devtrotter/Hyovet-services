import "server-only";
import { sdrpEngraissementBlocks } from "./maitrise-sdrp-engraissement-suivi-serologique-blocks";
import type { PublicationDetail } from "@/utils/types/publication";

export const sdrpEngraissement: PublicationDetail = {
  slug: "maitrise-sdrp-engraissement-suivi-serologique",
  category: "Publications",
  source: "JRD 2026",
  place: "Saint-Malo",
  date: "2026-02-04",
  title: "Maîtrise du SDRP en engraissement, retour sur trois ans de suivi sérologique",
  summary:
    "Le syndrome dysgénésique et respiratoire porcin (SDRP) reste l'une des premières causes de pertes économiques en engraissement. Nous présentons les résultats de trois ans de suivi sérologique mené dans 18 élevages naisseurs-engraisseurs des Côtes-d'Armor.",
  tags: ["Santé animale", "SDRP", "Suivi sérologique"],
  // PDF à déposer dans public/documents/ ; sans l'entrée `document`, l'encart n'est pas affiché.
  document: {
    label: "Télécharger le PDF",
    href: "/documents/jrp-2026-sdrp-engraissement.pdf",
    meta: "Poster JRP 2026 · 1,2 Mo",
  },
  authors: [
    { name: "Dr Marc Le Bihan", role: "Vétérinaire — Hyovet" },
    { name: "Dr Anne Le Goff", role: "Vétérinaire associée — Hyovet" },
  ],
  blocks: sdrpEngraissementBlocks,
};
