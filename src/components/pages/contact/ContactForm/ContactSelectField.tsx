import type { ChangeEvent, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { cx } from "@/utils/helpers/format";
import { ContactLabel } from "./ContactLabel";
import styles from "./ContactSelectField.module.scss";

interface ContactSelectFieldProps {
  id: string;
  label: string;
  name: string;
  /** Première option, affichée comme un placeholder */
  placeholder: string;
  options: string[];
  /** Avec `onChange`, le champ devient contrôlé (motif) */
  value?: string;
  onChange?: (value: string) => void;
  describedBy?: string;
  className?: string;
  /** Encarts affichés sous le champ */
  children?: ReactNode;
}

/** Liste déroulante : libellé, option "Sélectionnez…" et chevron. */
export function ContactSelectField(props: ContactSelectFieldProps) {
  const { id, label, name, placeholder, options, value, onChange, describedBy, className, children } = props;
  // Champ contrôlé seulement si le parent suit la valeur (motif), sinon option vide par défaut.
  const handleChange = onChange && ((event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value));
  const control = handleChange ? { value, onChange: handleChange } : { defaultValue: "" };

  return (
    <div className={cx(styles.field, className)}>
      <ContactLabel htmlFor={id}>{label}</ContactLabel>
      <div className={styles.selectWrap}>
        <select id={id} name={name} required {...control} aria-describedby={describedBy} className={styles.input}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <FiChevronDown className={styles.chevron} aria-hidden />
      </div>
      {children}
    </div>
  );
}
