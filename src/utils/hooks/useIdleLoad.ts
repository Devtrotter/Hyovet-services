"use client";

import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Passe à `true` quand la page est chargée et le navigateur inactif : sert à différer
 * un média lourd après le LCP. Reste à `false` si l'utilisateur limite les animations
 * ou navigue en connexion lente (économie de données).
 */
export function useIdleLoad(timeout = 2500) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slowNetwork = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
    if (reducedMotion || slowNetwork) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout });
      } else {
        timeoutId = window.setTimeout(() => setShouldLoad(true), 1200);
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [timeout]);

  return shouldLoad;
}
