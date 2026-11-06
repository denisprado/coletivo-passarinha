import React from "react";
import Link from "next/link";
import { SHOWS } from "@/data/siteData";
import {
  Theater,
  Clock,
  MessageCircle,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: "Espetáculos | Coletivo Passarinha",
  description:
    "Repertório cênico e musical do Coletivo Passarinha: Histórias que a Passarinha me contou, Plástico um mito contemporâneo, Show Nascente e Histórias do Bosque dos Guarantãs.",
};

export default function EspetaculosPage() {
  return (
    <main className="w-full">
      {/* Header com Verde Mata */}
      <section className="bg-[#02BF9B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-white">
            <Theater className="w-4 h-4 text-[#F2BF27]" /> Criações Cênico-Musicais
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Nossos Espetáculos
          </h1>
          <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold">
            Teatro, música, histórias e experimentações artísticas para públicos diversos, de crianças a adultos, prontos para circular em teatros, praças, escolas, SESCs e festivais.
          </p>
        </div>
      </section>

      {/* Catálogo de Espetáculos */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {SHOWS.map((show) => (
            <article
              key={show.id}
              id={show.id}
              className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-12 shadow-md border-2 border-[#F2BF27]/40 space-y-8"
            >
              {/* Cabeçalho do Espetáculo */}
              <div className="space-y-3 border-b border-gray-100 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className="text-xs font-black uppercase px-4 py-1.5 rounded-full text-white tracking-wider"
                    style={{ backgroundColor: show.accentColor }}
                  >
                    {show.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[#22211E]/80 font-bold">
                    {show.duration && (
                      <span className="flex items-center gap-1 bg-[#FAF7F0] px-3 py-1 rounded-full border border-gray-200">
                        <Clock className="w-3.5 h-3.5 text-[#F21B54]" /> {show.duration}
                      </span>
                    )}
                    {show.ageRating && (
                      <span className="bg-[#FAF7F0] px-3 py-1 rounded-full border border-gray-200">
                        Classificação: {show.ageRating}
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#22211E]">
                  {show.title}
                </h2>
                {show.subtitle && (
                  <p className="text-base sm:text-lg font-bold text-[#F21B54]">
                    {show.subtitle}
                  </p>
                )}
              </div>

              {/* Grid: Sinopse & Release */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/60">
                    Sobre a Obra & Sinopse
                  </h3>
                  <p className="text-base text-[#22211E]/90 leading-relaxed font-medium">
                    {show.synopsis}
                  </p>
                  <div className="bg-[#FAF7F0] p-6 rounded-2xl border-l-4 border-[#02BF9B] space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#02BF9B]">
                      Histórico e Trajetória
                    </h4>
                    <p className="text-sm text-[#22211E]/85 leading-relaxed">
                      {show.releaseText}
                    </p>
                  </div>

                  {show.videoUrl && (
                    <div className="pt-2">
                      <a
                        href={show.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#F21B54] hover:underline"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>Ver matéria e vídeo no Instagram TV Unicamp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Coluna Direita: Ficha Técnica */}
                <div className="lg:col-span-5 bg-[#FAF7F0] p-6 rounded-2xl border border-[#F2BF27]/40 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#F28F16]">
                    Ficha Técnica Geral
                  </h3>
                  <div className="space-y-2 text-xs divide-y divide-gray-200">
                    {show.technicalSheet.map((item, idx) => (
                      <div key={idx} className="pt-2 flex flex-col">
                        <span className="font-bold text-[#22211E]/70 text-[11px] uppercase">
                          {item.label}:
                        </span>
                        <span className="font-semibold text-[#22211E] text-xs">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Se o espetáculo tiver episódios detalhados (ex: Histórias que a Passarinha me contou) */}
              {show.episodes && (
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-black text-[#22211E] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F2BF27]" />
                    Episódios Disponíveis para Circulação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {show.episodes.map((ep, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-6 border-2 border-[#F2BF27]/40 shadow-sm space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-black text-[#F21B54]">
                              {ep.name}
                            </h4>
                            <span className="text-xs font-bold text-gray-500">
                              {ep.duration}
                            </span>
                          </div>
                          <div className="text-xs space-y-1 text-gray-600 font-medium">
                            <p>• Montagem: {ep.assemblyTime} | Desmontagem: {ep.disassemblyTime}</p>
                            <p>• Classificação: {ep.ageRating}</p>
                          </div>
                          <div className="pt-2 space-y-2">
                            <strong className="text-xs uppercase tracking-wider text-[#02BF9B] block">
                              Necessidades Técnicas:
                            </strong>
                            <ul className="text-xs text-gray-700 space-y-1">
                              {ep.technicalRequirements.map((req, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#02BF9B] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Ficha técnica resumida do episódio */}
                        <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-600 space-y-1">
                          {ep.technicalSheet.map((item, itIdx) => (
                            <p key={itIdx}>
                              <strong>{item.label}:</strong> {item.value}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contatos Específicos de Contratação */}
              {show.contacts && (
                <div className="bg-[#22211E] text-white p-6 rounded-2xl space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#F2BF27]">
                    Contatos para Contratação deste Espetáculo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {show.contacts.map((c, cIdx) => (
                      <div key={cIdx} className="space-y-1 text-xs">
                        <strong className="text-sm block text-white">{c.name}</strong>
                        <span className="text-[#FAF7F0]/70 text-[11px] block">{c.role}</span>
                        <div className="flex items-center gap-2 pt-1">
                          <Mail className="w-3.5 h-3.5 text-[#F2BF27]" />
                          <a href={`mailto:${c.email}`} className="hover:text-[#F2BF27]">
                            {c.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#02BF9B]" />
                          <a
                            href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#02BF9B]"
                          >
                            {c.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botão de Solicitação de Proposta */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20espet%C3%A1culo%20${encodeURIComponent(
                    show.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs px-6 py-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Contratar via WhatsApp
                </a>
                <Link
                  href={`/contato?interesse=${encodeURIComponent(show.title)}`}
                  className="btn-foca bg-[#22211E] hover:bg-black text-white text-xs px-6 py-3"
                >
                  Solicitar Proposta por E-mail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
