"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MediaHero.module.scss";

interface HeroVideoProps {
  webm: string;
  mp4: string;
}

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Vidéo de fond chargée APRÈS le rendu : l'image fixe (next/image, prioritaire) sert de LCP,
 * la vidéo démarre uniquement quand la page est chargée et le navigateur inactif,
 * puis apparaît en fondu dès que la lecture démarre.
 */
export function HeroVideo({ webm, mp4 }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. Décide si et quand charger la vidéo.
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slowNetwork = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
    if (reducedMotion || slowNetwork) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 2500 });
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
  }, []);

  // 2. Charge les sources, lance la lecture et met en pause hors écran.
  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;

    // Fondu dès que la lecture démarre réellement. `play()` attend lui-même d'avoir assez de données :
    // on ne dépend plus de `canplaythrough`, qui peut ne jamais se déclencher (Safari, préchargement réduit).
    const onPlaying = () => setIsPlaying(true);
    video.addEventListener("playing", onPlaying);
    video.load();

    // Lecture à l'écran, pause hors écran. Le premier appel (immédiat) lance la vidéo si le hero est visible.
    // Si le navigateur refuse la lecture automatique (mode économie d'énergie…), l'image reste affichée.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => undefined);
      else video.pause();
    });
    observer.observe(video);

    return () => {
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
    };
    // Les sources en dépendance : un changement de vidéo recharge l'élément (utile aussi en développement).
  }, [shouldLoad, webm, mp4]);

  return (
    <video
      ref={videoRef}
      className={styles.video}
      data-visible={isPlaying}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      {shouldLoad && (
        <>
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </>
      )}
    </video>
  );
}
