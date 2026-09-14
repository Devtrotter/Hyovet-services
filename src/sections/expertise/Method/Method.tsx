import { CtaBanner } from "@/components/ui/CtaBanner/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { method, publicationsCta } from "@/content/expertise";
import type { Step } from "@/content/types";
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

export function Method() {
  return (
    <section className={styles.section} aria-labelledby="method-title">
      <SectionHeading id="method-title" title={method.title} subtitle={method.subtitle} />
      <ol className={styles.steps}>
        {method.steps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </ol>
      <CtaBanner {...publicationsCta} className={styles.banner} />
    </section>
  );
}
