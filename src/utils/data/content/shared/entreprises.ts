import "server-only";

// Identité légale des sociétés (registres INSEE / RNE / BODACC).

export const companies = {
  hyovetServices: {
    name: "Hyovet Services",
    legalForm: "Société civile de moyens",
    capital: "1 000 €",
    siren: "921 819 322",
    rcs: "RCS Saint-Malo",
    vat: "FR06921819322",
    representative: "Jean-Noël Sialelli, gérant",
  },
  hyovet: {
    name: "Hyovet",
    legalForm: "Société d'exercice libéral par actions simplifiée (SELAS) de vétérinaires",
    capital: "50 000 €",
    siren: "493 718 720",
    rcs: "RCS Saint-Malo",
    vat: "FR25493718720",
    representative: "Jean-Noël Sialelli, président",
  },
  surfonds: {
    name: "Selas de Surfonds",
    legalForm: "Société d'exercice libéral par actions simplifiée (SELAS) de vétérinaires",
    capital: "10 000 €",
    siren: "921 133 849",
    rcs: "RCS Le Mans",
    vat: "FR84921133849",
    representative: "Christian Spindler, président",
  },
};
