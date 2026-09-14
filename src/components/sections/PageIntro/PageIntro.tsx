import styles from "./PageIntro.module.scss";

interface PageIntroProps {
  id: string;
  title: string;
  subtitle: string;
}

/** En-tête simple de page (titre + accroche centrés). */
export function PageIntro({ id, title, subtitle }: PageIntroProps) {
  return (
    <section className={styles.intro} aria-labelledby={id}>
      <h1 id={id} className={styles.title}>
        {title}
      </h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </section>
  );
}
