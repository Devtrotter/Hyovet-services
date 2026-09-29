import { SectionHeading } from "@/components/shared/atoms/SectionHeading/SectionHeading";
import type { Zone } from "@/utils/types/sections";
import { cx } from "@/utils/helpers/format";
import { ZoneExplorer } from "./ZoneExplorer";
import styles from "./Zones.module.scss";

interface ZonesProps {
  id: string;
  title: string;
  subtitle: string;
  items: Zone[];
  /** `stacked` : titre au-dessus (accueil) · `side` : titre dans la colonne de gauche, carte pleine hauteur (cabinets) */
  layout?: "stacked" | "side";
}

/** Zones d'intervention : accordéon synchronisé avec la carte Google Maps. */
export function Zones({ id, title, subtitle, items, layout = "stacked" }: ZonesProps) {
  const heading = <SectionHeading id={id} title={title} subtitle={subtitle} align="left" />;

  return (
    <section className={cx(styles.section, styles[layout])} aria-labelledby={id}>
      {layout === "stacked" && heading}
      <ZoneExplorer zones={items} heading={layout === "side" ? heading : undefined} />
    </section>
  );
}
