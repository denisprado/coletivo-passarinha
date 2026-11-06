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
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata = {
  title: "Espetáculos | Coletivo Passarinha",
  description:
    "Repertório cênico e musical do Coletivo Passarinha: Histórias que a Passarinha me contou, Plástico um mito contemporâneo, Show Nascente e Histórias do Bosque dos Guarantãs.",
};

const SHOW_THEMES = [
  {
    canvasClass: "canvas-amarelo",
    textPrimary: "text-[#3A1D40]",
    textSecondary: "text-[#3A1D40]/90",
    bannerColor: "crimson" as const,
    bannerText: "text-[#FDBC2E]",
    frameTheme: "cream" as const,
  },
  {
    canvasClass: "canvas-roxo",
    textPrimary: "text-[#FDBC2E]",
    textSecondary: "text-[#FDF6E4]",
    bannerColor: "crimson" as const,
    bannerText: "text-[#FDBC2E]",
    frameTheme: "cream" as const,
  },
  {
    canvasClass: "canvas-laranja",
    textPrimary: "text-[#2A1230]",
    textSecondary: "text-[#2A1230]/95",
    bannerColor: "yellow" as const,
    bannerText: "text-[#532E5A]",
    frameTheme: "cream" as const,
  },
  {
    canvasClass: "canvas-vermelho",
    textPrimary: "text-[#FDF6E4]",
    textSecondary: "text-[#FDF6E4]/95",
    bannerColor: "yellow" as const,
    bannerText: "text-[#532E5A]",
    frameTheme: "cream" as const,
  },
];

export default function EspetaculosPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Roxa Acrílica */}
      <section className="canvas-roxo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40] border border-[#3A1D40]">
            <Theater className="w-4 h-4" /> Criações Cênico-Musicais
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

      {/* Cada Espetáculo em sua própria Faixa Pintada Rústica + Galeria Fotográfica Aberta */}
      {SHOWS.map((show, sIdx) => {
        const theme = SHOW_THEMES[sIdx % SHOW_THEMES.length];
        const heroPhoto = show.photos[0];
        const galleryPhotos = show.photos;

        return (
          <section
            key={show.id}
            id={show.id}
            className={`scroll-mt-24 ${theme.canvasClass} py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]`}
          >
            <div className="max-w-6xl mx-auto space-y-10">
              {/* Cabeçalho do Espetáculo */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase px-3.5 py-1 rounded-xs tracking-wider bg-[#3A1D40] text-[#FDBC2E] border border-[#FDBC2E]/40">
                    {show.category}
                  </span>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#3A1D40] font-black">
                    {show.duration && (
                      <span className="flex items-center gap-1 bg-[#FDF6E4] px-3 py-1 rounded-xs border-2 border-[#3A1D40] shadow-[2px_2px_0px_#3A1D40]">
                        <Clock className="w-3.5 h-3.5 text-[#E91C47]" />{" "}
                        {show.duration}
                      </span>
                    )}
                    {show.ageRating && (
                      <span className="bg-[#FDF6E4] px-3 py-1 rounded-xs border-2 border-[#3A1D40] shadow-[2px_2px_0px_#3A1D40]">
                        Classificação: {show.ageRating}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  {show.logoUrl && (
                    <div className="relative w-24 h-16 bg-[#FDF6E4] p-2 rounded-sm border-2 border-[#3A1D40] shadow-[4px_4px_0px_#3A1D40] shrink-0">
                      <Image
                        src={show.logoUrl}
                        alt={`Logo ${show.title}`}
                        fill
                        sizes="96px"
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
                        {show.title}
                      </h2>
                    </BrushBanner>
                    {show.subtitle && (
                      <p
                        className={`text-base sm:text-xl font-black mt-2 ${theme.textPrimary}`}
                      >
                        {show.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sinopse + Foto de Destaque Grande */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="painel-rustico p-6 sm:p-8 space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                      Sobre a Obra & Sinopse
                    </h3>
                    <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-semibold">
                      {show.synopsis}
                    </p>

                    <div className="pt-4 border-t-2 border-[#3A1D40]/15 space-y-1.5">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#E91C47]">
                        Histórico e Trajetória
                      </h4>
                      <p className="text-sm sm:text-base text-[#3A1D40]/90 leading-relaxed font-medium">
                        {show.releaseText}
                      </p>
                    </div>

                    {show.videoUrl && (
                      <div className="pt-2">
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

                {/* Foto Principal Grande ao lado da Sinopse */}
                {heroPhoto && (
                  <div className="lg:col-span-5">
                    <div className="bg-[#FDF6E4] p-2 rounded-sm border-2 border-[#3A1D40] shadow-[8px_8px_0px_rgba(45,18,50,0.45)]">
                      <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden bg-[#241128]">
                        <Image
                          src={heroPhoto.src}
                          alt={heroPhoto.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                        />
                        {heroPhoto.caption && (
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241128]/95 via-[#241128]/60 to-transparent pt-8 pb-2.5 px-3">
                            <p className="text-xs font-bold text-[#FDF6E4]">
                              {heroPhoto.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mural Fotográfico Aberto com todas as fotos do espetáculo */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`text-sm sm:text-base font-black uppercase tracking-wider ${theme.textPrimary}`}
                  >
                    Galeria Fotográfica do Espetáculo ({galleryPhotos.length} fotos — clique para ampliar)
                  </h3>
                </div>
                <PhotoMosaic
                  photos={galleryPhotos}
                  variant="grid"
                  frameTheme={theme.frameTheme}
                />
              </div>

              {/* Ficha Técnica Geral */}
              <div className="painel-rustico p-6 sm:p-8 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Ficha Técnica Geral
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  {show.technicalSheet.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FDBC2E]/25 p-3 rounded-xs border border-[#3A1D40]/30 flex flex-col gap-0.5"
                    >
                      <span className="font-black text-[#E91C47] text-[11px] uppercase">
                        {item.label}
                      </span>
                      <span className="font-bold text-[#3A1D40] text-xs leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Episódios Detalhados (ex: Histórias que a Passarinha me contou) */}
              {show.episodes && (
                <div className="space-y-6 pt-2">
                  <h3
                    className={`text-xl sm:text-2xl font-black uppercase flex items-center gap-2 ${theme.textPrimary}`}
                  >
                    <Sparkles className="w-5 h-5" />
                    Episódios Disponíveis para Circulação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {show.episodes.map((ep, i) => (
                      <div
                        key={i}
                        className="painel-rustico p-6 space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          {ep.photoUrl && (
                            <div className="relative w-full aspect-[16/10] rounded-xs overflow-hidden border-2 border-[#3A1D40] shadow-[4px_4px_0px_#3A1D40]">
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
                            <span className="text-xs font-black text-[#FDBC2E] bg-[#3A1D40] px-3 py-1 rounded-xs">
                              {ep.duration}
                            </span>
                          </div>

                          <div className="text-xs space-y-1 text-[#3A1D40] font-bold">
                            <p>
                              • Montagem: {ep.assemblyTime} | Desmontagem:{" "}
                              {ep.disassemblyTime}
                            </p>
                            <p>• Classificação: {ep.ageRating}</p>
                          </div>

                          <div className="pt-1 space-y-2">
                            <strong className="text-xs uppercase tracking-wider text-[#3A1D40] block font-black">
                              Necessidades Técnicas:
                            </strong>
                            <ul className="text-xs text-[#3A1D40]/90 space-y-1.5 font-medium">
                              {ep.technicalRequirements.map((req, rIdx) => (
                                <li
                                  key={rIdx}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-3 border-t-2 border-[#3A1D40]/15 text-[11px] text-[#3A1D40] space-y-1">
                          {ep.technicalSheet.map((item, itIdx) => (
                            <p key={itIdx}>
                              <strong className="font-black">
                                {item.label}:
                              </strong>{" "}
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
                <div className="painel-rustico-roxo p-6 sm:p-8 space-y-4">
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
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Contratar via WhatsApp
                </a>
                <Link
                  href={`/contato?interesse=${encodeURIComponent(show.title)}`}
                  className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs sm:text-sm px-6 py-3"
                >
                  Solicitar Proposta por E-mail
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
