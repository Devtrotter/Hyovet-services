import { cx } from "@/lib/format";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

/** Titre de section H2 + sous-titre, centré ou aligné à gauche. */
export function SectionHeading({ id, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <header className={cx(styles.heading, styles[align], className)} data-reveal>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
