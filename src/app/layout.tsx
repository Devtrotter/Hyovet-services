import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { FloatingActions } from "@/components/layout/FloatingActions/FloatingActions";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop/ScrollToTop";
import { site } from "@/content/site";
import { baseOpenGraph, organizationJsonLd, serializeJsonLd } from "@/lib/seo";
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
  applicationName: site.name,
  openGraph: {
    ...baseOpenGraph,
    title: "Hyovet Services — Groupe vétérinaire expert de la filière porcine",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0093d6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior : Next désactive le smooth scroll CSS le temps des changements de page.
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }} />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <FloatingActions />
        <ScrollToTop />
      </body>
    </html>
  );
}
