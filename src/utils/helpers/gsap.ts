"use client";

import type { gsap as GsapType } from "gsap";

type Gsap = typeof GsapType;

let gsapPromise: Promise<Gsap> | null = null;

const whenIdle = () =>
  new Promise<void>((resolve) => {
    const run = () =>
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => resolve(), { timeout: 1500 })
        : window.setTimeout(resolve, 200);
    if (document.readyState === "complete") run();
    else window.addEventListener("load", run, { once: true });
  });

/**
 * Charge le cœur de GSAP à la demande, une fois la page chargée et le navigateur inactif.
 * GSAP sort ainsi du bundle critique : aucun impact sur le LCP / TBT.
 * Les déclenchements au scroll utilisent IntersectionObserver (natif, sans recalcul de layout)
 * plutôt que le plugin ScrollTrigger.
 */
export function loadGsap(): Promise<Gsap> {
  gsapPromise ??= whenIdle()
    .then(() => import("gsap"))
    .then(({ gsap }) => gsap);
  return gsapPromise;
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
