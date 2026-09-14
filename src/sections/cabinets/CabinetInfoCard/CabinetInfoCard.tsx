import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import type { CabinetPage } from "@/content/types";
import styles from "./CabinetInfoCard.module.scss";

/** Fiche d'identité du cabinet : logo, localisation, spécialités. */
export function CabinetInfoCard({ logo, location, specialtiesLabel, specialties }: CabinetPage["about"]) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="240px" />
      </div>
      <p className={styles.location}>
        <FaHouse className={styles.locationIcon} aria-hidden />
        {location}
      </p>
      <h3 className={styles.label}>{specialtiesLabel}</h3>
      <ul className={styles.tags}>
        {specialties.map((specialty) => (
          <li key={specialty} className={styles.tag}>
            {specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}
