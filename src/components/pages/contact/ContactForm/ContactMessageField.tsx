import { cx } from "@/utils/helpers/format";
import { ContactLabel } from "./ContactLabel";
import styles from "./ContactMessageField.module.scss";

interface ContactMessageFieldProps {
  id: string;
  placeholder: string;
}

/** Champ "Message" : libellé + zone de texte redimensionnable. */
export function ContactMessageField({ id, placeholder }: ContactMessageFieldProps) {
  return (
    <div className={cx(styles.field, styles.full)}>
      <ContactLabel htmlFor={id}>Message</ContactLabel>
      <textarea id={id} name="message" required maxLength={5000} placeholder={placeholder} className={styles.textarea} />
    </div>
  );
}
