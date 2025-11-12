import type { Metadata } from "next";
import "./globals.css";
import { Inter, Inter_Tight, Space_Grotesk, DM_Sans } from "next/font/google";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://clouds-above-earth.vercel.app"),
  title: {
    default: "Clouds Above Earth",
    template: "%s | Clouds Above Earth",
  },
  description: "A world of sound, mist, and memory. Nostalgic lo-fi and ambient soundscapes.",
  openGraph: {
    title: "Clouds Above Earth",
    description: "Nostalgic lo-fi and ambient soundscapes.",
    type: "website",
    url: "/",
    images: [{ url: "/api/og?title=Clouds%20Above%20Earth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clouds Above Earth",
    description: "Nostalgic lo-fi and ambient soundscapes.",
    images: ["/api/og?title=Clouds%20Above%20Earth"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${space.variable} ${dmSans.variable} dark`}>
      <body className="bg-night text-cloud relative overflow-x-hidden">
        <Starfield />
        <Navbar />
        <main className="relative z-10 pt-28">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
