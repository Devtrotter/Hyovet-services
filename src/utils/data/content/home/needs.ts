import "server-only";
import needVeterinaire from "@public/images/home/need-veterinaire.jpg";
import needPublications from "@public/images/home/need-publications.jpg";
import needRecrutement from "@public/images/home/need-recrutement.jpg";
import type { NeedCard } from "@/utils/types/sections";

// Trois entrées de parcours ("De quoi avez-vous besoin ?") vers les pages clés du site.
export const needs = {
  title: "De quoi avez-vous besoin ?",
  subtitle: "Accédez directement à ce que vous cherchez.",
  items: [
    {
      title: "Joindre un vétérinaire",
      description:
        "Un problème dans l'élevage, une question, une urgence, réponse rapide, astreinte 7j/7.",
      cta: { label: "Contacter un cabinet", href: "/contact" },
      image: {
        src: needVeterinaire,
        alt: "Vétérinaire examinant un porc en extérieur",
      },
    },
    {
      title: "Trouver une réponse",
      description:
        "Publications, cas cliniques et actualités, nos travaux en accès libre, filtrables par thématique.",
      cta: { label: "Explorer les publications", href: "/publications" },
      image: {
        src: needPublications,
        alt: "Vétérinaire présentant des données scientifiques",
      },
    },
    {
      title: "Travailler avec nous",
      description:
        "Stages, postes, partenariats et essais terrain, rejoignez le groupe ou collaborez avec lui.",
      cta: { label: "Voir les opportunités", href: "/recrutement" },
      image: {
        src: needRecrutement,
        alt: "Équipe échangeant autour d'une table",
      },
    },
  ] satisfies NeedCard[],
};
