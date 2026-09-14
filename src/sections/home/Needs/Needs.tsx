import { ImageCard } from "@/components/ui/ImageCard/ImageCard";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { needs } from "@/content/home";
import styles from "./Needs.module.scss";

export function Needs() {
  return (
    <section className={styles.section} aria-labelledby="needs-title">
      <SectionHeading id="needs-title" title={needs.title} subtitle={needs.subtitle} />
      <div className={styles.grid}>
        {needs.items.map((item) => (
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
