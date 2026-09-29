import type { ReactNode } from "react";
import type { JobOffersContent } from "@/utils/types/recrutement";
import styles from "./JobFilters.module.scss";

const ALL = "all";

interface JobFiltersProps {
  labels: JobOffersContent["filters"];
  /** Paires [thème, libellé] déduites des offres */
  cabinets: Array<[string, string]>;
  contracts: string[];
  cabinet: string;
  contract: string;
  onCabinet: (value: string) => void;
  onContract: (value: string) => void;
}

/** Deux groupes de boutons-filtres : cabinet et type de contrat. */
export function JobFilters({
  labels,
  cabinets,
  contracts,
  cabinet,
  contract,
  onCabinet,
  onContract,
}: JobFiltersProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.group} role="group" aria-label="Filtrer par cabinet">
        <FilterButton active={cabinet === ALL} onClick={() => onCabinet(ALL)}>
          {labels.cabinetsLabel}
        </FilterButton>
        {cabinets.map(([theme, label]) => (
          <FilterButton key={theme} active={cabinet === theme} onClick={() => onCabinet(theme)}>
            {label}
          </FilterButton>
        ))}
      </div>

      <span className={styles.separator} aria-hidden="true" />

      <div className={styles.group} role="group" aria-label="Filtrer par type de contrat">
        <FilterButton active={contract === ALL} onClick={() => onContract(ALL)}>
          {labels.contractsLabel}
        </FilterButton>
        {contracts.map((item) => (
          <FilterButton key={item} active={contract === item} onClick={() => onContract(item)}>
            {item}
          </FilterButton>
        ))}
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" className={styles.filter} aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  );
}
