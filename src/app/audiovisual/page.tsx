import React from "react";
import Link from "next/link";
import { AUDIOVISUAL_WORKS } from "@/data/siteData";
import { Video, Play, ExternalLink, Film, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Produções Audiovisuais | Coletivo Passarinha",
  description:
    "Curta-metragem A Caixa Mágica, Fora de onde? e O que se passa no formigueiro? - criações em vídeo do Coletivo Passarinha.",
};

export default function AudiovisualPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#F21B54] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-white">
            <Film className="w-4 h-4 text-[#F2BF27]" /> Cinema, Vídeo-arte & Infâncias
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Produções Audiovisuais
          </h1>
          <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold">
            O audiovisual como linguagem de criação artística, humor, poética ecológica e reflexão crítica com acessibilidade em Libras.
          </p>
        </div>
      </section>

      {/* Catálogo de Vídeos */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {AUDIOVISUAL_WORKS.map((work, idx) => (
            <article
              key={work.id}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border-2 border-[#F2BF27]/40 space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <span
                  className="text-xs font-black uppercase px-4 py-1.5 rounded-full text-white tracking-wider"
                  style={{ backgroundColor: work.accentColor }}
                >
                  Produção {idx + 1}
                </span>
                <span className="text-xs font-bold text-[#F21B54] uppercase tracking-wider">
                  Coletivo Passarinha
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#22211E]">
                  {work.title}
                </h2>
              </div>

              {/* Player do YouTube Embutido se houver ID */}
              {work.youtubeId && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}

              {/* Sinopse */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/60">
                  Sinopse
                </h3>
                <p className="text-base text-[#22211E]/90 leading-relaxed font-medium">
                  {work.synopsis}
                </p>
              </div>

              {/* Contexto de Criação */}
              <div className="bg-[#FAF7F0] p-6 rounded-2xl border-l-4 border-[#02BF9B] space-y-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#02BF9B]">
                  Contexto & Realização
                </h3>
                <p className="text-sm text-[#22211E]/85 leading-relaxed font-medium">
                  {work.context}
                </p>
              </div>

              {/* Ficha Técnica */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/60">
                  Ficha Técnica
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#22211E]">
                  {work.technicalSheet.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#FAF7F0] rounded-xl border border-[#F2BF27]/30"
                    >
                      <span className="font-bold text-[#F28F16] block uppercase text-[11px]">
                        {item.label}
                      </span>
                      <span className="text-[#22211E] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão Externo se aplicável */}
              {work.videoUrl && (
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
                  <a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs py-3 px-6 inline-flex items-center gap-2"
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
