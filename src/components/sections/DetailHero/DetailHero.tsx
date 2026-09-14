import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import type { NavLink } from "@/content/types";
import styles from "./DetailHero.module.scss";

interface DetailHeroProps {
  id: string;
  breadcrumb: NavLink[];
  title: string;
  subtitle: string;
}

/** En-tête des pages de détail : fil d'Ariane, titre et accroche alignés à gauche. */
export function DetailHero({ id, breadcrumb, title, subtitle }: DetailHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={id}>
      <Breadcrumb items={breadcrumb} className={styles.breadcrumb} />
      <div className={styles.content}>
        <h1 id={id} className={styles.title}>
          {title}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
