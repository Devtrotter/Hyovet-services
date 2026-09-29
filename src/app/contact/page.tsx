import type { Metadata } from "next";
import { PageIntro } from "@/components/shared/atoms/PageIntro/PageIntro";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { CabinetContactCard } from "@/components/pages/contact/CabinetContactCard/CabinetContactCard";
import { ContactForm } from "@/components/pages/contact/ContactForm/ContactForm";
import { NetworkMap } from "@/components/pages/contact/NetworkMap/NetworkMap";
import { cabinetContacts, contactAside } from "@/utils/data/content/contact/cabinets";
import { contactForm } from "@/utils/data/content/contact/form";
import { contactIntro } from "@/utils/data/content/contact/intro";
import { contactJsonLd, contactSeo } from "@/utils/data/seo/contact";
import { serializeJsonLd } from "@/utils/helpers/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = contactSeo;

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactJsonLd) }} />
      <PageIntro id="contact-title" {...contactIntro} />
      <section className={styles.contact} aria-label="Formulaire et coordonnées des cabinets">
        <div className={styles.layout}>
          {/* Composant client : ses données viennent du serveur */}
          <ContactForm content={contactForm} />
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
