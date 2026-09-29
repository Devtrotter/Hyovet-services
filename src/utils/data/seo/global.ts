import "server-only";
import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";

export const defaultOgImage = { url: "/images/home/hero-porcelets.jpg", width: 1920, height: 1080 };

// Les métadonnées Next sont fusionnées superficiellement : une page qui définit `openGraph`
// remplace tout l'objet du layout. Chaque page repart donc de cette base (image, locale, nom du site).
export const baseOpenGraph = {
  type: "website",
  locale: siteConfig.locale,
  siteName: siteConfig.name,
  images: [defaultOgImage],
} satisfies Metadata["openGraph"];

export const globalSeo: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    template: "%s | Hyovet Services",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    ...baseOpenGraph,
    title: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};
