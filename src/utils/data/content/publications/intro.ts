import "server-only";

// Hero de la page "Publications et actualités" : accroche et champ de recherche.
export const publicationsIntro = {
  title: { highlight: "Publications", rest: " et actualités" },
  subtitle:
    "Travaux publiés en congrès, cas cliniques vus en élevage et actualités sanitaires : toute la production du groupe, au même endroit.",
  search: {
    label: "Rechercher une publication",
    placeholder: "Rechercher : SDRP, iléite, biosécurité…",
    submitLabel: "Rechercher",
  },
};
