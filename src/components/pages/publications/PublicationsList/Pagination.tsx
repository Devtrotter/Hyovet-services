import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { cx } from "@/utils/helpers/format";
import type { PublicationsListLabels } from "@/utils/types/publication";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  page: number;
  pageCount: number;
  hrefFor: (changes: { category?: string; page?: number }) => string;
  labels: PublicationsListLabels;
}

/** Pagination de la liste : flèches et numéros de page, filtres conservés. */
export function Pagination({ page, pageCount, hrefFor, labels }: PaginationProps) {
  return (
    <nav className={styles.pagination} aria-label="Pagination des publications">
      {page > 1 && (
        <Link href={hrefFor({ page: page - 1 })} className={styles.page} aria-label={labels.previousLabel}>
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
  );
}
