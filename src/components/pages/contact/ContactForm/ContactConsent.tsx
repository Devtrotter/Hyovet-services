import Link from "next/link";
import type { ContactFormContent } from "@/utils/data/content/contact/form";
import styles from "./ContactConsent.module.scss";

/** Mentions d'information RGPD affichées sous les champs. */
export function ContactConsent({ notice }: { notice: ContactFormContent["privacyNotice"] }) {
  return (
    <p className={styles.privacy}>
      {notice.text}
      <a href={notice.email.href} className={styles.link}>
        {notice.email.label}
      </a>
      .{" "}
      <Link href={notice.link.href} className={styles.link}>
        {notice.link.label}
      </Link>
    </p>
  );
}
