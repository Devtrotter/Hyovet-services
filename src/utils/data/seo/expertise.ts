import "server-only";
import { pageMetadata } from "@/utils/helpers/seo";
import { expertiseHero } from "@/utils/data/content/expertise/hero";

// La première image du hero sert aussi d'aperçu Open Graph.
export const expertiseSeo = pageMetadata({
  title: "Nos domaines d'expertise vétérinaire porcine",
  description: expertiseHero.subtitle,
  path: "/expertise",
  image: {
    url: expertiseHero.poster.src,
    width: expertiseHero.poster.width,
    height: expertiseHero.poster.height,
  },
});
