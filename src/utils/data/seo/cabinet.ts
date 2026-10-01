import "server-only";
import type { Metadata } from "next";
import {
  breadcrumbJsonLd,
  cabinetId,
  organizationId,
  postalAddressJsonLd,
  teamJsonLd,
} from "@/utils/helpers/jsonLd";
import { absoluteUrl, pageMetadata } from "@/utils/helpers/seo";
import type { CabinetPage } from "@/utils/types/cabinet";
import type { NavLink } from "@/utils/types/common";

/** Métadonnées d'une page cabinet : valeurs fixes complétées par les données du cabinet. */
export const cabinetSeo = (page: CabinetPage): Metadata =>
  pageMetadata({
    title: `${page.name} — ${page.hero.title}`,
    description: page.seoDescription,
    path: `/cabinets/${page.slug}`,
  });

/** Cabinet en `VeterinaryCare`, rattaché au groupe, avec son équipe. */
export const cabinetJsonLd = (page: CabinetPage, breadcrumb: NavLink[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(breadcrumb),
    {
      "@type": "VeterinaryCare",
      "@id": cabinetId(page.slug),
      name: page.name,
      url: absoluteUrl(`/cabinets/${page.slug}`),
      description: page.seoDescription,
      logo: absoluteUrl(page.about.logo.src),
      parentOrganization: { "@id": organizationId },
      address: postalAddressJsonLd(page.about.address),
      areaServed: page.zones.items.flatMap((zone) => zone.departments.map((department) => department.name)),
      knowsAbout: page.about.specialties,
    },
    ...teamJsonLd(page.team, cabinetId(page.slug)),
  ],
});
