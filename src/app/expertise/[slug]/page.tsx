import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { DetailHero } from "@/components/pages/expertise-detail/DetailHero/DetailHero";
import { KeyFigures } from "@/components/shared/organisms/KeyFigures/KeyFigures";
import { NewsSection } from "@/components/shared/organisms/NewsSection/NewsSection";
import { ContactBanner } from "@/components/shared/molecules/ContactBanner/ContactBanner";
import { Services } from "@/components/pages/expertise-detail/Services/Services";
import { Situations } from "@/components/pages/expertise-detail/Situations/Situations";
import { expertiseBreadcrumb, expertiseDetails, getExpertiseDetail } from "@/utils/data/content/expertise-detail";
import { contactBanner } from "@/utils/data/content/shared/contact-banner";
import { expertiseDetailJsonLd, expertiseDetailSeo } from "@/utils/data/seo/expertise-detail";
import { serializeJsonLd } from "@/utils/helpers/seo";
import styles from "./page.module.scss";

// Seules les expertises connues sont pré-rendues ; toute autre URL renvoie une 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return expertiseDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/expertise/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const expertise = getExpertiseDetail(slug);
  return expertise ? expertiseDetailSeo(expertise) : {};
}

export default async function ExpertiseDetailPage({ params }: PageProps<"/expertise/[slug]">) {
  const { slug } = await params;
  const expertise = getExpertiseDetail(slug);
  if (!expertise) notFound();

  const jsonLd = serializeJsonLd(expertiseDetailJsonLd(expertise));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <DetailHero id="detail-title" breadcrumb={expertiseBreadcrumb(expertise)} {...expertise.hero} />
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
