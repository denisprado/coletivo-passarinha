import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import ContatoForm from "@/components/ContatoForm";
import { AdminEditLink } from "@/components/AdminEditSystem";
import { getSiteConfig } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Contato & Contratação | Coletivo Passarinha",
  description:
    "Solicite uma proposta para espetáculos, oficinas, vivências de arte-educação ambiental ou entre em contato com o Coletivo Passarinha e o Quintal Garatuja.",
  openGraph: {
    title: "Contato & Contratação | Coletivo Passarinha",
    description:
      "Envie sua proposta para espetáculos, oficinas ou projetos no Ponto de Cultura Quintal Garatuja.",
    images: [{ url: "/photos/espetaculos/passarinha-nina-197.webp" }],
  },
};

export default async function ContatoPage() {
  const siteConfig = await getSiteConfig();

  return (
    <main className="w-full overflow-x-clip">
      {/* Header em Textura Roxa Acrílica */}
      <section className="canvas-roxo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40]">
            <Mail className="w-4 h-4" /> Vamos Conversar
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Entre em Contato
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDBC2E] max-w-3xl mx-auto leading-relaxed font-semibold">
            Solicite um orçamento para espetáculos, oficinas, vivências de
            arte-educação ambiental ou venha conhecer o Quintal Garatuja em
            Campinas/SP.
          </p>
        </div>
      </section>

      {/* Grid de Contato em Textura Amarela Ipê Acrílica */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase">
                Canais Diretos
              </h2>
              <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed font-semibold">
                Respondemos rapidamente por e-mail, redes sociais ou WhatsApp.
                Escolha o canal mais prático para você!
              </p>
            </div>

            <div className="space-y-4">
              {/* E-mail */}
              <div data-admin-section className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E91C47] text-[#FDF6E4] border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider block">
                    E-mails Oficiais
                  </span>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${siteConfig.emailGeral}`}
                      className="text-sm font-black text-[#3A1D40] hover:underline block"
                    >
                      {siteConfig.emailGeral}
                    </a>
                    <AdminEditLink singleton="configuracoes" field="E-mail Coletivo" label="Editar e-mail do Coletivo" />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${siteConfig.emailGaratuja}`}
                      className="text-xs font-bold text-[#3A1D40]/85 hover:underline block"
                    >
                      {siteConfig.emailGaratuja}
                    </a>
                    <AdminEditLink singleton="configuracoes" field="E-mail Quintal Garatuja" label="Editar e-mail do Quintal" />
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div data-admin-section className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#25D366] text-[#FDF6E4] border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#25D366] uppercase tracking-wider block">
                    WhatsApp Comercial
                  </span>
                  <div className="flex items-center gap-1">
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-black text-[#3A1D40] hover:underline block"
                    >
                      {siteConfig.phone}
                    </a>
                    <AdminEditLink singleton="configuracoes" field="Telefone Principal" label="Editar telefone e WhatsApp" />
                  </div>
                  <span className="text-xs font-semibold text-[#3A1D40]/80">
                    Atendimento de seg a sex, 9h às 18h
                  </span>
                </div>
              </div>

              {/* Endereço */}
              <div data-admin-section className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3A1D40] text-[#FDBC2E] border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider block">
                    Ponto de Cultura Quintal Garatuja
                  </span>
                  <p className="text-sm font-bold text-[#3A1D40]">
                    Rua São Miguel Arcanjo, 1520
                    <AdminEditLink singleton="configuracoes" field="Endereço Quintal Garatuja" label="Editar endereço" />
                  </p>
                  <p className="text-xs text-[#3A1D40]/85 font-medium">
                    Jardim Nova Europa — Campinas/SP
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div data-admin-section className="painel-rustico p-6 space-y-3">
              <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider flex items-center justify-between">
                <span>Siga e Conecte-se</span>
                <AdminEditLink singleton="configuracoes" field="Instagram Coletivo" label="Editar redes sociais" />
              </span>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-black text-[#3A1D40]">
                <a
                  href="https://www.instagram.com/coletivopassarinha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @coletivopassarinha
                  (Oficial)
                </a>
                <a
                  href="https://www.instagram.com/quintalgaratuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @quintalgaratuja (Ponto
                  de Cultura)
                </a>
                <a
                  href="https://www.instagram.com/aru.permacultura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @aru.permacultura
                  (Projeto Aru)
                </a>
                <a
                  href="https://www.instagram.com/orquestra.pandeiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @orquestra.pandeiros
                  (Orquestra de Pandeiros)
                </a>
              </div>
            </div>
          </div>

          {/* Formulário envolto em Suspense */}
          <Suspense
            fallback={
              <div className="lg:col-span-7 painel-rustico p-8 animate-pulse">
                Carregando formulário...
              </div>
            }
          >
            <ContatoForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
