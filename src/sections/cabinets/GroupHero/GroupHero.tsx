import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button/Button";
import type { CabinetTheme, NavLink } from "@/content/types";
import styles from "./GroupHero.module.scss";

interface GroupHeroProps {
  breadcrumb: NavLink[];
  titleLines: string[];
  subtitle: string;
  actions: Array<NavLink & { theme: CabinetTheme }>;
}

/** Hero du groupe : fond bicolore Hyovet / Surfonds et carte centrale. */
export function GroupHero({ breadcrumb, titleLines, subtitle, actions }: GroupHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="group-title">
      <div className={styles.card}>
        <Breadcrumb items={breadcrumb} className={styles.breadcrumb} />
        <h1 id="group-title" className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <ButtonLink key={action.href} href={action.href} variant={action.theme}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
