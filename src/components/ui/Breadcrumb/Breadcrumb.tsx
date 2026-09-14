import Link from "next/link";
import { Fragment } from "react";
import type { NavLink } from "@/content/types";
import { cx } from "@/lib/format";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  items: NavLink[];
  className?: string;
}

/** Fil d'Ariane accessible : le dernier élément correspond à la page courante. */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={cx(styles.breadcrumb, className)}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <Fragment key={item.href}>
              {index > 0 && (
                <li className={styles.separator} aria-hidden="true">
                  /
                </li>
              )}
              <li>
                {isCurrent ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
