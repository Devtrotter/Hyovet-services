import "server-only";
import { addresses, formatAddress } from "@/utils/data/content/shared/coordonnees";
import type { Zone } from "@/utils/types/sections";

// Zone reprise de la première zone de l'accueil, centrée sur Plestan.
// Contenu provisoire à remplacer via le CMS.
const departments = [
  {
    name: "Loire-Atlantique (44)",
    cities:
      "Nantes 44000, Saint-Nazaire 44600, Saint-Herblain 44800, Rezé 44400, Saint-Sébastien-sur-Loire 44230, Orvault 44700, Vertou 44120, La Baule-Escoublac 44500, Pornic 44210, Guérande 44350, Châteaubriant 44110, Ancenis 44150",
  },
  {
    name: "Maine-et-Loire (49)",
    cities:
      "Angers 49000, Cholet 49300, Saumur 49400,\nTrélazé 49800, Avrillé 49240, Les Ponts-de-Cé 49130, Beaupréau 49600,\nSegré 49500, Baugé 49150",
  },
  {
    name: "Maine-et-Loire (49)",
    cities:
      "Angers 49000, Cholet 49300, Saumur 49400,\nTrélazé 49800, Avrillé 49240, Les Ponts-de-Cé 49130, Beaupréau 49600,\nSegré 49500, Baugé 49150",
  },
];

export const zones: { title: string; subtitle: string; items: Zone[] } = {
  title: "Nos cabinets, près de vos élevages",
  subtitle: "Nos zone d’interventions",
  items: [
    {
      id: "zone-1",
      region: "Pay de la Loire",
      badge: undefined,
      accent: "blue",
      departments,
      map: { lat: 48.25, lng: -3.2, zoom: 8, query: formatAddress(addresses.hyovet) },
    },
  ],
};
