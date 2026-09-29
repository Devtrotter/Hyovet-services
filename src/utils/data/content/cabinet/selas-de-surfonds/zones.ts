import "server-only";
import { addresses, formatAddress } from "@/utils/data/content/shared/coordonnees";
import type { Zone } from "@/utils/types/sections";

// Zones d'intervention — contenus provisoires à remplacer via le CMS.
export const zones: { title: string; subtitle: string; items: Zone[] } = {
  title: "Nos cabinets, près de vos élevages",
  subtitle: "Nos zone d’interventions",
  items: [
    {
      id: "zone-surfonds",
      region: "De la Seine-Maritime à la Gironde",
      accent: "blue",
      departments: [
        { name: "Sarthe (72)", cities: "Le Mans 72000, Surfonds 72370, La Flèche 72200, Sablé-sur-Sarthe 72300" },
        { name: "Seine-Maritime (76)", cities: "Rouen 76000, Dieppe 76200, Le Havre 76600" },
        { name: "Cher (18) · Gironde (33)", cities: "Bourges 18000, Vierzon 18100 · Bordeaux 33000, Libourne 33500" },
      ],
      map: { lat: 47.3, lng: 0.4, zoom: 6, query: formatAddress(addresses.surfonds) },
    },
  ],
};
