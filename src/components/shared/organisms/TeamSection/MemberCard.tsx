import Image from "next/image";
import { RiLinkedinFill, RiUserFill } from "react-icons/ri";
import type { TeamGroup, TeamMember } from "@/utils/types/team";
import styles from "./MemberCard.module.scss";

/** Portrait d'un membre : photo ou avatar par défaut, nom, poste et lien LinkedIn. */
export function MemberCard({ name, role, photo, linkedin, tone }: TeamMember & { tone: TeamGroup["tone"] }) {
  return (
    <li className={styles.card} data-tone={tone} data-reveal>
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
