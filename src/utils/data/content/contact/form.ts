import "server-only";
import { emails, phone } from "@/utils/data/content/shared/coordonnees";

// Formulaire "Écrivez-nous" : libellés, options et mentions RGPD.

export const contactForm = {
  /** Formulaire désactivé tant que l'envoi des messages n'est pas branché : passer à `true` pour l'ouvrir. */
  enabled: false,
  disabledNotice: {
    before: "Le formulaire sera bientôt disponible. En attendant, appelez-nous au ",
    phone,
    middle: " ou écrivez à ",
    email: emails.contact,
  },
  title: "Écrivez-nous",
  subtitle: "Réponse sous 24 h ouvrées. Les champs marqués * sont obligatoires.",
  placeholders: {
    name: "Prénom Nom",
    email: "vous@exemple.fr",
    phone: "06 12 34 56 78",
    select: "Sélectionnez…",
    message: "Décrivez votre demande : élevage concerné, contexte, disponibilités…",
  },
  urgentReason: "Urgence en élevage",
  urgentNotice: "Pour une urgence, n'attendez pas notre réponse écrite : appelez directement votre cabinet.",
  recruitmentReason: "Recrutement / stage",
  recruitmentNotice: {
    before: "Pour une candidature spontanée ou une demande de stage, vous pouvez aussi écrire directement à ",
    email: emails.recruitment,
  },
  profiles: ["Éleveur", "Vétérinaire", "Laboratoire / partenaire", "Étudiant·e", "Autre"],
  reasons: [
    "Urgence en élevage",
    "Demande de suivi d'élevage",
    "Question technique ou sanitaire",
    "Recrutement / stage",
    "Partenariat / essai terrain",
    "Autre",
  ],
  /** Mentions d'information RGPD affichées sous le formulaire (base légale : répondre à la demande, pas le consentement). */
  privacyNotice: {
    text: "Les informations saisies sont utilisées par Hyovet Services uniquement pour traiter votre demande et vous répondre. Elles sont conservées 3 ans à compter de notre dernier échange. Vous pouvez y accéder, les rectifier, les effacer ou vous opposer à leur traitement en écrivant à ",
    email: emails.contact,
    link: { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  },
  submitLabel: "Contacter Hyovet",
  success: "Merci, votre message a bien été envoyé. Un membre de l'équipe vous répond sous 24 h ouvrées.",
  sendingLabel: "Envoi en cours…",
  error: "L'envoi n'a pas abouti. Réessayez ou appelez directement le cabinet.",
};

/** Contenu du formulaire, passé en props au composant client. */
export type ContactFormContent = typeof contactForm;
