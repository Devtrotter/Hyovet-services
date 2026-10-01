import "server-only";
import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";
import { pageMetadata } from "@/utils/helpers/seo";

export const politiqueDeConfidentialiteSeo: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: `Comment ${siteConfig.name} collecte, utilise et protège vos données personnelles, et comment exercer vos droits (RGPD).`,
  path: "/politique-de-confidentialite",
});
