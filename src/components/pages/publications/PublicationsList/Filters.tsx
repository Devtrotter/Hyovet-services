import Link from "next/link";
import { cx } from "@/utils/helpers/format";
import type { PublicationsListLabels } from "@/utils/types/publication";
import { TagSelect } from "./TagSelect";
import styles from "./Filters.module.scss";

interface FiltersProps {
  categories: string[];
  category: string;
  tags: string[];
  tag: string;
  hrefFor: (changes: { category?: string; page?: number }) => string;
  labels: PublicationsListLabels;
}

/** Barre de filtres : thématiques à gauche (liens), tags à droite (select). */
export function Filters({ categories, category, tags, tag, hrefFor, labels }: FiltersProps) {
  return (
    <div className={styles.filters}>
      <nav className={styles.categories} aria-label={labels.categoryFilterLabel}>
        <Link
          href={hrefFor({ category: "" })}
          className={cx(styles.category, category === "" && styles.active)}
          aria-current={category === "" ? "true" : undefined}
        >
          {labels.allLabel}
        </Link>
        {categories.map((item) => (
          <Link
            key={item}
            href={hrefFor({ category: item })}
            className={cx(styles.category, category === item && styles.active)}
            aria-current={category === item ? "true" : undefined}
          >
            {item}
          </Link>
        ))}
      </nav>

      <TagSelect value={tag} tags={tags} label={labels.tagLabel} placeholder={labels.tagPlaceholder} />
    </div>
  );
}
