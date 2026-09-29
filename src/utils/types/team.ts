// Équipes des cabinets.

export interface TeamMember {
  name: string;
  role?: string;
  /** Sans photo, un avatar aux couleurs du thème est affiché. */
  photo?: string;
  linkedin?: string;
}

export interface TeamGroup {
  label: string;
  /** Intitulé de poste des membres, repris dans les données structurées (schema.org Person). */
  jobTitle: string;
  tone: "blue" | "green" | "white";
  members: TeamMember[];
}

export interface TeamContent {
  title: string;
  subtitle: string;
  groups: TeamGroup[];
}
