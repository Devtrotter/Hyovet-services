import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MediaHero } from "@/components/sections/MediaHero/MediaHero";
import { expertiseHero } from "@/content/expertise";
import { pageMetadata } from "@/lib/seo";
import { Domains } from "@/sections/expertise/Domains/Domains";
import { Method } from "@/sections/expertise/Method/Method";

export const metadata: Metadata = pageMetadata({
  title: "Nos domaines d'expertise vétérinaire porcine",
  description: expertiseHero.subtitle,
  path: "/expertise",
  image: { url: expertiseHero.poster, width: 1920, height: 1080 },
});

export default function ExpertisePage() {
  return (
    <>
      <MediaHero id="expertise-title" variant="page" {...expertiseHero} />
      <Domains />
      <Method />
      <ScrollReveal />
    </>
  );
}
