"use client";

import { setMapsConsent, useMapsConsent } from "@/lib/maps-consent";
import styles from "./LegalDocument.module.scss";

/** Affiche le choix actuel pour les cartes Google et permet de le modifier à tout moment. */
export function MapsConsentControl() {
  const consent = useMapsConsent();

  return (
    <p className={styles.consentControl} role="status" aria-live="polite">
      <span>
        Cartes Google Maps : <strong>{consent ? "autorisées" : "bloquées"}</strong>
      </span>
      <button type="button" className={styles.consentButton} onClick={() => setMapsConsent(!consent)}>
        {consent ? "Retirer mon consentement" : "Autoriser les cartes"}
      </button>
    </p>
  );
}
