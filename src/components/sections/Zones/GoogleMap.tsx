"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import type { MapView } from "@/content/types";
import { setMapsConsent, useMapsConsent } from "@/lib/maps-consent";
import styles from "./Zones.module.scss";

interface GoogleMapProps {
  view: MapView;
  title: string;
  className?: string;
}

// `query` (optionnel) affiche un marqueur sur le lieu du cabinet.
const buildSrc = ({ lat, lng, zoom, query }: MapView) =>
  query
    ? `https://maps.google.com/maps?q=${encodeURIComponent(query)}&ll=${lat},${lng}&z=${zoom}&t=m&hl=fr&output=embed`
    : `https://maps.google.com/maps?ll=${lat},${lng}&z=${zoom}&t=m&hl=fr&output=embed`;

// Lien direct vers Google Maps : ouvert à l'initiative du visiteur, sans contenu tiers embarqué sur le site.
const buildExternalHref = ({ lat, lng, query }: MapView) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query ?? `${lat},${lng}`)}`;

/**
 * Google Maps embarquée, chargée seulement après consentement (RGPD : Google peut déposer des cookies)
 * puis montée à l'approche du viewport (aucune requête Google tant que la section n'est pas proche).
 */
export function GoogleMap({ view, title, className }: GoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNear, setIsNear] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const src = buildSrc(view);
  const consent = useMapsConsent();

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
    <div ref={containerRef} className={className ? `${styles.map} ${className}` : styles.map} data-reveal>
      {!consent && (
        <div className={styles.mapConsent}>
          <FiMapPin className={styles.mapConsentIcon} aria-hidden />
          <p className={styles.mapConsentText}>
            Cette carte est fournie par Google, qui peut déposer des cookies.{" "}
            <Link href="/politique-de-confidentialite#cookies" className={styles.mapConsentLink}>
              En savoir plus
            </Link>
          </p>
          <div className={styles.mapConsentActions}>
            <button type="button" className={styles.mapConsentButton} onClick={() => setMapsConsent(true)}>
              Afficher la carte
            </button>
            <a href={buildExternalHref(view)} target="_blank" rel="noopener noreferrer" className={styles.mapConsentLink}>
              Ouvrir dans Google Maps <FiExternalLink aria-hidden />
            </a>
          </div>
        </div>
      )}
      {consent && isNear && (
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
