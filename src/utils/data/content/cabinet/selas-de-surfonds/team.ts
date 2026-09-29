import "server-only";
import { teamMember } from "@/utils/data/content/cabinets/team";
import type { TeamContent, TeamMember } from "@/utils/types/team";

const member = teamMember("surfonds");

const vets: TeamMember[] = [
  member("Thibaut Billy", { photo: "thibaut-billy", linkedin: "thibaut-billy-a2655b15b" }),
  member("Marius Bota", { photo: "marius-bota", linkedin: "marius-bota-a2613830b" }),
  member("Julie Crepon-Lavergne", {
    photo: "julie-crepon-lavergne",
    linkedin: "julie-lavergne-crepon-020a10215",
  }),
  member("Annette Fichtl", { photo: "annette-fichtl" }),
  member("Christian Spindler", { photo: "christian-spindler" }),
];

export const team: TeamContent = {
  title: "L'équipe Selas de Surfonds",
  subtitle: "Des vétérinaires mobiles, au plus près de vos élevages.",
  groups: [
    {
      label: "Les vétérinaires",
      jobTitle: "Vétérinaire",
      tone: "white",
      members: vets,
    },
  ],
};
