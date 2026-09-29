import "server-only";
import { teamMember } from "@/utils/data/content/cabinets/team";
import type { TeamContent, TeamMember } from "@/utils/types/team";

const member = teamMember("hyovet");

// Portraits extraits des trombinoscopes vétérinaires — à remplacer par les photos originales.
const vets: TeamMember[] = [
  member("Fanny Brun", { photo: "fanny-brun", linkedin: "fanny-brun-814521109" }),
  member("Elisabeth Chabeauti", { photo: "elisabeth-chabeauti" }),
  member("Isabelle Delaunay", { photo: "isabelle-delaunay" }),
  member("Camille Demoitié", { photo: "camille-demoitie", linkedin: "camille-demoiti%C3%A9-31238718b" }),
  member("Nathalie Deville", { photo: "nathalie-deville" }),
  member("Matthieu Froget", { photo: "matthieu-froget" }),
  member("Inés García Viñado", {
    photo: "ines-garcia-vinado",
    linkedin: "in%C3%A9s-garc%C3%ADa-vi%C3%B1ado-0b14b178",
  }),
  member("Héloïse Guillou-Mouchet", {
    photo: "heloise-guillou-mouchet",
    linkedin: "h%C3%A9lo%C3%AFse-guillou-mouchet-4639731ba",
  }),
  member("Adélaïde Maligorne", { photo: "adelaide-maligorne" }),
  member("Michel Ouisse", { photo: "michel-ouisse" }),
  member("Christine Puech", { photo: "christine-puech" }),
  member("Christophe Renoult", { photo: "christophe-renoult", linkedin: "christophe-renoult-b07906222" }),
  member("Jessica Rouillier", { photo: "jessica-rouillier" }),
  member("Jean-Noël Sialelli", {
    photo: "jean-noel-sialelli",
    linkedin: "jean-no%C3%ABl-sialelli-a669501a2",
  }),
  member("Karine Thirouard", { photo: "karine-thirouard" }),
  member("Hervé Tosser", { photo: "herve-tosser" }),
];

export const team: TeamContent = {
  title: "L'équipe Hyovet Services",
  subtitle: "Ce qui guide les deux équipes, au cabinet comme en élevage.",
  groups: [{ label: "Les vétérinaires", jobTitle: "Vétérinaire", tone: "white", members: vets }],
};
