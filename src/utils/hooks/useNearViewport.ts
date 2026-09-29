"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Passe à `true` quand l'élément approche du viewport : sert à différer le montage
 * des contenus lourds (cartes, vidéos) sans rien charger tant qu'on n'en est pas proche.
 */
export function useNearViewport<T extends HTMLElement>(rootMargin = "600px 0px") {
  const ref = useRef<T>(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isNear };
}
