import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/shared/atoms/Badge/Badge";
import type { NewsItem } from "@/utils/types/sections";
import { formatShortDate } from "@/utils/helpers/format";
import styles from "./NewsCard.module.scss";

export function NewsCard({ category, title, excerpt, author, date, href, tone, image }: NewsItem) {
  return (
    <article className={`${styles.card} ${styles[tone]}`} data-reveal>
      <div className={styles.media}>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            // Flou de chargement uniquement pour un import statique (dimensions connues)
            placeholder={typeof image.src === "string" ? "empty" : "blur"}
            quality={100}
            sizes="(max-width: 512px) 100vw, (max-width: 880px) 50vw, 340px"
            className={styles.image}
          />
        )}
        <Badge color={tone} className={styles.badge}>
          {category}
        </Badge>
      </div>

      <h3 className={styles.title}>
        {/* Lien étendu à toute la carte via ::after */}
        <Link href={href} className={styles.link}>
          {title}
        </Link>
      </h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <p className={styles.meta}>
        Par {author} le <time dateTime={date}>{formatShortDate(date)}</time>
      </p>
    </article>
  );
}
