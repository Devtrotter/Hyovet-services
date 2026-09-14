import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import { contactLink, mainNav } from "@/content/site";
import styles from "./Header.module.scss";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Hyovet Services — accueil">
          <Image
            src="/images/logos/hyovet-services-mark.png"
            alt=""
            width={60}
            height={58}
            className={styles.mark}
            loading="eager"
          />
          <span className={styles.brandName}>
            <strong>Hyovet</strong> Service
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {mainNav.map((link) =>
              link.children ? (
                <li key={link.href} className={styles.hasDropdown}>
                  <Link href={link.href} className={styles.navLink} aria-haspopup="true">
                    {link.label}
                  </Link>
                  {/* Ouverture CSS au survol et au focus clavier (:focus-within), sans JavaScript */}
                  <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={styles.dropdownLink}>
                            <span className={styles.dropdownLabel}>{child.label}</span>
                            {child.description && (
                              <span className={styles.dropdownDescription}>{child.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {link.allLabel && (
                      <Link href={link.href} className={styles.dropdownAll}>
                        {link.allLabel} <FiArrowRight aria-hidden />
                      </Link>
                    )}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ButtonLink href={contactLink.href} variant="sky" className={styles.cta}>
          {contactLink.label}
        </ButtonLink>

        <MobileNav links={[...mainNav, contactLink]} />
      </div>
    </header>
  );
}
