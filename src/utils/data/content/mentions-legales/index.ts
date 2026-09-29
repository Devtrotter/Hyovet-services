import "server-only";
import type { LegalDocumentContent } from "@/utils/types/legal";
import { cabinets } from "./cabinets";
import { donneesPersonnelles } from "./donnees-personnelles";
import { editeur } from "./editeur";
import { hebergeur } from "./hebergeur";
import { proprieteIntellectuelle } from "./propriete-intellectuelle";
import { responsabilite } from "./responsabilite";

// Mentions obligatoires (loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, art. 6)
// complétées des informations propres à la profession vétérinaire, profession réglementée.

export const legalNotice: LegalDocumentContent = {
  id: "legal-title",
  title: "Mentions légales",
  subtitle: "Qui édite ce site, qui l'héberge et dans quelles conditions l'utiliser.",
  updatedAt: "15 septembre 2026",
  sections: [editeur, cabinets, hebergeur, proprieteIntellectuelle, responsabilite, donneesPersonnelles],
};
