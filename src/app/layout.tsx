import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "No Golf! No Life!",
    template: "%s | No Golf! No Life!",
  },
  description: "給對高爾夫感興趣的新手，一個了解這個生活方式的入口。",
  openGraph: {
    siteName: "No Golf! No Life!",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
