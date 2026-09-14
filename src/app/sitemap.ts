import type { MetadataRoute } from "next";
import { cabinetPages } from "@/content/cabinets";
import { expertiseDetails, expertiseHref } from "@/content/expertises";
import { absoluteUrl } from "@/lib/seo";

// Uniquement les pages publiées. `lastModified` sera renseigné par le CMS (date réelle de mise à jour).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/expertise",
    ...expertiseDetails.map(({ slug }) => expertiseHref(slug)),
    "/cabinets",
    ...cabinetPages.map(({ slug }) => `/cabinets/${slug}`),
    "/contact",
  ];

  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
