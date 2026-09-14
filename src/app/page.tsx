import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MediaHero } from "@/components/sections/MediaHero/MediaHero";
import { KeyFigures } from "@/components/sections/KeyFigures/KeyFigures";
import { NewsSection } from "@/components/sections/NewsSection/NewsSection";
import { hero, keyFigures, news, zones } from "@/content/home";
import { site } from "@/content/site";
import { Needs } from "@/sections/home/Needs/Needs";
import { Zones } from "@/components/sections/Zones/Zones";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phone.label,
  email: site.email.label,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Parc Activités du Carrefour",
    postalCode: "22640",
    addressLocality: "Plestan",
    addressCountry: "FR",
  },
  areaServed: ["Bretagne", "Pays de la Loire"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <MediaHero id="hero-title" variant="home" {...hero} />
      <KeyFigures figures={keyFigures} />
      <Needs />
      <Zones id="zones-title" title={zones.title} subtitle={zones.subtitle} items={zones.items} />
      <NewsSection id="news-title" title={news.title} items={news.items} />
      <ScrollReveal />
    </>
  );
}
