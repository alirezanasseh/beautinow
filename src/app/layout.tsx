import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header/header";
import Content from '@/app/components/content';
import Footer from '@/app/components/footer/footer';
import React from 'react';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Buy New Perfumes & Beauty Arrivals Online - Lowest Price | Beautinow",
  description: "Free EU Shipping: Buy New Perfumes & Beauty Arrivals collection at Beautinow, enjoy ✓ The Lowest Prices ✓ Free Products ✓ Reward Points",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className + " min-h-screen flex flex-col"}
      >
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
