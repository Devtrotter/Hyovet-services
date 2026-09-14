import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DetailHero } from "@/components/sections/DetailHero/DetailHero";
import { KeyFigures } from "@/components/sections/KeyFigures/KeyFigures";
import { NewsSection } from "@/components/sections/NewsSection/NewsSection";
import { ContactBanner } from "@/components/ui/ContactBanner/ContactBanner";
import { expertiseDetails, expertiseHref, getExpertiseDetail } from "@/content/expertises";
import { contactBanner, site } from "@/content/site";
import { Services } from "@/sections/expertise-detail/Services/Services";
import { Situations } from "@/sections/expertise-detail/Situations/Situations";
import styles from "./page.module.scss";

// Seules les expertises connues sont pré-rendues ; toute autre URL renvoie une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return expertiseDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/expertise/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const expertise = getExpertiseDetail(slug);
  if (!expertise) return {};

  return {
    title: `${expertise.name} — ${expertise.hero.title}`,
    description: expertise.seoDescription,
    alternates: { canonical: expertiseHref(slug) },
    openGraph: { title: `${expertise.name} | ${site.name}`, description: expertise.seoDescription },
  };
}

export default async function ExpertiseDetailPage({ params }: PageProps<"/expertise/[slug]">) {
  const { slug } = await params;
  const expertise = getExpertiseDetail(slug);
  if (!expertise) notFound();

  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Nos Expertises", href: "/expertise" },
    { label: expertise.name, href: expertiseHref(slug) },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `${site.url}${item.href}`,
        })),
      },
      {
        "@type": "Service",
        name: expertise.name,
        description: expertise.seoDescription,
        provider: { "@type": "VeterinaryCare", name: site.name, url: site.url },
        serviceType: expertise.services.items.map((item) => item.title),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <DetailHero id="detail-title" breadcrumb={breadcrumb} {...expertise.hero} />
      <KeyFigures figures={expertise.figures} variant="compact" label={`${expertise.name} en chiffres`} />
      <Services {...expertise.services} />
      <Situations {...expertise.situations} />
      <NewsSection id="proofs-title" variant="proofs" {...expertise.proofs} />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
