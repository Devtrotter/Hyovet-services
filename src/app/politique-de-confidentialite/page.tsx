import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/organisms/LegalDocument/LegalDocument";
import { privacyPolicy } from "@/utils/data/content/politique-de-confidentialite";
import { politiqueDeConfidentialiteSeo } from "@/utils/data/seo/politique-de-confidentialite";

export const metadata: Metadata = politiqueDeConfidentialiteSeo;

export default function PrivacyPolicyPage() {
  return <LegalDocument content={privacyPolicy} />;
}
