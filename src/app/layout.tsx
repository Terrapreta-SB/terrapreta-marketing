import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import localFont from "next/font/local";

const sans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../public/fonts/ABCMarfa-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCMarfa-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/ABCMarfa-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCMarfa-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Terrapreta — Soil-based Solutions",
  description:
    "Regenerating ecosystems from the soil up. Growing equitable places for nature, people and climate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth bg-stone-950">
      <body
        className={`${sans.variable} antialiased  flex flex-col h-screen justify-between bg-stone-950 font-sans text-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
