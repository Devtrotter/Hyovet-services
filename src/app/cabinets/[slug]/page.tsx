import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { IntroSplit } from "@/components/sections/IntroSplit/IntroSplit";
import { TeamSection } from "@/components/sections/TeamSection/TeamSection";
import { ValuesSection } from "@/components/sections/ValuesSection/ValuesSection";
import { Zones } from "@/components/sections/Zones/Zones";
import { ContactBanner } from "@/components/ui/ContactBanner/ContactBanner";
import { cabinetPages, getCabinetPage } from "@/content/cabinets";
import { contactBanner } from "@/content/site";
import { absoluteUrl, breadcrumbJsonLd, cabinetId, organizationId, pageMetadata, serializeJsonLd, teamJsonLd } from "@/lib/seo";
import { CabinetHero } from "@/sections/cabinets/CabinetHero/CabinetHero";
import { CabinetInfoCard } from "@/sections/cabinets/CabinetInfoCard/CabinetInfoCard";
import styles from "../cabinets.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
  return cabinetPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/cabinets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getCabinetPage(slug);
  if (!page) return {};
  return pageMetadata({
    title: `${page.name} — ${page.hero.title}`,
    description: page.seoDescription,
    path: `/cabinets/${slug}`,
  });
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd(breadcrumb),
      {
        "@type": "VeterinaryCare",
        "@id": cabinetId(slug),
        name: page.name,
        url: absoluteUrl(`/cabinets/${slug}`),
        description: page.seoDescription,
        logo: absoluteUrl(page.about.logo.src),
        parentOrganization: { "@id": organizationId },
        address: { "@type": "PostalAddress", addressLocality: page.about.location, addressCountry: "FR" },
        areaServed: page.zones.items.flatMap((zone) => zone.departments.map((department) => department.name)),
        knowsAbout: page.about.specialties,
      },
      ...teamJsonLd(page.team, cabinetId(slug)),
    ],
  };

  return (
    <div className={styles[page.theme]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
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
      <div className={`${styles.contact} ${styles.contactCabinet}`}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </div>
  );
}
