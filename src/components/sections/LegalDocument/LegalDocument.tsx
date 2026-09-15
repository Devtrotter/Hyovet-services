import type { ReactNode } from "react";
import { PageIntro } from "@/components/sections/PageIntro/PageIntro";
import styles from "./LegalDocument.module.scss";

interface LegalDocumentProps {
  id: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  children: ReactNode;
}

/** Mise en page des pages légales (mentions légales, politique de confidentialité). */
export function LegalDocument({ id, title, subtitle, updatedAt, children }: LegalDocumentProps) {
  return (
    <>
      <PageIntro id={id} title={title} subtitle={subtitle} />
      <div className={styles.wrapper}>
        <article className={styles.document}>
          {children}
          <p className={styles.updated}>Dernière mise à jour : {updatedAt}</p>
        </article>
      </div>
    </>
  );
}

/** Section titrée, ancrable (#id). */
export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.heading}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Tableau avec défilement horizontal sur mobile. */
export function LegalTable({ children }: { children: ReactNode }) {
  return (
    <div className={styles.tableWrap}>
      <table>{children}</table>
    </div>
  );
}

/**
 * Information légale manquante, à fournir par le client.
 * Volontairement visible : rechercher "ToComplete" dans le code pour tout compléter avant la mise en ligne.
 */
export function ToComplete({ children }: { children: ReactNode }) {
  return <mark className={styles.toComplete}>[À compléter : {children}]</mark>;
}
