import "server-only";

export const notFoundContent = {
  title: "Cette page n'existe pas",
  text: "Le lien est peut-être ancien, ou l'adresse comporte une erreur. Voici par où reprendre.",
  links: [
    { label: "Retour à l'accueil", href: "/" },
    { label: "Nous contacter", href: "/contact" },
  ],
};
