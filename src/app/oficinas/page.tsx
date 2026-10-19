import React from "react";
import Link from "next/link";
import { WORKSHOPS } from "@/data/siteData";
import {
  Hammer,
  MessageCircle,
  CheckCircle2,
  Users,
  Sparkles,
  Download,
} from "lucide-react";

export const metadata = {
  title: "Oficinas & Práticas Formativas | Coletivo Passarinha",
  description:
    "Oficinas de Arte-Educação Ambiental: Ateliê Jogar Dentro, Ecobrinquedoteca Jogar Dentro e Orquestra de Pandeiros.",
};

export default function OficinasPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#F22294] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#F2BF27]">
            <Hammer className="w-4 h-4" /> Arte-Educação & Meio Ambiente
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Nossas Oficinas
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Experiências de experimentação, criação coletiva e aprendizagem através do
            reaproveitamento de materiais, do livre brincar e da percussão brasileira.
          </p>
        </div>
      </section>

      {/* Lista Completa de Oficinas */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {WORKSHOPS.map((workshop, idx) => (
            <div
              key={workshop.id}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F2BF27]/30 space-y-8 hover:shadow-lg transition-all"
            >
              {/* Topo do Card */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className="text-xs font-black uppercase px-3.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: workshop.accentColor }}
                  >
                    Oficina {idx + 1}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#02BF9B]">
                    <Users className="w-4 h-4" />
                    <span>Público: {workshop.targetAudience}</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#22211E]">
                  {workshop.title}
                </h2>
                <p className="text-base sm:text-lg font-bold text-[#F21B54]">
                  {workshop.subtitle}
                </p>
              </div>

              {/* Frase Conceito em Destaque */}
              <blockquote className="bg-[#FAF7F0] p-6 rounded-2xl border-l-4 border-[#F21B54] text-base sm:text-lg italic text-[#22211E]/90 font-semibold">
                “{workshop.concept}”
              </blockquote>

              {/* Texto Descritivo Completo */}
              <div className="space-y-4 text-base text-[#22211E]/85 leading-relaxed">
                {workshop.fullDescription.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Destaques e Diferenciais */}
              {workshop.highlights && (
                <div className="bg-[#02BF9B]/10 p-6 rounded-2xl border border-[#02BF9B]/30 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#02BF9B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Destaques & Circulação da Proposta
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#22211E]/85">
                    {workshop.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#02BF9B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ações e Contato */}
              <div className="pt-4 border-t border-[#F2BF27]/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={workshop.whatsappContact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#02BF9B] hover:bg-[#029e80] text-white text-xs py-2.5 px-5"
                  >
                    <MessageCircle className="w-4 h-4" /> Falar no WhatsApp (Sassa)
                  </a>
                  <Link
                    href={`/contato?interesse=${encodeURIComponent(workshop.title)}`}
                    className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs py-2.5 px-5"
                  >
                    Solicitar Proposta por E-mail
                  </Link>
                </div>

                {workshop.portfolioUrl && (
                  <a
                    href={workshop.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#F28F16] hover:text-[#F21B54] inline-flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Ver Portfólio & Release</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
