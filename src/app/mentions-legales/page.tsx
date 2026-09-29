import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/organisms/LegalDocument/LegalDocument";
import { legalNotice } from "@/utils/data/content/mentions-legales";
import { mentionsLegalesSeo } from "@/utils/data/seo/mentions-legales";

export const metadata: Metadata = mentionsLegalesSeo;

export default function LegalNoticePage() {
  return <LegalDocument content={legalNotice} />;
}
