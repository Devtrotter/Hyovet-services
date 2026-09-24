import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { NewsSection } from "@/components/sections/NewsSection/NewsSection";
import { ContactBanner } from "@/components/ui/ContactBanner/ContactBanner";
import {
  articleLabels,
  getPublication,
  publicationDetails,
  publicationHref,
  publications,
} from "@/content/publications";
import { contactBanner } from "@/content/site";
import { absoluteUrl, organizationId, pageMetadata, serializeJsonLd } from "@/lib/seo";
import { ArticleBody } from "@/sections/publications/ArticleBody/ArticleBody";
import { ArticleHero } from "@/sections/publications/ArticleHero/ArticleHero";
import { NewsletterSignup } from "@/sections/publications/NewsletterSignup/NewsletterSignup";
import styles from "./article.module.scss";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return publicationDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublication(slug);
  if (!publication) return {};

  return pageMetadata({
    title: publication.title,
    description: publication.summary,
    path: publicationHref(slug),
  });
}

export default async function PublicationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const publication = getPublication(slug);
  if (!publication) notFound();

  // Publications partageant au moins une thématique, à défaut les plus récentes.
  const related = publications.filter((item) => item.href !== publicationHref(slug)).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: publication.title,
    abstract: publication.summary,
    datePublished: publication.date,
    url: absoluteUrl(publicationHref(slug)),
    keywords: publication.tags.join(", "),
    author: publication.authors.map((author) => ({ "@type": "Person", name: author.name, jobTitle: author.role })),
    publisher: { "@id": organizationId },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <ArticleHero id="publication-title" {...publication} />
      <ArticleBody blocks={publication.blocks} authors={publication.authors} file={publication.document} />
      <NewsSection id="related-title" title={articleLabels.related} items={related} align="left" />
      <NewsletterSignup />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
