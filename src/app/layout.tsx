import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { FloatingActions } from "@/components/layout/FloatingActions/FloatingActions";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { site } from "@/content/site";
import "@/styles/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Police du footer uniquement (sous la ligne de flottaison) : pas de preload.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    template: "%s | Hyovet Services",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    description: site.description,
    images: [{ url: "/images/home/hero-poster.jpg", width: 1920, height: 1080 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0093d6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
