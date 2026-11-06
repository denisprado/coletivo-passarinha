import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  Sparkles,
  Heart,
  Trees,
  Theater,
  Users,
  MessageCircle,
  ExternalLink,
  Mail,
  Music,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: "Ponto de Cultura Quintal Garatuja | Coletivo Passarinha",
  description:
    "Espaço de criação artística, formação, convivência e educação ambiental com gestão do Coletivo Passarinha desde 2016 em Campinas/SP.",
};

export default function QuintalGaratujaPage() {
  return (
    <main className="w-full">
      {/* Header com Fundo Amarelo Sol (Conforme Documento Oficial) */}
      <section className="bg-[#F2BF27] text-[#22211E] py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F28F16]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/10 text-xs font-black uppercase tracking-wider text-[#22211E]">
            <Home className="w-4 h-4 text-[#F21B54]" /> Ponto de Cultura • Campinas / SP
          </div>

          {/* Logotipo Oficial do Quintal Garatuja */}
          <div className="relative w-56 h-36 mx-auto bg-white p-4 rounded-3xl shadow-xl border-4 border-white/80">
            <Image
              src="/images/garatuja/GARATUJA_logo_hor colorido.png"
              alt="Logotipo Oficial Ponto de Cultura Quintal Garatuja"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#22211E]">
            Ponto de Cultura Quintal Garatuja
          </h1>
          <p className="text-base sm:text-xl text-[#22211E]/90 max-w-3xl mx-auto leading-relaxed font-semibold">
            Espaço de criação artística, formação e convivência comunitária gerido pelo Coletivo Passarinha desde 2016.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F2BF27]/30">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Apresentação */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border-2 border-[#F2BF27]/40 space-y-6 text-base sm:text-lg text-[#22211E]/90 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F28F16] uppercase">
              O Quintal como Espaço de Encontro e Criação
            </h2>
            <p>
              Desde 2016, a Passarinha faz a gestão do <strong>Ponto de Cultura Quintal Garatuja</strong>, em Campinas/SP, um espaço de criação artística, formação e convivência. Em diálogo com a comunidade e o território, desenvolve cursos, oficinas, apresentações e projetos que aproximam teatro, música, cultura popular e educação ambiental, fortalecendo os encontros entre artistas, público e histórias locais.
            </p>
            <p>
              Em 2019, o Quintal Garatuja foi contemplado com projeto via <strong>Lei Cultura Viva</strong>, pela Prefeitura Municipal de Campinas. Na ocasião, foram promovidas mais de 30 ações envolvendo teatro e brincadeiras, articulando escolas municipais, artistas parceiros e outros Pontos de Cultura no território vizinho.
            </p>
          </div>

          {/* Projetos de Continuidade */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#F21B54]">
                Ações no Território
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#22211E]">
                Projetos de Continuidade
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projeto 1: Show de Variedades */}
              <div className="bg-white p-7 rounded-3xl shadow-md border-t-8 border-[#F21B54] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F21B54] text-white flex items-center justify-center">
                    <Theater className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#22211E]">
                    Show de Variedades
                  </h3>
                  <p className="text-sm text-[#22211E]/80 leading-relaxed">
                    Cabaré comunitário, mostras abertas e encontros cênicos que reúnem artistas da cena, música, circo e palhaçaria para celebrar a arte com a vizinhança.
                  </p>
                </div>
              </div>

              {/* Projeto 2: Nosso Canto */}
              <div className="bg-white p-7 rounded-3xl shadow-md border-t-8 border-[#02BF9B] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#02BF9B] text-white flex items-center justify-center">
                    <Music className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#22211E]">
                    Nosso Canto
                  </h3>
                  <p className="text-sm text-[#22211E]/80 leading-relaxed">
                    Projeto de canto, memória e afetividade que reúne vozes da comunidade para resgatar cantigas, cirandas e canções populares da cultura brasileira.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-[#02BF9B]">
                    Saiba mais: coletivopassarinha.com/nossocanto
                  </span>
                </div>
              </div>

              {/* Projeto 3: Ações Formativas */}
              <div className="bg-white p-7 rounded-3xl shadow-md border-t-8 border-[#F28F16] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F28F16] text-white flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#22211E]">
                    Ações Formativas
                  </h3>
                  <p className="text-sm text-[#22211E]/80 leading-relaxed">
                    Cursos, oficinas e vivências voltadas para educadoras, artistas e comunidade em geral, abordando arte-educação, reaproveitamento de materiais e rítmica popular.
                  </p>
                </div>
              </div>

              {/* Projeto 4: Núcleo Socioambiental do Nova Europa e Região */}
              <div className="bg-white p-7 rounded-3xl shadow-md border-t-8 border-[#F2BF27] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2BF27] text-[#22211E] flex items-center justify-center">
                    <Trees className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#22211E]">
                    Núcleo Socioambiental do Nova Europa e Região
                  </h3>
                  <p className="text-sm text-[#22211E]/80 leading-relaxed">
                    Articulação comunitária permanente pela preservação das áreas verdes, agroecologia urbana e proteção dos mananciais e do Bosque dos Guarantãs.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <a
                    href="https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs py-2 w-full flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                    Entrar no Grupo de WhatsApp do Núcleo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Endereço e Contatos Oficiais */}
          <div className="bg-[#22211E] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-2xl font-black text-[#F2BF27] uppercase">
              Endereço e Contato do Quintal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#FAF7F0]/90">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F2BF27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-base">Ponto de Cultura Quintal Garatuja</strong>
                    <span>Rua São Miguel Arcanjo, 1520</span>
                    <span className="block text-xs text-[#FAF7F0]/70">Campinas / SP</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#02BF9B] shrink-0" />
                  <a
                    href="mailto:garatuja.decultura@gmail.com"
                    className="hover:text-[#F2BF27] transition-colors"
                  >
                    garatuja.decultura@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/quintalgaratuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#02BF9B] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span>@quintalgaratuja</span>
                </a>

                <a
                  href="https://linktr.ee/quintalgaratuja?utm_source=linktree_profile_share&ltsid=13c4d9bd-4553-4e38-9e9f-b3d0dc1a05d0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-foca bg-[#F2BF27] hover:bg-[#d9a818] text-[#22211E] text-xs py-2 px-4 flex items-center justify-center gap-2"
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
