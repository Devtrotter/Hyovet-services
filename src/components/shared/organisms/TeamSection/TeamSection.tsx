import type { TeamContent } from "@/utils/types/team";
import { cx } from "@/utils/helpers/format";
import { MemberCard } from "./MemberCard";
import styles from "./TeamSection.module.scss";

interface TeamSectionProps extends TeamContent {
  id?: string;
  /** `plain` : fond blanc, cartes colorées (groupe) · `tinted` : fond teinté, cartes blanches (cabinet) */
  variant?: "plain" | "tinted";
}

/** Portraits de l'équipe par groupe (vétérinaires, équipe technique…). */
export function TeamSection({ id = "team-title", title, subtitle, groups, variant = "plain" }: TeamSectionProps) {
  return (
    <section className={cx(styles.section, styles[variant])} aria-labelledby={id}>
      <div className={styles.inner}>
        <header data-reveal>
          <h2 id={id} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>
        {groups.map((group) => (
          <div key={group.label} className={cx(styles.group, styles[group.tone])}>
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <ul className={styles.grid}>
              {group.members.map((member, index) => (
                <MemberCard key={`${member.name}-${index}`} {...member} tone={group.tone} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
