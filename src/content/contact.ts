import { addresses, emails, formatAddress, phone, type PostalAddress } from "./contact-details";
import type { CabinetTheme, MapView } from "./types";

// Page "Nous contacter" — contenus repris de la maquette.

export const contactIntro = {
  title: "Nous contacter",
  subtitle: "Un numéro par cabinet, un formulaire pour tout le reste.",
};

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

export interface CabinetContact {
  theme: CabinetTheme;
  logo: { src: string; width: number; height: number; alt: string };
  title: string;
  address: PostalAddress;
  hours: string;
  /** Précision affichée sous les horaires (astreinte, zone d'intervention…) */
  note: string;
  map: MapView;
  phone: { label: string; href: string };
  email: { label: string; href: string };
}

export const cabinetContacts: CabinetContact[] = [
  {
    theme: "hyovet",
    logo: { src: "/images/logos/hyovet.png", width: 338, height: 118, alt: "Hyovet" },
    title: "Hyovet — Plestan",
    address: addresses.hyovet,
    hours: "Lun–Ven · 8h30–18h",
    note: "Astreinte 7j/7 pour les élevages suivis",
    map: { lat: 48.42, lng: -2.45, zoom: 9, query: formatAddress(addresses.hyovet) },
    phone,
    email: emails.contact,
  },
  {
    theme: "surfonds",
    logo: {
      src: "/images/logos/selas-de-surfonds.png",
      width: 572,
      height: 348,
      alt: "Selas de Surfonds",
    },
    title: "Selas de Surfonds — près du Mans",
    address: addresses.surfonds,
    hours: "Lun–Ven · 8h30–18h",
    note: "Interventions multi-régions",
    map: { lat: 48.04, lng: 0.16, zoom: 9, query: formatAddress(addresses.surfonds) },
    phone,
    email: emails.contact,
  },
];

export const contactAside = {
  title: "Besoin d'une réponse rapide ?",
  subtitle: "Appelez directement le cabinet le plus proche de votre élevage.",
};

export const network = {
  title: "Deux cabinets, un même réseau",
  subtitle: "De la Bretagne à la Sarthe, et partout où sont les éleveurs.",
};
