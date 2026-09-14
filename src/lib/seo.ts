import type { Metadata } from "next";
import { cabinetPages } from "@/content/cabinets";
import { site, socials } from "@/content/site";
import type { NavLink, TeamContent } from "@/content/types";

// Métadonnées et données structurées (schema.org) partagées par toutes les pages.

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export const defaultOgImage = { url: "/images/home/hero-poster.jpg", width: 1920, height: 1080 };

// Les métadonnées Next sont fusionnées superficiellement : une page qui définit `openGraph`
// remplace tout l'objet du layout. Chaque page repart donc de cette base (image, locale, nom du site).
export const baseOpenGraph = {
  type: "website",
  locale: "fr_FR",
  siteName: site.name,
  images: [defaultOgImage],
} satisfies Metadata["openGraph"];

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
      title: `${title} | ${site.name}`,
      description,
      url: path,
      ...(image && { images: [image] }),
    },
  };
}

/** Sérialise un objet JSON-LD pour une balise <script> (échappe `<` contre l'injection HTML). */
export const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

// ---------- Entités schema.org, reliées entre elles par leur @id ----------

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
export const cabinetId = (slug: string) => absoluteUrl(`/cabinets/${slug}#cabinet`);

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VeterinaryCare",
      "@id": organizationId,
      name: site.name,
      url: site.url,
      logo: absoluteUrl("/images/logos/hyovet-services.png"),
      image: absoluteUrl(defaultOgImage.url),
      description: site.description,
      telephone: site.phone.label,
      email: site.email.label,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 Parc Activités du Carrefour",
        postalCode: "22640",
        addressLocality: "Plestan",
        addressCountry: "FR",
      },
      areaServed: ["Bretagne", "Pays de la Loire", "Normandie", "Centre-Val de Loire", "Nouvelle-Aquitaine"],
      knowsAbout: ["Médecine vétérinaire porcine", ...cabinetPages.flatMap((page) => page.about.specialties)],
      sameAs: Object.values(socials),
      subOrganization: cabinetPages.map((page) => ({ "@id": cabinetId(page.slug) })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      inLanguage: "fr-FR",
      publisher: { "@id": organizationId },
    },
  ],
};

export const breadcrumbJsonLd = (items: NavLink[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  })),
});

/** Membres d'équipe en `Person` : noms, postes et profils LinkedIn exploitables par les moteurs et les IA. */
export const teamJsonLd = (team: TeamContent, worksFor: string) =>
  team.groups.flatMap((group) =>
    group.members.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: group.jobTitle,
      worksFor: { "@id": worksFor },
      ...(member.photo && { image: absoluteUrl(member.photo) }),
      ...(member.linkedin && { sameAs: [member.linkedin] }),
    })),
  );
