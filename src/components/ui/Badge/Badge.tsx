import type { Accent, Tone } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./Badge.module.scss";

interface BadgeProps {
  color: Accent | Tone;
  children: React.ReactNode;
  className?: string;
}

/** Pastille pilule : départements (accordéon) et catégories (actualités). */
export function Badge({ color, children, className }: BadgeProps) {
  return <span className={cx(styles.badge, styles[color], className)}>{children}</span>;
}
