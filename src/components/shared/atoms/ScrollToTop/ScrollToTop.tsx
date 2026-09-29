"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Remonte en haut de page à chaque changement de route.
 * Par défaut, `<Link>` conserve la position de scroll tant que le haut de la nouvelle page reste visible :
 * on force donc le retour en haut, sauf sur précédent / suivant (position restaurée par le navigateur)
 * et sur les liens avec ancre (#section).
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isHistoryNavigation = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isHistoryNavigation.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Layout effect : le scroll a lieu avant l'affichage, sans flash de la nouvelle page au mauvais endroit.
  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isHistoryNavigation.current) {
      isHistoryNavigation.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
