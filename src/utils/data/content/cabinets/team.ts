import "server-only";
import type { TeamContent, TeamMember } from "@/utils/types/team";

// Trombinoscopes — portraits recadrés dans /images/team/<dossier>.
// Sans photo, la carte affiche un avatar aux couleurs du thème ; sans profil, pas de bouton LinkedIn.
export const teamMember =
  (folder: string) =>
  (name: string, { photo, linkedin }: { photo?: string; linkedin?: string } = {}): TeamMember => ({
    name,
    photo: photo && `/images/team/${folder}/${photo}.jpg`,
    linkedin: linkedin && `https://www.linkedin.com/in/${linkedin}/`,
  });

const member = teamMember("hyovetservice");

const operationalTeam: TeamMember[] = [
  member("Guillaume Bartet", { photo: "guillaume-bartet", linkedin: "guillaume-bartet-5072a544" }),
  member("Laura Noffe", { photo: "laura-noffe", linkedin: "laura-noffe" }),
  member("Camille Ousset", { photo: "camille-ousset" }),
  member("Céline Chauvel", { photo: "celine-chauvel", linkedin: "c%C3%A9line-chauvel" }),
  member("Gwenaël Choupaux"),
  member("Karine Andrieux", { photo: "karine-andrieux", linkedin: "karine-andrieux-04757737a" }),
  member("Sophie Destouches", { photo: "sophie-destouches", linkedin: "sophie-destouches-849430306" }),
  member("Magali Ferte", { photo: "magali-ferte", linkedin: "magali-ferte-6258363b8" }),
  member("Alicia Lormel", { linkedin: "alicia-lormel-50270720b" }),
  member("Marina Rouxel", { photo: "marina-rouxel" }),
];

const technicianTeam: TeamMember[] = [
  member("Audrey Soulabaille", { linkedin: "audrey-soulabaille-b42952127" }),
  member("Pierre Cade"),
  member("Laëtitia Faes"), // profil à confirmer (mention Cooperl)
  member("Ludivine Engoulvent"),
];

/** Équipe Hyovet Services — reprise telle quelle par la page cabinet Hyovet. */
export const groupTeam: TeamContent = {
  title: "L'équipe Hyovet Services",
  subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
  groups: [
    { label: "Opérationnel", jobTitle: "Opérationnel", tone: "blue", members: operationalTeam },
    { label: "Les techniciens", jobTitle: "Technicien", tone: "green", members: technicianTeam },
  ],
};
