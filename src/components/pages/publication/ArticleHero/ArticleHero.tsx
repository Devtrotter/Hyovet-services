import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { formatLongDate } from "@/utils/helpers/format";
import type { PublicationDetail } from "@/utils/types/publication";
import styles from "./ArticleHero.module.scss";

type ArticleHeroProps = Pick<PublicationDetail, "category" | "source" | "place" | "date" | "title" | "tags"> & {
  id: string;
  /** Libellé du lien de retour vers la liste */
  backLabel: string;
};

/** En-tête d'une publication : retour à la liste, méta, titre et thématiques. */
export function ArticleHero({ id, backLabel, category, source, place, date, title, tags }: ArticleHeroProps) {
  const published = formatLongDate(date);

  return (
    <section className={styles.hero} aria-labelledby={id}>
      <div className={styles.inner}>
        <Link href="/publications" className={styles.back}>
          <FiArrowLeft aria-hidden />
          {backLabel}
        </Link>

        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          {source && <span className={styles.source}>{source}</span>}
          <span className={styles.place}>
            {place ? `${place} · ` : ""}
            <time dateTime={date}>{published}</time>
          </span>
        </div>

        <h1 id={id} className={styles.title}>
          {title}
        </h1>

        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
