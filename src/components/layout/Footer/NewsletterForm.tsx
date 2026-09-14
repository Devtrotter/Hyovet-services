"use client";

import { useId, useState, type FormEvent } from "react";
import styles from "./Footer.module.scss";

type Status = "idle" | "success";

/**
 * Formulaire d'inscription newsletter.
 * TODO (hors maquette) : brancher sur une route API qui ajoute le contact à la liste Brevo.
 */
export function NewsletterForm() {
  const inputId = useId();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;
    setStatus("success");
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <label htmlFor={inputId} className="sr-only">
        Adresse e-mail
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="votre@email.fr"
        className={styles.input}
      />
      {/* Honeypot anti-spam */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <button type="submit" className={styles.submit}>
        S&apos;inscrire →
      </button>
      <p className="sr-only" role="status" aria-live="polite">
        {status === "success" ? "Merci, votre inscription a bien été prise en compte." : ""}
      </p>
    </form>
  );
}
