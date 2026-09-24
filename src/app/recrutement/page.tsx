import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { recruitmentIntro } from "@/content/recrutement";
import { pageMetadata } from "@/lib/seo";
import { JobOffers } from "@/sections/recrutement/JobOffers/JobOffers";
import { RecruitmentHero } from "@/sections/recrutement/RecruitmentHero/RecruitmentHero";
import { Stories } from "@/sections/recrutement/Stories/Stories";
import { WhyJoin } from "@/sections/recrutement/WhyJoin/WhyJoin";

export const metadata: Metadata = pageMetadata({
  title: "Recrutement — rejoindre nos équipes vétérinaires",
  description: recruitmentIntro.subtitle,
  path: "/recrutement",
});

export default function RecrutementPage() {
  return (
    <>
      <RecruitmentHero id="recrutement-title" />
      <WhyJoin />
      <Stories />
      <JobOffers />
      <ScrollReveal />
    </>
  );
}
