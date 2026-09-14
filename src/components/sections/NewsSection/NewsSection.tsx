import { ButtonLink } from "@/components/ui/Button/Button";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { NavLink, NewsItem } from "@/content/types";
import { cx } from "@/lib/format";
import { NewsCard } from "./NewsCard";
import styles from "./NewsSection.module.scss";

interface NewsSectionProps {
  id: string;
  title: string;
  items: NewsItem[];
  cta?: NavLink;
  /** `home` : "Publications & actualités" · `proofs` : "Nos preuves" (pages de détail) */
  variant?: "home" | "proofs";
}

/** Grille de cartes publications / actualités, réutilisée sur l'accueil et les pages expertise. */
export function NewsSection({ id, title, items, cta, variant = "home" }: NewsSectionProps) {
  return (
    <section className={cx(styles.section, styles[variant])} aria-labelledby={id}>
      <SectionHeading id={id} title={title} />
      <div className={styles.grid}>
        {items.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      {cta && (
        <div className={styles.actions}>
          <ButtonLink href={cta.href} variant="ocean">
            {cta.label}
          </ButtonLink>
        </div>
      )}
    </section>
  );
}
