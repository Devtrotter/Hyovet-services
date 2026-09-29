import { ButtonLink } from "@/components/shared/atoms/Button/Button";
import { SectionHeading } from "@/components/shared/atoms/SectionHeading/SectionHeading";
import type { NavLink } from "@/utils/types/common";
import type { NewsItem } from "@/utils/types/sections";
import { cx } from "@/utils/helpers/format";
import { NewsCard } from "@/components/shared/molecules/NewsCard/NewsCard";
import styles from "./NewsSection.module.scss";

interface NewsSectionProps {
  id: string;
  title: string;
  items: NewsItem[];
  cta?: NavLink;
  /** `home` : "Publications & actualités" · `proofs` : "Nos preuves" (pages de détail) */
  variant?: "home" | "proofs";
  /** Alignement du titre de section (centré par défaut) */
  align?: "center" | "left";
}

/** Grille de cartes publications / actualités, réutilisée sur l'accueil et les pages expertise. */
export function NewsSection({ id, title, items, cta, variant = "home", align = "center" }: NewsSectionProps) {
  return (
    <section className={cx(styles.section, styles[variant])} aria-labelledby={id}>
      <SectionHeading id={id} title={title} align={align} />
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
