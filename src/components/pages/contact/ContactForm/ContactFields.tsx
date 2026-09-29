import type { ContactFormContent } from "@/utils/data/content/contact/form";
import { ContactMessageField } from "./ContactMessageField";
import { ContactReasonField } from "./ContactReasonField";
import { ContactSelectField } from "./ContactSelectField";
import { ContactTextField } from "./ContactTextField";
import styles from "./ContactFields.module.scss";

interface ContactFieldsProps {
  /** Préfixe les `id` des champs pour rester unique dans la page */
  id: (name: string) => string;
  content: ContactFormContent;
  reason: string;
  onReasonChange: (value: string) => void;
}

/** Grille des champs : identité, profil, motif et message. */
export function ContactFields({ id, content, reason, onReasonChange }: ContactFieldsProps) {
  const { name, email, phone, select, message } = content.placeholders;

  return (
    <div className={styles.grid}>
      <ContactTextField id={id("name")} label="Nom" name="name" type="text" autoComplete="name" placeholder={name} />
      <ContactTextField id={id("email")} label="Email" name="email" type="email" autoComplete="email" placeholder={email} />
      <ContactTextField id={id("phone")} label="Téléphone" name="phone" type="tel" autoComplete="tel" placeholder={phone} optional />
      <ContactSelectField id={id("profile")} label="Vous êtes" name="profile" placeholder={select} options={content.profiles} />
      <ContactReasonField id={id} content={content} placeholder={select} value={reason} onChange={onReasonChange} />
      <ContactMessageField id={id("message")} placeholder={message} />
    </div>
  );
}
