import type { IconType } from "react-icons";
import { FaArrowsRotate, FaBullseye, FaChartPie, FaClock, FaEye, FaHandshake, FaHeart, FaScaleBalanced, FaUsers } from "react-icons/fa6";
import type { ValueIcon, ValuesContent } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./ValuesSection.module.scss";

const ICONS: Record<ValueIcon, IconType> = {
  chart: FaChartPie,
  eye: FaEye,
  team: FaUsers,
  clock: FaClock,
  target: FaBullseye,
  sync: FaArrowsRotate,
  heart: FaHeart,
  scale: FaScaleBalanced,
  handshake: FaHandshake,
};

/** "Nos valeurs" : cartes centrées avec pictogramme. */
export function ValuesSection({ title, subtitle, items, id = "values-title" }: ValuesContent & { id?: string }) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.inner}>
        <header className={styles.heading} data-reveal>
          <h2 id={id} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>
        <ul className={styles.grid}>
          {items.map(({ icon, title: itemTitle, description, tone }) => {
            const Icon = ICONS[icon];
            return (
              <li key={itemTitle} className={cx(styles.card, styles[tone])} data-reveal>
                <span className={styles.icon} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{itemTitle}</h3>
                <p className={styles.cardText}>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
