import Image from "next/image";
import Link from "next/link";
import { cabinets } from "@/utils/data/content/shared/cabinets";
import styles from "./FooterCabinets.module.scss";

/** Les deux cabinets du groupe, avec leur logo et leur accroche. */
export function FooterCabinets() {
  return (
    <ul className={styles.cabinets}>
      {cabinets.map((cabinet) => (
        <li key={cabinet.name}>
          <Link href={cabinet.href} className={styles.cabinet}>
            <Image
              src={cabinet.logo.src}
              alt={cabinet.name}
              width={cabinet.logo.width}
              height={cabinet.logo.height}
              sizes="100px"
              className={styles.cabinetLogo}
            />
            <span className={styles.cabinetTagline}>{cabinet.tagline}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
