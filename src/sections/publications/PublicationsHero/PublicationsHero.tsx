import { FiSearch } from "react-icons/fi";
import { NewsCard } from "@/components/sections/NewsSection/NewsCard";
import { featuredPublication, publicationsIntro } from "@/content/publications";
import styles from "./PublicationsHero.module.scss";

/** Hero de la page publications : accroche, recherche et article à la une. */
export function PublicationsHero({ id, query }: { id: string; query: string }) {
  const { title, subtitle, search } = publicationsIntro;

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

        <NewsCard {...featuredPublication} />
      </div>
    </section>
  );
}
