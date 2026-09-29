import "server-only";

// Libellés des filtres, de la pagination et nombre d'articles par page.
export const publicationsList = {
  /** "12 publications" — le compte suit la liste, il n'est jamais saisi à la main. */
  countLabel: (count: number) => `${count} ${count > 1 ? "publications" : "publication"}`,
  allLabel: "Tout",
  categoryFilterLabel: "Filtrer par thématique",
  tagLabel: "Sélectionner un tag",
  tagPlaceholder: "Sélectionner des tags",
  empty: "Aucune publication ne correspond à cette recherche.",
  previousLabel: "Page précédente",
  nextLabel: "Page suivante",
  /** Nombre d'articles par page (2 rangées de 3 sur grand écran) */
  perPage: 6,
};
