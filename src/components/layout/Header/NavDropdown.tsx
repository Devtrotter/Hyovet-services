"use client";

import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";

interface NavDropdownProps {
  className: string;
  children: ReactNode;
}

/**
 * Élément de menu à sous-menu. L'ouverture reste en CSS (:hover / :focus-within) ;
 * ce composant referme le panneau après un clic sur un lien, sinon le survol et le focus conservés
 * par le header (partagé entre les pages) le laissent ouvert. Il se réarme dès que la souris
 * quitte l'élément ou qu'il reprend le focus clavier.
 */
export function NavDropdown({ className, children }: NavDropdownProps) {
  const [dismissed, setDismissed] = useState(false);

  const onClickCapture = (event: MouseEvent<HTMLLIElement>) => {
    // Ouverture dans un nouvel onglet : on reste sur la page, le menu peut rester ouvert.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    const link = (event.target as HTMLElement).closest("a");
    if (!link) return;
    setDismissed(true);
    link.blur();
  };

  return (
    <li
      className={className}
      data-dismissed={dismissed || undefined}
      onClickCapture={onClickCapture}
      onMouseLeave={() => setDismissed(false)}
      onFocus={() => setDismissed(false)}
    >
      {children}
    </li>
  );
}
