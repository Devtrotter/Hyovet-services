"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingActions.module.scss";

/** Boutons flottants : appel direct + retour en haut (affiché après défilement). */
export function FloatingActions({ phone }: { phone: { label: string; href: string } }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setShowTop(window.scrollY > 600));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.actions}>
      <a href={phone.href} className={`${styles.fab} ${styles.phone}`} aria-label={`Appeler le ${phone.label}`}>
        <span aria-hidden="true">✆</span>
      </a>
      <button
        type="button"
        className={`${styles.fab} ${styles.top}`}
        data-visible={showTop}
        aria-label="Revenir en haut de la page"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}
