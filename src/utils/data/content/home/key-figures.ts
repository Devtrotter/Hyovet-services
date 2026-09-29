import "server-only";
import type { KeyFigure } from "@/utils/types/sections";

// Chiffres clés chevauchant le hero : l'accent donne la couleur de chaque carte.
export const keyFigures: KeyFigure[] = [
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "green" },
  { value: 20, label: "vétérinaires", accent: "salmon" },
  { value: 35, label: "collaborateurs", accent: "gold" },
  { value: 35, suffix: "k+", label: "Porc soigné", accent: "blue" },
];
