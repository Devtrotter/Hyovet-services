import type { NavLink } from "@/utils/types/common";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./NewsletterSignup.module.scss";

interface NewsletterSignupProps {
  title: string;
  subtitle: string;
  placeholder: string;
  submitLabel: string;
  consent: { before: string; link: NavLink; after: string };
  success: string;
}

/**
 * Inscription à la newsletter sanitaire.
 * TODO (hors maquette) : brancher sur la même liste Brevo que le formulaire du pied de page.
 */
export function NewsletterSignup({ title, subtitle, ...form }: NewsletterSignupProps) {
  return (
    <section className={styles.section} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="newsletter-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.card}>
          <NewsletterForm {...form} />
        </div>
      </div>
    </section>
  );
}
