import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIBJO-JP-IN",
  description: "CIBJO Japan India - World Jewellery Confederation",
  icons: {
    icon: [
      { url: "/favicon.png?v=99", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png?v=99", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png?v=99", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=99", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.png?v=99",
    apple: "/apple-touch-icon.png?v=99",
  },
  openGraph: {
    title: "CIBJO-JP-IN",
    description: "CIBJO Japan India - World Jewellery Confederation",
    url: "https://www.cibjo-jp-in.org",
    siteName: "CIBJO-JP-IN",
    images: [
      {
        url: "https://www.cibjo-jp-in.org/og-image.png?v=99",
        width: 1200,
        height: 630,
        alt: "CIBJO-JP-IN Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CIBJO-JP-IN",
    description: "CIBJO Japan India - World Jewellery Confederation",
    images: ["https://www.cibjo-jp-in.org/og-image.png?v=99"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning>
        <ClientBody>
          <div className="antialiased">{children}</div>
        </ClientBody>
      </body>
    </html>
  );
}
