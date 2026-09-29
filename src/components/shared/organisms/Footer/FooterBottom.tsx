import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { legalLinks, siteConfig, socials } from "@/utils/config/site";
import styles from "./FooterBottom.module.scss";

const socialIcons: Record<(typeof socials)[number]["network"], IconType> = {
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

/** Barre basse : copyright, liens légaux et réseaux sociaux. */
export function FooterBottom({ year }: { year: number }) {
  return (
    <div className={styles.bottom}>
      <p className={styles.copyright}>
        © {year} {siteConfig.name} — Tous droits réservés
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
                aria-label={`${siteConfig.name} sur ${label}`}
              >
                <Icon aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
