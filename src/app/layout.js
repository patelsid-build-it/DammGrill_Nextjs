import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Damm Grill - Griechisches Restaurant in Duisburg Meiderich",
  description: "Willkommen beim Damm Grill in Duisburg Meiderich. Genießen Sie authentische griechische Spezialitäten und mehr!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
