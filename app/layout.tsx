import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SITE_URL = "https://www.danigal.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "דניגל סטודיו | הפקת, עריכת ובניית אולפן פודקאסט בתל אביב",
    template: "%s | Danigal Studio",
  },
  description:
    "אולפן פודקאסט מקצועי בתל אביב להפקת פודקאסט, עריכת פודקאסט והקלטה. דניאל גל, בעלים של אחד האולפנים המתקדמים בארץ, מקים אולפני פודקאסט ועורך פודקאסטים מובילים.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Danigal Studio",
    title: "דניגל סטודיו | הפקת, עריכת ובניית אולפן פודקאסט בתל אביב",
    description:
      "אולפן פודקאסט מקצועי בתל אביב להפקת פודקאסט, עריכת פודקאסט והקלטה. דניאל גל, דניגל סטודיו.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "דניגל סטודיו | הפקת, עריכת ובניית אולפן פודקאסט בתל אביב",
    description: "אולפן פודקאסט מקצועי בתל אביב להפקת פודקאסט, עריכת פודקאסט והקלטה.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Danigal Studio - דניגל סטודיו",
  image: `${SITE_URL}/images/og-image.png`,
  url: SITE_URL,
  telephone: "+972502252263",
  email: "daniel.grr@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "יוסף קארו 15",
    addressLocality: "תל אביב",
    addressCountry: "IL",
  },
  areaServed: "IL",
  sameAs: [
    "https://open.spotify.com/playlist/5g4FHwMs2PEhRzXw4I3uGW",
    "https://www.facebook.com/daniel.gal.96/",
    "https://www.instagram.com/danigal__",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "הפקת פודקאסט" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "עריכת פודקאסט" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "בניית אולפן פודקאסט" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "הקמת אולפן פודקאסט" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
