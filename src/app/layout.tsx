import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coletivopassarinha.com.br"),
  title: "Coletivo Interdisciplinar Passarinha | Arte, Educação e Meio Ambiente",
  description:
    "Desde 2014, o Coletivo Passarinha promove ações que transbordam as fronteiras das disciplinas: teatro, música, oficinas, brinquedos reaproveitados, permacultura e pesquisas socioambientais.",
  keywords: [
    "Coletivo Passarinha",
    "Arte Educação Ambiental",
    "Quintal Garatuja",
    "A História de Aru",
    "Orquestra de Pandeiros",
    "Ecobrinquedoteca",
    "Campinas",
    "Teatro Infantil",
  ],
  authors: [{ name: "Coletivo Interdisciplinar Passarinha" }],
  icons: {
    icon: "/logo-passarinha.jpg",
    apple: "/logo-passarinha.jpg",
  },
  openGraph: {
    title: "Coletivo Interdisciplinar Passarinha | Arte, Educação e Meio Ambiente",
    description:
      "Plataforma de criações e circulação de arte que de propósito se mistura com as urgências socioambientais do nosso tempo.",
    images: [{ url: "/logo-passarinha.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#faf7f0] text-[#22211e] antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
