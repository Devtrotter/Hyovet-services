import Link from "next/link";
import type { NavLink } from "@/utils/types/common";
import styles from "./NewsletterConsent.module.scss";

interface NewsletterConsentProps {
  id: string;
  consent: { before: string; link: NavLink; after: string };
}

/** Case à cocher RGPD, avec le lien vers la politique de confidentialité. */
export function NewsletterConsent({ id, consent }: NewsletterConsentProps) {
  return (
    <div className={styles.consent}>
      <input id={id} name="consent" type="checkbox" required className={styles.checkbox} />
      <label htmlFor={id} className={styles.consentText}>
        {consent.before}
        <Link href={consent.link.href} className={styles.link}>
          {consent.link.label}
        </Link>
        {consent.after}
      </label>
    </div>
  );
}
