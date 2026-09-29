import "server-only";
import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";
import { pageMetadata } from "@/utils/helpers/seo";

export const mentionsLegalesSeo: Metadata = pageMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name} : éditeur, cabinets vétérinaires, hébergeur et propriété intellectuelle.`,
  path: "/mentions-legales",
});
