import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MediaHero } from "@/components/sections/MediaHero/MediaHero";
import { KeyFigures } from "@/components/sections/KeyFigures/KeyFigures";
import { NewsSection } from "@/components/sections/NewsSection/NewsSection";
import { hero, keyFigures, news, zones } from "@/content/home";
import { site } from "@/content/site";
import { baseOpenGraph } from "@/lib/seo";
import { Needs } from "@/sections/home/Needs/Needs";
import { Zones } from "@/components/sections/Zones/Zones";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    title: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <MediaHero id="hero-title" variant="home" {...hero} />
      <KeyFigures figures={keyFigures} />
      <Needs />
      <div className={styles.zones}>
        <Zones id="zones-title" title={zones.title} subtitle={zones.subtitle} items={zones.items} />
      </div>
{/*      <NewsSection id="news-title" title={news.title} items={news.items} />*/}
      <ScrollReveal />
    </>
  );
}
