import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { IntroSplit } from "@/components/shared/organisms/IntroSplit/IntroSplit";
import { TeamSection } from "@/components/shared/organisms/TeamSection/TeamSection";
import { ValuesSection } from "@/components/shared/organisms/ValuesSection/ValuesSection";
import { Zones } from "@/components/shared/organisms/Zones/Zones";
import { ContactBanner } from "@/components/shared/molecules/ContactBanner/ContactBanner";
import { CabinetHero } from "@/components/pages/cabinet/CabinetHero/CabinetHero";
import { CabinetInfoCard } from "@/components/pages/cabinet/CabinetInfoCard/CabinetInfoCard";
import { cabinetPages, getCabinetPage } from "@/utils/data/content/cabinet";
import { contactBanner } from "@/utils/data/content/shared/contact-banner";
import { cabinetJsonLd, cabinetSeo } from "@/utils/data/seo/cabinet";
import { cx } from "@/utils/helpers/format";
import { serializeJsonLd } from "@/utils/helpers/seo";
import styles from "./page.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
  return cabinetPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/cabinets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getCabinetPage(slug);
  return page ? cabinetSeo(page) : {};
}

export default async function CabinetDetailPage({ params }: PageProps<"/cabinets/[slug]">) {
  const { slug } = await params;
  const page = getCabinetPage(slug);
  if (!page) notFound();

  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Cabinets", href: "/cabinets" },
    { label: page.name, href: `/cabinets/${slug}` },
  ];

  return (
    <div className={styles[page.theme]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(cabinetJsonLd(page, breadcrumb)) }}
      />
      <CabinetHero breadcrumb={breadcrumb} hero={page.hero} />
      <IntroSplit
        id="about-title"
        title={page.about.title}
        paragraphs={page.about.paragraphs}
        aside={<CabinetInfoCard {...page.about} />}
        spacing="afterMedia"
      />
      <ValuesSection {...page.values} />
      <Zones id="cabinet-zones-title" layout="side" {...page.zones} />
      <TeamSection {...page.team} variant="tinted" />
      <div className={cx(styles.contact, styles.contactCabinet)}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </div>
  );
}
