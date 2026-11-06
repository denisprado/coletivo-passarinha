import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
    "Desde 2014, o Coletivo Passarinha atua como uma plataforma de criação, articulação e circulação artística, conectando linguagens, saberes, pessoas e territórios.",
  keywords: [
    "Coletivo Passarinha",
    "Arte Educação Ambiental",
    "Quintal Garatuja",
    "A História de Aru",
    "Orquestra de Pandeiros",
    "Ecobrinquedoteca",
    "Campinas",
    "Teatro",
    "Música Brasileira",
  ],
  authors: [{ name: "Coletivo Interdisciplinar Passarinha" }],
  icons: {
    icon: "/logo-passarinha.jpg",
    apple: "/logo-passarinha.jpg",
  },
  openGraph: {
    title: "Coletivo Interdisciplinar Passarinha | Arte, Educação e Meio Ambiente",
    description:
      "Plataforma de criação, articulação e circulação artística conectando linguagens, saberes e territórios.",
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
