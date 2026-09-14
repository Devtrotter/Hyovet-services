import { FiMapPin } from "react-icons/fi";
import { GoogleMap } from "@/components/sections/Zones/GoogleMap";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { cabinetContacts, network } from "@/content/contact";
import styles from "./NetworkMap.module.scss";

/** "Deux cabinets, un même réseau" : une carte par cabinet, chacune pointée sur son adresse. */
export function NetworkMap() {
  return (
    <section className={styles.section} aria-labelledby="network-title">
      <SectionHeading id="network-title" title={network.title} subtitle={network.subtitle} align="left" />
      <div className={styles.grid}>
        {cabinetContacts.map((cabinet) => (
          <figure key={cabinet.theme} className={styles.item} data-theme={cabinet.theme}>
            <GoogleMap view={cabinet.map} title={`Carte : ${cabinet.title}`} className={styles.map} />
            <figcaption className={styles.caption}>
              <FiMapPin className={styles.pin} aria-hidden />
              <span>
                <strong>{cabinet.title}</strong>
                <br />
                {cabinet.address.join(", ")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
