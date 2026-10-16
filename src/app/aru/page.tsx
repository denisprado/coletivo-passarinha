import React from "react";
import Link from "next/link";
import AudioPlayer from "@/components/AudioPlayer";
import {
  BookOpen,
  Download,
  Music,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Video,
  Feather,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

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
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#c85028] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#e5a823]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#faf7f0]">
            <BookOpen className="w-4 h-4" /> Arte-Educação Ambiental & Cordel
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            A História de Aru
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Os 12 princípios da Permacultura contados em versos de cordel, ilustrados
            artesanalmente com materiais naturais e objetos descartados.
          </p>
        </div>
      </section>

      {/* Áudio Player em Destaque */}
      <section className="bg-[#faf7f0] py-8 px-4 sm:px-6 lg:px-8 border-b border-[#e2d8c3]">
        <div className="max-w-4xl mx-auto">
          <AudioPlayer />
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="bg-[#faf7f0] py-14 px-4 sm:px-6 lg:px-8 border-b border-[#e2d8c3]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#e2d8c3] space-y-6 text-base sm:text-lg text-[#22211e]/90 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-[#c85028] uppercase">
              A Jornada de Aru e a Sabedoria da Terra
            </h2>
            <p>
              <strong>A História de Aru</strong> é um projeto de arte-educação ambiental que
              apresenta os 12 princípios da Permacultura por meio de uma história em cordel, escrita
              originalmente por <strong>Paulo Roberto Amaral Lencioni</strong> e adaptada para cordel
              por <strong>Mari Rebelo</strong> e <strong>Sarah Gregorio</strong>.
            </p>
            <p>
              O projeto nasceu da vontade de experimentar possibilidades de criação artística com
              materiais naturais e objetos que seriam descartados. A partir desses materiais, foram
              criados personagens, cenários e elementos que dão forma visual à história de Aru,
              explorando texturas, cores, volumes e outras possibilidades estéticas.
            </p>
            <p>
              Aru é uma jovem que aprende observando o mundo ao seu redor. Ao longo de sua jornada,
              encontra diferentes povoados, conhece outros modos de viver e descobre formas de lidar
              com questões como o uso da água, a produção de alimentos, o aproveitamento dos recursos,
              a diversidade e a vida em comunidade. Cada experiência apresenta um dos 12 princípios da
              Permacultura, sistematizados pelo ecologista David Holmgren.
            </p>
            <p>
              A história é o ponto de partida para a criação de diferentes materiais que ajudam a
              explorar esses conhecimentos. O projeto reúne e-book ilustrado, cordel musicado, materiais
              didáticos, propostas de atividades e jogos, imagens e animações, organizados para apoiar
              experiências de arte-educação ambiental.
            </p>
            <p className="font-semibold text-[#2e6f40]">
              Os materiais foram pensados especialmente para educadores, famílias e pessoas interessadas
              em desenvolver atividades que aproximem arte, educação e meio ambiente. Toda a proposta é
              disponibilizada gratuitamente na internet!
            </p>
          </div>
        </div>
      </section>

      {/* Os 12 Princípios em Grid */}
      <section className="bg-[#2e6f40] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#e5a823]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black uppercase">
              Os 12 Princípios da Permacultura
            </h2>
            <p className="text-white/80 text-sm">
              Sistematizados por David Holmgren e traduzidos para a narrativa viva de Aru
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {permaculturePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-sm font-semibold flex items-center gap-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#e5a823] text-[#22211e] flex items-center justify-center font-black text-xs shrink-0">
                  {idx + 1}
                </div>
                <span>{principle.replace(/^\d+\.\s*/, "")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Downloads e Materiais (com âncora #materiais) */}
      <section id="materiais" className="bg-[#faf7f0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c85028]/15 text-[#c85028] text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" /> Acesso Gratuito
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#22211e] uppercase">
              Baixe os Materiais do Projeto
            </h2>
            <p className="text-[#22211e]/75 max-w-2xl mx-auto text-sm sm:text-base">
              Recursos abertos para educadores, escolas e famílias levarem a Permacultura e a arte para a sala de aula ou comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: E-book */}
            <div className="bg-white p-6 rounded-3xl border border-[#e2d8c3] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#c85028] text-white flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#22211e]">
                  E-book Ilustrado
                </h3>
                <p className="text-xs text-[#22211e]/80 leading-relaxed">
                  História completa em cordel com fotografias dos personagens e cenários artesanais.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#c85028] hover:bg-[#a63f1d] text-white text-xs w-full py-2.5"
              >
                <Download className="w-4 h-4" /> Baixar E-book (PDF)
              </a>
            </div>

            {/* Card 2: Cordel Musicado */}
            <div className="bg-white p-6 rounded-3xl border border-[#e2d8c3] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#e5a823] text-[#22211e] flex items-center justify-center shadow-md">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#22211e]">
                  Cordel Musicado
                </h3>
                <p className="text-xs text-[#22211e]/80 leading-relaxed">
                  Faixas de áudio com as declamações, ritmos e canções que acompanham a história.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#e5a823] hover:bg-[#b88313] text-[#22211e] text-xs w-full py-2.5"
              >
                <Download className="w-4 h-4" /> Baixar Áudios (MP3)
              </a>
            </div>

            {/* Card 3: Materiais Pedagógicos */}
            <div className="bg-white p-6 rounded-3xl border border-[#e2d8c3] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#2e6f40] text-white flex items-center justify-center shadow-md">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#22211e]">
                  Guias Didáticos
                </h3>
                <p className="text-xs text-[#22211e]/80 leading-relaxed">
                  Propostas práticas de atividades, rodas de conversa e jogos socioambientais.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#2e6f40] hover:bg-[#235431] text-white text-xs w-full py-2.5"
              >
                <Download className="w-4 h-4" /> Baixar Guias Didáticos
              </a>
            </div>

            {/* Card 4: Animações & Instagram */}
            <div className="bg-white p-6 rounded-3xl border border-[#e2d8c3] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1b7a82] text-white flex items-center justify-center shadow-md">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#22211e]">
                  @aru.permacultura
                </h3>
                <p className="text-xs text-[#22211e]/80 leading-relaxed">
                  Acompanhe bastidores, ilustrações, pequenos vídeos e postagens do universo de Aru.
                </p>
              </div>
              <a
                href="https://www.instagram.com/aru.permacultura"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#1b7a82] hover:bg-[#145e64] text-white text-xs w-full py-2.5"
              >
                <InstagramIcon className="w-4 h-4" /> Acessar Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
