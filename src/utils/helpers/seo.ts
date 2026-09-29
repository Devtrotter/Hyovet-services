import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";
import { baseOpenGraph } from "@/utils/data/seo/global";

// Fabriques de métadonnées partagées par toutes les pages.

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number };
}

/** Titre, description, URL canonique et Open Graph cohérents pour une page. */
export function pageMetadata({ title, description, path, image }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      ...(image && { images: [image] }),
    },
  };
}

/** Sérialise un objet JSON-LD pour une balise <script> (échappe `<` contre l'injection HTML). */
export const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
