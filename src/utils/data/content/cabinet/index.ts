import "server-only";
import type { CabinetPage } from "@/utils/types/cabinet";
import { hyovet } from "./hyovet";
import { selasDeSurfonds } from "./selas-de-surfonds";

/** Pages de détail des cabinets, dans l'ordre d'affichage (menu, sitemap). */
export const cabinetPages: CabinetPage[] = [hyovet, selasDeSurfonds];

export const getCabinetPage = (slug: string) => cabinetPages.find((page) => page.slug === slug);
