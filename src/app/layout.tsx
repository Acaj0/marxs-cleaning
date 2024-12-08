import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import FloatingPromo from "@/components/floating-promo";
import Script from "next/script";

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
  keywords:
    "Professional cleaning services, residential cleaning, commercial cleaning, Cape Coral cleaning, Charlotte County cleaning, Lee County cleaning, Collier County cleaning, reliable cleaning services, high-quality cleaning, spotless cleaning, customized cleaning solutions, expert cleaning team, Cape Coral cleaners, Florida cleaning services, house cleaning Cape Coral, office cleaning Lee County, deep cleaning Collier County, affordable cleaning services, detailed cleaning Charlotte County",
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZ48D92T');
            `,
          }}
        />
      </head>
      <body className={`${roboto.className} ${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ48D92T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <FloatingPromo />
      </body>
    </html>
  );
}

