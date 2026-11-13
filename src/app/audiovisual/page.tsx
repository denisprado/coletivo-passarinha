import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Play, ExternalLink, Film } from "lucide-react";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";
import AudiovisualFilterBar from "@/components/AudiovisualFilterBar";
import CustomDocumentRenderer from "@/components/CustomDocumentRenderer";
import { AdminEditLink } from "@/components/AdminEditSystem";
import { getAudiovisualWorks } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Produções Audiovisuais | Coletivo Passarinha",
  description:
    "Curta-metragem A Caixa Mágica, Fora de onde? e O que se passa no formigueiro? - criações em vídeo do Coletivo Passarinha.",
  openGraph: {
    title: "Produções Audiovisuais | Coletivo Passarinha",
    description:
      "Filmes, animações e vídeo-artes voltadas para as infâncias e a reflexão socioambiental.",
    images: [{ url: "/photos/audiovisual/caixa-magica-cartaz.webp" }],
  },
};

export default async function AudiovisualPage() {
  const works = await getAudiovisualWorks();
  const caixaMagicaWork = works.find((w) => w.id === "a-caixa-magica" || w.id === "caixa-magica");
  const foraDeOndeWork = works.find((w) => w.id === "fora-de-onde");
  const formigueiroWork = works.find((w) => w.id === "o-que-se-passa-no-formigueiro");
  const extraWorks = works.filter(
    (w) =>
      ![
        "a-caixa-magica",
        "caixa-magica",
        "fora-de-onde",
        "o-que-se-passa-no-formigueiro",
      ].includes(w.id),
  );

  const submenuItems = [
    {
      id: "a-caixa-magica",
      label: caixaMagicaWork?.title || "A Caixa Mágica",
    },
    {
      id: "fora-de-onde",
      label: foraDeOndeWork?.title || "Fora de onde?",
    },
    {
      id: "o-que-se-passa-no-formigueiro",
      label: formigueiroWork?.title || "O que se passa no formigueiro?",
    },
    ...extraWorks.map((w) => ({ id: w.id, label: w.title })),
  ];

  return (
    <main id="conteudo-principal" tabIndex={-1} className="w-full overflow-x-clip">
      {/* Header em Textura Amarela Ipê Acrílica */}
      <section id="apresentacao" className="scroll-mt-36 canvas-amarelo pt-16 pb-10 sm:pt-20 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Film className="w-4 h-4 text-[#FDBC2E]" /> Cinema, Vídeo-arte & Infâncias
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Audiovisual
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#3A1D40] max-w-3xl mx-auto leading-relaxed font-bold">
            A Passarinha também já experimentou o audiovisual como linguagem de
            criação artística. Entre essas experiências estão Caixa Mágica, Fora
            de onde? e O que se passa no formigueiro?, trabalhos que integram a
            trajetória do coletivo.
          </p>
        </div>
      </section>

      {/* Submenu de Produções Audiovisuais Fixo na Rolagem */}
      <AudiovisualFilterBar items={submenuItems} />

      {/* PRODUÇÃO 1 — A CAIXA MÁGICA (Roxo Acrílico - Texto Integral do Doc + Fotos Intercaladas) */}
      <section
        id="a-caixa-magica"
        className="scroll-mt-36 canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#FDBC2E] text-[#3A1D40]">
              Produção Audiovisual 01 • Curta-metragem
            </span>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {caixaMagicaWork?.title || "A caixa mágica"}
                  <AdminEditLink
                    collection="audiovisual"
                    slug="a-caixa-magica"
                    field="Título da Obra"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>
          </div>

          {/* Bloco 1: 3 Parágrafos Iniciais + Foto 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="audiovisual"
                  slug="a-caixa-magica"
                  field="Sinopse, Contexto e Reflexões"
                  label="Editar texto"
                />
              </div>
              {caixaMagicaWork?.content && caixaMagicaWork.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={caixaMagicaWork.content}
                  theme="purple"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <>
                  <p className="text-[#FDBC2E] font-semibold">
                    Uma palhaça e um palhaço abrem sua caixa mágica e, com a ajuda
                    da Mãozinha, brincam com a ressignificação de objetos,
                    explorando criativamente suas infinitas possibilidades antes do
                    descartado.
                  </p>
                  <p>
                    Tudo começa quando Pirulita e Pouca Sombra percebem que estão
                    passando tanto tempo no celular que se esqueceram de brincar!
                    Assustados com essa descoberta, decidem encontrar uma solução
                    para que outras crianças não passem pelo mesmo. E qual é a ideia
                    da dupla? Usar o próprio celular para ajudar todo mundo a ficar
                    longe dele!
                  </p>
                  <p>
                    Um curta-metragem do Coletivo Passarinha que mistura humor,
                    brincadeira e reflexão sobre o uso das telas e as possibilidades
                    que os objetos guardam antes de serem descartados.
                  </p>
                </>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/audiovisual/caixa-magica-1.webp"
                  alt="Pirulita e Pouca Sombra no curta-metragem A Caixa Mágica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: Fotos 2 e 3 + 3 Parágrafos sobre Brincando na Rede */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/audiovisual/caixa-magica-2.webp"
                  alt="Gravação de A Caixa Mágica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/audiovisual/caixa-magica-3.webp"
                  alt="Bastidores de A Caixa Mágica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
              <p>
                A Caixa Mágica integrou o{" "}
                <strong className="font-black text-[#FDBC2E]">Brincando na Rede</strong>, uma
                mostra cultural on-line lançada em 2021, que reuniu nove grupos
                artísticos de Campinas em uma plataforma virtual gratuita, com
                conteúdos voltados especialmente a crianças, famílias e escolas
                de educação infantil.
              </p>
              <p>
                Contemplado pelo Edital Ações em Rede, da Prefeitura Municipal
                de Campinas, o projeto nasceu de articulações iniciadas durante
                a pandemia, buscando aproximar a arte das crianças e apoiar
                educadoras e escolas por meio de conteúdos lúdicos e educativos.
                A iniciativa reuniu diferentes linguagens artísticas e propostas
                culturais, construídas de forma colaborativa entre os grupos
                participantes, com atenção à acessibilidade.
              </p>
              <p className="text-[#FDBC2E] font-semibold">
                Nesse contexto, o Coletivo Passarinha criou A Caixa Mágica, um
                curta-metragem que convida as crianças a redescobrir o brincar,
                explorar as possibilidades dos objetos e refletir, com humor e
                imaginação, sobre o uso das telas no cotidiano.
              </p>
            </div>
          </div>

          {/* Ficha Técnica Completa */}
          <div className="pt-4 border-t-2 border-[#FDBC2E]/30 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FDBC2E]">
              Ficha Técnica & Elenco
              <AdminEditLink
                collection="audiovisual"
                slug="a-caixa-magica"
                field="Ficha Técnica"
                label="Editar ficha"
              />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3.5 bg-[#241128]/80 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]">
                <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                  Texto, direção, produção e edição
                </span>
                <span className="text-[#FDF6E4] font-bold">
                  Coletivo Passarinha
                </span>
              </div>
              <div className="p-3.5 bg-[#241128]/80 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]">
                <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                  Elenco — Mãozinha
                </span>
                <span className="text-[#FDF6E4] font-bold">Sarah Gregorio</span>
              </div>
              <div className="p-3.5 bg-[#241128]/80 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]">
                <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                  Elenco — Pirulita
                </span>
                <span className="text-[#FDF6E4] font-bold">
                  Maria Carolina Thomé
                </span>
              </div>
              <div className="p-3.5 bg-[#241128]/80 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]">
                <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                  Elenco — Pouca Sombra
                </span>
                <span className="text-[#FDF6E4] font-bold">Miguel Matoso</span>
              </div>
              <div className="p-3.5 bg-[#241128]/80 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]">
                <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                  Intérprete de Libras
                </span>
                <span className="text-[#FDF6E4] font-bold">Karina Zonzini</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUÇÃO 2 — FORA DE ONDE? (Laranja Acrílico - Texto Integral do Doc + Fotos Intercaladas) */}
      <section
        id="fora-de-onde"
        className="scroll-mt-36 canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
              Produção Audiovisual 02 • Longa-metragem / Palestra-performance
            </span>
            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                  {foraDeOndeWork?.title || "Fora de onde?"}
                  <AdminEditLink
                    collection="audiovisual"
                    slug="fora-de-onde"
                    field="Título da Obra"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>
          </div>

          {/* Player do YouTube Embutido */}
          <div className="bg-[#FDF6E4] p-2 sm:p-3 rounded-xl border border-[#3A1D40]/25 shadow-xl">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#241128]">
              <iframe
                src="https://www.youtube-nocookie.com/embed/mnlxnn_4HPg?start=2411"
                title="Fora de onde?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Texto Completo Intercalado com Cartaz Oficial e Foto de Cena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#3A1D40]">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="audiovisual"
                  slug="fora-de-onde"
                  field="Sinopse, Contexto e Reflexões"
                  label="Editar texto"
                />
              </div>
              {foraDeOndeWork?.content && foraDeOndeWork.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={foraDeOndeWork.content}
                  theme="orange"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <div className="space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  <p>
                    Quando eu jogo alguma coisa fora, eu jogo fora de onde? Em um
                    convite poético ao pensamento, vamos dialogar com alguns pontos
                    de vista sobre a problemática do lixo. Como podemos perceber e
                    lidar com esses rastros de consumo que fiz e sigo fazendo todos
                    os dias? O que acontece com o saquinho de lixo depois que coloco
                    na porta de casa? Qual o futuro dos descartados? Quantas
                    histórias o lixo conta! Em interlocução com a Política Nacional
                    de Resíduos Sólidos, lei 12.305/2010, este filme é tragédia,
                    diversão e reflexão em uma palestra-performance.
                  </p>
                  <p>
                    O longa metragem é parte da pesquisa de doutorado de Pamella
                    Villanova, em Artes da Cena na Unicamp. Foi um primeiro rascunho
                    para uma peça de teatro prevista para estrear em 2027. O filme
                    foi feito durante a pandemia, quando os teatros estavam
                    fechados. Participou de festivais de teatro, como o Inverno
                    Cultural UFSJ, o festival de cinema ambiental SARANCINE e o 10º
                    FESTCINE, no qual foi indicado a melhor filme na categoria longa
                    metragem. A obra audiovisual também participou de diversos
                    eventos, ligados a temáticas socioambientais, de extensão
                    universitária e divulgação científica.
                  </p>
                </div>
              )}

              {/* Ficha Técnica */}
              <div className="pt-4 border-t-2 border-[#3A1D40]/20 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#3A1D40]">
                  Ficha Técnica
                  <AdminEditLink
                    collection="audiovisual"
                    slug="fora-de-onde"
                    field="Ficha Técnica"
                    label="Editar ficha"
                  />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FDF6E4]/85 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Criação, direção e edição
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Pamella Villanova
                    </span>
                  </div>
                  <div className="p-3 bg-[#FDF6E4]/85 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Assistência de direção e de roteiro
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Dudu Ferraz
                    </span>
                  </div>
                  <div className="p-3 bg-[#FDF6E4]/85 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Fotografia
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Mauro Machado
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDF6E4]/90 p-5 rounded-xl border-l-4 border-[#3A1D40] space-y-3 shadow-md">
                <p className="text-sm text-[#3A1D40] font-semibold">
                  No link abaixo, é possível acessar a transmissão do filme,
                  realizada no 8º EDICC - Encontro de Divulgação Científica e
                  Cultural da Unicamp, acompanhado de debate sobre a obra.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=mnlxnn_4HPg&t=2411s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#3A1D40] hover:bg-[#241128] text-[#FDBC2E] text-xs py-2.5 px-5"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Assistir Transmissão no 8º EDICC (YouTube)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <PhotoMosaic
                variant="stacked"
                photos={[
                  {
                    src: "/photos/audiovisual/fora-de-onde-cartaz.webp",
                    alt: "Cartaz Oficial do filme Fora de onde?",
                    caption: "Cartaz Oficial — Fora de onde?",
                    fit: "contain",
                  },
                  {
                    src: "/photos/audiovisual/fora-de-onde-cena.webp",
                    alt: "Pamella Villanova em Fora de onde? (Foto: Mauro Machado)",
                    caption: "Cena de Fora de onde? — Foto: Mauro Machado",
                  },
                  {
                    src: "/photos/home/audiovisual-deusa.webp",
                    alt: "Deusa Reduza em Fora de onde? (Foto: Mauro Machado)",
                    caption: "Deusa Reduza — Foto: Mauro Machado",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUÇÃO 3 — O QUE SE PASSA NO FORMIGUEIRO? (Amarelo Ipê Acrílico - TODAS AS SEÇÕES INTEGRAIS DO DOC!) */}
      <section
        id="o-que-se-passa-no-formigueiro"
        className="scroll-mt-36 canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
              Produção Audiovisual 03 • Inspirado em Ana Primavesi
            </span>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {formigueiroWork?.title || "O que se passa no formigueiro?"}
                  <AdminEditLink
                    collection="audiovisual"
                    slug="o-que-se-passa-no-formigueiro"
                    field="Título da Obra"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>
          </div>

          {/* Player do YouTube Embutido */}
          <div className="bg-[#FDF6E4] p-2 sm:p-3 rounded-xl border border-[#3A1D40]/25 shadow-xl">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#241128]">
              <iframe
                src="https://www.youtube-nocookie.com/embed/FkMBMPGgpHw"
                title="O que se passa no formigueiro?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Sinopse + Ficha Técnica + Fotos de Cena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="audiovisual"
                  slug="o-que-se-passa-no-formigueiro"
                  field="Sinopse, Contexto e Reflexões"
                  label="Editar texto"
                />
              </div>
              <p>
                Um formigueiro de saúvas cortadeiras passa por momentos de
                dificuldade: a terra está diferente, há mais seres vivendo
                naquele solo, as formigas saúva estão em perigo! Venha conhecer
                um pouco sobre a vida no formigueiro com esta aventura épica
                inspirada em um texto de Ana Primavesi. Uma história para ouvir,
                ver, ou ouvir e ver ao mesmo tempo.
              </p>

              <div className="bg-[#FDF6E4]/80 p-5 rounded-xl border-l-4 border-[#E91C47] space-y-1.5 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Um pouco mais:
                </h3>
                <p className="text-sm sm:text-base text-[#3A1D40] font-semibold">
                  Toda a concepção e produção da obra foi feita por Pamella
                  Villanova e Dudu Ferraz, artistas do Quintal Garatuja de
                  Campinas/SP, com inspiração em uma história de Ana Primavesi.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Ficha técnica
                  <AdminEditLink
                    collection="audiovisual"
                    slug="o-que-se-passa-no-formigueiro"
                    field="Ficha Técnica"
                    label="Editar ficha"
                  />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FDF6E4]/80 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Concepção e realização
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Pamella Villanova e Dudu Ferraz
                    </span>
                  </div>
                  <div className="p-3 bg-[#FDF6E4]/80 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Inspiração
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      &ldquo;Rainha Maximilliana Atta&rdquo;, de Ana Primavesi
                    </span>
                  </div>
                  <div className="p-3 bg-[#FDF6E4]/80 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Intérprete de Libras
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Karina Zonzini
                    </span>
                  </div>
                  <div className="p-3 bg-[#FDF6E4]/80 rounded-lg border border-[#3A1D40]/20 shadow-sm">
                    <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                      Captação de imagens
                    </span>
                    <span className="text-[#3A1D40] font-bold">
                      Quintal Garatuja, Guilherme Cruz e Neader Eringuer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhotoMosaic
                variant="stacked"
                photos={[
                  {
                    src: "/photos/audiovisual/formigueiro-cena.webp",
                    alt: "Cena de O que se passa no formigueiro?",
                    caption: "O que se passa no formigueiro? — Acessibilidade em Libras",
                  },
                  {
                    src: "/photos/home/audiovisual-formigueiro.webp",
                    alt: "Arte de O que se passa no formigueiro?",
                    caption: "Inspirado em 'Rainha Maximiliana Atta', de Ana Primavesi",
                  },
                ]}
              />
            </div>
          </div>

          {/* Subseções integrais do Doc: Acessibilidade, Agroecologia, O ponto de vista da praga e Como fizemos esse vídeo? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Acessibilidade */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#E91C47]">
                Acessibilidade
              </h3>
              <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                Nossa proposta é que a obra seja acessível para pessoas com
                deficiência visual e auditiva, desde sua concepção inicial.
                Assim, criamos uma forma de contar essa história considerando o
                som e a imagem como obras autônomas, quer dizer, que se possa
                ouvir, ver ou ouvir e ver ao mesmo tempo. Mais um passo no
                caminho de pensar a inclusão no fazer e distribuir arte.
              </p>
            </div>

            {/* O ponto de vista da praga */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#E91C47]">
                O ponto de vista da praga
              </h3>
              <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                As formigas cortadeiras são uma grande ameaça à agricultura,
                porque em pouco tempo conseguem ceifar um pasto inteiro ou uma
                plantação inteira! Com a inspiração e base científica de
                Primavesi, decidimos contar essa história do ponto de vista da
                praga, quer dizer, imaginar como seria o momento em que as
                cortadeiras decidem partir. Quais estratégias, além de venenos,
                podem proteger os campos das pragas?
              </p>
              <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                São estratégias da agricultura agroecológica que nutrem o solo,
                em contraposição à monocultura que elimina a diversidade. Por
                isso, agora as formigas não estão mais sozinhas com as plantas
                naquele solo. A diversidade é benéfica para a produção de
                alimentos, pois mantém a saúde da terra e afasta as pragas.
              </p>
              <p className="text-sm sm:text-base text-[#3A1D40] font-bold pt-1">
                Para saber mais, sugerimos conhecer a história &ldquo;Rainha
                Maximiliana Atta&rdquo; do livro &ldquo;A convenção dos
                ventos&rdquo;.
              </p>
            </div>

            {/* Agroecologia */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#E91C47]">
                Agroecologia
              </h3>
              <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                A autora da história que nos inspirou a escrever o roteiro é Ana
                Primavesi, uma grande mestra da Agroecologia - que é, segundo
                ela, uma das 3 formas de agricultura que existem atualmente.
              </p>
              <blockquote className="bg-[#FDF6E4]/70 p-4 sm:p-5 rounded-xl border-l-4 border-[#3A1D40] italic text-base text-[#3A1D40] font-semibold shadow-sm">
                &ldquo;Na Agroecologia, ecológico refere-se ao sistema natural
                de um lugar. Quer dizer: ao solo, a água, ao clima, todos seres
                vivos. Dos micróbios às plantas e até os animais que aqui
                habitam e suas inter-relações. Se trabalhamos conforme o meio
                ambiente e suas leis, alterando-as o mínimo possível,
                aproveitamos do potencial natural do solo neste ambiente. (...)
                Na natureza não existe nenhum fator isolado, tudo e todos são
                interligados e trabalhar ecologicamente é trabalhar com esta
                teia de vida.&rdquo; (fonte: site da autora)
              </blockquote>
              <p className="text-sm sm:text-base text-[#3A1D40] font-semibold">
                Para acessar livros, desenhos, biografia e muito mais dessa
                grande mestra, acesse:{" "}
                <strong className="font-black">anamariaprimavesi.com.br</strong>{" "}
                <span className="block text-xs text-[#3A1D40]/80 mt-0.5">
                  (Educadoras e famílias, basta copiar este link e colocar em
                  seu navegador, não está linkado aqui por questões de segurança
                  das crianças internautas)
                </span>
              </p>
            </div>

            {/* Como fizemos esse vídeo? */}
            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#E91C47]">
                  Como fizemos esse vídeo?
                </h3>
                <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  Somos artistas interdisciplinares, com paixão por teatro,
                  música e contação de histórias. Desde que a pandemia
                  impossibilitou que frequentássemos as escolas, passamos a
                  produzir daqui do nosso quintal, obras audiovisuais com os
                  recursos disponíveis.
                </p>
                <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  Todas as imagens foram gravadas ao redor do Quintal Garatuja,
                  entre os bairros Jardim Nova Europa e Parque Jambeiro, em
                  Campinas/SP.
                </p>
                <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  A trilha sonora é de criação totalmente nossa, original,
                  gravada e finalizada por nós. Assim como a edição, o roteiro,
                  o figurino, a captação de som e imagens (para esta última
                  contamos também com a ajuda de amigos).
                </p>
                <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  Uma curiosidade sobre nosso figurino de bumbum de formiga, é
                  que ele tem mais de 20 anos! Foi produzido para uma peça
                  escolar no final dos anos 1990 e continua sendo formiga até
                  hoje. Nossa forma de produção procura sempre reutilizar
                  materiais disponíveis, reduzindo ao máximo a geração de lixo
                  como impulso criativo para ressignificar matérias. Assim
                  também procuramos trabalhar com os cenários disponíveis em
                  nosso quintal.
                </p>
              </div>

              <div className="pt-3 border-t border-[#3A1D40]/20 space-y-2">
                <p className="text-xs sm:text-sm font-bold text-[#3A1D40]">
                  No link, pode-se assistir à transmissão realizada no XIV
                  Ciência em Cena - encontro nacional de teatro científico:
                </p>
                <a
                  href="https://www.youtube.com/watch?v=FkMBMPGgpHw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-[#FDF6E4] text-xs py-2.5 px-5"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Assistir no XIV Ciência em Cena (YouTube)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produções Adicionais Cadastradas pelo CMS */}
      {extraWorks.map((work) => (
        <section
          key={work.id}
          id={work.id}
          className="scroll-mt-36 canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
        >
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-3">
              <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
                Produção Audiovisual
              </span>
              <div>
                <BrushBanner color="yellow" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                    {work.title}
                  </h2>
                </BrushBanner>
              </div>
            </div>

            {work.youtubeId && (
              <div className="bg-[#FDF6E4] p-2 sm:p-3 rounded-xl border border-[#3A1D40]/25 shadow-xl">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#241128]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${work.youtubeId}`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}

            <div className="space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              {work.content && work.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={work.content}
                  theme="orange"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <>
                  <p>{work.synopsis}</p>
                  {work.context && <p>{work.context}</p>}
                </>
              )}

              {work.videoUrl && (
                <div className="pt-3">
                  <a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#E91C47] text-[#FDF6E4] text-xs py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Assistir Vídeo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {work.photos.length > 0 && (
              <PhotoMosaic photos={work.photos} variant="grid" />
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
