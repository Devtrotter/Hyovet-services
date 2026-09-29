import { FiSearch } from "react-icons/fi";
import { NewsCard } from "@/components/shared/molecules/NewsCard/NewsCard";
import type { NewsItem } from "@/utils/types/sections";
import styles from "./PublicationsHero.module.scss";

interface PublicationsHeroProps {
  id: string;
  query: string;
  title: { highlight: string; rest: string };
  subtitle: string;
  search: { label: string; placeholder: string; submitLabel: string };
  /** Article mis en avant à droite du hero */
  featured: NewsItem;
}

/** Hero de la page publications : accroche, recherche et article à la une. */
export function PublicationsHero({ id, query, title, subtitle, search, featured }: PublicationsHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={id}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 id={id} className={styles.title}>
            <span className={styles.highlight}>{title.highlight}</span>
            {title.rest}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {/* Formulaire GET : la recherche vit dans l'URL (partageable, et fonctionne sans JS). */}
          <form className={styles.search} action="/publications" method="get" role="search">
            <div className={styles.field}>
              <FiSearch className={styles.icon} aria-hidden />
              <label htmlFor="publications-search" className="sr-only">
                {search.label}
              </label>
              <input
                id="publications-search"
                type="search"
                name="q"
                defaultValue={query}
                placeholder={search.placeholder}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submit}>
              {search.submitLabel}
            </button>
          </form>
        </div>

        <NewsCard {...featured} />
      </div>
    </section>
  );
}
