import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { Domains } from "@/components/pages/expertise/Domains/Domains";
import { Method } from "@/components/pages/expertise/Method/Method";
import { MediaHero } from "@/components/shared/organisms/MediaHero/MediaHero";
import { domains } from "@/utils/data/content/expertise/domains";
import { expertiseHero } from "@/utils/data/content/expertise/hero";
import { method, publicationsCta } from "@/utils/data/content/expertise/method";
import { expertiseSeo } from "@/utils/data/seo/expertise";

export const metadata = expertiseSeo;

export default function ExpertisePage() {
  return (
    <>
      <MediaHero id="expertise-title" variant="page" {...expertiseHero} />
      <Domains items={domains} />
      <Method {...method} publicationsCta={publicationsCta} />
      <ScrollReveal />
    </>
  );
}
