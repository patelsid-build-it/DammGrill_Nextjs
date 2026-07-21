import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Damm Grill",
              "image": "https://www.dammgrill.de/_next/image?url=%2Ffavicon.png&w=640&q=75",
              "@id": "https://www.dammgrill.de/#restaurant",
              "url": "https://www.dammgrill.de",
              "telephone": "0203443004",
              "priceRange": "$$",
              "menu": "https://www.dammgrill.de/speisekarte",
              "servesCuisine": ["Greek", "German", "Pizza", "Schnitzel"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Auf dem Damm 52",
                "addressLocality": "Duisburg",
                "postalCode": "47137",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.463283,
                "longitude": 6.782012
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "12:00",
                "closes": "22:00"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
