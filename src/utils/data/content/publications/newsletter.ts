import "server-only";

// Encart d'inscription à la newsletter sanitaire (pages publications).
export const newsletter = {
  title: "L'essentiel sanitaire du mois, en 5 minutes de lecture",
  subtitle:
    "Alertes en cours, saisonnalité des pathologies et un conseil d'élevage concret : ce que nos vétérinaires auraient dit en salle d'attente, dans votre boîte mail.",
  placeholder: "votre@email.fr",
  submitLabel: "S'inscrire",
  consent: {
    before: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la ",
    link: { label: "politique de confidentialité", href: "/politique-de-confidentialite" },
    after: " (RGPD). *",
  },
  success: "Merci, votre inscription a bien été prise en compte.",
};
