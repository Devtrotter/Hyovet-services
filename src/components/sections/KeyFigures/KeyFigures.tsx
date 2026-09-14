import { CountUp } from "@/components/animations/CountUp";
import type { KeyFigure } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./KeyFigures.module.scss";

function StatCard({ value, suffix, label, accent }: KeyFigure) {
  return (
    <li className={cx(styles.card, styles[accent])}>
      <strong className={styles.value}>
        <CountUp value={value} suffix={suffix} />
      </strong>
      <span className={styles.label}>{label}</span>
    </li>
  );
}

interface KeyFiguresProps {
  figures: KeyFigure[];
  /** `home` : bloc de l'accueil · `compact` : pages de détail */
  variant?: "home" | "compact";
  label?: string;
}

/** Bloc de chiffres clés (compteurs animés) chevauchant le hero. */
export function KeyFigures({ figures, variant = "home", label = "Hyovet Services en chiffres" }: KeyFiguresProps) {
  return (
    <section className={cx(styles.section, styles[variant])} aria-label={label}>
      <ul className={styles.grid}>
        {figures.map((figure, index) => (
          <StatCard key={`${figure.label}-${index}`} {...figure} />
        ))}
      </ul>
    </section>
  );
}
