import type { Viewport } from "next";
import { ScrollToTop } from "@/components/shared/atoms/ScrollToTop/ScrollToTop";
import { FloatingActions } from "@/components/shared/organisms/FloatingActions/FloatingActions";
import { Footer } from "@/components/shared/organisms/Footer/Footer";
import { Header } from "@/components/shared/organisms/Header/Header";
import { fontFooter, fontHeading } from "@/utils/config/fonts";
import { siteConfig } from "@/utils/config/site";
import { globalSeo } from "@/utils/data/seo/global";
import { organizationJsonLd } from "@/utils/helpers/organization-json-ld";
import { serializeJsonLd } from "@/utils/helpers/seo";
import "@/styles/globals.scss";

export const metadata = globalSeo;

export const viewport: Viewport = {
  themeColor: "#0093d6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior : Next désactive le smooth scroll CSS le temps des changements de page.
    <html
      lang="fr"
      className={`${fontHeading.variable} ${fontFooter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }} />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <FloatingActions phone={siteConfig.phone} />
        <ScrollToTop />
      </body>
    </html>
  );
}
