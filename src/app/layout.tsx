import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import FloatingPromo from "@/components/floating-promo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roboto = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marx's Cleaning - Professional Cleaning Services",
  description:
    "Marx's Cleaning offers reliable, high-quality residential and commercial cleaning services in Cape Coral. Our expert team is dedicated to providing top-notch cleaning with attention to detail, ensuring a spotless environment every time. Contact us for customized cleaning solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={roboto.className}>{children}<FloatingPromo/></body>
    </html>
  );
}
