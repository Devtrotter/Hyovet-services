import type { ReactNode } from "react";
import { cx } from "@/lib/format";
import styles from "./IntroSplit.module.scss";

interface IntroSplitProps {
  id: string;
  title: string;
  paragraphs: string[];
  /** Encart affiché à droite (frise, fiche cabinet…) */
  aside: ReactNode;
  /** `afterMedia` : plus d'espace au-dessus quand l'intro suit un visuel (pages cabinet) */
  spacing?: "default" | "afterMedia";
}

/** Texte de présentation à gauche + encart à droite ("Notre ADN", "Le cabinet"). */
export function IntroSplit({ id, title, paragraphs, aside, spacing = "default" }: IntroSplitProps) {
  return (
    <section className={cx(styles.section, styles[spacing])} aria-labelledby={id}>
      <div className={styles.text} data-reveal>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={styles.aside} data-reveal>
        {aside}
      </div>
    </section>
  );
}
