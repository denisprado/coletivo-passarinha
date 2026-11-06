import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Theater,
  Hammer,
  Video,
  CheckCircle2,
  Play,
  Heart,
  Music,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      {/* =========================================================================
          FAIXA 1: HERO / APRESENTAÇÃO INSTITUCIONAL (Sem foto, texto em destaque)
          Fundo Bege Natural Claro (#FAF7F0)
         ========================================================================= */}
      <section className="w-full bg-[#FAF7F0] text-[#22211E] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#F2BF27]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F22294]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Logo Oficial em Destaque */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-white shadow-xl border-4 border-[#F2BF27] hover:rotate-2 transition-transform duration-300">
              <Image
                src="/logo-passarinha.jpg"
                alt="Logotipo Coletivo Interdisciplinar Passarinha"
                width={176}
                height={176}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <h1 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight text-[#22211E] uppercase">
              Coletivo Interdisciplinar Passarinha
            </h1>
            <p className="mt-2 text-base sm:text-xl font-black text-[#F21B54] tracking-widest uppercase">
              Arte • Educação • Ambiental
            </p>
          </div>

          {/* Texto de Apresentação em Destaque (Fiel ao Documento) */}
          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-sm border-2 border-[#F2BF27]/30 text-left sm:text-center space-y-4">
            <p className="text-base sm:text-lg text-[#22211E]/90 leading-relaxed font-medium">
              Desde 2014, o <strong>Coletivo Passarinha</strong> atua como uma plataforma de criação, articulação e circulação artística, conectando linguagens, saberes, pessoas e territórios.
            </p>
            <p className="text-base sm:text-lg text-[#22211E]/90 leading-relaxed font-medium">
              Teatro, música, design, reutilização de materiais, contação de histórias, ações formativas e ambientais, brinquedos, artesanato, festivais e mostras culturais integram seu repertório plural, que ultrapassa as fronteiras entre as disciplinas e estabelece diálogos com as questões socioambientais contemporâneas.
            </p>
            <p className="text-base sm:text-lg text-[#22211E]/90 leading-relaxed font-medium">
              Com propostas destinadas a diferentes faixas etárias, o coletivo reconhece na educação, em suas múltiplas possibilidades, um campo estratégico para a experimentação, a troca de conhecimentos e a construção de novas formas de interação.
            </p>
            <p className="text-sm sm:text-base text-[#22211E]/80 leading-relaxed">
              De origem itinerante, o Coletivo iniciou sua trajetória quando suas fundadoras partiram do sudeste em direção ao nordeste, viajando de kombi e promovendo intercâmbios culturais. Atualmente, tem sede no <strong>Ponto de Cultura Quintal Garatuja</strong>, em Campinas/SP, preservando sua vocação para a circulação artística e a construção de parcerias em todo o Brasil.
            </p>
          </div>

          {/* Botão de Ação */}
          <div className="pt-2">
            <Link
              href="/quem-somos"
              className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-base sm:text-lg px-8 py-3.5 inline-flex items-center gap-2 group"
            >
              <span>Saiba mais sobre o Coletivo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 2: PONTO DE CULTURA QUINTAL GARATUJA
          Fundo Amarelo Sol (#F2BF27) - Conforme solicitado no documento
         ========================================================================= */}
      <section className="w-full bg-[#F2BF27] text-[#22211E] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F28F16]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Card com Logo Oficial Colorido do Garatuja */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl border-4 border-white/60 text-center space-y-4 shadow-2xl">
              <div className="relative w-48 h-32 mx-auto">
                <Image
                  src="/images/garatuja/GARATUJA_logo_hor colorido.png"
                  alt="Logotipo Oficial Ponto de Cultura Quintal Garatuja"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#F28F16] font-extrabold">
                Campinas / SP • Sede & Ponto de Cultura
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs font-bold text-[#22211E]">
                <span className="bg-[#FAF7F0] px-3 py-1 rounded-full border border-gray-200">Gestão desde 2016</span>
                <span className="bg-[#FAF7F0] px-3 py-1 rounded-full border border-gray-200">Cultura Viva</span>
                <span className="bg-[#FAF7F0] px-3 py-1 rounded-full border border-gray-200">Agroecologia Urbana</span>
              </div>
            </div>
          </div>

          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider text-[#22211E]">
              <Sparkles className="w-3.5 h-3.5 text-[#F21B54]" /> Sede e Ponto de Cultura
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#22211E] leading-tight">
              Ponto de Cultura Quintal Garatuja
            </h2>
            <p className="text-lg text-[#22211E]/95 leading-relaxed font-medium">
              Desde 2016, a Passarinha faz a gestão do Ponto de Cultura Quintal Garatuja, em Campinas/SP, um espaço de criação artística, formação e convivência. Em diálogo com a comunidade e o território, desenvolve cursos, oficinas, apresentações e projetos que aproximam teatro, música, cultura popular e educação ambiental, fortalecendo os encontros entre artistas, público e histórias locais.
            </p>
            <div className="pt-2">
              <Link
                href="/quintal-garatuja"
                className="btn-foca bg-[#22211E] hover:bg-black text-white text-base px-8 py-3.5"
              >
                Conheça o Quintal Garatuja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 3: A HISTÓRIA DE ARU
          Fundo Laranja Vibrante (#F28F16)
         ========================================================================= */}
      <section className="w-full bg-[#F28F16] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#02BF9B]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#FAF7F0]">
              <BookOpen className="w-3.5 h-3.5" /> Literatura, Música & Permacultura
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              A história de Aru
            </h2>
            <p className="text-lg text-white/95 leading-relaxed font-medium">
              Os 12 princípios da Permacultura contados por Aru! Uma história em cordel que ganha vida por meio de ilustrações criadas artesanalmente com materiais naturais e objetos descartados, explorando cores, texturas e formas para construir personagens e cenários. Um projeto artístico que entrelaça literatura, música e arte-educação ambiental, convidando a imaginar outras formas de se relacionar com o mundo.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/aru"
                className="btn-foca bg-[#FAF7F0] hover:bg-white text-[#F28F16] text-base px-8 py-3.5 shadow-lg"
              >
                Conheça a História de Aru
              </Link>
            </div>
          </div>

          {/* Card Ilustrado */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#FAF7F0] text-[#22211E] p-8 rounded-3xl border-4 border-[#F2BF27] shadow-2xl space-y-5 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F28F16] text-white flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase text-[#F28F16]">
                12 Princípios da Permacultura
              </h3>
              <p className="text-xs text-[#22211E]/80 leading-relaxed font-semibold">
                E-book ilustrado, trilha sonora autoral, cordel musicado e materiais pedagógicos abertos.
              </p>
              <div className="border-t border-[#F2BF27]/40 pt-4 space-y-2 text-xs text-left font-bold text-[#22211E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#02BF9B]" /> E-book ilustrado para download
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#02BF9B]" /> Cordel musicado e trilha sonora
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#02BF9B]" /> Acessível para escolas e famílias
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 4: ESPETÁCULOS
          Fundo Verde Mata / Turquesa (#02BF9B)
         ========================================================================= */}
      <section className="w-full bg-[#02BF9B] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F22294]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white">
              <Theater className="w-3.5 h-3.5 text-[#F2BF27]" /> Teatro & Criação Cênica
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Espetáculos
            </h2>
            <p className="text-lg text-white/95 leading-relaxed font-medium">
              Teatro, música, histórias e experimentações artísticas que ganham vida em diferentes formatos e linguagens. A Passarinha cria e apresenta espetáculos para públicos diversos, de crianças a adultos, convidando cada pessoa a vivenciar o encontro com a arte, a imaginação e as questões do nosso tempo.
            </p>
          </div>

          {/* Cards dos 4 Espetáculos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white text-[#22211E] rounded-3xl p-6 shadow-xl border-t-8 border-[#F21B54] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase text-[#F21B54] tracking-wider block">
                  Contação & Brincadeiras
                </span>
                <h3 className="text-xl font-black text-[#22211E]">
                  Histórias que a Passarinha me contou
                </h3>
                <p className="text-xs text-[#22211E]/80 leading-relaxed">
                  Episódio Terra e Episódio Água. Músicas autorais e contação de histórias com classificação livre.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F21B54]">
                <span>50 min</span>
                <span>Livre</span>
              </div>
            </div>

            <div className="bg-white text-[#22211E] rounded-3xl p-6 shadow-xl border-t-8 border-[#02BF9B] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase text-[#02BF9B] tracking-wider block">
                  Teatro-fórum & Descarte
                </span>
                <h3 className="text-xl font-black text-[#22211E]">
                  Plástico, um mito contemporâneo
                </h3>
                <p className="text-xs text-[#22211E]/80 leading-relaxed">
                  Mais de 6 mil espectadores. Reflexão profunda e poética sobre a sociedade de consumo com Libras.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#02BF9B]">
                <span>Desde 2023</span>
                <span>Livre</span>
              </div>
            </div>

            <div className="bg-white text-[#22211E] rounded-3xl p-6 shadow-xl border-t-8 border-[#F2BF27] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase text-[#F2BF27] tracking-wider block">
                  Música Popular
                </span>
                <h3 className="text-xl font-black text-[#22211E]">
                  Show Nascente
                </h3>
                <p className="text-xs text-[#22211E]/80 leading-relaxed">
                  Cirandas, cocos e ritmos brasileiros com percussão e vozes encantadoras para dançar e cantar.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F2BF27]">
                <span>60 min</span>
                <span>Livre</span>
              </div>
            </div>

            <div className="bg-white text-[#22211E] rounded-3xl p-6 shadow-xl border-t-8 border-[#F28F16] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase text-[#F28F16] tracking-wider block">
                  Passeio Ambiental
                </span>
                <h3 className="text-xl font-black text-[#22211E]">
                  Histórias do Bosque dos Guarantãs
                </h3>
                <p className="text-xs text-[#22211E]/80 leading-relaxed">
                  Passeio turístico e cultural valorizando a natureza e a memória afetiva de Campinas.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F28F16]">
                <span>Campinas / SP</span>
                <span>Livre</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/espetaculos"
              className="btn-foca bg-[#FAF7F0] hover:bg-white text-[#02BF9B] text-base px-8 py-3.5 shadow-lg"
            >
              Conheça nossos espetáculos
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 5: PRÁTICAS FORMATIVAS
          Fundo Rosa Hibisco / Magenta (#F22294)
         ========================================================================= */}
      <section className="w-full bg-[#F22294] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F21B54]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white">
              <Hammer className="w-3.5 h-3.5 text-[#F2BF27]" /> Oficinas & Formações
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Práticas Formativas
            </h2>
            <p className="text-lg text-white/95 leading-relaxed font-medium">
              A Passarinha desenvolve oficinas que aproximam arte, educação e meio ambiente, criando experiências de experimentação, criação coletiva e aprendizagem. Temos propostas já estruturadas, como o Ateliê Jogar Dentro, a Ecobrinquedoteca Jogar Dentro e a Orquestra de Pandeiros, e também criamos e adaptamos oficinas de acordo com as demandas, os públicos e os contextos de cada espaço.
            </p>
          </div>

          {/* Cards das 3 Práticas Formativas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ateliê Jogar Dentro */}
            <div className="bg-[#FAF7F0] text-[#22211E] rounded-3xl p-7 shadow-xl border-4 border-white/40 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F21B54] text-white flex items-center justify-center shadow-md">
                  <Hammer className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#F21B54]">
                  Ateliê Jogar Dentro
                </h3>
                <p className="text-xs font-bold text-[#F28F16] uppercase tracking-wider">
                  Arte, Criação & Reaproveitamento
                </p>
                <p className="text-sm text-[#22211E]/85 leading-relaxed">
                  E se aquilo que seria descartado virasse fantasia, adereço ou instrumento? Experimentação lúdica com plásticos e materiais reutilizados.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-200">
                <Link
                  href="/praticas-formativas#atelie-jogar-dentro"
                  className="text-xs font-black text-[#F21B54] hover:underline inline-flex items-center gap-1"
                >
                  Ver detalhes da oficina →
                </Link>
              </div>
            </div>

            {/* Ecobrinquedoteca */}
            <div className="bg-[#FAF7F0] text-[#22211E] rounded-3xl p-7 shadow-xl border-4 border-white/40 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#02BF9B] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#02BF9B]">
                  Ecobrinquedoteca Jogar Dentro
                </h3>
                <p className="text-xs font-bold text-[#F28F16] uppercase tracking-wider">
                  Existe lixo de fato? Fora de onde?
                </p>
                <p className="text-sm text-[#22211E]/85 leading-relaxed">
                  Brinquedos de materiais reaproveitados e elementos naturais. Vivência intergeracional para imaginar outros mundos através do brincar.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-200">
                <Link
                  href="/praticas-formativas#ecobrinquedoteca-jogar-dentro"
                  className="text-xs font-black text-[#02BF9B] hover:underline inline-flex items-center gap-1"
                >
                  Ver acervo e proposta →
                </Link>
              </div>
            </div>

            {/* Orquestra de Pandeiros */}
            <div className="bg-[#FAF7F0] text-[#22211E] rounded-3xl p-7 shadow-xl border-4 border-white/40 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative w-16 h-16 rounded-2xl bg-[#F2BF27] overflow-hidden p-1 shadow-md">
                  <Image
                    src="/images/image12.png"
                    alt="Logo Orquestra de Pandeiros"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-black text-[#F28F16]">
                  Orquestra de Pandeiros
                </h3>
                <p className="text-xs font-bold text-[#F21B54] uppercase tracking-wider">
                  Educação Musical & Intergeracional
                </p>
                <p className="text-sm text-[#22211E]/85 leading-relaxed">
                  O pandeiro de couro como instrumento de encontro, escuta e afeto. Pesquisa UNICAMP (50+) e vivência aberta sem experiência prévia.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-gray-200">
                <Link
                  href="/praticas-formativas#orquestra-de-pandeiros"
                  className="text-xs font-black text-[#F28F16] hover:underline inline-flex items-center gap-1"
                >
                  Conhecer a orquestra →
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/praticas-formativas"
              className="btn-foca bg-[#FAF7F0] hover:bg-white text-[#F22294] text-base px-8 py-3.5 shadow-lg"
            >
              Conheça nossas práticas formativas
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 6: AUDIOVISUAL
          Fundo Carmim / Pitanga (#F21B54)
         ========================================================================= */}
      <section className="w-full bg-[#F21B54] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#22211E]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white">
              <Video className="w-3.5 h-3.5 text-[#F2BF27]" /> Cinema, Vídeo & Acessibilidade
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Audiovisual
            </h2>
            <p className="text-lg text-white/95 leading-relaxed font-medium">
              A Passarinha também já experimentou o audiovisual como linguagem de criação artística. Entre essas experiências estão Caixa Mágica, Fora de onde? e O que se passa no formigueiro?, trabalhos que integram a trajetória do coletivo.
            </p>
          </div>

          {/* Cards das 3 Obras Audiovisuais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/30 space-y-3">
              <span className="text-xs font-bold text-[#F2BF27] uppercase tracking-wider">
                Mostra Cultural Brincando na Rede
              </span>
              <h3 className="text-xl font-black text-white">
                A Caixa Mágica
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Pirulita, Pouca Sombra e Mãozinha brincam com a ressignificação de objetos para descobrir que brincar longe das telas é bom demais! Com Libras.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/30 space-y-3">
              <span className="text-xs font-bold text-[#02BF9B] uppercase tracking-wider">
                Vídeo-arte & Reflexão
              </span>
              <h3 className="text-xl font-black text-white">
                Fora de onde?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Uma narrativa instigante criada com materiais reaproveitados que desconstrói a ideia de que o lixo desaparece no descarte.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/30 space-y-3">
              <span className="text-xs font-bold text-[#F2BF27] uppercase tracking-wider">
                Agroecologia & Ana Primavesi
              </span>
              <h3 className="text-xl font-black text-white">
                O que se passa no formigueiro?
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Inspirado em Ana Primavesi, um olhar poético e acessível em Libras sobre o microcosmo do solo e o equilíbrio da terra.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/audiovisual"
              className="btn-foca bg-[#FAF7F0] hover:bg-white text-[#F21B54] text-base px-8 py-3.5 shadow-lg"
            >
              Conheça nossas produções
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 7: CONTATO & CONTRATAÇÃO
          Fundo Grafite Carvão (#22211E)
         ========================================================================= */}
      <section className="w-full bg-[#22211E] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Quer levar a Passarinha para sua cidade ou evento?
          </h2>
          <p className="text-base sm:text-lg text-[#FAF7F0]/80 max-w-2xl mx-auto leading-relaxed">
            Realizamos espetáculos, oficinas formativas, vivências da Ecobrinquedoteca e apresentações musicais em escolas, SESCs, festivais e praças públicas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20Coletivo%20Passarinha."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-base px-8 py-3.5"
            >
              Falar no WhatsApp: (19) 99251-0921
            </a>
            <Link
              href="/contato"
              className="btn-foca bg-[#F2BF27] hover:bg-[#d9a818] text-[#22211E] text-base px-8 py-3.5"
            >
              Enviar Mensagem pelo Site
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
