import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";
import IntroPassarinha from "@/components/IntroPassarinha";
import PassarinhaAnimada from "@/components/PassarinhaAnimada";
import ReplayIntroButton from "@/components/ReplayIntroButton";
import CustomDocumentRenderer from "@/components/CustomDocumentRenderer";
import { AdminEditLink } from "@/components/AdminEditSystem";
import { getHomePageContent, getTeamMembers } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Coletivo Interdisciplinar Passarinha | Arte Educação Ambiental",
  description:
    "Plataforma de criação, articulação e circulação artística desde 2014. Espetáculos teatrais, práticas formativas, educação ambiental e cultura popular.",
  openGraph: {
    title: "Coletivo Interdisciplinar Passarinha | Arte Educação Ambiental",
    description:
      "Plataforma de criação, articulação e circulação artística desde 2014. Conectando linguagens, saberes, pessoas e territórios.",
    images: [{ url: "/photos/espetaculos/passarinha-nina-197.webp" }],
  },
};

export default async function HomePage() {
  const [homeContent, teamMembers] = await Promise.all([
    getHomePageContent(),
    getTeamMembers(),
  ]);

  const teamCarouselPhotos = teamMembers
    .filter((member) => Boolean(member.photoUrl))
    .map((member) => ({
      src: member.photoUrl as string,
      alt: `${member.name} — ${member.role}`,
      caption: `${member.name} — ${member.role}`,
      position: "object-[center_20%]",
    }));

  return (
    <main className="w-full overflow-x-clip">
      {/* ANIMAÇÃO INICIAL (Stop-Motion / Folheado de Cordel da Passarinha) */}
      <IntroPassarinha />

      {/* FAIXA 1 — COLETIVO INTERDISCIPLINAR PASSARINHA (Roxo Acrílico - Hero com Fotos das Passarinhas) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Lado Esquerdo: Identidade e Texto Integral do Doc */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <BrushBanner color="crimson" shape="wave" className="-ml-2 sm:-ml-4">
                <div className="space-y-0.5">
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-[#FDBC2E] leading-[1.05]">
                    {homeContent.heroTitle}
                    <AdminEditLink
                      singleton="paginaInicial"
                      field="Título Principal do Hero"
                      label="Editar título"
                    />
                  </h1>
                  <p className="text-base sm:text-xl font-bold lowercase tracking-wide text-[#FDF6E4]">
                    {homeContent.heroSubtitle}
                    <AdminEditLink
                      singleton="paginaInicial"
                      field="Subtítulo / Chamada"
                      label="Editar subtítulo"
                    />
                  </p>
                </div>
              </BrushBanner>

              {/* Passarinha batendo asas no topo da Home */}
              <div className="hidden sm:block shrink-0">
                <PassarinhaAnimada size="md" />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Apresentação do Coletivo na Home"
                  label="Editar texto"
                />
              </div>
              {homeContent.content && homeContent.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={homeContent.content}
                  theme="purple"
                  className="text-base sm:text-lg font-medium leading-relaxed"
                />
              ) : (
                <div className="space-y-4 text-base sm:text-lg text-[#FDBC2E] font-medium leading-relaxed">
                  {homeContent.introParagraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-start pt-2">
              <Link
                href="/quem-somos"
                className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                {homeContent.ctaText}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Texto do Botão de Chamada"
                label="Editar botão"
              />
            </div>
          </div>

          {/* Lado Direito: Carrossel Automático dos Integrantes + Foto Histórica na Estrada */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Carrossel com cada integrante do coletivo passando automaticamente */}
            <div className="w-full shadow-2xl">
              <PhotoCarouselFrame
                radiusVariant={1}
                aspectClass="aspect-[16/11]"
                showThumbnails={false}
                intervalMs={3500}
                photos={teamCarouselPhotos}
              />
            </div>

            {/* Foto da Estação Permacultural Móvel na Estrada */}
            <div className="relative aspect-[16/11] foto-organica-2 bg-[#241128] shadow-2xl">
              <Image
                src="/photos/historico/inicio-1.webp"
                alt="Kombi Safari do Coletivo Passarinha na estrada desde 2014"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B0B1E]/95 via-[#1B0B1E]/65 to-transparent pt-11 pb-3.5 pl-6 pr-6 sm:pl-7 sm:pr-7 sm:pb-4">
                <p className="text-xs font-bold text-[#FDF6E4] leading-snug drop-shadow line-clamp-2">
                  Estação Permacultural Móvel — Na estrada desde 2014
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 2 — PONTO DE CULTURA QUINTAL GARATUJA (Laranja Acrílico - Texto Integral do Doc) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos da Pasta: Ponto de Cultura Quintal Garatuja/GARATUJA */}
          <div className="lg:col-span-5">
            <PhotoCarouselFrame
              radiusVariant={1}
              badgeLogoSrc="/images/garatuja/GARATUJA_logo_hor colorido.png"
              badgeLogoAlt="Logo Ponto de Cultura Quintal Garatuja"
              photos={[
                {
                  src: "/photos/garatuja/principal-tc-silva.webp",
                  alt: "TC Silva no Ponto de Cultura Quintal Garatuja",
                  caption: "TC Silva — Encontros culturais no Quintal Garatuja",
                },
                {
                  src: "/photos/garatuja/principal-ultimo-tipo.webp",
                  alt: "Grupo Último Tipo no Quintal Garatuja",
                  caption: "Teatro popular e convivência comunitária em Campinas/SP",
                },
                {
                  src: "/photos/garatuja/principal-coro-cenico.webp",
                  alt: "Coro Cênico no Quintal Garatuja",
                  caption: "Coro Cênico — Criação coletiva e vozes no território",
                },
                {
                  src: "/photos/garatuja/principal-aya.webp",
                  alt: "Apresentação AYA no Quintal Garatuja",
                  caption: "Música, ancestralidade e cultura viva desde 2016",
                },
                {
                  src: "/photos/garatuja/principal-primeiro-evento.webp",
                  alt: "Primeiro evento do Quintal Garatuja (Foto: Gabriela Zanardi)",
                  caption: "Artistas e comunidade — Foto: Gabriela Zanardi",
                },
                {
                  src: "/photos/garatuja/principal-grupo-grito.webp",
                  alt: "Grupo Grito no Quintal Garatuja",
                  caption: "Intercâmbio entre grupos e Pontos de Cultura",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Amarela à Direita */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
                  {homeContent.garatujaTitle}
                  <AdminEditLink
                    singleton="paginaInicial"
                    field="Título da Seção Quintal Garatuja"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>

            <div className="relative">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Texto da Seção Quintal Garatuja"
                  label="Editar texto"
                />
              </div>
              <p className="text-base sm:text-xl text-[#3A1D40] font-semibold leading-relaxed whitespace-pre-line">
                {homeContent.garatujaText}
              </p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href="/quintal-garatuja"
                className="cta-editorial text-[#3A1D40] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                {homeContent.garatujaCta}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Botão da Seção Quintal Garatuja"
                label="Editar botão"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 3 — A HISTÓRIA DE ARU (Amarelo Ipê Acrílico - Texto Integral do Doc) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texto + Pincelada Carmim à Esquerda */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  {homeContent.aruTitle}
                  <AdminEditLink
                    singleton="paginaInicial"
                    field="Título da Seção Aru"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#532E5A] font-semibold leading-relaxed">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Texto da Seção Aru"
                  label="Editar texto"
                />
              </div>
              <p className="whitespace-pre-line">{homeContent.aruText}</p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href="/aru"
                className="cta-editorial text-[#532E5A] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                {homeContent.aruCta}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Botão da Seção Aru"
                label="Editar botão"
              />
            </div>
          </div>

          {/* Fotos Reais dos Personagens e Elementos de Aru */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              radiusVariant={2}
              photos={[
                {
                  src: "/photos/aru/aru-cenario-1.webp",
                  alt: "Animal artesanal de A História de Aru criado com tecidos, sementes e fibras naturais",
                  caption: "Personagens criados com fibras naturais e materiais reaproveitados",
                },
                {
                  src: "/photos/aru/povoado-1.webp",
                  alt: "Personagem do Povoado de Aru feito com folhas, sementes e tampinhas",
                  caption: "Povoado de Aru — Sementes, folhas secas e tampinhas ressignificadas",
                  fit: "contain",
                },
                {
                  src: "/photos/aru/aru-cenario-2.webp",
                  alt: "Ilustração tridimensional de A História de Aru",
                  caption: "Os 12 princípios da Permacultura contados em cordel ilustrado",
                },
                {
                  src: "/photos/aru/povoado-2.webp",
                  alt: "Rosto artesanal de personagem de A História de Aru",
                  caption: "Arte-educação ambiental gratuita para escolas e famílias",
                  fit: "contain",
                },
                {
                  src: "/photos/aru/aru-1.webp",
                  alt: "Aru — personagem central criada com elementos da natureza e recicláveis",
                  caption: "Aru — Poética visual da terra e do reaproveitamento",
                  fit: "contain",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 4 — ESPETÁCULOS (Roxo Acrílico - Texto Integral do Doc) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos exatas da subpasta: PÁGINA INICIAL / FAIXA ESPETÁCULOS */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              radiusVariant={3}
              photos={[
                {
                  src: "/photos/home/espetaculos-6.webp",
                  alt: "Histórias que a Passarinha me contou — Episódio Terra (Foto: Mauro Machado)",
                  caption: "Histórias que a Passarinha me contou — Foto: Mauro Machado",
                },
                {
                  src: "/photos/home/espetaculos-1.webp",
                  alt: "Cena de Plástico, um mito contemporâneo",
                  caption: "Plástico, um mito contemporâneo — Teatro-fórum socioambiental",
                },
                {
                  src: "/photos/home/espetaculos-3.webp",
                  alt: "Histórias do Bosque dos Guarantãs (Foto: Dalton Yatabe)",
                  caption: "Histórias do Bosque dos Guarantãs — Foto: Dalton Yatabe",
                },
                {
                  src: "/photos/home/espetaculos-7.webp",
                  alt: "Episódio Terra (Foto: Nina Pires)",
                  caption: "Contação de histórias e música autoral — Foto: Nina Pires",
                },
                {
                  src: "/photos/home/espetaculos-2.webp",
                  alt: "Passeio cênico no Bosque dos Guarantãs",
                  caption: "Encontros cênicos para praças, escolas, SESCs e teatros",
                },
                {
                  src: "/photos/home/espetaculos-8.webp",
                  alt: "Arte visual de Plástico, um mito contemporâneo",
                  caption: "Criações para públicos diversos, de crianças a adultos",
                },
                {
                  src: "/photos/home/espetaculos-4.webp",
                  alt: "Vivência teatral ao ar livre da Passarinha",
                  caption: "Arte, imaginação e diálogo com o território",
                },
                {
                  src: "/photos/home/espetaculos-5.webp",
                  alt: "Criança interagindo em espetáculo da Passarinha",
                  caption: "Afeto, encantamento e reflexão socioambiental",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Carmim avançando sobre a borda da foto */}
          <div className="lg:col-span-7 space-y-6 relative z-20">
            <div>
              <BrushBanner
                color="crimson"
                shape="bridge"
                className="-ml-2 lg:-ml-20 lg:pl-20"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  {homeContent.espetaculosTitle}
                  <AdminEditLink
                    singleton="paginaInicial"
                    field="Título da Seção Espetáculos"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#FDBC2E] font-medium leading-relaxed">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Texto da Seção Espetáculos"
                  label="Editar texto"
                />
              </div>
              <p className="whitespace-pre-line">{homeContent.espetaculosText}</p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href="/espetaculos"
                className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                {homeContent.espetaculosCta}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Botão da Seção Espetáculos"
                label="Editar botão"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 5 — PRÁTICAS FORMATIVAS (Vermelho Acrílico - Texto Integral do Doc) */}
      <section className="canvas-vermelho py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texto + Pincelada Amarela Inclinada à Esquerda */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <BrushBanner color="yellow" shape="tilted" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
                  {homeContent.formativasTitle}
                  <AdminEditLink
                    singleton="paginaInicial"
                    field="Título da Seção Práticas Formativas"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#FDF6E4] font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(45,18,50,0.28)]">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Texto da Seção Práticas Formativas"
                  label="Editar texto"
                />
              </div>
              <p className="whitespace-pre-line">{homeContent.formativasText}</p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href="/praticas-formativas"
                className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                {homeContent.formativasCta}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Botão da Seção Práticas Formativas"
                label="Editar botão"
              />
            </div>
          </div>

          {/* Fotos da subpasta: Inicial / PRÁTICAS FORMATIVAS + Jogar Dentro & Ecobrinquedoteca */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              radiusVariant={4}
              photos={[
                {
                  src: "/photos/home/formativas-1.webp",
                  alt: "Prática formativa coletiva da Orquestra de Pandeiros",
                  caption: "Orquestra de Pandeiros — Educação musical intergeracional",
                },
                {
                  src: "/photos/home/formativas-2.webp",
                  alt: "Vivência formativa conduzida pelo Coletivo Passarinha",
                  caption: "Encontros formativos em escolas, universidades e Pontos de Cultura",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-1.webp",
                  alt: "Experimentação criativa no Ateliê Jogar Dentro",
                  caption: "Ateliê Jogar Dentro — Reaproveitamento criativo de materiais",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-dobra-39.webp",
                  alt: "Crianças e famílias na Ecobrinquedoteca Jogar Dentro",
                  caption: "Ecobrinquedoteca — Cultura do brincar livre e sustentável",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 6 — AUDIOVISUAL (Amarelo Ipê Acrílico - Texto Integral do Doc) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos exatas da subpasta: PÁGINA INICIAL / FAIXA AUDIOVISUAL */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              radiusVariant={1}
              photos={[
                {
                  src: "/photos/home/audiovisual-deusa.webp",
                  alt: "Deusa Reduza na produção audiovisual Fora de onde? (Foto: Mauro Machado)",
                  caption: "Fora de onde? — Deusa Reduza (Foto: Mauro Machado)",
                },
                {
                  src: "/photos/home/audiovisual-formigueiro.webp",
                  alt: "Produção audiovisual O que se passa no formigueiro?",
                  caption: "O que se passa no formigueiro? — Agroecologia e infâncias",
                },
                {
                  src: "/photos/audiovisual/caixa-magica-1.webp",
                  alt: "Curta A Caixa Mágica com Pirulita e Pouca Sombra",
                  caption: "A Caixa Mágica — Palhaçaria e ressignificação de objetos",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Carmim avançando sobre a borda da foto */}
          <div className="lg:col-span-7 space-y-6 relative z-20">
            <div>
              <BrushBanner
                color="crimson"
                shape="bridge"
                className="-ml-2 lg:-ml-20 lg:pl-20"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  {homeContent.audiovisualTitle}
                  <AdminEditLink
                    singleton="paginaInicial"
                    field="Título da Seção Audiovisual"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#532E5A] font-semibold leading-relaxed">
              <div className="flex justify-end mb-1">
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Texto da Seção Audiovisual"
                  label="Editar texto"
                />
              </div>
              <p className="whitespace-pre-line">{homeContent.audiovisualText}</p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href="/audiovisual"
                className="cta-editorial text-[#532E5A] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                {homeContent.audiovisualCta}
              </Link>
              <AdminEditLink
                singleton="paginaInicial"
                field="Botão da Seção Audiovisual"
                label="Editar botão"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selo da Ave Passarinha com Bater de Asas antes do Rodapé */}
      <section className="canvas-roxo py-12 px-4 border-t-4 border-[#FDBC2E]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-5">
            <div className="shrink-0">
              <PassarinhaAnimada size="sm" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#FDBC2E]">
                {homeContent.footerBannerTitle}
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Título da Chamada Final (Rodapé)"
                  label="Editar chamada"
                />
              </h3>
              <p className="text-sm text-[#FDF6E4] font-semibold">
                {homeContent.footerBannerSubtitle}
                <AdminEditLink
                  singleton="paginaInicial"
                  field="Subtítulo da Chamada Final (Rodapé)"
                  label="Editar subtítulo"
                />
              </p>
              <div className="pt-1">
                <ReplayIntroButton />
              </div>
            </div>
          </div>
          <div className="flex items-center shrink-0">
            <Link
              href="/contato"
              className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-sm px-7 py-3.5 shrink-0"
            >
              {homeContent.footerBannerCta}
            </Link>
            <AdminEditLink
              singleton="paginaInicial"
              field="Botão da Chamada Final (Rodapé)"
              label="Editar botão"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
