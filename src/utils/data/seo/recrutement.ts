import "server-only";
import type { Metadata } from "next";
import { recruitmentIntro } from "@/utils/data/content/recrutement/hero";
import { pageMetadata } from "@/utils/helpers/seo";

export const recrutementSeo: Metadata = pageMetadata({
  title: "Recrutement — rejoindre nos équipes vétérinaires",
  description: recruitmentIntro.subtitle,
  path: "/recrutement",
});
