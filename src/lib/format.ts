const SHORT_MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

/** "2026-09-03" -> "3 Sep 2026" (format de la maquette, indépendant de la locale serveur). */
export function formatShortDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${SHORT_MONTHS[month - 1]} ${year}`;
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
