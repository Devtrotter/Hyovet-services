import Image from "next/image";
import { cx } from "@/lib/format";
import { HeroVideo } from "./HeroVideo";
import styles from "./MediaHero.module.scss";

export interface MediaHeroProps {
  id: string;
  titleLines: string[];
  subtitle: string;
  poster: string;
  video?: { webm: string; mp4: string };
  /** `home` : grand hero chevauché par les chiffres clés · `page` : bandeau des pages internes */
  variant?: "home" | "page";
}

/** Hero média (image prioritaire + vidéo différée) partagé par toutes les pages. */
export function MediaHero({ id, titleLines, subtitle, poster, video, variant = "page" }: MediaHeroProps) {
  return (
    <section className={cx(styles.hero, styles[variant])} aria-labelledby={id}>
      <div className={styles.media}>
        {/* Première image de la vidéo : affichée immédiatement (LCP), la vidéo prend le relais en fondu. */}
        <Image
          src={poster}
          alt=""
          fill
          preload
          fetchPriority="high"
          quality={60}
          sizes="(min-width: 1440px) 1440px, 100vw"
          className={styles.poster}
        />
        {video && <HeroVideo webm={video.webm} mp4={video.mp4} />}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 id={id} className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
