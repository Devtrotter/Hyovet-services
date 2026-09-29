"use client";

import { useSyncExternalStore } from "react";

// Consentement à l'affichage des cartes Google Maps (contenu tiers pouvant déposer des cookies).
// Donné au clic sur une carte, valable pour toutes les cartes du site, mémorisé 13 mois maximum
// (recommandation CNIL), retirable depuis la politique de confidentialité.

const STORAGE_KEY = "hyovet:maps-consent";
const CHANGE_EVENT = "hyovet:maps-consent-change";
export const MAPS_CONSENT_MAX_AGE_DAYS = 395;

// Repli si le stockage du navigateur est indisponible (navigation privée…) : consentement limité à la visite.
let sessionConsent = false;

function readConsent(): boolean {
  try {
    const grantedAt = Number(window.localStorage.getItem(STORAGE_KEY));
    return grantedAt > 0 && Date.now() - grantedAt < MAPS_CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function setMapsConsent(granted: boolean) {
  sessionConsent = granted;
  try {
    if (granted) window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Stockage indisponible : seul le repli de session s'applique.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  // Synchronise les onglets ouverts
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** `true` si le visiteur a accepté l'affichage des cartes Google. Toujours `false` côté serveur. */
export function useMapsConsent() {
  return useSyncExternalStore(subscribe, () => readConsent() || sessionConsent, () => false);
}
