import Image from "next/image";
import { RiLinkedinFill, RiUserFill } from "react-icons/ri";
import type { TeamContent, TeamMember } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./TeamSection.module.scss";

function MemberCard({ name, role, photo, linkedin }: TeamMember) {
  return (
    <li className={styles.card} data-reveal>
      {photo ? (
        <Image src={photo} alt={`Portrait de ${name}`} width={96} height={96} sizes="96px" className={styles.photo} />
      ) : (
        <span className={styles.avatar} aria-hidden>
          <RiUserFill />
        </span>
      )}
      <h4 className={styles.name}>{name}</h4>
      {role && <p className={styles.role}>{role}</p>}
      {linkedin && (
        <a
          href={linkedin}
          className={styles.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Profil LinkedIn de ${name}`}
        >
          <RiLinkedinFill aria-hidden />
        </a>
      )}
    </li>
  );
}

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
                <MemberCard key={`${member.name}-${index}`} {...member} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
