import { CtaBanner } from "@/components/pages/expertise/CtaBanner/CtaBanner";
import { SectionHeading } from "@/components/shared/atoms/SectionHeading/SectionHeading";
import type { NavLink } from "@/utils/types/common";
import type { Step } from "@/utils/types/expertise";
import styles from "./Method.module.scss";

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <li className={`${styles.step} ${styles[step.tone]}`} data-reveal>
      <span className={styles.number} aria-hidden="true">
        {index + 1}
      </span>
      <h3 className={styles.title}>
        <span className="sr-only">Étape {index + 1} : </span>
        {step.title}
      </h3>
      <p className={styles.description}>{step.description}</p>
    </li>
  );
}

interface MethodProps {
  title: string;
  subtitle: string;
  steps: Step[];
  publicationsCta: { title: string; cta: NavLink };
}

/** Méthode de travail en trois étapes numérotées, close par le renvoi aux publications. */
export function Method({ title, subtitle, steps, publicationsCta }: MethodProps) {
  return (
    <section className={styles.section} aria-labelledby="method-title">
      <SectionHeading id="method-title" title={title} subtitle={subtitle} />
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </ol>
      <CtaBanner {...publicationsCta} className={styles.banner} />
    </section>
  );
}
