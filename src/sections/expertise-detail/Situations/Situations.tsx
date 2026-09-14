import type { ExpertiseDetail } from "@/content/types";
import styles from "./Situations.module.scss";

/** "Pour qui, quand ?" : situations terrain où faire appel au cabinet. */
export function Situations({ title, subtitle, items }: ExpertiseDetail["situations"]) {
  return (
    <section className={styles.section} aria-labelledby="situations-title">
      <div className={styles.inner}>
        <header className={styles.heading} data-reveal>
          <h2 id="situations-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.item} data-reveal>
              <span className={styles.dot} aria-hidden="true" />
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
