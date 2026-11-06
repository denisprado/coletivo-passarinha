import React from "react";
import { AUDIOVISUAL_WORKS } from "@/data/siteData";
import { Play, ExternalLink, Film } from "lucide-react";
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "Produções Audiovisuais | Coletivo Passarinha",
  description:
    "Curta-metragem A Caixa Mágica, Fora de onde? e O que se passa no formigueiro? - criações em vídeo do Coletivo Passarinha.",
};

export default function AudiovisualPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Amarela Ipê Acrílica */}
      <section className="canvas-amarelo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#532E5A]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#532E5A]/10 text-xs font-black uppercase tracking-wider text-[#532E5A]">
            <Film className="w-4 h-4 text-[#E91C47]" /> Cinema, Vídeo-arte & Infâncias
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Audiovisual
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#532E5A] max-w-3xl mx-auto leading-relaxed font-bold">
            O audiovisual como linguagem de criação artística, humor, poética
            ecológica e reflexão crítica com acessibilidade em Libras.
          </p>
        </div>
      </section>

      {/* Catálogo de Vídeos */}
      <section className="bg-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {AUDIOVISUAL_WORKS.map((work, idx) => (
            <article
              key={work.id}
              className="bg-white rounded-[38px] p-7 sm:p-12 shadow-lg border-2 border-[#FDBC2E]/50 space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#532E5A]/10 pb-4">
                <span
                  className="text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider"
                  style={{
                    backgroundColor: work.accentColor,
                    color:
                      work.accentColor === "#FDBC2E" ? "#532E5A" : "#FDF6E4",
                  }}
                >
                  Produção {idx + 1}
                </span>
                <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider">
                  Coletivo Passarinha
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#532E5A] uppercase tracking-tight">
                  {work.title}
                </h2>
              </div>

              {/* Player do YouTube Embutido se houver ID, senão Moldura Fotográfica */}
              {work.youtubeId ? (
                <div className="bg-[#FDF6E4] p-2.5 sm:p-3.5 rounded-[32px] border-2 border-[#FDBC2E]/40 shadow-md">
                  <div className="relative w-full aspect-video rounded-[22px] overflow-hidden bg-[#532E5A]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}`}
                      title={work.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              ) : work.photoUrl ? (
                <PhotoCarouselFrame
                  aspectClass="aspect-video"
                  photos={[
                    {
                      src: work.photoUrl,
                      alt: work.title,
                      caption: `${work.title} — Curta-metragem nascido no Bosque dos Guarantãs (Campinas/SP)`,
                    },
                  ]}
                />
              ) : null}

              {/* Sinopse */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Sinopse
                </h3>
                <p className="text-base sm:text-lg text-[#532E5A] leading-relaxed font-medium">
                  {work.synopsis}
                </p>
              </div>

              {/* Contexto de Criação */}
              <div className="bg-[#FDF6E4] p-6 rounded-3xl border-l-4 border-[#F79335] space-y-1.5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Contexto & Realização
                </h3>
                <p className="text-sm sm:text-base text-[#532E5A]/90 leading-relaxed font-medium">
                  {work.context}
                </p>
              </div>

              {/* Ficha Técnica */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#532E5A]/70">
                  Ficha Técnica
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#532E5A]">
                  {work.technicalSheet.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#FDF6E4] rounded-2xl border border-[#FDBC2E]/40"
                    >
                      <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                        {item.label}
                      </span>
                      <span className="text-[#532E5A] font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão Externo se aplicável */}
              {work.videoUrl && (
                <div className="pt-4 border-t border-[#532E5A]/10 flex flex-wrap gap-4">
                  <a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-[#FDF6E4] text-xs sm:text-sm py-3 px-6 inline-flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Assistir no YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
