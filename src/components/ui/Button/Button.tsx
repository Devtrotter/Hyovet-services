import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/format";
import styles from "./Button.module.scss";

type Variant = "sky" | "light" | "primary" | "outline" | "ocean" | "white" | "outlineLight" | "hyovet" | "surfonds" | "brand";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  /** Taille des boutons pilule "light" : `lg` (72px maquette) ou `md` (60px) */
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
};

/** Bouton pilule réutilisable (CTA header, cartes, bandeaux…). */
export function ButtonLink({ variant = "sky", size = "lg", icon, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cx(styles.button, styles[variant], styles[size], className)} {...props}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Link>
  );
}
