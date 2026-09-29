import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/atoms/ScrollReveal/ScrollReveal";
import { ContactBanner } from "@/components/shared/molecules/ContactBanner/ContactBanner";
import { NewsletterSignup } from "@/components/shared/organisms/NewsletterSignup/NewsletterSignup";
import { PublicationsHero } from "@/components/pages/publications/PublicationsHero/PublicationsHero";
import { PublicationsList } from "@/components/pages/publications/PublicationsList/PublicationsList";
import { featuredPublication, publications } from "@/utils/data/content/publication";
import { publicationsIntro } from "@/utils/data/content/publications/intro";
import { publicationsList } from "@/utils/data/content/publications/list";
import { newsletter } from "@/utils/data/content/publications/newsletter";
import { contactBanner } from "@/utils/data/content/shared/contact-banner";
import { publicationsSeo } from "@/utils/data/seo/publications";
import { filterPublications, publicationsHrefFor, type PublicationsQuery } from "@/utils/helpers/publications";
import styles from "./page.module.scss";

export const metadata: Metadata = publicationsSeo;

export default async function PublicationsPage({ searchParams }: { searchParams: Promise<PublicationsQuery> }) {
  const view = filterPublications({
    items: publications,
    perPage: publicationsList.perPage,
    query: await searchParams,
  });
  const hrefFor = publicationsHrefFor(view);

  return (
    <>
      <PublicationsHero id="publications-title" {...publicationsIntro} query={view.query} featured={featuredPublication} />
      <PublicationsList {...view} hrefFor={hrefFor} labels={publicationsList} />
      <NewsletterSignup {...newsletter} />
      <div className={styles.contact}>
        <ContactBanner {...contactBanner} />
      </div>
      <ScrollReveal />
    </>
  );
}
