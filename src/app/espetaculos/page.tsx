import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "Espetáculos | Coletivo Passarinha",
  description:
    "Repertório cênico e musical do Coletivo Passarinha: Histórias que a Passarinha me contou, Plástico um mito contemporâneo, Show Nascente e Histórias do Bosque dos Guarantãs.",
};

export default function EspetaculosPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Roxa Acrílica (Fiel à Faixa de Espetáculos da Designer) */}
      <section className="canvas-roxo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBC2E]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDBC2E]/15 border border-[#FDBC2E]/40 text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Theater className="w-4 h-4 text-[#FDBC2E]" /> Criações Cênico-Musicais
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Espetáculos
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDBC2E] max-w-3xl mx-auto leading-relaxed font-semibold">
            Teatro, música, histórias e experimentações artísticas para públicos
            diversos, de crianças a adultos, prontos para circular em teatros,
            praças, escolas, SESCs e festivais.
          </p>
        </div>
      </section>

      {/* Catálogo de Espetáculos */}
      <section className="bg-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {SHOWS.map((show) => (
            <article
              key={show.id}
              id={show.id}
              className="scroll-mt-28 bg-white rounded-[38px] p-7 sm:p-12 shadow-lg border-2 border-[#FDBC2E]/50 space-y-10"
            >
              {/* Cabeçalho do Espetáculo */}
              <div className="space-y-3 border-b border-[#532E5A]/10 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className="text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider shadow-xs"
                    style={{
                      backgroundColor: show.accentColor,
                      color: show.accentColor === "#FDBC2E" ? "#532E5A" : "#FDF6E4",
                    }}
                  >
                    {show.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#532E5A] font-bold">
                    {show.duration && (
                      <span className="flex items-center gap-1 bg-[#FDF6E4] px-3.5 py-1.5 rounded-full border border-[#FDBC2E]/50">
                        <Clock className="w-3.5 h-3.5 text-[#E91C47]" /> {show.duration}
                      </span>
                    )}
                    {show.ageRating && (
                      <span className="bg-[#FDF6E4] px-3.5 py-1.5 rounded-full border border-[#FDBC2E]/50">
                        Classificação: {show.ageRating}
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase tracking-tight">
                  {show.title}
                </h2>
                {show.subtitle && (
                  <p className="text-base sm:text-lg font-bold text-[#E91C47]">
                    {show.subtitle}
                  </p>
                )}
              </div>

              {/* Moldura de Fotos + Sinopse */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Moldura Branca de Fotos Reais */}
                <div className="lg:col-span-5">
                  <PhotoCarouselFrame
                    photos={show.photos}
                    badgeLogoSrc={show.logoUrl}
                    badgeLogoAlt={show.title}
                  />
                </div>

                {/* Sinopse & Trajetória */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                      Sobre a Obra & Sinopse
                    </h3>
                    <p className="text-base sm:text-lg text-[#532E5A] leading-relaxed font-medium">
                      {show.synopsis}
                    </p>
                  </div>

                  <div className="bg-[#FDF6E4] p-6 rounded-3xl border-l-4 border-[#F79335] space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#E91C47]">
                      Histórico e Trajetória
                    </h4>
                    <p className="text-sm sm:text-base text-[#532E5A]/90 leading-relaxed font-medium">
                      {show.releaseText}
                    </p>
                  </div>

                  {show.videoUrl && (
                    <div className="pt-1">
                      <a
                        href={show.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-black text-[#E91C47] hover:underline"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>Ver matéria e vídeo no Instagram TV Unicamp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Ficha Técnica Geral */}
              <div className="bg-[#FDF6E4] p-6 sm:p-8 rounded-3xl border border-[#FDBC2E]/50 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Ficha Técnica Geral
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  {show.technicalSheet.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-2xl border border-[#FDBC2E]/30 flex flex-col gap-0.5"
                    >
                      <span className="font-black text-[#E91C47] text-[11px] uppercase">
                        {item.label}
                      </span>
                      <span className="font-semibold text-[#532E5A] text-xs leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Episódios Detalhados (ex: Histórias que a Passarinha me contou) */}
              {show.episodes && (
                <div className="space-y-6 pt-4 border-t border-[#532E5A]/10">
                  <h3 className="text-xl sm:text-2xl font-black text-[#532E5A] uppercase flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FDBC2E]" />
                    Episódios Disponíveis para Circulação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {show.episodes.map((ep, i) => (
                      <div
                        key={i}
                        className="bg-[#FDF6E4]/60 rounded-[30px] p-6 border-2 border-[#FDBC2E]/50 shadow-sm space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          {ep.photoUrl && (
                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-md">
                              <Image
                                src={ep.photoUrl}
                                alt={ep.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-xl font-black text-[#E91C47] uppercase">
                              {ep.name}
                            </h4>
                            <span className="text-xs font-black text-[#532E5A] bg-white px-3 py-1 rounded-full border border-[#FDBC2E]/50">
                              {ep.duration}
                            </span>
                          </div>

                          <div className="text-xs space-y-1 text-[#532E5A]/85 font-semibold">
                            <p>
                              • Montagem: {ep.assemblyTime} | Desmontagem:{" "}
                              {ep.disassemblyTime}
                            </p>
                            <p>• Classificação: {ep.ageRating}</p>
                          </div>

                          <div className="pt-1 space-y-2">
                            <strong className="text-xs uppercase tracking-wider text-[#532E5A] block font-black">
                              Necessidades Técnicas:
                            </strong>
                            <ul className="text-xs text-[#532E5A]/90 space-y-1.5 font-medium">
                              {ep.technicalRequirements.map((req, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Ficha técnica resumida do episódio */}
                        <div className="pt-3 border-t border-[#532E5A]/15 text-[11px] text-[#532E5A]/85 space-y-1">
                          {ep.technicalSheet.map((item, itIdx) => (
                            <p key={itIdx}>
                              <strong className="font-black">{item.label}:</strong>{" "}
                              {item.value}
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
                <div className="canvas-roxo text-[#FDF6E4] p-6 sm:p-8 rounded-3xl space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#FDBC2E]">
                    Contatos Diretos para Contratação deste Espetáculo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {show.contacts.map((c, cIdx) => (
                      <div key={cIdx} className="space-y-1 text-xs sm:text-sm">
                        <strong className="text-base block text-[#FDBC2E]">
                          {c.name}
                        </strong>
                        <span className="text-[#FDF6E4]/80 text-xs block font-semibold">
                          {c.role}
                        </span>
                        <div className="flex items-center gap-2 pt-1">
                          <Mail className="w-4 h-4 text-[#FDBC2E]" />
                          <a
                            href={`mailto:${c.email}`}
                            className="hover:text-[#FDBC2E] font-semibold"
                          >
                            {c.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#FDBC2E]" />
                          <a
                            href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#FDBC2E] font-semibold"
                          >
                            {c.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botões de Solicitação de Proposta */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20espet%C3%A1culo%20${encodeURIComponent(
                    show.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Contratar via WhatsApp
                </a>
                <Link
                  href={`/contato?interesse=${encodeURIComponent(show.title)}`}
                  className="btn-foca bg-[#532E5A] hover:bg-[#3d2043] text-[#FDBC2E] text-xs sm:text-sm px-6 py-3"
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
