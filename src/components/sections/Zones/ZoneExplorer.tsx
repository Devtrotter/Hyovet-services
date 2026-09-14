"use client";

import { useState, type ReactNode } from "react";
import type { Zone } from "@/content/types";
import { GoogleMap } from "./GoogleMap";
import { ZoneAccordion } from "./ZoneAccordion";
import styles from "./Zones.module.scss";

/** Accordéon des zones d'intervention synchronisé avec la carte. */
export function ZoneExplorer({ zones, heading }: { zones: Zone[]; heading?: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(zones[0]?.id ?? null);
  const [mapZone, setMapZone] = useState<Zone>(zones[0]);

  const handleToggle = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    const zone = zones.find((item) => item.id === next);
    if (zone) setMapZone(zone);
  };

  return (
    <div className={styles.layout}>
      {heading ? (
        <div className={styles.sideColumn}>
          {heading}
          <ZoneAccordion zones={zones} openId={openId} onToggle={handleToggle} />
        </div>
      ) : (
        <ZoneAccordion zones={zones} openId={openId} onToggle={handleToggle} />
      )}
      <GoogleMap view={mapZone.map} title={`Carte de la zone d'intervention : ${mapZone.region}`} />
    </div>
  );
}
