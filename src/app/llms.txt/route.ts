import { cabinetPages } from "@/content/cabinets";
import { expertiseDetails, expertiseHref } from "@/content/expertises";
import { addresses, emails, formatAddress } from "@/content/contact-details";
import { site, socials } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

// Résumé du site au format llms.txt (https://llmstxt.org) : aide les assistants IA à comprendre
// et citer correctement Hyovet Services. Généré depuis les contenus, donc toujours à jour.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Hyovet Services est l'alliance de deux cabinets vétérinaires indépendants spécialisés en médecine porcine : Hyovet à Plestan (Côtes-d'Armor) et la Selas de Surfonds dans la Sarthe.",
    "",
    "## Cabinets",
    "",
    ...cabinetPages.map(
      (page) => `- [${page.name}](${absoluteUrl(`/cabinets/${page.slug}`)}): ${page.seoDescription}`,
    ),
    "",
    "## Expertises",
    "",
    ...expertiseDetails.map(
      (expertise) => `- [${expertise.name}](${absoluteUrl(expertiseHref(expertise.slug))}): ${expertise.seoDescription}`,
    ),
    "",
    "## Contact",
    "",
    `- [Nous contacter](${absoluteUrl("/contact")}): un numéro par cabinet et un formulaire de contact.`,
    `- [Publications et actualités](${absoluteUrl("/publications")}): travaux en congrès, cas cliniques et actualités sanitaires.`,
    `- [Recrutement](${absoluteUrl("/recrutement")}): offres en cours et candidatures spontanées.`,
    `- Contact général : ${emails.contact.label}`,
    `- Recrutement : ${emails.recruitment.label}`,
    `- Hyovet et Hyovet Services : ${formatAddress(addresses.hyovet)}`,
    `- Selas de Surfonds : ${formatAddress(addresses.surfonds)}`,
    "",
    "## Réseaux sociaux",
    "",
    ...socials.map((social) => `- [${social.label}](${social.href})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
