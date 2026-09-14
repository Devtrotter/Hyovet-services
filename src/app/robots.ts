import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

// Moteurs de recherche et assistants IA (GPTBot, ClaudeBot, PerplexityBot…) sont autorisés :
// être cité dans leurs réponses fait partie de la stratégie de visibilité (GEO).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
