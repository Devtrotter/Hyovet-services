import "server-only";
import type { Zone } from "@/utils/types/sections";

// Départements partagés par les trois zones (une seule liste tant que le découpage réel n'est pas arbitré).
const paysDeLaLoire = [
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

// Zones d'intervention : l'accordéon pilote le cadrage (lat/lng/zoom) de la carte Google Maps.
export const zones = {
  title: "Nos cabinets, près de vos élevages",
  subtitle: "Nos zone d’interventions",
  items: [
    {
      id: "zone-1",
      region: "Pay de la Loire",
      badge: "4 départements",
      accent: "blue",
      departments: paysDeLaLoire,
      map: { lat: 48.22, lng: -3.0, zoom: 8 },
    },
    {
      id: "zone-2",
      region: "Pay de la Loire",
      badge: "5 départements",
      accent: "gold",
      departments: paysDeLaLoire,
      map: { lat: 47.4, lng: -0.9, zoom: 8 },
    },
    {
      id: "zone-3",
      region: "Pay de la Loire",
      badge: "5 départements",
      accent: "green",
      departments: paysDeLaLoire,
      map: { lat: 48.0, lng: 0.2, zoom: 8 },
    },
  ] satisfies Zone[],
};
