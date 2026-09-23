import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "César Elías | Portafolio",
    template: "%s | César Elías",
  },
  description:
    "Portafolio de César Daniel Elías Villanueva, desarrollador de software: aplicaciones web, móviles, APIs e IoT.",
  authors: [{ name: "César Daniel Elías Villanueva" }],
  openGraph: {
    title: "César Elías | Portafolio",
    description: "Aplicaciones web, móviles, APIs e IoT.",
    locale: "es_SV",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
