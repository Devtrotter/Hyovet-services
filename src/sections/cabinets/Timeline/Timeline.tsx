import type { TimelineItem } from "@/content/types";
import styles from "./Timeline.module.scss";

/** Frise chronologique du groupe. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className={styles.item}>
          <span className={`${styles.dot} ${styles[item.color]}`} aria-hidden="true" />
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
