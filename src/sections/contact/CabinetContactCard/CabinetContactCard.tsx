import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { CabinetContact } from "@/content/contact";
import styles from "./CabinetContactCard.module.scss";

type CabinetContactCardProps = Pick<CabinetContact, "theme" | "logo" | "title" | "address" | "hours" | "note" | "phone" | "email">;

/** Coordonnées d'un cabinet : logo, adresse, horaires, téléphone et email. */
export function CabinetContactCard({ theme, logo, title, address, hours, note, phone, email }: CabinetContactCardProps) {
  return (
    <article className={styles.card} data-theme={theme} data-reveal>
      <div className={styles.header}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes="160px"
          className={styles.logo}
        />
        <h3 className={styles.title}>{title}</h3>
      </div>

      <ul className={styles.infos}>
        <li>
          <FiMapPin className={styles.infoIcon} aria-hidden />
          <address className={styles.address}>
            {address[0]}
            <br />
            {address[1]}
          </address>
        </li>
        <li>
          <FiClock className={styles.infoIcon} aria-hidden />
          <span>
            {hours}
            <br />
            <strong className={styles.note}>{note}</strong>
          </span>
        </li>
      </ul>

      <div className={styles.actions}>
        <ButtonLink
          href={phone.href}
          variant={theme}
          icon={<FaPhone />}
          className={styles.phone}
          aria-label={`Appeler ${title} au ${phone.label}`}
        >
          {phone.label}
        </ButtonLink>
        <a href={email.href} className={styles.email}>
          <FiMail aria-hidden />
          <span>{email.label}</span>
        </a>
      </div>
    </article>
  );
}
