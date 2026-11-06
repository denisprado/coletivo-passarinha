import React from "react";
import Link from "next/link";
import AudioPlayer from "@/components/AudioPlayer";
import { BookOpen, Download, Music, FileCheck } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "A História de Aru | Permacultura em Cordel & E-book Gratuito",
  description:
    "Os 12 princípios da Permacultura contados por Aru em cordel ilustrado com materiais reaproveitados. Baixe o e-book gratuito e ouça a trilha sonora.",
};

export default function AruPage() {
  const permaculturePrinciples = [
    "1. Observe e Interaja",
    "2. Capte e Armazene Energia",
    "3. Obtenha Rendimento",
    "4. Pratique a Auto-regulação e Aceite Feedback",
    "5. Use e Valorize os Serviços e Recursos Renováveis",
    "6. Não Produza Lixo (Descarte Zero)",
    "7. Projete dos Padrões aos Detalhes",
    "8. Integre ao Invés de Segregar",
    "9. Use Soluções Pequenas e Lentas",
    "10. Use e Valorize a Diversidade",
    "11. Use as Bordas e Valorize os Elementos Marginais",
    "12. Use Criativamente e Responda às Mudanças",
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Amarela Ipê Acrílica */}
      <section className="canvas-amarelo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#532E5A]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#532E5A]/10 text-xs font-black uppercase tracking-wider text-[#532E5A]">
            <BookOpen className="w-4 h-4 text-[#E91C47]" /> Arte-Educação Ambiental & Cordel
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FDBC2E]">
                A História de Aru
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#532E5A] max-w-3xl mx-auto leading-relaxed font-bold">
            Os 12 princípios da Permacultura contados em versos de cordel,
            ilustrados artesanalmente com materiais naturais e objetos
            descartados.
          </p>
        </div>
      </section>

      {/* Áudio Player em Destaque */}
      <section id="top" className="bg-[#FDF6E4] pt-12 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AudioPlayer />
        </div>
      </section>

      {/* Sobre o Projeto + Moldura de Fotos */}
      <section className="bg-[#FDF6E4] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 bg-white p-8 sm:p-11 rounded-[36px] shadow-md border-2 border-[#FDBC2E]/50 space-y-5 text-base sm:text-lg text-[#532E5A] leading-relaxed font-medium">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E91C47] uppercase">
              A Jornada de Aru e a Sabedoria da Terra
            </h2>
            <p>
              <strong className="font-black">A História de Aru</strong> é um
              projeto de arte-educação ambiental que apresenta os 12 princípios
              da Permacultura por meio de uma história em cordel, escrita
              originalmente por{" "}
              <strong className="font-bold">Paulo Roberto Amaral Lencioni</strong>{" "}
              e adaptada para cordel por{" "}
              <strong className="font-bold">Mari Rebelo</strong> e{" "}
              <strong className="font-bold">Sarah Gregorio</strong>.
            </p>
            <p>
              O projeto nasceu da vontade de experimentar possibilidades de
              criação artística com materiais naturais e objetos que seriam
              descartados. A partir desses materiais, foram criados personagens,
              cenários e elementos que dão forma visual à história de Aru,
              explorando texturas, cores, volumes e outras possibilidades
              estéticas.
            </p>
            <p>
              Aru é uma jovem que aprende observando o mundo ao seu redor. Ao
              longo de sua jornada, encontra diferentes povoados, conhece outros
              modos de viver e descobre formas de lidar com questões como o uso
              da água, a produção de alimentos, o aproveitamento dos recursos, a
              diversidade e a vida em comunidade. Cada experiência apresenta um
              dos 12 princípios da Permacultura, sistematizados pelo ecologista
              David Holmgren.
            </p>
            <p className="font-bold text-[#E91C47] bg-[#FDF6E4] p-5 rounded-2xl border-l-4 border-[#FDBC2E]">
              Os materiais foram pensados especialmente para educadores,
              famílias e pessoas interessadas em desenvolver atividades que
              aproximem arte, educação e meio ambiente. Toda a proposta é
              disponibilizada gratuitamente na internet!
            </p>
          </div>

          <div className="lg:col-span-5">
            <PhotoCarouselFrame
              aspectClass="aspect-[4/4]"
              photos={[
                {
                  src: "/images/image9.jpg",
                  alt: "Esteira circular com sementes naturais e objetos reaproveitados",
                  caption: "Texturas naturais, sementes e objetos ressignificados",
                },
                {
                  src: "/images/image7.jpg",
                  alt: "Criação tridimensional com papelão e materiais reutilizados",
                  caption: "Experimentação estética a partir do descarte zero",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Os 12 Princípios em Grid (Textura Roxa Acrílica) */}
      <section className="canvas-roxo text-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <BrushBanner color="crimson" shape="wave">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                Os 12 Princípios da Permacultura
              </h2>
            </BrushBanner>
            <p className="text-[#FDBC2E]/90 text-sm sm:text-base font-semibold block">
              Sistematizados por David Holmgren e traduzidos para a narrativa
              viva de Aru
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {permaculturePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-[#FDBC2E]/30 text-sm font-bold flex items-center gap-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <span className="text-[#FDF6E4]">
                  {principle.replace(/^\d+\.\s*/, "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Downloads e Materiais (com âncora #materiais) */}
      <section id="materiais" className="bg-[#FDF6E4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E91C47]/10 text-[#E91C47] text-xs font-black uppercase tracking-wider">
              <Download className="w-4 h-4" /> Acesso Gratuito
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
              Acesse os Materiais do Projeto
            </h2>
            <p className="text-[#532E5A]/80 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
              Recursos abertos para educadores, escolas e famílias levarem a
              Permacultura e a arte para a sala de aula ou comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: E-book */}
            <div className="bg-white p-6 rounded-[30px] border-2 border-[#FDBC2E]/40 shadow-md flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E91C47] text-[#FDF6E4] flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg text-[#532E5A]">
                  E-book Ilustrado
                </h3>
                <p className="text-xs sm:text-sm text-[#532E5A]/80 leading-relaxed font-medium">
                  História completa em cordel com fotografias dos personagens e
                  cenários artesanais.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1cosjnmOBDCyzC8yrb3Ei9rGRwXZmrA4p"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-white text-xs w-full py-2.5"
              >
                <Download className="w-4 h-4" /> Baixar E-book (PDF)
              </a>
            </div>

            {/* Card 2: Cordel Musicado */}
            <div className="bg-white p-6 rounded-[30px] border-2 border-[#FDBC2E]/40 shadow-md flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center shadow-md">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg text-[#532E5A]">
                  Cordel Musicado
                </h3>
                <p className="text-xs sm:text-sm text-[#532E5A]/80 leading-relaxed font-medium">
                  Faixas de áudio com as declamações, ritmos e canções que
                  acompanham a história.
                </p>
              </div>
              <a
                href="#top"
                className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#532E5A] text-xs w-full py-2.5"
              >
                <Music className="w-4 h-4" /> Ouvir no Player Acima
              </a>
            </div>

            {/* Card 3: Materiais Pedagógicos */}
            <div className="bg-white p-6 rounded-[30px] border-2 border-[#FDBC2E]/40 shadow-md flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#532E5A] text-[#FDBC2E] flex items-center justify-center shadow-md">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg text-[#532E5A]">
                  Guias Didáticos
                </h3>
                <p className="text-xs sm:text-sm text-[#532E5A]/80 leading-relaxed font-medium">
                  Propostas práticas de atividades, rodas de conversa e jogos
                  socioambientais.
                </p>
              </div>
              <Link
                href="/contato?interesse=Projeto+Aru"
                className="btn-foca bg-[#532E5A] hover:bg-[#3e2044] text-[#FDBC2E] text-xs w-full py-2.5"
              >
                <Download className="w-4 h-4" /> Solicitar Guias
              </Link>
            </div>

            {/* Card 4: Animações & Instagram */}
            <div className="bg-white p-6 rounded-[30px] border-2 border-[#FDBC2E]/40 shadow-md flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F79335] text-white flex items-center justify-center shadow-md">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg text-[#532E5A]">
                  @aru.permacultura
                </h3>
                <p className="text-xs sm:text-sm text-[#532E5A]/80 leading-relaxed font-medium">
                  Acompanhe bastidores, ilustrações, pequenos vídeos e postagens
                  do universo de Aru.
                </p>
              </div>
              <a
                href="https://www.instagram.com/aru.permacultura"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#F79335] hover:bg-[#e07d1f] text-white text-xs w-full py-2.5"
              >
                <InstagramIcon className="w-4 h-4" /> Acessar Instagram
              </a>
            </div>
          </div>

          {/* Selo PNAB / Política Nacional Aldir Blanc */}
          <div className="bg-white p-6 rounded-[30px] border-2 border-[#FDBC2E] text-center space-y-2 shadow-sm">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#E91C47] block">
              Incentivo Cultural
            </span>
            <p className="text-sm sm:text-base font-black text-[#532E5A]">
              Projeto viabilizado com recursos da Política Nacional Aldir Blanc
              de Fomento à Cultura (PNAB)
            </p>
            <p className="text-xs text-[#532E5A]/75 font-semibold">
              Ministério da Cultura • Governo Federal • Brasil, União e
              Reconstrução
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
