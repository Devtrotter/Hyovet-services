"use client";

import Link from "next/link";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { FiAlertCircle, FiArrowRight, FiCheckCircle, FiChevronDown, FiPhoneCall } from "react-icons/fi";
import { contactForm } from "@/content/contact";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "sending" | "success" | "error";

const { placeholders } = contactForm;

function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
      <span className={styles.required} aria-hidden="true">
        {" "}*
      </span>
    </label>
  );
}

/** Formulaire de contact : validation native, anti-spam (honeypot), consentement RGPD explicite. */
export function ContactForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [status, setStatus] = useState<Status>("idle");
  const [reason, setReason] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, consent: values.consent === "on" }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setReason("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.card} aria-labelledby={id("title")}>
      <h2 id={id("title")} className={styles.title}>
        {contactForm.title}
      </h2>
      <p className={styles.subtitle}>{contactForm.subtitle}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <div className={styles.field}>
            <Label htmlFor={id("name")}>Nom</Label>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              placeholder={placeholders.name}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <Label htmlFor={id("email")}>Email</Label>
            <input
              id={id("email")}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={placeholders.email}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <Label htmlFor={id("phone")}>Téléphone</Label>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={placeholders.phone}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <Label htmlFor={id("profile")}>Vous êtes</Label>
            <div className={styles.selectWrap}>
              <select id={id("profile")} name="profile" required defaultValue="" className={styles.input}>
                <option value="" disabled>
                  {placeholders.select}
                </option>
                {contactForm.profiles.map((profile) => (
                  <option key={profile}>{profile}</option>
                ))}
              </select>
              <FiChevronDown className={styles.chevron} aria-hidden />
            </div>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <Label htmlFor={id("reason")}>Motif</Label>
            <div className={styles.selectWrap}>
              <select
                id={id("reason")}
                name="reason"
                required
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                aria-describedby={reason === contactForm.urgentReason ? id("urgent") : undefined}
                className={styles.input}
              >
                <option value="" disabled>
                  {placeholders.select}
                </option>
                {contactForm.reasons.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <FiChevronDown className={styles.chevron} aria-hidden />
            </div>
            {reason === contactForm.urgentReason && (
              <p id={id("urgent")} className={styles.notice} role="note">
                <FiPhoneCall aria-hidden />
                <span>{contactForm.urgentNotice}</span>
              </p>
            )}
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <Label htmlFor={id("message")}>Message</Label>
            <textarea
              id={id("message")}
              name="message"
              required
              maxLength={5000}
              placeholder={placeholders.message}
              className={styles.textarea}
            />
          </div>
        </div>

        {/* Honeypot anti-spam, invisible pour les humains */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

        <div className={styles.consent}>
          <input id={id("consent")} name="consent" type="checkbox" required className={styles.checkbox} />
          <label htmlFor={id("consent")} className={styles.consentText}>
            {contactForm.consent.before}
            <Link href={contactForm.consent.link.href} className={styles.link}>
              {contactForm.consent.link.label}
            </Link>
            {contactForm.consent.after}
          </label>
        </div>

        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          <span>{status === "sending" ? contactForm.sendingLabel : contactForm.submitLabel}</span>
          <FiArrowRight className={styles.submitIcon} aria-hidden />
        </button>

        <div className={styles.status} role="status" aria-live="polite" data-status={status}>
          {status === "success" && (
            <>
              <FiCheckCircle aria-hidden />
              <span>{contactForm.success}</span>
            </>
          )}
          {status === "error" && (
            <>
              <FiAlertCircle aria-hidden />
              <span>{contactForm.error}</span>
            </>
          )}
        </div>
      </form>
    </section>
  );
}
