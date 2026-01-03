import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Camelias Flowers | Luxury Florist & Gift Hampers",
  description: "Premium custom flower arrangements and curated gift hampers delivered across the UAE.",
  metadataBase: new URL("https://www.cameliasflowers.example"),
  openGraph: {
    title: "Camelias Flowers | Luxury Florist",
    description: "Custom flowers, luxury hampers, and bespoke gifting.",
    url: "https://www.cameliasflowers.example",
    siteName: "Camelias Flowers",
    images: [{ url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200" }],
  },
  alternates: {
    canonical: "https://www.cameliasflowers.example",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat phone="971567756327" />
      </body>
    </html>
  );
}
