import { PageIntro } from "@/components/shared/atoms/PageIntro/PageIntro";
import type { LegalDocumentContent } from "@/utils/types/legal";
import { LegalBlocks } from "./LegalBlocks";
import styles from "./LegalDocument.module.scss";

/** Mise en page des documents légaux (mentions légales, politique de confidentialité). */
export function LegalDocument({ content }: { content: LegalDocumentContent }) {
  const { id, title, subtitle, updatedAt, sections } = content;

  return (
    <>
      <PageIntro id={id} title={title} subtitle={subtitle} />
      <div className={styles.wrapper}>
        <article className={styles.document}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`} className={styles.heading}>
                {section.title}
              </h2>
              <LegalBlocks blocks={section.blocks} />
            </section>
          ))}
          <p className={styles.updated}>Dernière mise à jour : {updatedAt}</p>
        </article>
      </div>
    </>
  );
}
