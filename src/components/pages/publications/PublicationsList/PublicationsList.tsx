import { NewsCard } from "@/components/shared/molecules/NewsCard/NewsCard";
import type { PublicationsListLabels } from "@/utils/types/publication";
import type { NewsItem } from "@/utils/types/sections";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import styles from "./PublicationsList.module.scss";

interface PublicationsListProps {
  items: NewsItem[];
  total: number;
  page: number;
  pageCount: number;
  /** Thématiques disponibles ("" = toutes) et celle qui est active */
  categories: string[];
  category: string;
  tags: string[];
  tag: string;
  /** Liens qui conservent les filtres en cours */
  hrefFor: (changes: { category?: string; page?: number }) => string;
  labels: PublicationsListLabels;
}

/** Liste des publications : filtres par thématique et par tag, compte, grille et pagination. */
export function PublicationsList({ items, total, page, pageCount, hrefFor, labels, ...filters }: PublicationsListProps) {
  return (
    <section className={styles.section} aria-labelledby="publications-list-title">
      <Filters {...filters} hrefFor={hrefFor} labels={labels} />

      <h2 id="publications-list-title" className={styles.count}>
        {labels.countLabel(total)}
      </h2>

      {items.length > 0 ? (
        <>
          <div className={styles.grid}>
            {items.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>

          {pageCount > 1 && <Pagination page={page} pageCount={pageCount} hrefFor={hrefFor} labels={labels} />}
        </>
      ) : (
        <p className={styles.empty}>{labels.empty}</p>
      )}
    </section>
  );
}
