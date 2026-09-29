import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { JobOffers } from "@/components/pages/recrutement/JobOffers/JobOffers";
import { RecruitmentHero } from "@/components/pages/recrutement/RecruitmentHero/RecruitmentHero";
import { Stories } from "@/components/pages/recrutement/Stories/Stories";
import { WhyJoin } from "@/components/pages/recrutement/WhyJoin/WhyJoin";
import { offers, spontaneous } from "@/utils/data/content/recrutement/offers";
import { recrutementSeo } from "@/utils/data/seo/recrutement";

export const metadata: Metadata = recrutementSeo;

export default function RecrutementPage() {
  return (
    <>
      <RecruitmentHero id="recrutement-title" />
      <WhyJoin />
      <Stories />
      {/* Composant client : ses données viennent du serveur */}
      <JobOffers offers={offers} spontaneous={spontaneous} />
      <ScrollReveal />
    </>
  );
}
