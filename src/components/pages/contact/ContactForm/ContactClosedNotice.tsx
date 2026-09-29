import { FiInfo } from "react-icons/fi";
import type { ContactFormContent } from "@/utils/data/content/contact/form";
import { ContactNotice } from "./ContactNotice";
import styles from "./ContactClosedNotice.module.scss";

/** Encart affiché tant que le formulaire est fermé : numéro et email de secours. */
export function ContactClosedNotice({ notice }: { notice: ContactFormContent["disabledNotice"] }) {
  return (
    <ContactNotice tone="info" icon={<FiInfo aria-hidden />} className={styles.disabledNotice}>
      {notice.before}
      <a href={notice.phone.href}>{notice.phone.label}</a>
      {notice.middle}
      <a href={notice.email.href}>{notice.email.label}</a>.
    </ContactNotice>
  );
}
