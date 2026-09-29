import Link from "next/link";
import type { LegalInline } from "@/utils/types/legal";
import styles from "./LegalInlines.module.scss";

/** Rend une suite de fragments de texte (gras, liens, mentions à compléter). */
export function LegalInlines({ content }: { content: LegalInline[] }) {
  return content.map((part, index) => {
    if (typeof part === "string") return part;

    switch (part.type) {
      case "strong":
        return <strong key={index}>{part.text}</strong>;
      case "link":
        return part.external ? (
          <a key={index} href={part.href} target="_blank" rel="noopener noreferrer">
            {part.label}
          </a>
        ) : (
          <a key={index} href={part.href}>
            {part.label}
          </a>
        );
      case "internal":
        return (
          <Link key={index} href={part.href}>
            {part.label}
          </Link>
        );
      case "toComplete":
        // Volontairement visible : rechercher "toComplete" dans les données pour tout compléter avant la mise en ligne.
        return (
          <mark key={index} className={styles.toComplete}>
            [À compléter : {part.text}]
          </mark>
        );
    }
  });
}
