import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Home,
  MapPin,
  Sparkles,
  Trees,
  Theater,
  MessageCircle,
  ExternalLink,
  Mail,
  Music,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";
import { getGaratujaContent, getGaratujaProjects } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Ponto de Cultura Quintal Garatuja | Coletivo Passarinha",
  description:
    "Sede do Coletivo Passarinha, o Garatuja é um espaço de criação, convivência, pesquisa e formação localizado no Jardim Nova Europa, em Campinas (SP).",
  openGraph: {
    title: "Ponto de Cultura Quintal Garatuja | Campinas/SP",
    description:
      "Espaço cultural comunitário, agroecológico e de convivência no Jardim Nova Europa, Campinas/SP.",
    images: [{ url: "/photos/garatuja/principal-quintal.webp" }],
  },
};

export default async function QuintalGaratujaPage() {
  const garatujaSite = await getGaratujaContent();
  const projects = await getGaratujaProjects();

  const variedadesProject = projects.find((p) => p.id === "show-de-variedades");
  const nossoCantoProject = projects.find((p) => p.id === "nosso-canto");
  const formativasProject = projects.find((p) => p.id === "acoes-formativas");
  const nucleoProject = projects.find((p) => p.id === "nucleo-socioambiental");
  const extraProjects = projects.filter(
    (p) =>
      !["show-de-variedades", "nosso-canto", "acoes-formativas", "nucleo-socioambiental"].includes(
        p.id,
      ),
  );

  const garatujaMainPhotos = [
    {
      src: "/photos/garatuja/principal-tc-silva.webp",
      alt: "TC Silva em apresentação no Quintal Garatuja",
      caption: "TC Silva no Quintal Garatuja",
    },
    {
      src: "/photos/garatuja/principal-ultimo-tipo.webp",
      alt: "Grupo Último Tipo no Quintal Garatuja",
      caption: "Grupo Último Tipo — Teatro e cultura popular",
    },
    {
      src: "/photos/garatuja/principal-aya.webp",
      alt: "Apresentação AYA no Quintal Garatuja",
      caption: "AYA — Música e ancestralidade no Quintal",
    },
    {
      src: "/photos/garatuja/principal-aquarela.webp",
      alt: "Vivência artística Aquarela no Quintal Garatuja",
      caption: "Encontros poéticos e formação artística",
    },
    {
      src: "/photos/garatuja/principal-coro-cenico.webp",
      alt: "Coro Cênico no Quintal Garatuja",
      caption: "Coro Cênico — Vozes e presença coletiva",
    },
    {
      src: "/photos/garatuja/principal-primeiro-evento.webp",
      alt: "Primeiro evento do Quintal Garatuja (Foto: Gabriela Zanardi)",
      caption: "Primeiro Evento Garatuja — Foto: Gabriela Zanardi",
    },
    {
      src: "/photos/garatuja/principal-grupo-grito.webp",
      alt: "Grupo Grito no Quintal Garatuja",
      caption: "Grupo Grito — Rede de artistas e Pontos de Cultura",
    },
    {
      src: "/photos/garatuja/principal-quintal.webp",
      alt: "Convivência no espaço do Quintal Garatuja",
      caption: "Espaço vivo de criação e comunidade no Nova Europa",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* FAIXA 1 — TEXTO INTEGRAL (8 PARÁGRAFOS DO DOC) INTERCALADO COM FOTOS (Amarelo Ipê Acrílico conforme indicado "(fundo amarelo)" no Doc) */}
      <section id="sobre" className="scroll-mt-24 canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Topo: Logo + Título */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
                <Home className="w-4 h-4 text-[#FDBC2E]" /> {garatujaSite.tag}
              </div>

              <div className="relative w-64 h-40 bg-[#FDF6E4] p-4 rounded-2xl border border-[#3A1D40]/25 shadow-xl">
                <Image
                  src="/images/garatuja/GARATUJA_logo_hor colorido.png"
                  alt="Logotipo Oficial Ponto de Cultura Quintal Garatuja"
                  fill
                  sizes="256px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <BrushBanner color="crimson" shape="wave" className="-ml-2">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                    {garatujaSite.title}
                  </h1>
                </BrushBanner>
              </div>
              <p className="text-base sm:text-xl text-[#3A1D40] font-bold leading-relaxed">
                {garatujaSite.leadText}
              </p>
            </div>
          </div>

          {/* Bloco 1 de Texto Integral + Fotos Intercaladas à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                Mais do que um espaço físico, o Quintal Garatuja é um
                laboratório permanente de experimentação artística e cidadã.
                Aqui, artistas, pesquisadoras, educadoras, moradoras, crianças,
                jovens e pessoas adultas compartilham processos criativos,
                investigações e experiências que aproximam arte e vida
                cotidiana.
              </p>
              <p>
                Nossa atuação parte do território. Desenvolvemos projetos que
                dialogam com a memória, a paisagem, os saberes populares e as
                histórias da comunidade, compreendendo o bairro como um espaço
                de aprendizagem, criação e pertencimento. Caminhadas, pesquisas
                de campo, cartografias afetivas, rodas de conversa e ações
                comunitárias fazem parte da metodologia que construímos ao longo
                dos anos, fortalecendo vínculos entre cultura, natureza e
                participação social.
              </p>
              <p>
                A pesquisa é um dos pilares do Quintal Garatuja. Investigamos as
                relações entre arte, ecologia, território e sociedade,
                desenvolvendo processos que resultam em espetáculos,
                performances, intervenções urbanas, publicações, exposições e
                ações educativas. Temas como a crise ambiental, os resíduos, a
                biodiversidade, a memória dos lugares e as formas de convivência
                aparecem como questões centrais de nossas criações, entendendo a
                arte como estratégia de sensibilização, reflexão e
                transformação.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/garatuja/principal-quintal.webp"
                  alt="Convivência no espaço do Quintal Garatuja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/garatuja/principal-primeiro-evento.webp"
                  alt="Primeiro evento do Quintal Garatuja (Foto: Gabriela Zanardi)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: Fotos Intercaladas à Esquerda + Parágrafos 5 a 8 à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/garatuja/principal-tc-silva.webp"
                  alt="TC Silva no Quintal Garatuja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/garatuja/principal-ultimo-tipo.webp"
                  alt="Grupo Último Tipo no Quintal Garatuja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 painel-rustico p-7 sm:p-9 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                O espaço também abriga uma programação contínua de formação.
                Oferecemos oficinas, cursos, laboratórios, residências
                artísticas, vivências, encontros e intercâmbios que estimulam
                práticas colaborativas e o desenvolvimento de artistas,
                educadoras, pesquisadoras e agentes culturais. Valorizamos
                metodologias participativas, o aprendizado coletivo e a troca de
                conhecimentos entre diferentes gerações e áreas do saber.
              </p>
              <p>
                Ao longo de sua trajetória, o Quintal Garatuja consolidou uma
                ampla rede de parcerias com coletivos, universidades, escolas,
                movimentos sociais, instituições culturais e organizações
                comunitárias, promovendo ações que fortalecem a cultura como
                direito, a educação como prática emancipadora e o cuidado com o
                meio ambiente como compromisso cotidiano.
              </p>
              <p>
                Cultivamos um espaço onde as perguntas são tão importantes
                quanto as respostas, onde a criação nasce do encontro e onde
                cada projeto contribui para imaginar formas mais sensíveis,
                sustentáveis e solidárias de habitar o mundo.
              </p>
              <p>
                O Garatuja promove pesquisas em continuidade, acerca da mediação
                cultural, da acessibilidade cultural, das urgências
                socioambientais do nosso tempo, de práticas artísticas que unem
                teatro e música, e na construção constante de conexões entre
                artistas e públicos. Neste lugar em que estamos, procuramos
                estabelecer vínculos com o território, cultivando a sensação de
                pertencimento ao bairro, à cidade, ao nosso contexto
                latinoamericano, e ao mundo.
              </p>
            </div>
          </div>

          {/* Galeria Completa da Pasta GARATUJA */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b-2 border-[#3A1D40]/30 pb-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#3A1D40]">
                Galeria do Quintal Garatuja (Clique nas fotos para ampliar)
              </span>
            </div>
            <PhotoMosaic photos={garatujaMainPhotos} variant="grid" />
          </div>
        </div>
      </section>

      {/* FAIXA 2 — PROJETO DE CONTINUIDADE 1: SHOW DE VARIEDADES (Roxo Acrílico - Texto Integral do Doc) */}
      <section id="show-de-variedades" className="scroll-mt-24 canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E91C47] text-[#FDBC2E] text-xs font-black uppercase tracking-widest border border-[#FDBC2E]/40">
              <Theater className="w-4 h-4" /> {variedadesProject?.tag || "Saiba mais sobre alguns projetos de continuidade"}
            </span>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                  {variedadesProject?.title || "Show de Variedades"}
                </h2>
              </BrushBanner>
            </div>
            <p className="text-base sm:text-xl text-[#FDBC2E] font-medium leading-relaxed">
              {variedadesProject?.shortDescription ||
                "Nossa curadoria cuidadosa transforma o palco em um panorama cultural da cidade. Com mais de 10 edições, desde 2019, já recebemos mais de 40 artistas de todas as partes do município, de outros estados e também de outros países."}
            </p>
          </div>

          <PhotoMosaic
            variant="editorial"
            photos={[
              {
                src: "/photos/garatuja/variedades-familia-burg.webp",
                alt: "Família Burg no Show de Variedades do Quintal Garatuja",
                caption: "Família Burg — Show de Variedades",
              },
              {
                src: "/photos/garatuja/variedades-grupo-ja.webp",
                alt: "Grupo Já no Show de Variedades",
                caption: "Grupo Já — Cabaré e encontro cênico comunitário",
              },
              {
                src: "/photos/garatuja/variedades-mestre-marquinhos.webp",
                alt: "Mestre Marquinhos no Show de Variedades",
                caption: "Mestre Marquinhos — Cultura popular no Quintal",
              },
              {
                src: "/photos/garatuja/variedades-criso-dudu.webp",
                alt: "Criso e Dudu no Show de Variedades (Foto: Zé Netto)",
                caption: "Criso e Dudu — Foto: Zé Netto",
              },
              {
                src: "/photos/garatuja/variedades-gabi-brasa.webp",
                alt: "Gabi e Brasa no Show de Variedades",
                caption: "Gabi e Brasa — Música e cena aberta",
              },
            ]}
          />
        </div>
      </section>

      {/* FAIXA 3 — PROJETO DE CONTINUIDADE 2: NOSSO CANTO (Laranja Acrílico - Texto Integral do Doc) */}
      <section id="nosso-canto" className="scroll-mt-24 canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#532E5A] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
                <Music className="w-4 h-4" /> {nossoCantoProject?.tag || "Projeto de Continuidade"}
              </span>
              <div>
                <BrushBanner color="yellow" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#532E5A]">
                    {nossoCantoProject?.title || "Nosso Canto"}
                  </h2>
                </BrushBanner>
              </div>
              <p className="text-base sm:text-xl text-[#2A1230] font-semibold leading-relaxed">
                {nossoCantoProject?.shortDescription ||
                  "Encontro de artistas da composição musical, com mais de 10 anos de história, Nosso Canto apresenta compositoras e compositores ao público, mas também favorece novas conexões. Além das apresentações ao vivo de canções, o coletivo promoveu a gravação do primeiro álbum Nosso Canto Volume 1, além de entrevistas em podcast, disponibilização de vídeos de canções autorais e difusão das composições da cidade através de playlist."}
              </p>
            </div>
            <div className="painel-rustico px-5 py-3 text-xs sm:text-sm font-black text-[#532E5A] shrink-0">
              Para saber mais: www.coletivopassarinha.com/nossocanto
            </div>
          </div>

          <PhotoMosaic
            variant="editorial"
            photos={[
              {
                src: "/photos/garatuja/nossocanto-ori-okan.webp",
                alt: "Ori Okan no projeto Nosso Canto",
                caption: "Ori Okan — Projeto Nosso Canto",
              },
              {
                src: "/photos/passarinhas/dudu-ferraz.webp",
                alt: "Dudu Ferraz no Nosso Canto (Foto: @felandrade09)",
                caption: "Dudu Ferraz — Foto: @felandrade09",
              },
              {
                src: "/photos/garatuja/nossocanto-ferdi.webp",
                alt: "Ferdi no projeto Nosso Canto",
                caption: "Ferdi — Vozes e canções no Quintal Garatuja",
              },
              {
                src: "/photos/garatuja/nossocanto-renan.webp",
                alt: "Renan no Nosso Canto (Foto: Zé Neto)",
                caption: "Renan — Foto: Zé Neto",
              },
              {
                src: "/photos/garatuja/nossocanto-12.webp",
                alt: "Encontro musical do projeto Nosso Canto",
                caption: "Canto, memória e afetividade comunitária",
              },
            ]}
          />
        </div>
      </section>

      {/* FAIXA 4 — PROJETO DE CONTINUIDADE 3: AÇÕES FORMATIVAS (Vermelho Acrílico - Texto Integral do Doc) */}
      <section id="acoes-formativas" className="scroll-mt-24 canvas-vermelho py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> {formativasProject?.tag || "Projeto de Continuidade"}
              </span>
              <div>
                <BrushBanner color="yellow" shape="tilted" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#532E5A]">
                    {formativasProject?.title || "Ações formativas"}
                  </h2>
                </BrushBanner>
              </div>
              <div className="space-y-3 text-base sm:text-xl text-[#FDF6E4] font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(45,18,50,0.3)]">
                {formativasProject?.paragraphs?.length ? (
                  formativasProject.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)
                ) : (
                  <>
                    <p>
                      Entre os cursos oferecidos pelo Garatuja, destacam-se as
                      oficinas de teatro: cursos livres de longa duração, que conta
                      com equipe experiente e sensível, com uma abordagem que foca
                      em inclusão e pertencimento.
                    </p>
                    <p>
                      Também promovemos oficinas de curta duração, oferecendo
                      práticas de dança, música, formação de professoras,
                      acessibilidade cultural e primeiros socorros voltados a
                      eventos culturais.
                    </p>
                  </>
                )}
              </div>
            </div>

            <a
              href={formativasProject?.externalLink || garatujaSite.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-xs sm:text-sm shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              {formativasProject?.externalLinkLabel || "Inscreva-se nos Cursos Formativos"}
            </a>
          </div>

          <PhotoMosaic
            variant="grid"
            photos={[
              {
                src: "/photos/garatuja/formativas-1.webp",
                alt: "Ações Formativas no Ponto de Cultura Quintal Garatuja",
                caption: "Cursos, oficinas e vivências cênicas no Quintal Garatuja",
              },
              {
                src: "/photos/garatuja/formativas-2.webp",
                alt: "Vivências de teatro e infância no Quintal Garatuja",
                caption: "Formação artística para infâncias e juventudes",
              },
              {
                src: "/photos/garatuja/formativas-8.webp",
                alt: "Encontros formativos intergeracionais no Feverestival",
                caption: "Rodas formativas e trocas de saberes no território",
              },
              {
                src: "/photos/garatuja/formativas-5.webp",
                alt: "Cartaz Oficina Orquestra de Pandeiros no Quintal Garatuja",
                caption: "Oficina Orquestra de Pandeiros gratuita no Quintal",
                fit: "contain",
              },
            ]}
          />
        </div>
      </section>

      {/* FAIXA 5 — NÚCLEO SOCIOAMBIENTAL + ENDEREÇO DO QUINTAL (Amarelo & Roxo Acrílicos - Texto Integral do Doc) */}
      <section id="nucleo-socioambiental" className="scroll-mt-24 canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-4 max-w-4xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
                  <Trees className="w-4 h-4" /> {nucleoProject?.tag || "Projeto de Continuidade"}
                </span>
                <div>
                  <BrushBanner color="crimson" shape="wave" className="-ml-2">
                    <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                      {nucleoProject?.title || "Núcleo Socioambiental do Nova Europa e Região"}
                    </h2>
                  </BrushBanner>
                </div>
                <div className="space-y-3 text-base sm:text-xl text-[#3A1D40] font-semibold leading-relaxed">
                  {nucleoProject?.paragraphs?.length ? (
                    nucleoProject.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)
                  ) : (
                    <>
                      <p>
                        As urgências socioambientais atravessam todas as práticas do
                        Coletivo Passarinha. No território do Garatuja, a vizinhança
                        vem se organizando a fim de mapear e atuar na região sul da
                        cidade de Campinas. Assim, em 2025, nasce o Núcleo
                        Socioambiental do Nova Europa e Região.
                      </p>
                      <p>
                        Trata-se de um coletivo formado por vizinhas e vizinhos da
                        região do Jardim Nova Europa/Campinas, a fim de proteger as
                        áreas verdes e cursos de água da região. Vinculado ao Fórum
                        Socioambiental de Campinas, o grupo realiza ações de
                        preservação e cultura. O Garatuja é co-fundador do núcleo.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <a
                href={nucleoProject?.externalLink || garatujaSite.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                {nucleoProject?.externalLinkLabel || "Linha de Transmissão no WhatsApp"}
              </a>
            </div>

            <PhotoMosaic
              variant="triptych"
              photos={[
                {
                  src: "/photos/garatuja/nucleo-1.webp",
                  alt: "Mobilização do Núcleo Socioambiental do Nova Europa e Região",
                  caption: "Articulação pelo Bosque dos Guarantãs e áreas verdes",
                },
                {
                  src: "/photos/garatuja/nucleo-2.webp",
                  alt: "Ação comunitária do Núcleo Socioambiental",
                  caption: "Cuidado coletivo, plantio e educação ambiental",
                },
                {
                  src: "/photos/garatuja/nucleo-reportagem.webp",
                  alt: "Reportagem sobre a atuação do Núcleo Socioambiental",
                  caption: "Reportagens sobre a atuação do Núcleo Socioambiental",
                  fit: "contain",
                },
              ]}
            />
          </div>

          {/* Projetos Adicionais Cadastrados pelo CMS */}
          {extraProjects.map((extra) => (
            <div
              key={extra.id}
              id={extra.id}
              className="scroll-mt-24 painel-rustico p-8 sm:p-12 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md">
                    {extra.tag}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-[#532E5A] uppercase">
                    {extra.title}
                  </h3>
                </div>
                {extra.externalLink && (
                  <a
                    href={extra.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#FDBC2E] text-[#3A1D40] text-xs shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {extra.externalLinkLabel || "Acessar Projeto"}
                  </a>
                )}
              </div>
              <div className="space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed">
                {extra.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {extra.photos.length > 0 && (
                <div className="pt-4">
                  <PhotoMosaic photos={extra.photos} variant="grid" />
                </div>
              )}
            </div>
          ))}

          {/* Bloco de Endereço e Contato do Quintal */}
          <div id="contato" className="scroll-mt-24 canvas-roxo text-[#FDBC2E] p-8 sm:p-11 rounded-2xl border border-[#3A1D40]/30 shadow-xl space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#FDBC2E] uppercase">
              Ponto de Cultura Quintal Garatuja
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-[#FDF6E4]">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FDBC2E] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#FDBC2E] text-lg">
                      {garatujaSite.street}
                    </strong>
                    <span className="block text-sm text-[#FDF6E4]/90 font-semibold">
                      {garatujaSite.neighborhood}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FDBC2E] shrink-0" />
                  <a
                    href={`mailto:${garatujaSite.email}`}
                    className="font-bold hover:text-[#FDBC2E] transition-colors underline underline-offset-4"
                  >
                    {garatujaSite.email}
                  </a>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <a
                  href={garatujaSite.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FDF6E4] hover:text-[#FDBC2E] font-bold transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center shadow-sm">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span>Acompanhe as últimas postagens em @quintalgaratuja</span>
                </a>

                <a
                  href={garatujaSite.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#532E5A] text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Inscrições e Formulários (Linktree)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
