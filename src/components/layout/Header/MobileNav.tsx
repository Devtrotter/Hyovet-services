"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import type { NavLink } from "@/content/types";
import styles from "./MobileNav.module.scss";

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
      </button>

      <nav id={panelId} className={styles.panel} data-open={open} aria-label="Navigation mobile" inert={!open}>
        <ul>
          {links.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={index === links.length - 1 ? styles.cta : styles.link}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className={styles.subList}>
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className={styles.subLink} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
