import "server-only";
import { publicationsIntro } from "@/utils/data/content/publications/intro";
import { pageMetadata } from "@/utils/helpers/seo";

export const publicationsSeo = pageMetadata({
  title: "Publications et actualités",
  description: publicationsIntro.subtitle,
  path: "/publications",
});
