import { FiDownload } from "react-icons/fi";
import type { ArticleLabels, PublicationAuthor } from "@/utils/types/publication";
import { AuthorList } from "../AuthorList/AuthorList";
import styles from "./ArticleAside.module.scss";

interface ArticleAsideProps {
  authors: PublicationAuthor[];
  file?: { label: string; href: string; meta: string };
  labels: ArticleLabels;
}

/** Colonne latérale d'une publication : document à télécharger et auteurs. */
export function ArticleAside({ authors, file, labels }: ArticleAsideProps) {
  return (
    <aside className={styles.aside}>
      {file && (
        <div className={styles.document}>
          <p className={styles.asideLabel}>{labels.documentLabel}</p>
          <a href={file.href} className={styles.download} download>
            <FiDownload aria-hidden />
            <span>{file.label}</span>
          </a>
          <p className={styles.documentMeta}>{file.meta}</p>
        </div>
      )}

      {authors.length > 0 && (
        <div className={styles.authors}>
          <p className={styles.asideLabel}>{labels.authorsLabel}</p>
          <AuthorList authors={authors} />
        </div>
      )}
    </aside>
  );
}
