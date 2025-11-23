import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OKLU Properties LTD - Property Sourcing & Investment Solutions",
  description:
    "Reimagining what property can be. Property sourcing and bespoke solutions for investors. We manage investor portfolios and guide on flipping or holding properties.",
  generator: "huzaifali.tech",
  icons: {
    icon: "favicon.svg",
    shortcut: "PNG-01.png",
    apple: "apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
