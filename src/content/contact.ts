import type { CabinetTheme, MapView } from "./types";

// Page "Nous contacter" — contenus repris de la maquette (adresses et numéros provisoires).

export const contactIntro = {
  title: "Nous contacter",
  subtitle: "Un numéro par cabinet, un formulaire pour tout le reste.",
};

export const contactForm = {
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
  profiles: ["Éleveur", "Vétérinaire", "Laboratoire / partenaire", "Étudiant·e", "Autre"],
  reasons: [
    "Urgence en élevage",
    "Demande de suivi d'élevage",
    "Question technique ou sanitaire",
    "Recrutement / stage",
    "Partenariat / essai terrain",
    "Autre",
  ],
  consent: {
    before: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la ",
    link: { label: "politique de confidentialité", href: "/politique-de-confidentialite" },
    after: " (RGPD). *",
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
  /** Rue puis code postal / ville */
  address: [string, string];
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
    address: ["ZA de la Hunaudaye", "22640 Plestan, Côtes-d'Armor"],
    hours: "Lun–Ven · 8h30–18h",
    note: "Astreinte 7j/7 pour les élevages suivis",
    map: { lat: 48.42, lng: -2.45, zoom: 9, query: "Plestan, Côtes-d'Armor" },
    phone: { label: "02 96 00 00 00", href: "tel:+33296000000" },
    email: { label: "contact@hyovet.fr", href: "mailto:contact@hyovet.fr" },
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
    address: ["Le Bourg", "72370 Surfonds, Sarthe"],
    hours: "Lun–Ven · 8h30–18h",
    note: "Interventions multi-régions",
    map: { lat: 47.98, lng: 0.47, zoom: 9, query: "Surfonds, Sarthe" },
    phone: { label: "02 43 00 00 00", href: "tel:+33243000000" },
    email: { label: "contact@surfonds.fr", href: "mailto:contact@surfonds.fr" },
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
