import type { IconType } from "react-icons";
import { FiActivity, FiCompass, FiMapPin, FiUsers } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { reasons, type ReasonIcon } from "@/content/recrutement";
import { cx } from "@/lib/format";
import styles from "./WhyJoin.module.scss";

const ICONS: Record<ReasonIcon, IconType> = {
  team: FiUsers,
  data: FiActivity,
  scope: FiCompass,
  territory: FiMapPin,
};

/** "Pourquoi nous rejoindre" : quatre cartes à pictogramme. */
export function WhyJoin() {
  return (
    <section className={styles.section} aria-labelledby="why-join-title">
      <SectionHeading id="why-join-title" title={reasons.title} subtitle={reasons.subtitle} />
      <ul className={styles.grid}>
        {reasons.items.map(({ icon, title, description, tone }) => {
          const Icon = ICONS[icon];
          return (
            <li key={title} className={styles.card} data-reveal>
              <span className={cx(styles.icon, styles[tone])} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
