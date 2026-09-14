import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaPlay } from "react-icons/fa6";
import { addresses, cabinets, footerNav, legalLinks, site, socials } from "@/content/site";
import styles from "./Footer.module.scss";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = 2026;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Hyovet Services — accueil">
          <Image src="/images/logos/hyovet-services.png" alt="Hyovet Services" width={127} height={43} />
        </Link>

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

        <div className={styles.columns}>
          <nav className={styles.sitemap} aria-label="Plan du site">
            {footerNav.map((column, index) => (
              <ul key={index} className={styles.links}>
                {column.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <div className={styles.column}>
            <h2 className={styles.heading}>Nous contacter</h2>
            <ul className={styles.contact}>
              <li>
                <a href={site.phone.href} className={styles.link}>
                  <span className={styles.glyph} aria-hidden="true">
                    ✆
                  </span>{" "}
                  {site.phone.label}
                </a>
              </li>
              <li>
                <a href={site.email.href} className={styles.link}>
                  <span className={styles.glyph} aria-hidden="true">
                    ✉
                  </span>{" "}
                  {site.email.label}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Adresses</h2>
            <address className={styles.addresses}>
              {addresses.map((address) => (
                <span key={address}>{address}</span>
              ))}
            </address>
          </div>

          <div className={`${styles.column} ${styles.newsletter}`}>
            <h2 className={styles.heading}>Newsletter sanitaire</h2>
            <NewsletterForm />
            <p className={styles.legal}>
              En vous inscrivant vous acceptez notre politique de confidentialité (RGPD).
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} {site.name} — Tous droits réservés
          {legalLinks.map((link) => (
            <span key={link.href}>
              {" · "}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>
        <ul className={styles.socials}>
          <li>
            <a href={socials.linkedin} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden />
            </a>
          </li>
          <li>
            <a href={socials.youtube} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaPlay aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
