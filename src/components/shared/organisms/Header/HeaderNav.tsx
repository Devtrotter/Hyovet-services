import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { mainNav } from "@/utils/config/site";
import styles from "./HeaderNav.module.scss";
import { NavDropdown } from "./NavDropdown";

/** Navigation principale : liens simples et menus déroulants. */
export function HeaderNav() {
  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <ul className={styles.navList}>
        {mainNav.map((link) =>
          link.children ? (
            <NavDropdown key={link.href} className={styles.hasDropdown}>
              <Link href={link.href} className={styles.navLink} aria-haspopup="true">
                {link.label}
              </Link>
              {/* Ouverture CSS au survol et au focus clavier (:focus-within) ; fermeture au clic via NavDropdown */}
              <div className={styles.dropdown}>
                <ul className={styles.dropdownList}>
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className={styles.dropdownLink}>
                        <span className={styles.dropdownLabel}>{child.label}</span>
                        {child.description && <span className={styles.dropdownDescription}>{child.description}</span>}
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
            </NavDropdown>
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
  );
}
