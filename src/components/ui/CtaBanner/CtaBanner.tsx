import { FiExternalLink } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { NavLink } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./CtaBanner.module.scss";

interface CtaBannerProps {
  title: string;
  cta: NavLink;
  className?: string;
}

/** Bandeau d'appel à l'action (titre + bouton contour), réutilisable sur toutes les pages. */
export function CtaBanner({ title, cta, className }: CtaBannerProps) {
  return (
    <aside className={cx(styles.banner, className)} data-reveal>
      <p className={styles.title}>{title}</p>
      <ButtonLink href={cta.href} variant="outline" icon={<FiExternalLink />}>
        {cta.label}
      </ButtonLink>
    </aside>
  );
}
