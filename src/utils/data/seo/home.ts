import "server-only";
import type { Metadata } from "next";
import { siteConfig } from "@/utils/config/site";
import { baseOpenGraph } from "./global";

// L'accueil hérite du titre et de la description du layout : seuls la canonique et l'URL Open Graph changent.
export const homeSeo: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    title: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    description: siteConfig.description,
    url: "/",
  },
};
