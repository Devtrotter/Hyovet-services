import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { IntroSplit } from "@/components/shared/organisms/IntroSplit/IntroSplit";
import { TeamSection } from "@/components/shared/organisms/TeamSection/TeamSection";
import { ValuesSection } from "@/components/shared/organisms/ValuesSection/ValuesSection";
import { ContactBanner } from "@/components/shared/molecules/ContactBanner/ContactBanner";
import { CabinetsShowcase } from "@/components/pages/cabinets/CabinetsShowcase/CabinetsShowcase";
import { GroupHero } from "@/components/pages/cabinets/GroupHero/GroupHero";
import { Timeline } from "@/components/pages/cabinets/Timeline/Timeline";
import { adn } from "@/utils/data/content/cabinets/adn";
import { breadcrumbLabel, hero } from "@/utils/data/content/cabinets/hero";
import { showcase } from "@/utils/data/content/cabinets/showcase";
import { groupTeam } from "@/utils/data/content/cabinets/team";
import { groupValues } from "@/utils/data/content/cabinets/values";
import { contactBanner } from "@/utils/data/content/shared/contact-banner";
import { cabinetsJsonLd, cabinetsSeo } from "@/utils/data/seo/cabinets";
import { serializeJsonLd } from "@/utils/helpers/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = cabinetsSeo;

const breadcrumb = [
  { label: "Accueil", href: "/" },
  { label: "Cabinets", href: "/cabinets" },
  { label: breadcrumbLabel, href: "/cabinets" },
];

export default function CabinetsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(cabinetsJsonLd) }} />
      <GroupHero breadcrumb={breadcrumb} {...hero} />
      <IntroSplit
        id="adn-title"
        title={adn.title}
        paragraphs={adn.paragraphs}
        aside={<Timeline items={adn.timeline} />}
      />
      <ValuesSection {...groupValues} />
      <TeamSection {...groupTeam} variant="plain" />
      <CabinetsShowcase {...showcase} />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
