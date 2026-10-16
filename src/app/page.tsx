import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Home,
  BookOpen,
  Theater,
  Hammer,
  Video,
  Feather,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      {/* =========================================================================
          FAIXA 1: HERO / APRESENTAÇÃO INSTITUCIONAL (Sem foto, texto em destaque)
          Fundo Bege Natural Claro (#faf7f0)
         ========================================================================= */}
      <section className="w-full bg-[#faf7f0] text-[#22211e] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-[#c85028] relative overflow-hidden">
        {/* Detalhes lúdicos de aquarela / textura */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#e5a823]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#c85028]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Logo Oficial em Destaque */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-white shadow-xl border-4 border-[#e5a823] hover:rotate-2 transition-transform duration-300">
              <Image
                src="/logo-passarinha.jpg"
                alt="Logotipo Coletivo Interdisciplinar Passarinha"
                width={176}
                height={176}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <h1 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight text-[#22211e] uppercase">
              Coletivo Interdisciplinar Passarinha
            </h1>
            <p className="mt-2 text-base sm:text-xl font-bold text-[#c85028] tracking-widest uppercase">
              Arte • Educação • Ambiental
            </p>
          </div>

          {/* Texto Manifesto com Tipografia Agradável */}
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-sm border border-[#e2d8c3] text-left sm:text-center space-y-4">
            <p className="text-base sm:text-lg text-[#22211e]/90 leading-relaxed">
              Desde 2014, o <strong>Coletivo Passarinha</strong> promove ações que transbordam as
              fronteiras das disciplinas. Teatro, música, design, reutilização de materiais, contação
              de histórias, ações formativas, brinquedos, artesanato, além de festivais e mostras culturais
              fazem parte do repertório do coletivo.
            </p>
            <p className="text-base sm:text-lg text-[#22211e]/90 leading-relaxed">
              Com sede no <strong>Ponto de Cultura Quintal Garatuja</strong>, na cidade de Campinas/SP, a
              Passarinha também bate suas asas em outros estados brasileiros, como o Paraná e o Ceará.
            </p>
            <p className="text-base sm:text-lg text-[#22211e]/90 leading-relaxed font-medium text-[#2e6f40]">
              Plataforma de criações e circulação de arte, que de propósito se mistura com as urgências
              socioambientais do nosso tempo, as proposições abarcam todas as faixas etárias, com gosto
              pelo encontro com a educação em suas múltiplas possibilidades.
            </p>
          </div>

          {/* Botão de Ação */}
          <div className="pt-2">
            <Link
              href="/quem-somos"
              className="btn-foca bg-[#c85028] hover:bg-[#a63f1d] text-white text-base sm:text-lg px-8 py-3.5 inline-flex items-center gap-2 group"
            >
              <span>Saiba mais sobre o Coletivo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 2: PONTO DE CULTURA QUINTAL GARATUJA
          Fundo Verde Natureza (#2e6f40)
         ========================================================================= */}
      <section className="w-full bg-[#2e6f40] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#e5a823]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Card Ilustrado / Visual */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20 text-center space-y-4 shadow-xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#e5a823] text-[#22211e] flex items-center justify-center shadow-lg">
                <Home className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                Quintal Garatuja
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#e5a823] font-bold">
                Ponto de Cultura em Campinas / SP
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs">
                <span className="bg-white/20 px-3 py-1 rounded-full">Gestão desde 2016</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Cultura Viva</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Criação & Território</span>
              </div>
            </div>
          </div>

          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#e5a823]">
              <Sparkles className="w-3.5 h-3.5" /> Sede e Espaço Cultural
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ponto de Cultura Quintal Garatuja
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Desde 2016, a Passarinha faz a gestão do Ponto de Cultura Quintal Garatuja, em
              Campinas/SP, um espaço de criação artística, formação e convivência. Em diálogo com a
              comunidade e o território, desenvolve cursos, oficinas, apresentações e projetos que
              aproximam teatro, música, cultura popular e educação ambiental, fortalecendo os encontros
              entre artistas, público e histórias locais.
            </p>
            <div className="pt-2">
              <Link
                href="/quintal-garatuja"
                className="btn-foca bg-[#e5a823] hover:bg-[#b88313] text-[#22211e] text-base px-7 py-3"
              >
                Conheça o Quintal Garatuja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 3: A HISTÓRIA DE ARU
          Fundo Terracota Vibrante (#c85028)
         ========================================================================= */}
      <section className="w-full bg-[#c85028] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#2e6f40]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#faf7f0]">
              <BookOpen className="w-3.5 h-3.5" /> Projeto Especial & E-book Gratuito
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              A História de Aru
            </h2>
            <p className="text-lg text-white/95 leading-relaxed">
              Os 12 princípios da Permacultura contados por Aru! Uma história em cordel que ganha vida por
              meio de ilustrações criadas artesanalmente com materiais naturais e objetos descartados,
              explorando cores, texturas e formas para construir personagens e cenários. Um projeto
              artístico que entrelaça literatura, música e arte-educação ambiental, convidando a imaginar
              outras formas de se relacionar com o mundo.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/aru"
                className="btn-foca bg-[#faf7f0] hover:bg-white text-[#c85028] text-base px-7 py-3"
              >
                Conheça a História de Aru
              </Link>
              <Link
                href="/aru#materiais"
                className="btn-foca bg-black/25 hover:bg-black/35 text-white text-base px-6 py-3 border border-white/30"
              >
                Baixar E-book (PDF)
              </Link>
            </div>
          </div>

          {/* Card Ilustrado / Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#faf7f0] text-[#22211e] p-8 rounded-3xl border-4 border-[#e5a823] shadow-2xl space-y-5 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#c85028] text-white flex items-center justify-center shadow-lg">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black uppercase text-[#c85028]">
                12 Princípios da Permacultura
              </h3>
              <p className="text-xs text-[#22211e]/80 leading-relaxed">
                História em cordel por Paulo Roberto Amaral Lencioni, adaptada por Mari Rebelo e Sarah Gregorio.
              </p>
              <div className="border-t border-[#e2d8c3] pt-4 space-y-2 text-xs text-left font-semibold text-[#2e6f40]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c85028]" /> E-book ilustrado completo
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c85028]" /> Trilha sonora & Cordel musicado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c85028]" /> Materiais didáticos para educadores
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 4: ESPETÁCULOS
          Fundo Amarelo Ocre / Mostarda (#e5a823) com texto escuro
         ========================================================================= */}
      <section className="w-full bg-[#e5a823] text-[#22211e] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#1b7a82]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Card Visual */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#22211e]/15 shadow-xl space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#c85028] text-white flex items-center justify-center shadow-md">
                <Theater className="w-8 h-8" />
              </div>
              <h3 className="text-center text-xl font-black uppercase text-[#22211e]">
                Repertório Cênico
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-[#22211e]/90 divide-y divide-[#22211e]/10">
                <li className="pt-2 flex justify-between">
                  <span>• Histórias da Passarinha</span>
                  <span className="text-[#c85028]">Contação</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>• Plástico</span>
                  <span className="text-[#2e6f40]">Teatro & Descarte</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>• Fora de onde?</span>
                  <span className="text-[#1b7a82]">Ecológico</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>• Show Nascente</span>
                  <span className="text-[#e5a823]">Música Popular</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>• Histórias do Bosque</span>
                  <span className="text-[#583259]">Memória Local</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider text-[#22211e]">
              <Theater className="w-3.5 h-3.5 text-[#c85028]" /> Criação Cênico-Musical
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#22211e] leading-tight">
              Espetáculos
            </h2>
            <p className="text-lg text-[#22211e]/90 leading-relaxed font-medium">
              Teatro, música, histórias e experimentações artísticas que ganham vida em diferentes
              formatos e linguagens. A Passarinha cria e apresenta espetáculos para públicos diversos,
              de crianças a adultos, convidando cada pessoa a vivenciar o encontro com a arte, a
              imaginação e as questões do nosso tempo.
            </p>
            <div className="pt-2">
              <Link
                href="/espetaculos"
                className="btn-foca bg-[#22211e] hover:bg-[#363430] text-white text-base px-7 py-3"
              >
                Conheça nossos espetáculos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 5: OFICINAS & ECOBRINQUEDOTECA
          Fundo Azul Petróleo (#1b7a82)
         ========================================================================= */}
      <section className="w-full bg-[#1b7a82] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#583259]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#e5a823]">
              <Hammer className="w-3.5 h-3.5" /> Arte-Educação & Práticas Formativas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Oficinas & Vivências
            </h2>
            <p className="text-lg text-white/95 leading-relaxed">
              A Passarinha desenvolve oficinas que aproximam arte, educação e meio ambiente, criando
              experiências de experimentação, criação coletiva e aprendizagem. Temos propostas já
              estruturadas, como o <strong>Ateliê Jogar Dentro</strong>, a{" "}
              <strong>Ecobrinquedoteca Jogar Dentro</strong> e a{" "}
              <strong>Orquestra de Pandeiros</strong>, e também criamos e adaptamos oficinas de acordo
              com as demandas, os públicos e os contextos de cada espaço.
            </p>
            <div className="pt-2">
              <Link
                href="/oficinas"
                className="btn-foca bg-[#e5a823] hover:bg-[#b88313] text-[#22211e] text-base px-7 py-3"
              >
                Conheça nossas oficinas
              </Link>
            </div>
          </div>

          {/* Card Ilustrado */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#faf7f0] text-[#1b7a82] flex items-center justify-center shadow-md">
                <Hammer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase text-white tracking-wide">
                Propostas Formativas
              </h3>
              <div className="space-y-3 text-left text-xs text-white/90">
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="font-bold text-[#e5a823]">Ateliê Jogar Dentro</p>
                  <p className="text-[11px] text-white/80">Reaproveitamento, fantasias e brinquedos</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="font-bold text-[#e5a823]">Ecobrinquedoteca Jogar Dentro</p>
                  <p className="text-[11px] text-white/80">Cultura do brincar e descarte consciente</p>
                </div>
                <div className="p-3 bg-white/10 rounded-xl">
                  <p className="font-bold text-[#e5a823]">Orquestra de Pandeiros</p>
                  <p className="text-[11px] text-white/80">Música coletiva intergeracional (pesquisa Unicamp)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 6: AUDIOVISUAL
          Fundo Roxo Artístico (#583259)
         ========================================================================= */}
      <section className="w-full bg-[#583259] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#22211e]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Card Visual */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#e5a823] text-[#22211e] flex items-center justify-center shadow-md">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase text-white">
                Obras Audiovisuais
              </h3>
              <div className="space-y-2 text-xs text-left">
                <p className="p-2.5 rounded-lg bg-white/10 font-medium">
                  🎬 <strong>A Caixa Mágica</strong> (Curta-metragem premiado)
                </p>
                <p className="p-2.5 rounded-lg bg-white/10 font-medium">
                  🌿 <strong>Fora de onde?</strong> (Vídeo-arte socioambiental)
                </p>
                <p className="p-2.5 rounded-lg bg-white/10 font-medium">
                  🐜 <strong>O que se passa no formigueiro?</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Texto e Botão */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#e5a823]">
              <Video className="w-3.5 h-3.5" /> Cinema & Poéticas Visuais
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Audiovisual
            </h2>
            <p className="text-lg text-white/95 leading-relaxed">
              A Passarinha também já experimentou o audiovisual como linguagem de criação artística.
              Entre essas experiências estão <strong>Caixa Mágica</strong>, <strong>Fora de onde?</strong>{" "}
              e <strong>O que se passa no formigueiro?</strong>, trabalhos que integram a trajetória
              do coletivo e convidam à reflexão lúdica sobre o tempo, as telas e a natureza.
            </p>
            <div className="pt-2">
              <Link
                href="/audiovisual"
                className="btn-foca bg-[#faf7f0] hover:bg-white text-[#583259] text-base px-7 py-3"
              >
                Conheça nossas produções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAIXA 7: CTA FINAL / CONTATO RÁPIDO
          Fundo Bege Aconchegante (#faf7f0)
         ========================================================================= */}
      <section className="w-full bg-[#faf7f0] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#c85028] text-white flex items-center justify-center shadow-lg">
            <Feather className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#22211e]">
            Quer levar a Passarinha para o seu espaço?
          </h2>
          <p className="text-base sm:text-lg text-[#22211e]/80">
            Realizamos oficinas, espetáculos teatrais, contação de histórias e vivências
            ecológicas para festivais, escolas, SESCs e eventos culturais em todo o Brasil.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="btn-foca bg-[#c85028] hover:bg-[#a63f1d] text-white text-base px-8 py-3.5"
            >
              Falar com o Coletivo
            </Link>
            <a
              href="mailto:coletivopassarinha@gmail.com"
              className="btn-foca bg-white hover:bg-neutral-100 text-[#22211e] border-2 border-[#e2d8c3] text-base px-8 py-3.5"
            >
              coletivopassarinha@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
