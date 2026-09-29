import { FiMail, FiPhoneCall } from "react-icons/fi";
import type { ContactFormContent } from "@/utils/data/content/contact/form";
import { ContactNotice } from "./ContactNotice";
import { ContactSelectField } from "./ContactSelectField";
import styles from "./ContactReasonField.module.scss";

interface ContactReasonFieldProps {
  id: (name: string) => string;
  content: ContactFormContent;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

/** Champ "Motif" : liste déroulante et encarts affichés selon le motif choisi. */
export function ContactReasonField({ id, content, placeholder, value, onChange }: ContactReasonFieldProps) {
  const isUrgent = value === content.urgentReason;
  const isRecruitment = value === content.recruitmentReason;

  return (
    <ContactSelectField
      id={id("reason")}
      label="Motif"
      name="reason"
      placeholder={placeholder}
      options={content.reasons}
      value={value}
      onChange={onChange}
      describedBy={isUrgent ? id("urgent") : isRecruitment ? id("recruitment") : undefined}
      className={styles.full}
    >
      {isUrgent && (
        <ContactNotice id={id("urgent")} icon={<FiPhoneCall aria-hidden />}>
          {content.urgentNotice}
        </ContactNotice>
      )}
      {isRecruitment && (
        <ContactNotice id={id("recruitment")} tone="info" icon={<FiMail aria-hidden />}>
          {content.recruitmentNotice.before}
          <a href={content.recruitmentNotice.email.href}>{content.recruitmentNotice.email.label}</a>.
        </ContactNotice>
      )}
    </ContactSelectField>
  );
}
