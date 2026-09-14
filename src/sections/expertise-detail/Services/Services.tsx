import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { ExpertiseDetail, ServiceTone } from "@/content/types";
import styles from "./Services.module.scss";

const TONES: ServiceTone[] = ["blue", "green", "gold", "salmon"];

/** "Ce qu'on fait" : prestations numérotées en grille 2 × 2. */
export function Services({ title, subtitle, items }: ExpertiseDetail["services"]) {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <SectionHeading id="services-title" title={title} subtitle={subtitle} />
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className={`${styles.card} ${styles[TONES[index % TONES.length]]}`} data-reveal>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
