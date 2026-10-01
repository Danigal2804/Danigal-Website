import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Danigal Studio | דניגל סטודיו — הפקת פודקאסט",
  description:
    "אתם תחשבו מה יש לכם להגיד, אני על כל השאר. בניית אולפני פודקאסט, הקלטה ועריכה — דניאל גל, דניגל סטודיו.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
