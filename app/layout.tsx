import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  title: "Colibri — Fashion Intelligence for Brands",
  description:
    "Dati proprietari e AI insights per brand e retailer fashion. Il layer B2B di Avenor.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Colibri",
    description: "Fashion Intelligence for Brands",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
