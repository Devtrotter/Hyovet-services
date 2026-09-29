"use client";

import { useState } from "react";
import { useNearViewport } from "@/utils/hooks/useNearViewport";
import { useMapsConsent } from "@/utils/helpers/maps-consent";
import type { MapView } from "@/utils/types/common";
import { MapConsent } from "./MapConsent";
import styles from "./GoogleMap.module.scss";

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
  const { ref, isNear } = useNearViewport<HTMLDivElement>();
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const src = buildSrc(view);
  const consent = useMapsConsent();

  return (
    <div ref={ref} className={className ? `${styles.map} ${className}` : styles.map} data-reveal>
      {!consent && <MapConsent externalHref={buildExternalHref(view)} />}
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
