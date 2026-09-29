import "server-only";
import { publicationHref } from "@/utils/data/content/publication";
import { organizationId } from "@/utils/helpers/jsonLd";
import { absoluteUrl, pageMetadata } from "@/utils/helpers/seo";
import type { PublicationDetail } from "@/utils/types/publication";

export const publicationSeo = (publication: PublicationDetail) =>
  pageMetadata({
    title: publication.title,
    description: publication.summary,
    path: publicationHref(publication.slug),
  });

/** Article scientifique : auteurs, mots-clés et éditeur relié à l'organisation du site. */
export const publicationJsonLd = (publication: PublicationDetail) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: publication.title,
  abstract: publication.summary,
  datePublished: publication.date,
  url: absoluteUrl(publicationHref(publication.slug)),
  keywords: publication.tags.join(", "),
  author: publication.authors.map((author) => ({ "@type": "Person", name: author.name, jobTitle: author.role })),
  publisher: { "@id": organizationId },
});
