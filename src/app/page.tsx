import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { Needs } from "@/components/pages/home/Needs/Needs";
import { KeyFigures } from "@/components/shared/organisms/KeyFigures/KeyFigures";
import { MediaHero } from "@/components/shared/organisms/MediaHero/MediaHero";
import { NewsSection } from "@/components/shared/organisms/NewsSection/NewsSection";
import { Zones } from "@/components/shared/organisms/Zones/Zones";
import { homeHero } from "@/utils/data/content/home/hero";
import { keyFigures } from "@/utils/data/content/home/key-figures";
import { needs } from "@/utils/data/content/home/needs";
import { news } from "@/utils/data/content/home/news";
import { zones } from "@/utils/data/content/home/zones";
import { homeSeo } from "@/utils/data/seo/home";

export const metadata = homeSeo;

export default function HomePage() {
  return (
    <>
      <MediaHero id="hero-title" variant="home" {...homeHero} />
      <KeyFigures figures={keyFigures} />
      <Needs {...needs} />
      <Zones id="zones-title" title={zones.title} subtitle={zones.subtitle} items={zones.items} />
      <NewsSection id="news-title" title={news.title} items={news.items} />
      <ScrollReveal />
    </>
  );
}
