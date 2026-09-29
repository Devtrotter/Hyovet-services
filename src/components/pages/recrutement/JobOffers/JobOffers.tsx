"use client";

import { useMemo, useState } from "react";
import type { JobOffersContent, SpontaneousContent } from "@/utils/types/recrutement";
import { JobFilters } from "./JobFilters";
import { JobOfferCard } from "./JobOfferCard";
import { SpontaneousBanner } from "./SpontaneousBanner";
import styles from "./JobOffers.module.scss";

const ALL = "all";

interface JobOffersProps {
  offers: JobOffersContent;
  spontaneous: SpontaneousContent;
}

/** Liste des offres filtrable par cabinet et par type de contrat. */
export function JobOffers({ offers, spontaneous }: JobOffersProps) {
  const [cabinet, setCabinet] = useState(ALL);
  const [contract, setContract] = useState(ALL);

  // Options déduites des offres : pas de filtre sans offre derrière.
  const cabinets = useMemo(
    () => [...new Map(offers.items.map((offer) => [offer.cabinet.theme, offer.cabinet.label])).entries()],
    [offers.items],
  );
  const contracts = useMemo(() => [...new Set(offers.items.map((offer) => offer.contract))], [offers.items]);

  const visible = offers.items.filter(
    (offer) =>
      (cabinet === ALL || offer.cabinet.theme === cabinet) && (contract === ALL || offer.contract === contract),
  );

  return (
    <section id="offres" className={styles.section} aria-labelledby="offers-title">
      <h2 id="offers-title" className={styles.title}>
        {offers.title}
      </h2>

      <JobFilters
        labels={offers.filters}
        cabinets={cabinets}
        contracts={contracts}
        cabinet={cabinet}
        contract={contract}
        onCabinet={setCabinet}
        onContract={setContract}
      />

      {visible.length > 0 ? (
        <ul className={styles.grid}>
          {visible.map((offer) => (
            <li key={offer.id}>
              <JobOfferCard offer={offer} applyLabel={offers.applyLabel} applyHref={spontaneous.cta.href} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>{offers.filters.empty}</p>
      )}

      <SpontaneousBanner content={spontaneous} />
    </section>
  );
}
