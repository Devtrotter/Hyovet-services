"use client";

import { useEffect, useRef } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

/** Compteur animé (GSAP). Le rendu serveur affiche la valeur finale (SEO / sans JS). */
export function CountUp({ value, suffix = "", duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    loadGsap().then((gsap) => {
      if (cancelled) return;

      const counter = { current: 0 };
      const render = () => {
        el.textContent = `${Math.round(counter.current)}${suffix}`;
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        render();
        gsap.to(counter, { current: value, duration, ease: "power2.out", onUpdate: render });
      });
      observer.observe(el);

      cleanup = () => {
        observer.disconnect();
        gsap.killTweensOf(counter);
        el.textContent = `${value}${suffix}`;
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
