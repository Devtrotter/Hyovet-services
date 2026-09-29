import type { ReactNode } from "react";
import { cx } from "@/utils/helpers/format";
import styles from "./ContactNotice.module.scss";

interface ContactNoticeProps {
  id?: string;
  /** `warning` (orange, par défaut) ou `info` (bleu) */
  tone?: "warning" | "info";
  icon: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Encart d'information affiché sous un champ ou sous l'en-tête du formulaire. */
export function ContactNotice({ id, tone = "warning", icon, className, children }: ContactNoticeProps) {
  return (
    <p id={id} className={cx(styles.notice, tone === "info" && styles.noticeInfo, className)} role="note">
      {icon}
      <span>{children}</span>
    </p>
  );
}
