import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WORKSHOPS } from "@/data/siteData";
import {
  Hammer,
  CheckCircle2,
  Users,
  MessageCircle,
  Sparkles,
  Music,
  ExternalLink,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: "Práticas Formativas | Coletivo Passarinha",
  description:
    "Oficinas de arte-educação ambiental, reutilização de materiais, Ecobrinquedoteca e a Orquestra de Pandeiros do Coletivo Passarinha.",
};

export default function PraticasFormativasPage() {
  return (
    <main className="w-full">
      {/* Header com Rosa Hibisco / Magenta */}
      <section className="bg-[#F22294] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F21B54]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-white">
            <Hammer className="w-4 h-4 text-[#F2BF27]" /> Formação, Criação Coletiva & Aprendizagem
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Práticas Formativas
          </h1>
          <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold">
            Oficinas que aproximam arte, educação e meio ambiente, criando experiências de experimentação e aprendizagem intergeracional para diferentes espaços e públicos.
          </p>
        </div>
      </section>

      {/* Lista das 3 Práticas Formativas */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {WORKSHOPS.map((workshop) => (
            <article
              key={workshop.id}
              id={workshop.id}
              className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-12 shadow-md border-2 border-[#F2BF27]/40 space-y-8"
            >
              {/* Topo do Card */}
              <div className="border-b border-gray-100 pb-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {workshop.logoUrl ? (
                      <div className="relative w-16 h-16 rounded-2xl bg-[#FAF7F0] p-1 border-2 border-[#F2BF27] overflow-hidden shadow-sm">
                        <Image
                          src={workshop.logoUrl}
                          alt={`Logo ${workshop.title}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-md"
                        style={{ backgroundColor: workshop.accentColor }}
                      >
                        <Hammer className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#22211E]">
                        {workshop.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-[#F21B54]">
                        {workshop.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xs font-black uppercase px-4 py-1.5 rounded-full text-white tracking-wider"
                    style={{ backgroundColor: workshop.accentColor }}
                  >
                    Prática Formativa
                  </span>
                </div>

                {/* Conceito Central */}
                <div className="bg-[#FAF7F0] p-5 rounded-2xl border-l-4 border-[#F2BF27] text-base font-bold text-[#22211E]/90 italic">
                  &ldquo;{workshop.concept}&rdquo;
                </div>
              </div>

              {/* Foto de Destaque se houver (ex: Orquestra de Pandeiros) */}
              {workshop.photoUrl && (
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <Image
                    src={workshop.photoUrl}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Descrição Completa em Parágrafos */}
              <div className="space-y-4 text-sm sm:text-base text-[#22211E]/85 leading-relaxed font-medium">
                {workshop.fullDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Princípios ou Destaques */}
              {workshop.principles && (
                <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#F28F16]/30 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#F28F16]">
                    Princípios da Prática:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#22211E]">
                    {workshop.principles.map((pr, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#02BF9B] shrink-0" />
                        <span>{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {workshop.highlights && (
                <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#02BF9B]/30 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#02BF9B]">
                    Destaques & Realizações:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#22211E]/85">
                    {workshop.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#02BF9B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Público-alvo & Limite */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-[#22211E]/80 bg-gray-50 p-5 rounded-2xl">
                <div className="space-y-1">
                  <span className="font-black uppercase text-[#F21B54] text-[11px] block">
                    Público-Alvo:
                  </span>
                  <p>{workshop.targetAudience}</p>
                </div>
                {workshop.audienceLimit && (
                  <div className="space-y-1">
                    <span className="font-black uppercase text-[#F28F16] text-[11px] block">
                      Limite Recomendado:
                    </span>
                    <p>{workshop.audienceLimit}</p>
                  </div>
                )}
              </div>

              {/* Ações de Contratação */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={workshop.whatsappContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs px-6 py-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Informações de Contratação no WhatsApp
                </a>

                {workshop.instagramUrl && (
                  <a
                    href={workshop.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#FAF7F0] hover:bg-white text-[#22211E] text-xs px-5 py-3 border border-gray-300 flex items-center gap-2"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Siga no Instagram
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
