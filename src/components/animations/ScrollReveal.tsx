"use client";

import { useEffect } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Anime en fondu/translation tous les éléments `[data-reveal]` de la page à leur entrée dans le viewport.
 * Un seul composant client pour toute la page (pas de wrapper par élément).
 * Les éléments déjà visibles ne sont jamais masqués => aucun impact sur le LCP / CLS.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    loadGsap().then((gsap) => {
      if (cancelled) return;

      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
        (el) => el.getBoundingClientRect().top > window.innerHeight,
      );
      if (!targets.length) return;

      gsap.set(targets, { autoAlpha: 0, y: 48 });

      // Les entrées signalées dans un même callback forment un "batch" animé en cascade.
      const observer = new IntersectionObserver(
        (entries) => {
          const batch = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
          if (!batch.length) return;
          batch.forEach((el) => observer.unobserve(el));
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            clearProps: "transform,visibility",
          });
        },
        { rootMargin: "0px 0px -12% 0px" },
      );

      targets.forEach((el) => observer.observe(el));

      cleanup = () => {
        observer.disconnect();
        gsap.killTweensOf(targets);
        gsap.set(targets, { clearProps: "all" });
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
