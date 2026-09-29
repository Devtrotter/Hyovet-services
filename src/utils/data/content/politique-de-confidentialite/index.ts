import "server-only";
import type { LegalDocumentContent } from "@/utils/types/legal";
import { cookies } from "./cookies";
import { destinataires } from "./destinataires";
import { donnees } from "./donnees";
import { droits } from "./droits";
import { equipe } from "./equipe";
import { misesAJour } from "./mises-a-jour";
import { responsable } from "./responsable";
import { securite } from "./securite";
import { transferts } from "./transferts";

// Information des personnes (RGPD, art. 13) et traceurs (loi Informatique et Libertés, art. 82).

export const privacyPolicy: LegalDocumentContent = {
  id: "privacy-title",
  title: "Politique de confidentialité",
  subtitle: "Quelles données nous collectons, pourquoi, combien de temps, et comment exercer vos droits.",
  updatedAt: "15 septembre 2026",
  sections: [responsable, donnees, destinataires, transferts, cookies, droits, equipe, securite, misesAJour],
};
