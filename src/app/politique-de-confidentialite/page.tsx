import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalDocument,
  LegalSection,
  LegalTable,
  ToComplete,
} from "@/components/sections/LegalDocument/LegalDocument";
import { MapsConsentControl } from "@/components/sections/LegalDocument/MapsConsentControl";
import { addresses, companies, emails, formatAddress } from "@/content/contact-details";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: `Comment ${site.name} collecte, utilise et protège vos données personnelles, et comment exercer vos droits (RGPD).`,
  path: "/politique-de-confidentialite",
});

// Information des personnes (RGPD, art. 13) et traceurs (loi Informatique et Libertés, art. 82).
// Durées de conservation alignées sur les référentiels CNIL, à valider par le client.
export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      id="privacy-title"
      title="Politique de confidentialité"
      subtitle="Quelles données nous collectons, pourquoi, combien de temps, et comment exercer vos droits."
      updatedAt="15 septembre 2026"
    >
      <LegalSection id="responsable" title="Qui est responsable de vos données ?">
        <p>
          Le responsable du traitement est <strong>{companies.hyovetServices.name}</strong>,{" "}
          {companies.hyovetServices.legalForm.toLowerCase()} ({companies.hyovetServices.siren}{" "}
          {companies.hyovetServices.rcs}), {formatAddress(addresses.hyovet)}, représentée par{" "}
          {companies.hyovetServices.representative}.
        </p>
        <p>
          Pour toute question sur vos données : <a href={emails.contact.href}>{emails.contact.label}</a>. Délégué à la
          protection des données : <ToComplete>nom et contact du DPO, ou « aucun DPO désigné »</ToComplete>.
        </p>
      </LegalSection>

      <LegalSection id="donnees" title="Quelles données et pour quoi faire ?">
        <p>Nous ne collectons que les données nécessaires. Aucune donnée n&apos;est vendue ni utilisée à des fins publicitaires.</p>
        <LegalTable>
          <thead>
            <tr>
              <th scope="col">Situation</th>
              <th scope="col">Données</th>
              <th scope="col">Finalité</th>
              <th scope="col">Base légale</th>
              <th scope="col">Durée de conservation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Formulaire de contact, email ou appel</td>
              <td>Nom, email, téléphone (facultatif), profil, motif, message</td>
              <td>Répondre à votre demande et vous orienter vers le bon cabinet</td>
              <td>Intérêt légitime à répondre aux sollicitations ; mesures précontractuelles pour une demande de suivi</td>
              <td>3 ans à compter de notre dernier échange</td>
            </tr>
            <tr>
              <td>Candidature (formulaire ou {emails.recruitment.label})</td>
              <td>Coordonnées, CV, lettre de motivation, échanges</td>
              <td>Étudier votre candidature et vous recontacter</td>
              <td>Mesures précontractuelles</td>
              <td>2 ans après le dernier contact si la candidature n&apos;est pas retenue, sauf opposition de votre part</td>
            </tr>
            <tr>
              <td>Navigation sur le site</td>
              <td>Adresse IP, date et heure, pages consultées, navigateur (journaux techniques)</td>
              <td>Faire fonctionner et sécuriser le site</td>
              <td>Intérêt légitime</td>
              <td>Durée limitée fixée par l&apos;hébergeur, à des fins de sécurité uniquement</td>
            </tr>
            <tr>
              <td>Affichage d&apos;une carte Google Maps</td>
              <td>Adresse IP et cookies Google</td>
              <td>Afficher la localisation des cabinets et des zones d&apos;intervention</td>
              <td>Votre consentement, donné en cliquant sur « Afficher la carte »</td>
              <td>Votre choix est mémorisé 13 mois ; cookies selon la politique de Google</td>
            </tr>
          </tbody>
        </LegalTable>
      </LegalSection>

      <LegalSection id="destinataires" title="Qui peut accéder à vos données ?">
        <ul>
          <li>Les équipes habilitées de {site.name}, de Hyovet et de la Selas de Surfonds, selon votre demande ;</li>
          <li>
            nos prestataires techniques, uniquement pour les besoins du service : Vercel Inc. (hébergement du site) et{" "}
            <ToComplete>prestataire d&apos;envoi des emails du formulaire, une fois choisi</ToComplete>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="transferts" title="Transferts hors de l'Union européenne">
        <p>
          Notre hébergeur Vercel Inc. et Google (cartes, uniquement après votre accord) sont établis aux États-Unis. Ces
          transferts sont encadrés par la décision d&apos;adéquation « Data Privacy Framework » de la Commission
          européenne, à laquelle ces sociétés ont adhéré, et par des clauses contractuelles types.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies et traceurs">
        <p>
          Ce site n&apos;utilise <strong>aucun cookie de mesure d&apos;audience ni publicitaire</strong>. Seuls les
          éléments suivants peuvent être enregistrés dans votre navigateur :
        </p>
        <ul>
          <li>
            <strong>Votre choix concernant les cartes</strong> (stockage local, 13 mois) : nécessaire pour ne pas vous
            redemander votre accord à chaque page.
          </li>
          <li>
            <strong>Cookies Google Maps</strong> : déposés par Google uniquement si vous choisissez d&apos;afficher une
            carte. Voir la{" "}
            <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">
              politique de confidentialité de Google
            </a>
            .
          </li>
        </ul>
        <p>Vous pouvez modifier votre choix à tout moment :</p>
        <MapsConsentControl />
        <p>
          Les liens vers nos réseaux sociaux (LinkedIn, YouTube, Instagram, Facebook) sont de simples liens : aucun
          contenu de ces réseaux n&apos;est chargé sur le site tant que vous ne cliquez pas.
        </p>
      </LegalSection>

      <LegalSection id="droits" title="Vos droits">
        <p>Vous disposez des droits suivants sur vos données :</p>
        <ul>
          <li>accès, rectification et effacement ;</li>
          <li>limitation du traitement et opposition, notamment pour un traitement fondé sur notre intérêt légitime ;</li>
          <li>portabilité des données que vous nous avez fournies ;</li>
          <li>retrait de votre consentement à tout moment, pour ce qui repose sur votre accord ;</li>
          <li>définition de directives sur le sort de vos données après votre décès.</li>
        </ul>
        <p>
          Pour les exercer, écrivez à <a href={emails.contact.href}>{emails.contact.label}</a> ou par courrier à{" "}
          {site.name}, {formatAddress(addresses.hyovet)}. Nous vous répondons dans un délai d&apos;un mois. Une pièce
          d&apos;identité ne pourra vous être demandée qu&apos;en cas de doute raisonnable sur votre identité.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
            cnil.fr/fr/plaintes
          </a>{" "}
          ou 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </LegalSection>

      <LegalSection id="equipe" title="Photos et noms des membres de l'équipe">
        <p>
          Les noms, portraits et liens LinkedIn des membres de l&apos;équipe sont publiés avec leur autorisation. Chacun
          peut en demander le retrait à tout moment auprès de <a href={emails.contact.href}>{emails.contact.label}</a>.
        </p>
      </LegalSection>

      <LegalSection id="securite" title="Sécurité">
        <p>
          Le site est accessible uniquement en connexion chiffrée (HTTPS). Les données transmises par le formulaire ne
          sont accessibles qu&apos;aux personnes habilitées à traiter votre demande.
        </p>
      </LegalSection>

      <LegalSection id="mises-a-jour" title="Évolution de cette politique">
        <p>
          Cette politique peut évoluer, par exemple lors de l&apos;ouverture de la newsletter ou d&apos;un espace
          recrutement. Consultez également nos <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
