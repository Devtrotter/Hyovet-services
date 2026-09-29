import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import type { ContactFormContent } from "@/utils/data/content/contact/form";
import styles from "./ContactStatus.module.scss";

export type ContactStatusValue = "idle" | "sending" | "success" | "error";

/** Résultat de l'envoi, annoncé aux lecteurs d'écran. */
export function ContactStatus({ content, status }: { content: ContactFormContent; status: ContactStatusValue }) {
  return (
    <div className={styles.status} role="status" aria-live="polite" data-status={status}>
      {status === "success" && (
        <>
          <FiCheckCircle aria-hidden />
          <span>{content.success}</span>
        </>
      )}
      {status === "error" && (
        <>
          <FiAlertCircle aria-hidden />
          <span>{content.error}</span>
        </>
      )}
    </div>
  );
}
