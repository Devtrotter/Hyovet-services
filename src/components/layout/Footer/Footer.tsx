import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { cabinets, footerAddresses, footerNav, legalLinks, site, socials } from "@/content/site";
import styles from "./Footer.module.scss";

const socialIcons: Record<(typeof socials)[number]["network"], IconType> = {
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

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
              <li>
                <a href={site.recruitmentEmail.href} className={styles.link}>
                  <span className={styles.glyph} aria-hidden="true">
                    ✉
                  </span>{" "}
                  {site.recruitmentEmail.label}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.heading}>Adresses</h2>
            <div className={styles.addresses}>
              {footerAddresses.map(({ name, address }) => (
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

          {/* Newsletter masquée tant qu'elle n'est pas branchée à un outil d'envoi (RGPD : aucune inscription
              ne doit être annoncée sans être réellement enregistrée). Réactiver avec <NewsletterForm /> et
              un texte d'information (finalité, désinscription, lien vers la politique de confidentialité). */}
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
          {socials.map(({ network, label, href }) => {
            const Icon = socialIcons[network];
            return (
              <li key={network}>
                <a
                  href={href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} sur ${label}`}
                >
                  <Icon aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
