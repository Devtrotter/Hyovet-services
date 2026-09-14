import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { IntroSplit } from "@/components/sections/IntroSplit/IntroSplit";
import { TeamSection } from "@/components/sections/TeamSection/TeamSection";
import { ValuesSection } from "@/components/sections/ValuesSection/ValuesSection";
import { ContactBanner } from "@/components/ui/ContactBanner/ContactBanner";
import { groupPage } from "@/content/cabinets";
import { breadcrumbJsonLd, organizationId, pageMetadata, serializeJsonLd, teamJsonLd } from "@/lib/seo";
import { contactBanner } from "@/content/site";
import { CabinetsShowcase } from "@/sections/cabinets/CabinetsShowcase/CabinetsShowcase";
import { GroupHero } from "@/sections/cabinets/GroupHero/GroupHero";
import { Timeline } from "@/sections/cabinets/Timeline/Timeline";
import styles from "./cabinets.module.scss";

export const metadata: Metadata = pageMetadata({
  title: "Nos cabinets vétérinaires porcins — Hyovet & Selas de Surfonds",
  description: groupPage.hero.subtitle,
  path: "/cabinets",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { label: "Accueil", href: "/" },
      { label: "Cabinets", href: "/cabinets" },
    ]),
    ...teamJsonLd(groupPage.team, organizationId),
  ],
};

export default function CabinetsPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Cabinets", href: "/cabinets" },
    { label: groupPage.breadcrumbLabel, href: "/cabinets" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <GroupHero breadcrumb={breadcrumb} {...groupPage.hero} />
      <IntroSplit
        id="adn-title"
        title={groupPage.adn.title}
        paragraphs={groupPage.adn.paragraphs}
        aside={<Timeline items={groupPage.adn.timeline} />}
      />
      <ValuesSection {...groupPage.values} />
      <TeamSection {...groupPage.team} variant="plain" />
      <CabinetsShowcase {...groupPage.cabinets} />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
