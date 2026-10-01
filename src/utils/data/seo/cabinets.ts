import "server-only";
import type { Metadata } from "next";
import { groupTeam } from "@/utils/data/content/cabinets/team";
import { hero } from "@/utils/data/content/cabinets/hero";
import { breadcrumbJsonLd, organizationId, teamJsonLd } from "@/utils/helpers/jsonLd";
import { pageMetadata } from "@/utils/helpers/seo";

export const cabinetsSeo: Metadata = pageMetadata({
  title: "Nos cabinets vétérinaires porcins — Hyovet & Selas de Surfonds",
  description: hero.subtitle,
  path: "/cabinets",
});

/** Fil d'Ariane + équipe du groupe en données structurées. */
export const cabinetsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { label: "Accueil", href: "/" },
      { label: "Cabinets", href: "/cabinets" },
    ]),
    ...teamJsonLd(groupTeam, organizationId),
  ],
};
