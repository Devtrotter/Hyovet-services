import Image from "next/image";
import logo from "@public/images/logos/hyovet-services.png";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FooterBottom } from "./FooterBottom";
import { FooterCabinets } from "./FooterCabinets";
import { FooterColumns } from "./FooterColumns";

export function Footer() {
  const year = 2026;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Hyovet Services — accueil">
          <Image src={logo} alt="Hyovet Services" width={127} height={43} />
        </Link>

        <FooterCabinets />
        <FooterColumns />

        {/* Newsletter masquée tant qu'elle n'est pas branchée à un outil d'envoi (RGPD : aucune inscription
            ne doit être annoncée sans être réellement enregistrée). Réactiver avec <NewsletterForm /> et
            un texte d'information (finalité, désinscription, lien vers la politique de confidentialité). */}
      </div>

      <FooterBottom year={year} />
    </footer>
  );
}
