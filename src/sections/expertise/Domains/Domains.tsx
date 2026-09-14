import { ImageCard } from "@/components/ui/ImageCard/ImageCard";
import { domains } from "@/content/expertise";
import styles from "./Domains.module.scss";

export function Domains() {
  return (
    <section className={styles.section} aria-label="Nos domaines d'expertise">
      {domains.map((domain, index) => {
        // La première colonne (plus large) accueille les cartes mises en avant.
        const featured = index % 3 === 0;
        return (
          <ImageCard
            key={`${domain.title}-${index}`}
            {...domain}
            variant="overlay"
            size={featured ? "lg" : "md"}
            sizes={
              featured
                ? "(max-width: 512px) 100vw, (max-width: 880px) 50vw, 40vw"
                : "(max-width: 512px) 100vw, (max-width: 880px) 50vw, 30vw"
            }
          />
        );
      })}
    </section>
  );
}
