import Image from "next/image";
import type { PublicationAuthor } from "@/utils/types/publication";
import styles from "./AuthorList.module.scss";

/** Auteurs de la publication : photo ou initiales, nom et fonction. */
export function AuthorList({ authors }: { authors: PublicationAuthor[] }) {
  return (
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
