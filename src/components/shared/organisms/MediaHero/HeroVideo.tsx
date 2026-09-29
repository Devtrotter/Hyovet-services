"use client";

import { useRef } from "react";
import { useIdleLoad } from "@/utils/hooks/useIdleLoad";
import { usePlayWhenVisible } from "@/utils/hooks/usePlayWhenVisible";
import styles from "./HeroVideo.module.scss";

interface HeroVideoProps {
  webm: string;
  mp4: string;
}

/**
 * Vidéo de fond chargée APRÈS le rendu : l'image fixe (next/image, prioritaire) sert de LCP,
 * la vidéo démarre uniquement quand la page est chargée et le navigateur inactif,
 * puis apparaît en fondu dès que la lecture démarre.
 */
export function HeroVideo({ webm, mp4 }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldLoad = useIdleLoad();
  const isPlaying = usePlayWhenVisible(videoRef, shouldLoad, [webm, mp4]);

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
