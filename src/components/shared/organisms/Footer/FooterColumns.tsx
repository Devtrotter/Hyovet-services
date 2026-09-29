import Link from "next/link";
import { footerNav, siteConfig } from "@/utils/config/site";
import { FooterAddresses } from "./FooterAddresses";
import styles from "./FooterColumns.module.scss";

const contactLinks = [
  { glyph: "✆", ...siteConfig.phone },
  { glyph: "✉", ...siteConfig.email },
  { glyph: "✉", ...siteConfig.recruitmentEmail },
];

/** Plan du site, moyens de contact et adresses postales. */
export function FooterColumns() {
  return (
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
          {contactLinks.map(({ glyph, href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                <span className={styles.glyph} aria-hidden="true">
                  {glyph}
                </span>{" "}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <FooterAddresses />
    </div>
  );
}
