import { absoluteUrl } from "@/utils/helpers/seo";
import type { NavLink, PostalAddress } from "@/utils/types/common";
import type { TeamContent } from "@/utils/types/team";

// Entités schema.org, reliées entre elles par leur @id.

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
export const cabinetId = (slug: string) => absoluteUrl(`/cabinets/${slug}#cabinet`);

export const postalAddressJsonLd = ({ street, postalCode, city, department }: PostalAddress) => ({
  "@type": "PostalAddress",
  streetAddress: street,
  postalCode,
  addressLocality: city,
  addressRegion: department,
  addressCountry: "FR",
});

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
