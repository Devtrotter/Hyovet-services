import type { ArticleBlock as Block, ArticleLabels, PublicationAuthor } from "@/utils/types/publication";
import { ArticleAside } from "../ArticleAside/ArticleAside";
import { ArticleBlock } from "../ArticleBlock/ArticleBlock";
import styles from "./ArticleBody.module.scss";

interface ArticleBodyProps {
  blocks: Block[];
  authors: PublicationAuthor[];
  file?: { label: string; href: string; meta: string };
  labels: ArticleLabels;
}

/** Corps de la publication : contenu rédactionnel et encarts document / auteurs. */
export function ArticleBody({ blocks, authors, file, labels }: ArticleBodyProps) {
  return (
    <div className={styles.layout}>
      <article className={styles.content}>
        {blocks.map((block, index) => (
          <ArticleBlock key={`${block.type}-${index}`} {...block} />
        ))}
      </article>

      <ArticleAside authors={authors} file={file} labels={labels} />
    </div>
  );
}
