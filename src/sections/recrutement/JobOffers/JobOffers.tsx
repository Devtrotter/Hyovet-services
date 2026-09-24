"use client";

import { useMemo, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import { offers, spontaneous } from "@/content/recrutement";
import { cx } from "@/lib/format";
import styles from "./JobOffers.module.scss";

const ALL = "all";

/** Liste des offres filtrable par cabinet et par type de contrat. */
export function JobOffers() {
  const [cabinet, setCabinet] = useState(ALL);
  const [contract, setContract] = useState(ALL);

  // Options déduites des offres : pas de filtre sans offre derrière.
  const cabinets = useMemo(
    () => [...new Map(offers.items.map((offer) => [offer.cabinet.theme, offer.cabinet.label])).entries()],
    [],
  );
  const contracts = useMemo(() => [...new Set(offers.items.map((offer) => offer.contract))], []);

  const visible = offers.items.filter(
    (offer) =>
      (cabinet === ALL || offer.cabinet.theme === cabinet) && (contract === ALL || offer.contract === contract),
  );

  return (
    <section id="offres" className={styles.section} aria-labelledby="offers-title">
      <h2 id="offers-title" className={styles.title}>
        {offers.title}
      </h2>

      <div className={styles.filters}>
        <div className={styles.group} role="group" aria-label="Filtrer par cabinet">
          <FilterButton active={cabinet === ALL} onClick={() => setCabinet(ALL)}>
            {offers.filters.cabinetsLabel}
          </FilterButton>
          {cabinets.map(([theme, label]) => (
            <FilterButton key={theme} active={cabinet === theme} onClick={() => setCabinet(theme)}>
              {label}
            </FilterButton>
          ))}
        </div>

        <span className={styles.separator} aria-hidden="true" />

        <div className={styles.group} role="group" aria-label="Filtrer par type de contrat">
          <FilterButton active={contract === ALL} onClick={() => setContract(ALL)}>
            {offers.filters.contractsLabel}
          </FilterButton>
          {contracts.map((item) => (
            <FilterButton key={item} active={contract === item} onClick={() => setContract(item)}>
              {item}
            </FilterButton>
          ))}
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className={styles.grid}>
          {visible.map((offer) => (
            <li key={offer.id}>
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
                  href={`${spontaneous.cta.href}?subject=${encodeURIComponent(`Candidature — ${offer.title}`)}`}
                  variant="hyovet"
                  className={styles.apply}
                  aria-label={`${offers.applyLabel} à l'offre ${offer.title}`}
                >
                  {offers.applyLabel}
                </ButtonLink>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>{offers.filters.empty}</p>
      )}

      <aside className={styles.banner} aria-labelledby="spontaneous-title" data-reveal>
        <div>
          <p id="spontaneous-title" className={styles.bannerTitle}>
            {spontaneous.title}
          </p>
          <p className={styles.bannerSubtitle}>{spontaneous.subtitle}</p>
        </div>
        <ButtonLink href={spontaneous.cta.href} variant="white">
          {spontaneous.cta.label}
        </ButtonLink>
      </aside>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className={styles.filter} aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  );
}
