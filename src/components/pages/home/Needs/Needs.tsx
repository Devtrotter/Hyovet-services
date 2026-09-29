import { SectionHeading } from "@/components/shared/atoms/SectionHeading/SectionHeading";
import { ImageCard } from "@/components/shared/molecules/ImageCard/ImageCard";
import type { NeedCard } from "@/utils/types/sections";
import styles from "./Needs.module.scss";

interface NeedsProps {
  title: string;
  subtitle: string;
  items: NeedCard[];
}

/** Entrées de parcours de l'accueil : trois cartes photo en panneau verre dépoli. */
export function Needs({ title, subtitle, items }: NeedsProps) {
  return (
    <section className={styles.section} aria-labelledby="needs-title">
      <SectionHeading id="needs-title" title={title} subtitle={subtitle} />
      <div className={styles.grid}>
        {items.map((item) => (
          <ImageCard
            key={item.title}
            {...item}
            variant="glass"
            sizes="(max-width: 512px) 100vw, (max-width: 880px) 50vw, 380px"
          />
        ))}
      </div>
    </section>
  );
}
