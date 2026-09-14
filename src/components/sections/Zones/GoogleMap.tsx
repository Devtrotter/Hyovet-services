"use client";

import { useEffect, useRef, useState } from "react";
import type { MapView } from "@/content/types";
import styles from "./Zones.module.scss";

interface GoogleMapProps {
  view: MapView;
  title: string;
}

// `query` (optionnel) affiche un marqueur sur le lieu du cabinet.
const buildSrc = ({ lat, lng, zoom, query }: MapView) =>
  query
    ? `https://maps.google.com/maps?q=${encodeURIComponent(query)}&ll=${lat},${lng}&z=${zoom}&t=m&hl=fr&output=embed`
    : `https://maps.google.com/maps?ll=${lat},${lng}&z=${zoom}&t=m&hl=fr&output=embed`;

/**
 * Google Maps embarquée, montée uniquement à l'approche du viewport
 * (aucune requête Google tant que la section n'est pas proche => pas d'impact sur le chargement initial).
 */
export function GoogleMap({ view, title }: GoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNear, setIsNear] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const src = buildSrc(view);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.map} data-reveal>
      {isNear && (
        <iframe
          key={src}
          src={src}
          title={title}
          className={styles.mapFrame}
          data-loaded={loadedSrc === src}
          onLoad={() => setLoadedSrc(src)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </div>
  );
}
