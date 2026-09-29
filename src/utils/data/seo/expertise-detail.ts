import "server-only";
import { expertiseBreadcrumb, expertiseHref } from "@/utils/data/content/expertise-detail";
import { breadcrumbJsonLd, organizationId } from "@/utils/helpers/jsonLd";
import { absoluteUrl, pageMetadata } from "@/utils/helpers/seo";
import type { ExpertiseDetail } from "@/utils/types/expertise";

export const expertiseDetailSeo = (expertise: ExpertiseDetail) =>
  pageMetadata({
    title: `${expertise.name} — ${expertise.hero.title}`,
    description: expertise.seoDescription,
    path: expertiseHref(expertise.slug),
  });

/** Fil d'Ariane + service proposé, reliés à l'organisation du site. */
export const expertiseDetailJsonLd = (expertise: ExpertiseDetail) => ({
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(expertiseBreadcrumb(expertise)),
    {
      "@type": "Service",
      name: expertise.name,
      description: expertise.seoDescription,
      url: absoluteUrl(expertiseHref(expertise.slug)),
      provider: { "@id": organizationId },
      serviceType: expertise.services.items.map((item) => item.title),
    },
  ],
});
