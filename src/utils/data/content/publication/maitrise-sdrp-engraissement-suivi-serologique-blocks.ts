import "server-only";
import type { ArticleBlock } from "@/utils/types/publication";

export const sdrpEngraissementBlocks: ArticleBlock[] = [
  {
    type: "lead",
    label: "Résumé.",
    text: "Le syndrome dysgénésique et respiratoire porcin (SDRP) reste l'une des premières causes de pertes économiques en engraissement. Nous présentons les résultats de trois ans de suivi sérologique mené dans 18 élevages naisseurs-engraisseurs des Côtes-d'Armor.",
  },
  { type: "heading", text: "Matériel et méthode" },
  {
    type: "text",
    text: "Un protocole de prélèvements trimestriels a été mis en place : buvards salivaires par case en entrée et sortie d'engraissement, complétés par des sérologies ELISA sur 15 sujets par bande.",
  },
  {
    type: "list",
    items: [
      "18 élevages suivis, statuts initiaux stables et instables",
      "4 200 prélèvements analysés sur la période 2023-2025",
      "Indicateurs croisés : séroconversion, IC, GMQ, taux de pertes",
    ],
  },
  { type: "figure", caption: "Figure 1 — Cinétique des séroconversions observées par trimestre." },
  { type: "heading", text: "Résultats" },
  {
    type: "text",
    text: "Les élevages ayant stabilisé leur statut ont gagné en moyenne 0,12 point d'indice de consommation et réduit leurs pertes en engraissement de 1,8 point. La détection précoce par buvards salivaires a permis d'anticiper deux recirculations virales avant expression clinique.",
  },
  { type: "heading", text: "Conclusion" },
  {
    type: "text",
    text: "Un monitoring sérologique régulier, couplé à une lecture rigoureuse des indicateurs technico-économiques, constitue un outil de pilotage efficace du SDRP en engraissement. La méthode est transposable à tout élevage naisseur-engraisseur.",
  },
];
