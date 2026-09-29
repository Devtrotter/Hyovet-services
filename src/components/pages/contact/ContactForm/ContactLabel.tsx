import type { ReactNode } from "react";
import styles from "./ContactLabel.module.scss";

interface ContactLabelProps {
  htmlFor: string;
  /** Champ facultatif : mention "(facultatif)" au lieu de l'astérisque */
  optional?: boolean;
  children: ReactNode;
}

/** Libellé d'un champ, avec la mention obligatoire (*) ou facultative. */
export function ContactLabel({ htmlFor, optional, children }: ContactLabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
      {optional ? (
        <span className={styles.optional}> (facultatif)</span>
      ) : (
        <span className={styles.required} aria-hidden="true">
          {" "}*
        </span>
      )}
    </label>
  );
}
