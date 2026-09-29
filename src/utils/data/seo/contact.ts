import "server-only";
import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";
import { cabinetContacts } from "@/utils/data/content/contact/cabinets";
import { contactIntro } from "@/utils/data/content/contact/intro";
import { organizationId, postalAddressJsonLd } from "@/utils/helpers/jsonLd";
import { absoluteUrl, pageMetadata } from "@/utils/helpers/seo";

export const contactSeo: Metadata = pageMetadata({
  title: "Nous contacter",
  description: `Contactez ${siteConfig.name} : un numéro par cabinet (Hyovet à Plestan, Selas de Surfonds près du Mans) et un formulaire pour toutes vos demandes.`,
  path: "/contact",
});

/** ContactPage + une fiche `VeterinaryCare` par cabinet (téléphone, adresse, horaires). */
export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contactIntro.title,
  url: absoluteUrl("/contact"),
  about: { "@id": organizationId },
  mainEntity: cabinetContacts.map((cabinet) => ({
    "@type": "VeterinaryCare",
    name: cabinet.title,
    telephone: cabinet.phone.label,
    email: cabinet.email.label,
    address: postalAddressJsonLd(cabinet.address),
    openingHours: "Mo-Fr 08:30-18:00",
  })),
};
