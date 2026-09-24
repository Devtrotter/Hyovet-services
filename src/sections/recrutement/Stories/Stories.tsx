import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { stories } from "@/content/recrutement";
import styles from "./Stories.module.scss";

/** "La filière porcine, sans les clichés" : récits alternés visuel / texte. */
export function Stories() {
  return (
    <section className={styles.section} aria-labelledby="stories-title">
      <div className={styles.inner}>
        <SectionHeading id="stories-title" title={stories.title} subtitle={stories.subtitle} />
        <div className={styles.list}>
          {stories.items.map((story, index) => (
            <article key={`${story.title}-${index}`} className={styles.item} data-reveal>
              <div className={styles.media}>
                {story.image ? (
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    quality={75}
                    sizes="(max-width: 880px) 100vw, 617px"
                    className={styles.image}
                  />
                ) : (
                  // Visuel à fournir : aplat de remplacement, comme sur la maquette
                  <div className={styles.placeholder} aria-hidden="true" />
                )}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{story.title}</h3>
                <p className={styles.text}>{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
