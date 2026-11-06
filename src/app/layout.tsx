import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coletivo-passarinha.vercel.app"),
  title: "Coletivo Interdisciplinar Passarinha | Arte Educação Ambiental",
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
    icon: "/brand/passarinha-ave.png",
    apple: "/logo-passarinha.jpg",
  },
  openGraph: {
    title: "Coletivo Interdisciplinar Passarinha | Arte Educação Ambiental",
    description:
      "Plataforma de criações e circulação de arte que se mistura com as urgências socioambientais do nosso tempo.",
    images: [{ url: "/logo-passarinha.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={saira.variable}>
      <body className="min-h-screen flex flex-col bg-[#FDF6E4] text-[#532E5A] antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
