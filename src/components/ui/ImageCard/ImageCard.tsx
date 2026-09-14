import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { NavLink } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./ImageCard.module.scss";

export interface ImageCardProps {
  title: string;
  description: string;
  cta: NavLink;
  image: { src: string; alt: string };
  /** `glass` : panneau verre dépoli (accueil) · `overlay` : texte sur dégradé (expertise) */
  variant?: "glass" | "overlay";
  /** `lg` : carte mise en avant (bouton et marges plus généreux) */
  size?: "md" | "lg";
  sizes: string;
  className?: string;
}

/** Carte photo avec titre, description et bouton — réutilisée sur l'accueil et la page Expertise. */
export function ImageCard({
  title,
  description,
  cta,
  image,
  variant = "glass",
  size = "lg",
  sizes,
  className,
}: ImageCardProps) {
  return (
    <article className={cx(styles.card, styles[variant], styles[size], className)} data-reveal>
      <Image src={image.src} alt={image.alt} fill quality={75} sizes={sizes} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ButtonLink
          href={cta.href}
          variant="light"
          size={size}
          icon={<FiExternalLink />}
          className={styles.cta}
        >
          {cta.label}
        </ButtonLink>
      </div>
    </article>
  );
}
