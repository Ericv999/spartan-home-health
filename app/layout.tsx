import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Spartan Home Health | His & Hers Hormone Optimization",
  description:
    "Doctor-guided TRT, HRT, ED medication, and peptides — delivered to your door. The first hormone optimization platform built for couples.",
  openGraph: {
    title: "Spartan Home Health | Optimized. Together.",
    description:
      "His strength. Her balance. One household. Doctor-guided hormone optimization delivered to your door.",
    type: "website",
    url: "https://spartanhomehealth.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spartan Home Health",
              url: "https://spartanhomehealth.com",
              description:
                "Doctor-guided hormone optimization for couples. TRT, HRT, ED medication, and peptides delivered to your door.",
              foundingDate: "2026",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sandpoint",
                addressRegion: "ID",
                addressCountry: "US",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
