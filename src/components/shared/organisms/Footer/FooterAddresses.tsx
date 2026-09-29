import { addresses } from "@/utils/data/content/shared/coordonnees";
import styles from "./FooterAddresses.module.scss";

const postalAddresses = [
  { name: "Hyovet & Hyovet Services", address: addresses.hyovet },
  { name: "Selas de Surfonds", address: addresses.surfonds },
];

/** Adresses postales des deux sites. */
export function FooterAddresses() {
  return (
    <div className={styles.column}>
      <h2 className={styles.heading}>Adresses</h2>
      <div className={styles.addresses}>
        {postalAddresses.map(({ name, address }) => (
          <address key={name}>
            <strong>{name}</strong>
            <br />
            {address.street}
            <br />
            {address.postalCode} {address.city}
          </address>
        ))}
      </div>
    </div>
  );
}
