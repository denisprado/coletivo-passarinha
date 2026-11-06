import React from "react";
import { BookOpen, Download, FileCheck } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata = {
  title: "A História de Aru | Permacultura em Cordel & E-book Gratuito",
  description:
    "Os 12 princípios da Permacultura contados por Aru em cordel ilustrado com materiais reaproveitados. Baixe o e-book gratuito e a cartilha pedagógica.",
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

  const aruPhotos = [
    {
      src: "/photos/aru/aru-cenario-1.webp",
      alt: "Animal artesanal de A História de Aru",
      caption: "Personagens e animais criados com retalhos, sementes e fibras",
    },
    {
      src: "/photos/aru/aru-cenario-2.webp",
      alt: "Composição visual de A História de Aru",
      caption: "Fotografias originais que ilustram o e-book em cordel",
    },
    {
      src: "/photos/aru/aru-1.webp",
      alt: "Personagem Aru criada com sementes, fibras naturais e tampinhas",
      caption: "Aru — Criação artesanal com elementos naturais e recicláveis",
      fit: "contain" as const,
    },
    {
      src: "/photos/aru/povoado-1.webp",
      alt: "Habitante do Povoado de Aru",
      caption: "Povoado de Aru — Poéticas visuais de baixo impacto",
      fit: "contain" as const,
    },
    {
      src: "/photos/aru/povoado-2.webp",
      alt: "Personagem artesanal com sementes e folhas secas",
      caption: "Diversidade de texturas, sementes e materiais ressignificados",
      fit: "contain" as const,
    },
    {
      src: "/photos/aru/aru-2.webp",
      alt: "Máscara artesanal de Aru com búzio e sementes",
      caption: "Arte, educação e sabedoria da Permacultura",
      fit: "contain" as const,
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* FAIXA 1 — APRESENTAÇÃO & MURAL DE OBRAS DE ARU (Amarelo Ipê Acrílico) */}
      <section
        id="top"
        className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-5 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
              <BookOpen className="w-4 h-4 text-[#FDBC2E]" /> Arte-Educação Ambiental & Cordel
            </div>
            <div>
              <BrushBanner color="crimson" shape="wave">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  A História de Aru
                </h1>
              </BrushBanner>
            </div>
            <p className="text-base sm:text-xl text-[#3A1D40] leading-relaxed font-bold">
              Os 12 princípios da Permacultura contados em versos de cordel,
              ilustrados artesanalmente com materiais naturais e objetos
              descartados.
            </p>
          </div>

          {/* Narrativa sobre o Projeto */}
          <div className="painel-rustico p-7 sm:p-10 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
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
            <p className="font-bold text-[#3A1D40] bg-[#FDBC2E]/35 p-4 rounded-xl border-l-4 border-[#E91C47]">
              Os materiais foram pensados especialmente para educadores,
              famílias e pessoas interessadas em desenvolver atividades que
              aproximem arte, educação e meio ambiente. Toda a proposta é
              disponibilizada gratuitamente na internet!
            </p>
          </div>

          {/* Exposição Fotográfica Aberta dos Personagens e Cenários de Aru */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#3A1D40]/30 pb-2">
              <h3 className="text-lg sm:text-2xl font-black uppercase text-[#3A1D40]">
                Galeria de Personagens, Máscaras e Cenários de Aru
              </h3>
              <span className="text-xs font-extrabold uppercase text-[#E91C47]">
                Clique em qualquer obra para ver em tela cheia
              </span>
            </div>
            <PhotoMosaic photos={aruPhotos} variant="editorial" />
          </div>
        </div>
      </section>

      {/* FAIXA 2 — OS 12 PRINCÍPIOS DA PERMACULTURA (Roxo Acrílico) */}
      <section className="canvas-roxo text-[#FDF6E4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <BrushBanner color="crimson" shape="wave">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                Os 12 Princípios da Permacultura
              </h2>
            </BrushBanner>
            <p className="text-[#FDBC2E] text-sm sm:text-base font-bold block">
              Sistematizados por David Holmgren e traduzidos para a narrativa
              viva de Aru
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {permaculturePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#3A1D40] p-4 rounded-xl border border-[#FDBC2E]/45 shadow-md text-sm font-bold flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center font-black text-sm shrink-0">
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

      {/* FAIXA 3 — MATERIAIS GRATUITOS PARA DOWNLOAD (Laranja Acrílico) */}
      <section id="materiais" className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-wider">
              <Download className="w-4 h-4" /> Acesso Gratuito
            </div>
            <div>
              <BrushBanner color="yellow" shape="wave">
                <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
                  Acesse os Materiais do Projeto
                </h2>
              </BrushBanner>
            </div>
            <p className="text-[#2A1230] max-w-2xl mx-auto text-base sm:text-lg font-bold">
              Recursos abertos para educadores, escolas e famílias levarem a
              Permacultura e a arte para a sala de aula ou comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: E-book */}
            <div className="painel-rustico p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E91C47] text-[#FDF6E4] flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl text-[#3A1D40] uppercase">
                  E-book Ilustrado
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1D40]/90 leading-relaxed font-medium">
                  História completa em cordel com fotografias dos personagens e
                  cenários artesanais criados pelo coletivo.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/14QS_XRK87fBe8qX9wpp363YbcdZMDP3a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-white text-xs w-full py-3"
              >
                <Download className="w-4 h-4" /> Baixar E-book (PDF)
              </a>
            </div>

            {/* Card 2: Cartilha / Guias Pedagógicos */}
            <div className="painel-rustico p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#532E5A] text-[#FDBC2E] flex items-center justify-center shadow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl text-[#3A1D40] uppercase">
                  Cartilha Pedagógica
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1D40]/90 leading-relaxed font-medium">
                  Cartilha de Permacultura com propostas práticas de atividades,
                  rodas de conversa e jogos socioambientais.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1kt5IQ-E2RgbhHzXjRn6F2XbMCVzaXDfL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#532E5A] hover:bg-[#3e2044] text-[#FDBC2E] text-xs w-full py-3"
              >
                <Download className="w-4 h-4" /> Abrir Cartilha (PDF)
              </a>
            </div>

            {/* Card 3: Animações & Instagram */}
            <div className="painel-rustico p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F79335] text-white flex items-center justify-center shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl text-[#3A1D40]">
                  @aru.permacultura
                </h3>
                <p className="text-xs sm:text-sm text-[#3A1D40]/90 leading-relaxed font-medium">
                  Acompanhe bastidores, ilustrações, pequenos vídeos e postagens
                  do universo de Aru.
                </p>
              </div>
              <a
                href="https://www.instagram.com/aru.permacultura"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#F79335] hover:bg-[#e07d1f] text-white text-xs w-full py-3"
              >
                <InstagramIcon className="w-4 h-4" /> Acessar Instagram
              </a>
            </div>
          </div>

          {/* Selo PNAB / Política Nacional Aldir Blanc */}
          <div className="painel-rustico-roxo p-6 text-center space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FDBC2E] block">
              Incentivo Cultural
            </span>
            <p className="text-sm sm:text-base font-black text-[#FDF6E4]">
              Projeto viabilizado com recursos da Política Nacional Aldir Blanc
              de Fomento à Cultura (PNAB)
            </p>
            <p className="text-xs text-[#FDBC2E]/85 font-semibold">
              Ministério da Cultura • Governo Federal • Brasil, União e
              Reconstrução
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
