import { cabinetPages } from "@/utils/data/content/cabinet";
import { addresses, emails } from "@/utils/data/content/shared/coordonnees";
import { siteConfig, socials } from "@/utils/config/site";
import { defaultOgImage } from "@/utils/data/seo/global";
import { cabinetId, organizationId, postalAddressJsonLd, websiteId } from "./jsonLd";
import { absoluteUrl } from "./seo";

// Fiche d'identité du groupe, servie sur toutes les pages depuis le layout.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VeterinaryCare",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/images/logos/hyovet-services.png"),
      image: absoluteUrl(defaultOgImage.url),
      description: siteConfig.description,
      telephone: siteConfig.phone.label,
      email: emails.contact.label,
      address: postalAddressJsonLd(addresses.hyovet),
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer service", email: emails.contact.label, availableLanguage: "fr" },
        { "@type": "ContactPoint", contactType: "recruitment", email: emails.recruitment.label, availableLanguage: "fr" },
      ],
      areaServed: ["Bretagne", "Pays de la Loire", "Normandie", "Centre-Val de Loire", "Nouvelle-Aquitaine"],
      knowsAbout: ["Médecine vétérinaire porcine", ...cabinetPages.flatMap((page) => page.about.specialties)],
      sameAs: socials.map((social) => social.href),
      subOrganization: cabinetPages.map((page) => ({ "@id": cabinetId(page.slug) })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr-FR",
      publisher: { "@id": organizationId },
    },
  ],
};
