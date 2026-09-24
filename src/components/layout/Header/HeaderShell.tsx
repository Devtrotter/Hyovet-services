"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/format";
import styles from "./Header.module.scss";

/**
 * Enveloppe du header : une sentinelle en haut de page indique quand la barre est collée.
 * Un IntersectionObserver plutôt qu'un écouteur de scroll (aucun calcul à chaque frame).
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} className={styles.sentinel} aria-hidden="true" />
      <header className={cx(styles.header, stuck && styles.stuck)}>{children}</header>
    </>
  );
}
