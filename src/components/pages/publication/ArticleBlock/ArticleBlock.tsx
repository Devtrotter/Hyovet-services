import Image from "next/image";
import type { ArticleBlock as ArticleBlockProps } from "@/utils/types/publication";
import styles from "./ArticleBlock.module.scss";

/** Un bloc de contenu rédactionnel : chapô, sous-titre, paragraphe, puces ou visuel légendé. */
export function ArticleBlock({ type, label, text, items, caption, image }: ArticleBlockProps) {
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
