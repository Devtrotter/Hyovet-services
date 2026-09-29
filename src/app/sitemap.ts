import type { MetadataRoute } from "next";
import { cabinetPages } from "@/utils/data/content/cabinet";
import { expertiseDetails, expertiseHref } from "@/utils/data/content/expertise-detail";
import { publicationDetails, publicationHref } from "@/utils/data/content/publication";
import { absoluteUrl } from "@/utils/helpers/seo";

// Uniquement les pages publiées. `lastModified` sera renseigné par le CMS (date réelle de mise à jour).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/expertise",
    ...expertiseDetails.map(({ slug }) => expertiseHref(slug)),
    "/cabinets",
    ...cabinetPages.map(({ slug }) => `/cabinets/${slug}`),
    "/publications",
    ...publicationDetails.map(({ slug }) => publicationHref(slug)),
    "/recrutement",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
