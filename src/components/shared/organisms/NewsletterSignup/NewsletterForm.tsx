"use client";

import { useId, useState, type FormEvent } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import type { NavLink } from "@/utils/types/common";
import { NewsletterConsent } from "./NewsletterConsent";
import styles from "./NewsletterForm.module.scss";

interface NewsletterFormProps {
  placeholder: string;
  submitLabel: string;
  consent: { before: string; link: NavLink; after: string };
  success: string;
}

/** Champ e-mail, consentement RGPD et confirmation d'inscription. */
export function NewsletterForm({ placeholder, submitLabel, consent, success }: NewsletterFormProps) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [done, setDone] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    form.reset();
    setDone(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor={id("email")} className="sr-only">
          Adresse e-mail
        </label>
        <input
          id={id("email")}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          className={styles.input}
        />
        {/* Honeypot anti-spam, invisible pour les humains */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
        <button type="submit" className={styles.submit}>
          <span>{submitLabel}</span>
          <FiArrowRight className={styles.submitIcon} aria-hidden />
        </button>
      </div>

      <NewsletterConsent id={id("consent")} consent={consent} />

      <p className={styles.status} role="status" aria-live="polite" data-done={done}>
        {done && (
          <>
            <FiCheckCircle aria-hidden />
            <span>{success}</span>
          </>
        )}
      </p>
    </form>
  );
}
