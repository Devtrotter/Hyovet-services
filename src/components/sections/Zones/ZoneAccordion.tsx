"use client";

import { Badge } from "@/components/ui/Badge/Badge";
import type { Zone } from "@/content/types";
import styles from "./Zones.module.scss";

interface ZoneAccordionProps {
  zones: Zone[];
  openId: string | null;
  onToggle: (id: string) => void;
}

export function ZoneAccordion({ zones, openId, onToggle }: ZoneAccordionProps) {
  return (
    <div className={styles.accordion}>
      {zones.map((zone) => {
        const isOpen = zone.id === openId;
        const headerId = `${zone.id}-header`;
        const panelId = `${zone.id}-panel`;

        return (
          <div key={zone.id} className={styles.item} data-open={isOpen} data-reveal>
            <h3 className={styles.itemHeading}>
              <button
                id={headerId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onToggle(zone.id)}
              >
                <span className={styles.region}>{zone.region}</span>
                {zone.badge && <Badge color={zone.accent}>{zone.badge}</Badge>}
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={headerId} className={styles.panel} inert={!isOpen}>
              <div className={styles.panelInner}>
                {zone.departments.map((department, index) => (
                  <p key={`${department.name}-${index}`} className={styles.department}>
                    <strong>{department.name} :</strong> {department.cities}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
