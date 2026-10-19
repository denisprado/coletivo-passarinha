import React from "react";
import Link from "next/link";
import { AUDIOVISUAL_WORKS } from "@/data/siteData";
import { Video, Play, ExternalLink, Film } from "lucide-react";

export const metadata = {
  title: "Produções Audiovisuais | Coletivo Passarinha",
  description:
    "Curta-metragem A Caixa Mágica, Fora de Onde? e O Que se Passa no Formigueiro - criações em vídeo do Coletivo Passarinha.",
};

export default function AudiovisualPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#F21B54] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#F2BF27]">
            <Film className="w-4 h-4" /> Cinema, Vídeo-arte & Infância
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Produções Audiovisuais
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            O audiovisual como linguagem de criação, reflexão sobre as telas, humor e
            experimentação poética com materiais reaproveitados.
          </p>
        </div>
      </section>

      {/* Catálogo de Vídeos */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {AUDIOVISUAL_WORKS.map((work, idx) => (
            <div
              key={work.id}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F2BF27]/30 space-y-6 hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className="text-xs font-black uppercase px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: work.accentColor }}
                >
                  Obra {idx + 1}
                </span>
                <span className="text-xs font-bold text-[#F21B54] uppercase tracking-wider">
                  Coletivo Passarinha
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#22211E]">
                  {work.title}
                </h2>
              </div>

              {/* Sinopse */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/60">
                  Sinopse
                </h3>
                <p className="text-base text-[#22211E]/90 leading-relaxed">
                  {work.synopsis}
                </p>
              </div>

              {/* Contexto de Criação */}
              <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#F2BF27]/25 space-y-1">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#02BF9B]">
                  Contexto & Realização
                </h3>
                <p className="text-xs sm:text-sm text-[#22211E]/80 leading-relaxed font-medium">
                  {work.context}
                </p>
              </div>

              {/* Ficha Técnica */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/60">
                  Ficha Técnica
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#22211E]/85">
                  {work.technicalSheet.map((item, i) => (
                    <div key={i} className="p-2.5 bg-[#FAF7F0] rounded-lg border border-[#F2BF27]/20">
                      <span className="font-bold text-[#22211E] block">{item.label}</span>
                      <span className="text-[#22211E]/75">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Assistir */}
              <div className="pt-4 border-t border-[#F2BF27]/30 flex flex-wrap gap-4">
                <a
                  href={work.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs py-3 px-6 inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Assistir Produção Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
