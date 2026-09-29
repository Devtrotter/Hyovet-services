import Image from "next/image";
import logoMark from "@public/images/logos/hyovet-services-mark.png";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/atoms/Button/Button";
import { contactLink, mainNav } from "@/utils/config/site";
import styles from "./Header.module.scss";
import { HeaderNav } from "./HeaderNav";
import { HeaderShell } from "./HeaderShell";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <HeaderShell>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Hyovet Services — accueil">
          <Image
            src={logoMark}
            alt=""
            width={60}
            height={58}
            className={styles.mark}
            loading="eager"
          />
          <span className={styles.brandName}>
            <strong>Hyovet</strong> Services
          </span>
        </Link>

        <HeaderNav />

        <ButtonLink href={contactLink.href} variant="sky" className={styles.cta}>
          {contactLink.label}
        </ButtonLink>

        <MobileNav links={[...mainNav, contactLink]} />
      </div>
    </HeaderShell>
  );
}
