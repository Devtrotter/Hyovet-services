"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Charge la vidéo, la joue à l'écran et la met en pause hors écran.
 * Renvoie `true` dès que la lecture démarre réellement (pour le fondu) : `play()` attend
 * d'avoir assez de données, contrairement à `canplaythrough` qui peut ne jamais se déclencher.
 */
export function usePlayWhenVisible(ref: RefObject<HTMLVideoElement | null>, enabled: boolean, deps: string[] = []) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!enabled || !video) return;

    const onPlaying = () => setIsPlaying(true);
    video.addEventListener("playing", onPlaying);
    video.load();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, enabled, ...deps]);

  return isPlaying;
}
