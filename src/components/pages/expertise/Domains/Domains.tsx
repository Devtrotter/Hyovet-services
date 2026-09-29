import { ImageCard } from "@/components/shared/molecules/ImageCard/ImageCard";
import type { Domain } from "@/utils/types/expertise";
import styles from "./Domains.module.scss";

/** Grille des domaines d'expertise : cartes photo avec texte en surimpression. */
export function Domains({ items }: { items: Domain[] }) {
  return (
    <section className={styles.section} aria-label="Nos domaines d'expertise">
      {items.map((domain, index) => {
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
