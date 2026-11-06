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
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "Ponto de Cultura Quintal Garatuja | Coletivo Passarinha",
  description:
    "Espaço de criação artística, formação, convivência e educação ambiental com gestão do Coletivo Passarinha desde 2016 em Campinas/SP.",
};

export default function QuintalGaratujaPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header com Textura Laranja Acrílica (Fiel à Faixa do Quintal no Layout da Designer) */}
      <section className="canvas-laranja py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#532E5A]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 text-xs font-black uppercase tracking-wider text-[#532E5A] shadow-xs">
            <Home className="w-4 h-4 text-[#E91C47]" /> Ponto de Cultura • Campinas / SP
          </div>

          {/* Logotipo Oficial do Quintal Garatuja */}
          <div className="relative w-60 h-36 mx-auto bg-white p-4 rounded-[32px] shadow-xl border-4 border-white">
            <Image
              src="/images/garatuja/GARATUJA_logo_hor colorido.png"
              alt="Logotipo Oficial Ponto de Cultura Quintal Garatuja"
              fill
              sizes="240px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <BrushBanner color="yellow" shape="wave">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                Ponto de Cultura Quintal Garatuja
              </h1>
            </BrushBanner>
          </div>

          <p className="text-base sm:text-xl text-[#3A1D40] max-w-3xl mx-auto leading-relaxed font-bold">
            Espaço de criação artística, formação e convivência comunitária
            gerido pelo Coletivo Passarinha desde 2016.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal + Moldura de Fotos */}
      <section className="bg-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Apresentação em 2 colunas com Carrossel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <PhotoCarouselFrame
                photos={[
                  {
                    src: "/images/image8.jpg",
                    alt: "Criança tocando estrutura sonora de panelas reaproveitadas no Quintal Garatuja",
                    caption: "Experimentação sonora e infâncias no Quintal Garatuja",
                  },
                  {
                    src: "/images/image5.jpg",
                    alt: "Apresentação cênica no Quintal Garatuja",
                    caption: "Teatro, cultura popular e encontros abertos à comunidade",
                  },
                  {
                    src: "/images/image1.jpg",
                    alt: "Vivência artística comunitária no tapete de retalhos",
                    caption: "Mais de 30 ações articuladas via Lei Cultura Viva",
                  },
                ]}
              />
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-11 rounded-[36px] shadow-md border-2 border-[#FDBC2E]/50 space-y-5 text-base sm:text-lg text-[#532E5A] leading-relaxed font-medium">
              <h2 className="text-2xl sm:text-3xl font-black text-[#E91C47] uppercase">
                O Quintal como Espaço de Encontro e Criação
              </h2>
              <p>
                Desde 2016, a Passarinha faz a gestão do{" "}
                <strong className="font-black">
                  Ponto de Cultura Quintal Garatuja
                </strong>
                , em Campinas/SP, um espaço de criação artística, formação e
                convivência. Em diálogo com a comunidade e o território,
                desenvolve cursos, oficinas, apresentações e projetos que
                aproximam teatro, música, cultura popular e educação ambiental,
                fortalecendo os encontros entre artistas, público e histórias
                locais.
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

          {/* Projetos de Continuidade */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                Ações Permanentes no Território
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
                Projetos de Continuidade
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projeto 1: Show de Variedades */}
              <div className="bg-white p-7 rounded-[32px] shadow-md border-t-8 border-[#E91C47] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E91C47] text-[#FDF6E4] flex items-center justify-center shadow-sm">
                    <Theater className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#532E5A]">
                    Show de Variedades
                  </h3>
                  <p className="text-sm sm:text-base text-[#532E5A]/85 leading-relaxed font-medium">
                    Cabaré comunitário, mostras abertas e encontros cênicos que
                    reúnem artistas da cena, música, circo e palhaçaria para
                    celebrar a arte com a vizinhança.
                  </p>
                </div>
              </div>

              {/* Projeto 2: Nosso Canto */}
              <div className="bg-white p-7 rounded-[32px] shadow-md border-t-8 border-[#532E5A] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#532E5A] text-[#FDBC2E] flex items-center justify-center shadow-sm">
                    <Music className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#532E5A]">
                    Nosso Canto
                  </h3>
                  <p className="text-sm sm:text-base text-[#532E5A]/85 leading-relaxed font-medium">
                    Projeto de canto, memória e afetividade que reúne vozes da
                    comunidade para resgatar cantigas, cirandas e canções
                    populares da cultura brasileira.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#532E5A]/10">
                  <span className="text-xs font-black text-[#E91C47]">
                    Saiba mais: coletivopassarinha.com/nossocanto
                  </span>
                </div>
              </div>

              {/* Projeto 3: Ações Formativas */}
              <div className="bg-white p-7 rounded-[32px] shadow-md border-t-8 border-[#F79335] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F79335] text-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#532E5A]">
                    Ações Formativas
                  </h3>
                  <p className="text-sm sm:text-base text-[#532E5A]/85 leading-relaxed font-medium">
                    Cursos, oficinas e vivências voltadas para educadoras,
                    artistas e comunidade em geral, abordando arte-educação,
                    reaproveitamento de materiais e rítmica popular.
                  </p>
                </div>
              </div>

              {/* Projeto 4: Núcleo Socioambiental do Nova Europa e Região */}
              <div className="bg-white p-7 rounded-[32px] shadow-md border-t-8 border-[#FDBC2E] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center shadow-sm">
                    <Trees className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#532E5A]">
                    Núcleo Socioambiental do Nova Europa e Região
                  </h3>
                  <p className="text-sm sm:text-base text-[#532E5A]/85 leading-relaxed font-medium">
                    Articulação comunitária permanente pela preservação das
                    áreas verdes, agroecologia urbana e proteção dos mananciais
                    e do Bosque dos Guarantãs.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#532E5A]/10">
                  <a
                    href="https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs py-2.5 w-full flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                    Entrar no Grupo de WhatsApp do Núcleo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Endereço e Contatos Oficiais em Textura Roxa */}
          <div className="canvas-roxo text-[#FDBC2E] p-8 sm:p-11 rounded-[36px] shadow-xl space-y-6">
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
                    <span className="font-semibold">Rua São Miguel Arcanjo, 1520</span>
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
                  <div className="w-9 h-9 rounded-full bg-[#FDBC2E]/20 flex items-center justify-center text-[#FDBC2E]">
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
