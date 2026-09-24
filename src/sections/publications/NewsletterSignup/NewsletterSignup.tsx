"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { newsletter } from "@/content/publications";
import styles from "./NewsletterSignup.module.scss";

/**
 * Inscription à la newsletter sanitaire.
 * TODO (hors maquette) : brancher sur la même liste Brevo que le formulaire du pied de page.
 */
export function NewsletterSignup() {
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
    <section className={styles.section} aria-labelledby={id("title")}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id={id("title")} className={styles.title}>
            {newsletter.title}
          </h2>
          <p className={styles.subtitle}>{newsletter.subtitle}</p>
        </div>

        <div className={styles.card}>
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
                placeholder={newsletter.placeholder}
                className={styles.input}
              />
              {/* Honeypot anti-spam, invisible pour les humains */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
              <button type="submit" className={styles.submit}>
                <span>{newsletter.submitLabel}</span>
                <FiArrowRight className={styles.submitIcon} aria-hidden />
              </button>
            </div>

            <div className={styles.consent}>
              <input id={id("consent")} name="consent" type="checkbox" required className={styles.checkbox} />
              <label htmlFor={id("consent")} className={styles.consentText}>
                {newsletter.consent.before}
                <Link href={newsletter.consent.link.href} className={styles.link}>
                  {newsletter.consent.link.label}
                </Link>
                {newsletter.consent.after}
              </label>
            </div>

            <p className={styles.status} role="status" aria-live="polite" data-done={done}>
              {done && (
                <>
                  <FiCheckCircle aria-hidden />
                  <span>{newsletter.success}</span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
