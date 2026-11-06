import React from "react";
import Image from "next/image";
import { WORKSHOPS } from "@/data/siteData";
import { Hammer, CheckCircle2, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata = {
  title: "Oficinas & Práticas Formativas | Coletivo Passarinha",
  description:
    "Oficinas de arte-educação ambiental, reutilização de materiais, Ecobrinquedoteca e a Orquestra de Pandeiros do Coletivo Passarinha.",
};

const WORKSHOP_THEMES = [
  {
    canvasClass: "canvas-amarelo",
    textPrimary: "text-[#3A1D40]",
    bannerColor: "crimson" as const,
    bannerText: "text-[#FDBC2E]",
  },
  {
    canvasClass: "canvas-roxo",
    textPrimary: "text-[#FDBC2E]",
    bannerColor: "crimson" as const,
    bannerText: "text-[#FDBC2E]",
  },
  {
    canvasClass: "canvas-laranja",
    textPrimary: "text-[#2A1230]",
    bannerColor: "yellow" as const,
    bannerText: "text-[#532E5A]",
  },
];

export default function PraticasFormativasPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Vermelha Acrílica + Pincelada Amarela Inclinada */}
      <section className="canvas-vermelho py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Hammer className="w-4 h-4 text-[#FDBC2E]" /> Formação, Criação Coletiva & Aprendizagem
          </div>
          <div>
            <BrushBanner color="yellow" shape="tilted">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                Oficinas & Práticas Formativas
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDF6E4] max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-[0_1px_2px_rgba(45,18,50,0.28)]">
            Oficinas que aproximam arte, educação e meio ambiente, criando
            experiências de experimentação e aprendizagem intergeracional para
            diferentes espaços e públicos.
          </p>
        </div>
      </section>

      {/* Cada Prática Formativa em sua própria Faixa Pintada Rústica + Galeria Fotográfica Aberta */}
      {WORKSHOPS.map((workshop, wIdx) => {
        const theme = WORKSHOP_THEMES[wIdx % WORKSHOP_THEMES.length];
        const allPhotos = [
          ...workshop.photos,
          ...(workshop.secondaryPhotos || []),
        ];

        return (
          <section
            key={workshop.id}
            id={workshop.id}
            className={`scroll-mt-24 ${theme.canvasClass} py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]`}
          >
            <div className="max-w-6xl mx-auto space-y-10">
              {/* Topo da Oficina */}
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    {workshop.logoUrl && (
                      <div className="relative w-20 h-20 rounded-sm bg-[#FDF6E4] p-2 border-2 border-[#3A1D40] shadow-[4px_4px_0px_#3A1D40] shrink-0">
                        <Image
                          src={workshop.logoUrl}
                          alt={`Logo ${workshop.title}`}
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <BrushBanner
                        color={theme.bannerColor}
                        shape="wave"
                        className="-ml-2"
                      >
                        <h2
                          className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight ${theme.bannerText}`}
                        >
                          {workshop.title}
                        </h2>
                      </BrushBanner>
                      <p
                        className={`text-sm sm:text-lg font-black mt-1.5 ${theme.textPrimary}`}
                      >
                        {workshop.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-black uppercase px-3.5 py-1.5 rounded-xs tracking-wider bg-[#3A1D40] text-[#FDBC2E] border border-[#FDBC2E]/40">
                    Oficina / Vivência
                  </span>
                </div>

                {/* Conceito Central */}
                <div className="painel-rustico p-5 text-base sm:text-xl font-black text-[#3A1D40] italic border-l-8 border-l-[#E91C47]">
                  &ldquo;{workshop.concept}&rdquo;
                </div>
              </div>

              {/* Descrição Completa + Foto de Destaque */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-7 painel-rustico p-6 sm:p-8 space-y-4 text-sm sm:text-base text-[#3A1D40] leading-relaxed font-semibold">
                  {workshop.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="lg:col-span-5 space-y-4">
                  {/* Público-alvo & Limite */}
                  <div className="painel-rustico p-6 space-y-4 text-xs sm:text-sm font-semibold text-[#3A1D40]">
                    <div className="space-y-1">
                      <span className="font-black uppercase text-[#E91C47] text-[11px] tracking-wider block">
                        Público-Alvo:
                      </span>
                      <p className="font-bold">{workshop.targetAudience}</p>
                    </div>
                    {workshop.audienceLimit && (
                      <div className="space-y-1 pt-3 border-t border-[#3A1D40]/15">
                        <span className="font-black uppercase text-[#E91C47] text-[11px] tracking-wider block">
                          Limite Recomendado:
                        </span>
                        <p className="font-bold">{workshop.audienceLimit}</p>
                      </div>
                    )}
                  </div>

                  {/* Princípios ou Destaques */}
                  {workshop.principles && (
                    <div className="painel-rustico p-6 space-y-3">
                      <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                        Princípios da Prática:
                      </h3>
                      <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm font-bold text-[#3A1D40]">
                        {workshop.principles.map((pr, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0" />
                            <span>{pr}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {workshop.highlights && (
                    <div className="painel-rustico p-6 space-y-3">
                      <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                        Destaques & Realizações:
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3A1D40] font-semibold">
                        {workshop.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Mural Fotográfico Aberto com todas as fotos da Oficina */}
              <div className="space-y-3">
                <h3
                  className={`text-sm sm:text-base font-black uppercase tracking-wider ${theme.textPrimary}`}
                >
                  Registros Fotográficos da Vivência ({allPhotos.length} fotos — clique para ampliar)
                </h3>
                <PhotoMosaic photos={allPhotos} variant="editorial" />
              </div>

              {/* Ações de Contratação */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={workshop.whatsappContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Informações de Contratação no WhatsApp
                </a>

                {workshop.instagramUrl && (
                  <a
                    href={workshop.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#FDF6E4] hover:bg-[#FDBC2E] text-[#3A1D40] text-xs sm:text-sm px-5 py-3"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E91C47]" />
                    Siga no Instagram
                  </a>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
