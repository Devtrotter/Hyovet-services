import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { NewsSection } from "@/components/shared/organisms/NewsSection/NewsSection";
import { NewsletterSignup } from "@/components/shared/organisms/NewsletterSignup/NewsletterSignup";
import { ContactBanner } from "@/components/shared/molecules/ContactBanner/ContactBanner";
import { ArticleBody } from "@/components/pages/publication/ArticleBody/ArticleBody";
import { ArticleHero } from "@/components/pages/publication/ArticleHero/ArticleHero";
import { articleLabels, getPublication, publicationDetails, publicationHref, publications } from "@/utils/data/content/publication";
import { newsletter } from "@/utils/data/content/publications/newsletter";
import { contactBanner } from "@/utils/data/content/shared/contact-banner";
import { publicationJsonLd, publicationSeo } from "@/utils/data/seo/publication";
import { serializeJsonLd } from "@/utils/helpers/seo";
import styles from "./page.module.scss";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return publicationDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublication(slug);
  return publication ? publicationSeo(publication) : {};
}

export default async function PublicationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const publication = getPublication(slug);
  if (!publication) notFound();

  // Publications partageant au moins une thématique, à défaut les plus récentes.
  const related = publications.filter((item) => item.href !== publicationHref(slug)).slice(0, 3);
  const jsonLd = serializeJsonLd(publicationJsonLd(publication));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ArticleHero id="publication-title" backLabel={articleLabels.back} {...publication} />
      <ArticleBody
        blocks={publication.blocks}
        authors={publication.authors}
        file={publication.document}
        labels={articleLabels}
      />
      <NewsSection id="related-title" title={articleLabels.related} items={related} align="left" />
      <NewsletterSignup {...newsletter} />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
