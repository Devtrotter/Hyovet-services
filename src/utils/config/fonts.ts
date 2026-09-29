import { Inter, Poppins } from "next/font/google";

export const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Police du pied de page uniquement (sous la ligne de flottaison) : pas de preload.
export const fontFooter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--font-inter",
});
