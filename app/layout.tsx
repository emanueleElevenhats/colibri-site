import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/context";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colibri.fashion"),
  title: "Colibri \u2014 Fashion Intelligence for Brands",
  description:
    "Proprietary data and AI insights for fashion brands and retailers. Avenor\u2019s B2B layer.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Colibri \u2014 Fashion Intelligence for Brands",
    description:
      "Proprietary data and AI insights for fashion brands and retailers. The B2B layer of Avenor.",
    siteName: "Colibri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colibri \u2014 Fashion Intelligence for Brands",
    description:
      "Proprietary data and AI insights for fashion brands and retailers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
