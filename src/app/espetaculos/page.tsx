import React from "react";
import Link from "next/link";
import { SHOWS } from "@/data/siteData";
import {
  Theater,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Espetáculos Cênicos | Coletivo Passarinha",
  description:
    "Repertório cênico e musical do Coletivo Passarinha: Histórias da Passarinha, Plástico, Fora de Onde?, Show Nascente e muito mais.",
};

export default function EspetaculosPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#F2BF27] text-[#22211E] py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F22294]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider text-[#22211E]">
            <Theater className="w-4 h-4 text-[#F21B54]" /> Criações Cênico-Musicais
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Nossos Espetáculos
          </h1>
          <p className="text-lg sm:text-xl text-[#22211E]/90 max-w-3xl mx-auto leading-relaxed font-semibold">
            Teatro, música, contação de histórias e experimentações poéticas para todas as idades,
            prontos para circular em teatros, praças, escolas, SESCs e festivais.
          </p>
        </div>
      </section>

      {/* Catálogo de Espetáculos */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SHOWS.map((show) => (
              <div
                key={show.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#F2BF27]/30 flex flex-col justify-between space-y-6 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="text-xs font-black uppercase px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: show.accentColor }}
                    >
                      {show.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#22211E]/70 font-semibold">
                      {show.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {show.duration}
                        </span>
                      )}
                      {show.ageRating && (
                        <span className="bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#F2BF27]/30">
                          {show.ageRating}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Título e Subtítulo */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#22211E]">
                      {show.title}
                    </h2>
                    {show.subtitle && (
                      <p className="text-xs sm:text-sm font-bold text-[#F21B54] mt-1">
                        {show.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Sinopse */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#22211E]/60">
                      Sinopse
                    </h3>
                    <p className="text-sm text-[#22211E]/85 leading-relaxed">
                      {show.synopsis}
                    </p>
                  </div>

                  {/* Release */}
                  <div className="space-y-1 bg-[#FAF7F0] p-4 rounded-2xl border border-[#F2BF27]/25">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#02BF9B]">
                      Histórico e Circulação
                    </h3>
                    <p className="text-xs text-[#22211E]/80 leading-relaxed font-medium">
                      {show.releaseText}
                    </p>
                  </div>

                  {/* Ficha Técnica */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#22211E]/60">
                      Ficha Técnica Básica
                    </h3>
                    <div className="grid grid-cols-1 gap-1 text-xs text-[#22211E]/80">
                      {show.technicalSheet.map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#F2BF27]/20">
                          <span className="font-semibold text-[#22211E]">{item.label}:</span>
                          <span className="text-[#22211E]/75">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="pt-4 border-t border-[#F2BF27]/30 flex flex-wrap gap-3">
                  <Link
                    href={`/contato?interesse=${encodeURIComponent(show.title)}`}
                    className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs py-2.5 px-5 flex-1 text-center"
                  >
                    Solicitar Orçamento
                  </Link>
                  <a
                    href={`https://wa.me/5519999999999?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar a disponibilidade do espetáculo "${show.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#02BF9B] hover:bg-[#029e80] text-white text-xs py-2.5 px-4"
                    title="Falar no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
