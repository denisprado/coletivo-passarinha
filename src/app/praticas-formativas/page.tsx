import React from "react";
import Image from "next/image";
import { WORKSHOPS } from "@/data/siteData";
import { Hammer, CheckCircle2, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "Oficinas & Práticas Formativas | Coletivo Passarinha",
  description:
    "Oficinas de arte-educação ambiental, reutilização de materiais, Ecobrinquedoteca e a Orquestra de Pandeiros do Coletivo Passarinha.",
};

export default function PraticasFormativasPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Vermelha Acrílica + Pincelada Amarela Inclinada */}
      <section className="canvas-vermelho py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBC2E]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-[#FDF6E4]">
            <Hammer className="w-4 h-4 text-[#FDBC2E]" /> Formação, Criação Coletiva & Aprendizagem
          </div>
          <div>
            <BrushBanner color="yellow" shape="tilted">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                Oficinas & Práticas Formativas
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDF6E4] max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-[0_1px_2px_rgba(45,18,50,0.28)]">
            Oficinas que aproximam arte, educação e meio ambiente, criando
            experiências de experimentação e aprendizagem intergeracional para
            diferentes espaços e públicos.
          </p>
        </div>
      </section>

      {/* Lista das 3 Práticas Formativas */}
      <section className="bg-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {WORKSHOPS.map((workshop) => (
            <article
              key={workshop.id}
              id={workshop.id}
              className="scroll-mt-28 bg-white rounded-[38px] p-7 sm:p-12 shadow-lg border-2 border-[#FDBC2E]/50 space-y-8"
            >
              {/* Topo do Card */}
              <div className="border-b border-[#532E5A]/10 pb-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {workshop.logoUrl ? (
                      <div className="relative w-16 h-16 rounded-2xl bg-[#FDF6E4] p-1.5 border-2 border-[#FDBC2E] overflow-hidden shadow-sm shrink-0">
                        <Image
                          src={workshop.logoUrl}
                          alt={`Logo ${workshop.title}`}
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md shrink-0"
                        style={{
                          backgroundColor: workshop.accentColor,
                          color:
                            workshop.accentColor === "#FDBC2E"
                              ? "#532E5A"
                              : "#FDF6E4",
                        }}
                      >
                        <Hammer className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-black text-[#532E5A] uppercase tracking-tight">
                        {workshop.title}
                      </h2>
                      <p className="text-xs sm:text-base font-bold text-[#E91C47]">
                        {workshop.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider"
                    style={{
                      backgroundColor: workshop.accentColor,
                      color:
                        workshop.accentColor === "#FDBC2E"
                          ? "#532E5A"
                          : "#FDF6E4",
                    }}
                  >
                    Oficina / Vivência
                  </span>
                </div>

                {/* Conceito Central */}
                <div className="bg-[#FDF6E4] p-5 rounded-2xl border-l-4 border-[#FDBC2E] text-base sm:text-lg font-bold text-[#532E5A] italic">
                  &ldquo;{workshop.concept}&rdquo;
                </div>
              </div>

              {/* Grid: Moldura de Fotos + Descrição Completa */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-5">
                  <PhotoCarouselFrame
                    photos={workshop.photos}
                    badgeLogoSrc={workshop.logoUrl}
                    badgeLogoAlt={workshop.title}
                  />
                </div>

                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#532E5A]/90 leading-relaxed font-medium">
                  {workshop.fullDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Princípios ou Destaques */}
              {workshop.principles && (
                <div className="bg-[#FDF6E4] p-6 rounded-3xl border border-[#F79335]/40 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                    Princípios da Prática:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold text-[#532E5A]">
                    {workshop.principles.map((pr, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0" />
                        <span>{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {workshop.highlights && (
                <div className="bg-[#FDF6E4] p-6 rounded-3xl border border-[#FDBC2E]/50 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#532E5A]">
                    Destaques & Realizações:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#532E5A]/90 font-medium">
                    {workshop.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Público-alvo & Limite */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-[#532E5A] bg-[#FDF6E4]/70 p-6 rounded-3xl border border-[#FDBC2E]/40">
                <div className="space-y-1">
                  <span className="font-black uppercase text-[#E91C47] text-[11px] tracking-wider block">
                    Público-Alvo:
                  </span>
                  <p>{workshop.targetAudience}</p>
                </div>
                {workshop.audienceLimit && (
                  <div className="space-y-1">
                    <span className="font-black uppercase text-[#F79335] text-[11px] tracking-wider block">
                      Limite Recomendado:
                    </span>
                    <p>{workshop.audienceLimit}</p>
                  </div>
                )}
              </div>

              {/* Ações de Contratação */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={workshop.whatsappContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                  Informações de Contratação no WhatsApp
                </a>

                {workshop.instagramUrl && (
                  <a
                    href={workshop.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#FDF6E4] hover:bg-[#FDBC2E]/30 text-[#532E5A] text-xs sm:text-sm px-5 py-3 border border-[#FDBC2E] flex items-center gap-2"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E91C47]" />
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
