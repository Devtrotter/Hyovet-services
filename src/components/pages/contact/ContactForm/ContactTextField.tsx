import type { ComponentProps } from "react";
import { ContactLabel } from "./ContactLabel";
import styles from "./ContactTextField.module.scss";

type ContactTextFieldProps = Omit<ComponentProps<"input">, "className" | "required"> & {
  id: string;
  label: string;
  /** Champ facultatif : pas d'attribut `required` */
  optional?: boolean;
};

/** Champ texte : libellé + input pilule. */
export function ContactTextField({ id, label, optional, ...props }: ContactTextFieldProps) {
  return (
    <div className={styles.field}>
      <ContactLabel htmlFor={id} optional={optional}>
        {label}
      </ContactLabel>
      <input id={id} {...props} required={!optional} className={styles.input} />
    </div>
  );
}
