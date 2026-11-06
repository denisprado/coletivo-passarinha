import React from "react";
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

export const metadata = {
  title: "Ponto de Cultura Quintal Garatuja | Coletivo Passarinha",
  description:
    "Espaço de criação artística, formação, convivência e educação ambiental com gestão do Coletivo Passarinha desde 2016 em Campinas/SP.",
};

export default function QuintalGaratujaPage() {
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
      {/* FAIXA 1 — APRESENTAÇÃO & ACERVO GERAL DO QUINTAL (Laranja Acrílico) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xs bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E] border border-[#FDBC2E]/40">
                <Home className="w-4 h-4 text-[#FDBC2E]" /> Ponto de Cultura • Campinas / SP
              </div>

              {/* Logotipo Oficial do Quintal Garatuja com Moldura Rústica */}
              <div className="relative w-64 h-40 bg-[#FDF6E4] p-4 rounded-sm border-2 border-[#3A1D40] shadow-[8px_8px_0px_rgba(45,18,50,0.45)]">
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

            <div className="lg:col-span-8 space-y-5">
              <div>
                <BrushBanner color="yellow" shape="wave" className="-ml-2">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                    Ponto de Cultura Quintal Garatuja
                  </h1>
                </BrushBanner>
              </div>

              <div className="space-y-4 text-base sm:text-xl text-[#2A1230] font-semibold leading-relaxed">
                <p>
                  Desde 2016, a Passarinha faz a gestão do{" "}
                  <strong className="font-black">
                    Ponto de Cultura Quintal Garatuja
                  </strong>
                  , em Campinas/SP, um espaço de criação artística, formação e
                  convivência. Em diálogo com a comunidade e o território,
                  desenvolve cursos, oficinas, apresentações e projetos que
                  aproximam teatro, música, cultura popular e educação
                  ambiental, fortalecendo os encontros entre artistas, público e
                  histórias locais.
                </p>
                <p>
                  Em 2019, o Quintal Garatuja foi contemplado com projeto via{" "}
                  <strong className="font-black">Lei Cultura Viva</strong>, pela
                  Prefeitura Municipal de Campinas. Na ocasião, foram promovidas
                  mais de 30 ações envolvendo teatro e brincadeiras, articulando
                  escolas municipais, artistas parceiros e outros Pontos de
                  Cultura no território vizinho.
                </p>
              </div>
            </div>
          </div>

          {/* Mosaico Aberto com todas as 8 fotos principais do Quintal Garatuja */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-b-2 border-[#3A1D40]/30 pb-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#3A1D40]">
                Encontros, Espetáculos e Vivências no Quintal (Clique para ampliar)
              </span>
            </div>
            <PhotoMosaic photos={garatujaMainPhotos} variant="editorial" />
          </div>
        </div>
      </section>

      {/* FAIXA 2 — PROJETO DE CONTINUIDADE 1: SHOW DE VARIEDADES (Roxo Acrílico) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#E91C47] text-[#FDBC2E] text-xs font-black uppercase tracking-widest border border-[#FDBC2E]/40">
                <Theater className="w-4 h-4" /> Projeto de Continuidade 01
              </span>
              <div>
                <BrushBanner color="crimson" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                    Show de Variedades
                  </h2>
                </BrushBanner>
              </div>
              <p className="text-base sm:text-xl text-[#FDBC2E] font-medium leading-relaxed">
                Cabaré comunitário, mostras abertas e encontros cênicos que
                reúnem artistas da cena, música, circo e palhaçaria para
                celebrar a arte com a vizinhança no Quintal Garatuja.
              </p>
            </div>
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

      {/* FAIXA 3 — PROJETO DE CONTINUIDADE 2: NOSSO CANTO (Amarelo Ipê Acrílico) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#532E5A] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
                <Music className="w-4 h-4" /> Projeto de Continuidade 02
              </span>
              <div>
                <BrushBanner color="crimson" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                    Nosso Canto
                  </h2>
                </BrushBanner>
              </div>
              <p className="text-base sm:text-xl text-[#532E5A] font-semibold leading-relaxed">
                Projeto de canto, memória e afetividade que reúne vozes da
                comunidade e artistas convidados para celebrar canções autorais,
                cirandas e a música popular brasileira.
              </p>
            </div>
            <div className="painel-rustico px-4 py-2.5 text-xs sm:text-sm font-black text-[#532E5A]">
              Mais informações: coletivopassarinha.com/nossocanto
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

      {/* FAIXA 4 — PROJETO DE CONTINUIDADE 3: AÇÕES FORMATIVAS (Vermelho Acrílico) */}
      <section className="canvas-vermelho py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Projeto de Continuidade 03
            </span>
            <div>
              <BrushBanner color="yellow" shape="tilted" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#532E5A]">
                  Ações Formativas no Quintal
                </h2>
              </BrushBanner>
            </div>
            <p className="text-base sm:text-xl text-[#FDF6E4] font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(45,18,50,0.3)]">
              Cursos, oficinas e vivências voltadas para educadoras, artistas,
              crianças e comunidade em geral, abordando teatro, música,
              reaproveitamento de materiais e rítmica popular.
            </p>
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

      {/* FAIXA 5 — NÚCLEO SOCIOAMBIENTAL + ENDEREÇO DO QUINTAL (Laranja & Roxo Acrílicos) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest">
                  <Trees className="w-4 h-4" /> Projeto de Continuidade 04
                </span>
                <div>
                  <BrushBanner color="yellow" shape="wave" className="-ml-2">
                    <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#532E5A]">
                      Núcleo Socioambiental do Nova Europa e Região
                    </h2>
                  </BrushBanner>
                </div>
                <p className="text-base sm:text-xl text-[#2A1230] font-semibold leading-relaxed">
                  Articulação comunitária permanente pela preservação das áreas
                  verdes, agroecologia urbana e proteção dos mananciais e do
                  Bosque dos Guarantãs.
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                Participar do Grupo no WhatsApp
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
                  caption: "Defesa socioambiental e mobilização comunitária",
                  fit: "contain",
                },
              ]}
            />
          </div>

          {/* Bloco Rústico de Endereço e Contato do Quintal */}
          <div className="canvas-roxo text-[#FDBC2E] p-8 sm:p-11 rounded-sm border-2 border-[#3A1D40] shadow-[8px_8px_0px_rgba(45,18,50,0.5)] space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#FDBC2E] uppercase">
              Endereço e Contato do Quintal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-[#FDF6E4]">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FDBC2E] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#FDBC2E] text-lg">
                      Ponto de Cultura Quintal Garatuja
                    </strong>
                    <span className="font-semibold">
                      Rua São Miguel Arcanjo, 1520
                    </span>
                    <span className="block text-xs text-[#FDF6E4]/80 font-medium">
                      Parque Nova Europa • Campinas / SP
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FDBC2E] shrink-0" />
                  <a
                    href="mailto:garatuja.decultura@gmail.com"
                    className="font-bold hover:text-[#FDBC2E] transition-colors underline underline-offset-4"
                  >
                    garatuja.decultura@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <a
                  href="https://www.instagram.com/quintalgaratuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FDF6E4] hover:text-[#FDBC2E] font-bold transition-colors"
                >
                  <div className="w-9 h-9 rounded-xs bg-[#FDBC2E] text-[#3A1D40] border border-[#3A1D40] flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span>@quintalgaratuja</span>
                </a>

                <a
                  href="https://linktr.ee/quintalgaratuja?utm_source=linktree_profile_share&ltsid=13c4d9bd-4553-4e38-9e9f-b3d0dc1a05d0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#532E5A] text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Acessar Linktree do Garatuja
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
