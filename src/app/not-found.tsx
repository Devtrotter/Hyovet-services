import Link from "next/link";
import { notFoundContent } from "@/utils/data/content/not-found/page";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>{notFoundContent.title}</h1>
      <p className={styles.text}>{notFoundContent.text}</p>
      <div className={styles.actions}>
        {notFoundContent.links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
