"use client";

import styles from "./error.module.scss";

// Forcément client : ses deux phrases restent dans le fichier (elles ne peuvent pas venir des données).
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Une erreur est survenue</h1>
      <p className={styles.text}>La page n&apos;a pas pu s&apos;afficher. Réessayez dans un instant.</p>
      <button type="button" className={styles.button} onClick={reset}>
        Réessayer
      </button>
    </section>
  );
}
