import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PageIntro } from "@/components/sections/PageIntro/PageIntro";
import { cabinetContacts, contactAside, contactIntro } from "@/content/contact";
import { site } from "@/content/site";
import { absoluteUrl, organizationId, pageMetadata, postalAddressJsonLd, serializeJsonLd } from "@/lib/seo";
import { CabinetContactCard } from "@/sections/contact/CabinetContactCard/CabinetContactCard";
import { ContactForm } from "@/sections/contact/ContactForm/ContactForm";
import { NetworkMap } from "@/sections/contact/NetworkMap/NetworkMap";
import styles from "./contact.module.scss";

export const metadata: Metadata = pageMetadata({
  title: "Nous contacter",
  description: `Contactez ${site.name} : un numéro par cabinet (Hyovet à Plestan, Selas de Surfonds près du Mans) et un formulaire pour toutes vos demandes.`,
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = {
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <PageIntro id="contact-title" {...contactIntro} />
      <section className={styles.contact} aria-label="Formulaire et coordonnées des cabinets">
        <div className={styles.layout}>
          <ContactForm />
          <aside className={styles.aside} aria-labelledby="contact-aside-title">
            <div className={styles.asideHeading}>
              <h2 id="contact-aside-title" className={styles.asideTitle}>
                {contactAside.title}
              </h2>
              <p className={styles.asideSubtitle}>{contactAside.subtitle}</p>
            </div>
            <div className={styles.cabinets}>
              {cabinetContacts.map((cabinet) => (
                <CabinetContactCard key={cabinet.theme} {...cabinet} />
              ))}
            </div>
          </aside>
        </div>
      </section>
      <NetworkMap />
      <ScrollReveal />
    </>
  );
}
