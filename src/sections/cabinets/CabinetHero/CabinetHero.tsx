import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { CabinetPage, NavLink } from "@/content/types";
import styles from "./CabinetHero.module.scss";

interface CabinetHeroProps extends Pick<CabinetPage, "hero"> {
  breadcrumb: NavLink[];
}

/** Hero d'un cabinet : texte à gauche, visuel à droite. */
export function CabinetHero({ breadcrumb, hero }: CabinetHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="cabinet-title">
      <div className={styles.content}>
        <Breadcrumb items={breadcrumb} className={styles.breadcrumb} />
        <h1 id="cabinet-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <ButtonLink href={hero.cta.href} variant="brand" className={styles.cta}>
          {hero.cta.label}
        </ButtonLink>
      </div>
      <div className={styles.media}>
        {hero.image && (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            sizes="(max-width: 880px) 100vw, 40vw"
            className={styles.image}
          />
        )}
      </div>
    </section>
  );
}
