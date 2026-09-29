import { ButtonLink } from "@/components/shared/atoms/Button/Button";
import type { SpontaneousContent } from "@/utils/types/recrutement";
import styles from "./SpontaneousBanner.module.scss";

/** Bandeau "Pas d'offre qui vous correspond ?" en bas des offres. */
export function SpontaneousBanner({ content }: { content: SpontaneousContent }) {
  return (
    <aside className={styles.banner} aria-labelledby="spontaneous-title" data-reveal>
      <div>
        <p id="spontaneous-title" className={styles.bannerTitle}>
          {content.title}
        </p>
        <p className={styles.bannerSubtitle}>{content.subtitle}</p>
      </div>
      <ButtonLink href={content.cta.href} variant="white">
        {content.cta.label}
      </ButtonLink>
    </aside>
  );
}
