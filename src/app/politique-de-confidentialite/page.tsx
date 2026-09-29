import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/organisms/LegalDocument/LegalDocument";
import { privacyPolicy } from "@/utils/data/content/politique-de-confidentialite";
import { politiqueSeo } from "@/utils/data/seo/politique-de-confidentialite";

export const metadata: Metadata = politiqueSeo;

export default function PrivacyPolicyPage() {
  return <LegalDocument content={privacyPolicy} />;
}
