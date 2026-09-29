import { FiMapPin } from "react-icons/fi";
import { ButtonLink } from "@/components/shared/atoms/Button/Button";
import { cx } from "@/utils/helpers/format";
import type { JobOffer } from "@/utils/types/recrutement";
import styles from "./JobOfferCard.module.scss";

interface JobOfferCardProps {
  offer: JobOffer;
  applyLabel: string;
  /** Adresse de candidature, complétée de l'objet du message */
  applyHref: string;
}

/** Carte d'une offre : cabinet, contrat, lieu et lien de candidature. */
export function JobOfferCard({ offer, applyLabel, applyHref }: JobOfferCardProps) {
  return (
    <article className={styles.card} data-reveal>
      <div className={styles.tags}>
        <span className={cx(styles.tag, styles[offer.cabinet.theme])}>{offer.cabinet.label}</span>
        <span className={cx(styles.tag, styles.contract)}>{offer.contract}</span>
      </div>
      <h3 className={styles.cardTitle}>{offer.title}</h3>
      <p className={styles.location}>
        <FiMapPin aria-hidden />
        {offer.location}
      </p>
      <p className={styles.description}>{offer.description}</p>
      <ButtonLink
        href={`${applyHref}?subject=${encodeURIComponent(`Candidature — ${offer.title}`)}`}
        variant="hyovet"
        className={styles.apply}
        aria-label={`${applyLabel} à l'offre ${offer.title}`}
      >
        {applyLabel}
      </ButtonLink>
    </article>
  );
}
