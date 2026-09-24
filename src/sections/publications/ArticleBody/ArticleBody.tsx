import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { articleLabels, type ArticleBlock, type PublicationAuthor } from "@/content/publications";
import styles from "./ArticleBody.module.scss";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
  authors: PublicationAuthor[];
  file?: { label: string; href: string; meta: string };
}

/** Corps de la publication : contenu rédactionnel et encarts document / auteurs. */
export function ArticleBody({ blocks, authors, file }: ArticleBodyProps) {
  return (
    <div className={styles.layout}>
      <article className={styles.content}>
        {blocks.map((block, index) => (
          <Block key={`${block.type}-${index}`} {...block} />
        ))}
      </article>

      <aside className={styles.aside}>
        {file && (
          <div className={styles.document}>
            <p className={styles.asideLabel}>{articleLabels.documentLabel}</p>
            <a href={file.href} className={styles.download} download>
              <FiDownload aria-hidden />
              <span>{file.label}</span>
            </a>
            <p className={styles.documentMeta}>{file.meta}</p>
          </div>
        )}

        {authors.length > 0 && (
          <div className={styles.authors}>
            <p className={styles.asideLabel}>{articleLabels.authorsLabel}</p>
            <ul className={styles.authorList}>
              {authors.map((author) => (
                <li key={author.name} className={styles.author}>
                  {author.photo ? (
                    <Image
                      src={author.photo}
                      alt=""
                      width={48}
                      height={48}
                      sizes="48px"
                      className={styles.avatar}
                    />
                  ) : (
                    // Photo à fournir : initiales sur pastille, comme pour les équipes
                    <span className={styles.avatar} aria-hidden="true">
                      {initials(author.name)}
                    </span>
                  )}
                  <span>
                    <strong className={styles.authorName}>{author.name}</strong>
                    <span className={styles.authorRole}>{author.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}

/** "Dr Marc Le Bihan" -> "ML" (les titres ne comptent pas comme prénom). */
function initials(name: string) {
  return name
    .replace(/^(Dr|Pr)\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Block({ type, label, text, items, caption, image }: ArticleBlock) {
  switch (type) {
    case "lead":
      return (
        <p className={styles.lead}>
          {label && <strong>{label} </strong>}
          {text}
        </p>
      );
    case "heading":
      return <h2 className={styles.heading}>{text}</h2>;
    case "list":
      return (
        <ul className={styles.list}>
          {items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "figure":
      return (
        <figure className={styles.figure}>
          <div className={styles.figureMedia}>
            {image ? (
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 880px) 100vw, 1000px" className={styles.figureImage} />
            ) : (
              <span className={styles.figurePlaceholder}>Visuel à fournir</span>
            )}
          </div>
          {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
        </figure>
      );
    default:
      return <p className={styles.text}>{text}</p>;
  }
}
