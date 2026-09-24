import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NewsCard } from "@/components/sections/NewsSection/NewsCard";
import { publicationsList } from "@/content/publications";
import type { NewsItem } from "@/content/types";
import { cx } from "@/lib/format";
import { TagSelect } from "./TagSelect";
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
}

/** Liste des publications : filtres par thématique et par tag, compte, grille et pagination. */
export function PublicationsList({
  items,
  total,
  page,
  pageCount,
  categories,
  category,
  tags,
  tag,
  hrefFor,
}: PublicationsListProps) {
  return (
    <section className={styles.section} aria-labelledby="publications-list-title">
      <div className={styles.filters}>
        <nav className={styles.categories} aria-label={publicationsList.categoryFilterLabel}>
          <Link
            href={hrefFor({ category: "" })}
            className={cx(styles.category, category === "" && styles.active)}
            aria-current={category === "" ? "true" : undefined}
          >
            {publicationsList.allLabel}
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

        <TagSelect value={tag} tags={tags} />
      </div>

      <h2 id="publications-list-title" className={styles.count}>
        {publicationsList.countLabel(total)}
      </h2>

      {items.length > 0 ? (
        <>
          <div className={styles.grid}>
            {items.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>

          {pageCount > 1 && (
            <nav className={styles.pagination} aria-label="Pagination des publications">
              {page > 1 && (
                <Link
                  href={hrefFor({ page: page - 1 })}
                  className={styles.page}
                  aria-label={publicationsList.previousLabel}
                >
                  <FiArrowLeft aria-hidden />
                </Link>
              )}
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                <Link
                  key={number}
                  href={hrefFor({ page: number })}
                  className={cx(styles.page, number === page && styles.current)}
                  aria-label={`Page ${number}`}
                  aria-current={number === page ? "page" : undefined}
                >
                  {number}
                </Link>
              ))}
              {page < pageCount && (
                <Link href={hrefFor({ page: page + 1 })} className={cx(styles.page, styles.next)}>
                  <span>Suivant</span>
                  <FiArrowRight aria-hidden />
                </Link>
              )}
            </nav>
          )}
        </>
      ) : (
        <p className={styles.empty}>{publicationsList.empty}</p>
      )}
    </section>
  );
}
