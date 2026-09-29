"use client";

import { useId, useState, type FormEvent } from "react";
import { FiArrowRight } from "react-icons/fi";
import type { ContactFormContent } from "@/utils/data/content/contact/form";
import { ContactClosedNotice } from "./ContactClosedNotice";
import { ContactConsent } from "./ContactConsent";
import { ContactFields } from "./ContactFields";
import { ContactStatus, type ContactStatusValue } from "./ContactStatus";
import styles from "./ContactForm.module.scss";

/** Formulaire de contact : validation native, anti-spam (honeypot), données minimales et information RGPD. */
export function ContactForm({ content }: { content: ContactFormContent }) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [status, setStatus] = useState<ContactStatusValue>("idle");
  const [reason, setReason] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.enabled) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
        {content.title}
      </h2>
      <p className={styles.subtitle}>{content.subtitle}</p>

      {!content.enabled && <ContactClosedNotice notice={content.disabledNotice} />}

      <form className={styles.form} onSubmit={handleSubmit} aria-disabled={!content.enabled || undefined}>
        {/* fieldset désactivé : tous les champs et le bouton sont inactifs tant que le formulaire est fermé */}
        <fieldset disabled={!content.enabled} className={styles.fieldset}>
          <ContactFields id={id} content={content} reason={reason} onReasonChange={setReason} />

          {/* Honeypot anti-spam, invisible pour les humains */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

          <ContactConsent notice={content.privacyNotice} />

          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            <span>{status === "sending" ? content.sendingLabel : content.submitLabel}</span>
            <FiArrowRight className={styles.submitIcon} aria-hidden />
          </button>
        </fieldset>

        <ContactStatus content={content} status={status} />
      </form>
    </section>
  );
}
