import type { Metadata } from "next";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import site from "@/data/site.json";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.clubName} | Resmi Web Sitesi`,
    template: `%s | ${site.clubName}`,
  },
  description: site.mission,
  openGraph: {
    title: site.clubName,
    description: site.mission,
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <a href="#ana-icerik" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-2 focus:rounded focus:bg-red focus:px-4 focus:py-2 focus:text-white">
          İçeriğe geç
        </a>
        <Header />
        <main id="ana-icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}