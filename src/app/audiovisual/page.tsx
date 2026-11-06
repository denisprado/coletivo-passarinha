import React from "react";
import { AUDIOVISUAL_WORKS } from "@/data/siteData";
import { Play, ExternalLink, Film } from "lucide-react";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata = {
  title: "Produções Audiovisuais | Coletivo Passarinha",
  description:
    "Curta-metragem A Caixa Mágica, Fora de onde? e O que se passa no formigueiro? - criações em vídeo do Coletivo Passarinha.",
};

const AV_THEMES = [
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
  {
    canvasClass: "canvas-amarelo",
    textPrimary: "text-[#3A1D40]",
    bannerColor: "crimson" as const,
    bannerText: "text-[#FDBC2E]",
  },
];

export default function AudiovisualPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Amarela Ipê Acrílica */}
      <section className="canvas-amarelo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Film className="w-4 h-4 text-[#FDBC2E]" /> Cinema, Vídeo-arte & Infâncias
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Audiovisual
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#3A1D40] max-w-3xl mx-auto leading-relaxed font-bold">
            O audiovisual como linguagem de criação artística, humor, poética
            ecológica e reflexão crítica com acessibilidade em Libras.
          </p>
        </div>
      </section>

      {/* Cada Produção Audiovisual em sua própria Faixa Pintada Rústica */}
      {AUDIOVISUAL_WORKS.map((work, idx) => {
        const theme = AV_THEMES[idx % AV_THEMES.length];

        return (
          <section
            key={work.id}
            id={work.id}
            className={`${theme.canvasClass} py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]`}
          >
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="space-y-3">
                <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-xs tracking-wider bg-[#3A1D40] text-[#FDBC2E] border border-[#FDBC2E]/40">
                  Produção Audiovisual 0{idx + 1}
                </span>
                <div>
                  <BrushBanner
                    color={theme.bannerColor}
                    shape="wave"
                    className="-ml-2"
                  >
                    <h2
                      className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight ${theme.bannerText}`}
                    >
                      {work.title}
                    </h2>
                  </BrushBanner>
                </div>
              </div>

              {/* Player do YouTube Embutido com Moldura Rústica (quando houver) */}
              {work.youtubeId && (
                <div className="bg-[#FDF6E4] p-2 sm:p-3 rounded-sm border-2 border-[#3A1D40] shadow-[8px_8px_0px_rgba(45,18,50,0.45)]">
                  <div className="relative w-full aspect-video rounded-[2px] overflow-hidden bg-[#241128]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}`}
                      title={work.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* Fotos Abertas em Destaque (Tríptico para A Caixa Mágica, ou Cartaz + Cena para os vídeos) */}
              {work.photos.length > 0 && (
                <div className="space-y-3">
                  <h3
                    className={`text-xs sm:text-sm font-black uppercase tracking-wider ${theme.textPrimary}`}
                  >
                    Cartaz Oficial & Registros de Cena (Clique para ampliar)
                  </h3>
                  <PhotoMosaic
                    photos={work.photos}
                    variant={work.photos.length >= 3 ? "triptych" : "grid"}
                  />
                </div>
              )}

              {/* Sinopse + Contexto + Ficha Técnica em Painel Rústico */}
              <div className="painel-rustico p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                      Sinopse
                    </h3>
                    <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-semibold">
                      {work.synopsis}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-[#FDBC2E]/30 p-5 rounded-xs border-l-4 border-[#E91C47] space-y-1.5">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                      Contexto & Realização
                    </h3>
                    <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed font-medium">
                      {work.context}
                    </p>
                  </div>
                </div>

                {/* Ficha Técnica */}
                <div className="space-y-3 pt-4 border-t-2 border-[#3A1D40]/15">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#3A1D40]/80">
                    Ficha Técnica
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#3A1D40]">
                    {work.technicalSheet.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#FDBC2E]/25 rounded-xs border border-[#3A1D40]/30"
                      >
                        <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                          {item.label}
                        </span>
                        <span className="text-[#3A1D40] font-bold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {work.videoUrl && (
                  <div className="pt-2">
                    <a
                      href={work.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-[#FDF6E4] text-xs sm:text-sm py-3 px-6"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Assistir no YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
