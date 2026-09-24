import { FiArrowDown, FiMail } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/Button/Button";
import { highlights, recruitmentIntro } from "@/content/recrutement";
import { cx } from "@/lib/format";
import styles from "./RecruitmentHero.module.scss";

/** Hero de la page recrutement : accroche, CTA et cartes inclinées "chiffres". */
export function RecruitmentHero({ id }: { id: string }) {
  const { title, subtitle, primaryCta, secondaryCta } = recruitmentIntro;

  return (
    <section className={styles.hero} aria-labelledby={id}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 id={id} className={styles.title}>
            {title.before}
            <span className={styles.highlight}>{title.highlight}</span>
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <ButtonLink href={primaryCta.href} variant="hyovet" icon={<FiArrowDown />}>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="light" icon={<FiMail />} className={styles.secondary}>
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <ul className={styles.highlights}>
          {highlights.map(({ value, label, tone }) => (
            <li key={value} className={cx(styles.card, styles[tone])}>
              <strong className={styles.value}>{value}</strong>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
