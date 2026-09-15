import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, LegalSection, ToComplete } from "@/components/sections/LegalDocument/LegalDocument";
import { addresses, companies, emails, formatAddress } from "@/content/contact-details";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name} : éditeur, cabinets vétérinaires, hébergeur et propriété intellectuelle.`,
  path: "/mentions-legales",
});

const { hyovetServices, hyovet, surfonds } = companies;

// Mentions obligatoires (loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, art. 6)
// complétées des informations propres à la profession vétérinaire, profession réglementée.
export default function LegalNoticePage() {
  return (
    <LegalDocument
      id="legal-title"
      title="Mentions légales"
      subtitle="Qui édite ce site, qui l'héberge et dans quelles conditions l'utiliser."
      updatedAt="15 septembre 2026"
    >
      <LegalSection id="editeur" title="Éditeur du site">
        <p>
          Le site <strong>{site.url.replace("https://", "")}</strong> est édité par <strong>{hyovetServices.name}</strong>,{" "}
          {hyovetServices.legalForm.toLowerCase()} au capital de {hyovetServices.capital}, immatriculée sous le numéro{" "}
          {hyovetServices.siren} {hyovetServices.rcs}. Elle réunit les moyens des cabinets Hyovet et Selas de Surfonds,
          ses associés.
        </p>
        <ul>
          <li>Siège social : {formatAddress(addresses.hyovet)}</li>
          <li>Numéro de TVA intracommunautaire : {hyovetServices.vat}</li>
          <li>
            Email : <a href={emails.contact.href}>{emails.contact.label}</a>
          </li>
          <li>
            Téléphone : <a href={site.phone.href}>{site.phone.label}</a>
          </li>
          <li>
            Directeur de la publication : {hyovetServices.representative}
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="cabinets" title="Cabinets vétérinaires">
        <p>
          Les soins et prestations vétérinaires présentés sur ce site sont assurés par deux sociétés d&apos;exercice
          vétérinaire indépendantes :
        </p>
        <ul>
          <li>
            <strong>{hyovet.name}</strong> — {hyovet.legalForm} au capital de {hyovet.capital}, {hyovet.siren}{" "}
            {hyovet.rcs}, TVA {hyovet.vat} — {formatAddress(addresses.hyovet)}. Représentée par{" "}
            {hyovet.representative}. Inscrite au tableau de l&apos;Ordre des vétérinaires, Conseil régional
            de l&apos;Ordre de Bretagne, sous le n° <ToComplete>numéro d&apos;inscription à l&apos;Ordre</ToComplete>.
          </li>
          <li>
            <strong>{surfonds.name}</strong> — {surfonds.legalForm} au capital de {surfonds.capital}, {surfonds.siren}{" "}
            {surfonds.rcs}, TVA {surfonds.vat} — {formatAddress(addresses.surfonds)}. Représentée par{" "}
            {surfonds.representative}. Inscrite au tableau de l&apos;Ordre des vétérinaires, Conseil régional
            de l&apos;Ordre des Pays de la Loire, sous le n° <ToComplete>numéro d&apos;inscription à l&apos;Ordre</ToComplete>.
          </li>
        </ul>
        <p>
          Les vétérinaires exercent dans le respect du code de déontologie vétérinaire (articles R. 242-32 et suivants
          du code rural et de la pêche maritime), consultable sur{" "}
          <a href="https://www.veterinaire.fr" target="_blank" rel="noopener noreferrer">
            le site de l&apos;Ordre national des vétérinaires
          </a>
          . Titre professionnel : vétérinaire, délivré en <ToComplete>État de délivrance du diplôme (ex. France)</ToComplete>.
        </p>
        <p>
          Assurance responsabilité civile professionnelle : <ToComplete>assureur et zone de couverture</ToComplete>.
        </p>
      </LegalSection>

      <LegalSection id="hebergeur" title="Hébergeur">
        <p>
          <strong>Vercel Inc.</strong> — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="propriete-intellectuelle" title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus de ce site (textes, logos, photographies, vidéos, mise en page) est protégé par
          le droit d&apos;auteur et le droit des marques. Toute reproduction ou réutilisation, totale ou partielle, sans
          l&apos;autorisation écrite de {site.name} est interdite.
        </p>
        <p>
          Les portraits des membres de l&apos;équipe sont publiés avec leur autorisation. Crédits photos et vidéos :{" "}
          <ToComplete>photographes, banques d&apos;images et licences</ToComplete>.
        </p>
      </LegalSection>

      <LegalSection id="responsabilite" title="Responsabilité et liens externes">
        <p>
          Les informations publiées sur ce site sont données à titre indicatif et ne remplacent pas l&apos;avis
          d&apos;un vétérinaire sur votre élevage. {site.name} ne peut être tenue responsable des contenus des sites
          externes vers lesquels renvoient des liens (réseaux sociaux, Google Maps, Ordre des vétérinaires…).
        </p>
      </LegalSection>

      <LegalSection id="donnees-personnelles" title="Données personnelles et cookies">
        <p>
          Le traitement de vos données personnelles et l&apos;usage des cookies sont décrits dans notre{" "}
          <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
