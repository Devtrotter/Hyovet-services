import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button/Button";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { CabinetTheme, NavLink } from "@/content/types";
import styles from "./CabinetsShowcase.module.scss";

interface ShowcaseItem {
  theme: CabinetTheme;
  logo: { src: string; width: number; height: number; alt: string };
  title: string;
  description: string;
  cta: NavLink;
}

interface CabinetsShowcaseProps {
  title: string;
  subtitle: string;
  items: ShowcaseItem[];
}

/** "Deux cabinets, deux personnalités" : une carte par cabinet. */
export function CabinetsShowcase({ title, subtitle, items }: CabinetsShowcaseProps) {
  return (
    <section className={styles.section} aria-labelledby="showcase-title">
      <SectionHeading id="showcase-title" title={title} subtitle={subtitle} className={styles.heading} />
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.theme} className={`${styles.card} ${styles[item.theme]}`} data-reveal>
            <div className={styles.logo}>
              <Image src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} sizes="200px" />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ButtonLink href={item.cta.href} variant={item.theme} className={styles.cta}>
              {item.cta.label}
            </ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}
