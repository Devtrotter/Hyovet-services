import { FaPhone } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { NavLink } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./ContactBanner.module.scss";

interface ContactBannerProps {
  title: string;
  subtitle: string;
  phone: NavLink;
  form: NavLink;
  className?: string;
}

/** Bandeau de prise de contact (téléphone + formulaire). */
export function ContactBanner({ title, subtitle, phone, form, className }: ContactBannerProps) {
  return (
    <aside className={cx(styles.banner, className)} aria-label={title} data-reveal>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.actions}>
        <ButtonLink href={phone.href} variant="white" icon={<FaPhone />} aria-label={`Appeler le ${phone.label}`}>
          {phone.label}
        </ButtonLink>
        <ButtonLink href={form.href} variant="outlineLight">
          {form.label}
        </ButtonLink>
      </div>
    </aside>
  );
}
