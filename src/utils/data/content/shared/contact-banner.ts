import "server-only";
import { phone } from "./coordonnees";

/** Bandeau "Parlons de votre élevage" (pages expertise, cabinets et publications) */
export const contactBanner = {
  title: "Parlons de votre élevage",
  subtitle: "Un vétérinaire du domaine vous rappelle sous 24 h ouvrées.",
  phone,
  form: { label: "Formulaire de contact", href: "/contact" },
};
