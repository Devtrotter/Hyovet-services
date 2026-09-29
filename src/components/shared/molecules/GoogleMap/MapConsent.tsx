"use client";

import Link from "next/link";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { setMapsConsent } from "@/utils/helpers/maps-consent";
import styles from "./MapConsent.module.scss";

/** Écran de consentement affiché à la place de la carte tant que Google n'est pas autorisé. */
export function MapConsent({ externalHref }: { externalHref: string }) {
  return (
    <div className={styles.mapConsent}>
      <FiMapPin className={styles.mapConsentIcon} aria-hidden />
      <p className={styles.mapConsentText}>
        Cette carte est fournie par Google, qui peut déposer des cookies.{" "}
        <Link href="/politique-de-confidentialite#cookies" className={styles.mapConsentLink}>
          En savoir plus
        </Link>
      </p>
      <div className={styles.mapConsentActions}>
        <button type="button" className={styles.mapConsentButton} onClick={() => setMapsConsent(true)}>
          Afficher la carte
        </button>
        <a href={externalHref} target="_blank" rel="noopener noreferrer" className={styles.mapConsentLink}>
          Ouvrir dans Google Maps <FiExternalLink aria-hidden />
        </a>
      </div>
    </div>
  );
}
