import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrushBanner from "@/components/BrushBanner";
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* FAIXA 1 — COLETIVO INTERDISCIPLINAR PASSARINHA (Roxo Acrílico) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col items-start">
            <BrushBanner color="crimson" shape="wave" className="-ml-2 sm:-ml-4">
              <div className="space-y-0.5">
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-[#FDBC2E] leading-[1.05]">
                  Coletivo Interdisciplinar Passarinha
                </h1>
                <p className="text-base sm:text-xl font-bold lowercase tracking-wide text-[#FDF6E4]">
                  arte educação ambiental
                </p>
              </div>
            </BrushBanner>
          </div>

          <div className="space-y-5 text-base sm:text-xl text-[#FDBC2E] font-medium leading-relaxed max-w-4xl">
            <p>
              Somos o{" "}
              <strong className="font-extrabold">
                Coletivo Interdisciplinar Passarinha
              </strong>
              , artistas da cena, música, design e permacultura. Há anos,
              realizamos ações de arte educação ambiental em projetos
              itinerantes e também conservando relações com territórios.
            </p>
            <p>
              Promovemos práticas artísticas e discutimos urgências
              socioambientais relacionadas a essa sociedade do consumo e do
              descarte — que nos mobiliza a criar outras poéticas e modos de
              estar no mundo.
            </p>
            <p>
              Atuamos como uma plataforma de criação, articulação e circulação
              artística, conectando linguagens, saberes, pessoas e territórios.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/quem-somos"
              className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>

      {/* FAIXA 2 — PONTO DE CULTURA QUINTAL GARATUJA (Laranja Acrílico) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos da Pasta: Ponto de Cultura Quintal Garatuja/GARATUJA */}
          <div className="lg:col-span-5">
            <PhotoCarouselFrame
              badgeLogoSrc="/images/garatuja/GARATUJA_logo_hor colorido.png"
              badgeLogoAlt="Logo Ponto de Cultura Quintal Garatuja"
              photos={[
                {
                  src: "/photos/garatuja/principal-tc-silva.webp",
                  alt: "TC Silva no Ponto de Cultura Quintal Garatuja",
                  caption: "TC Silva — Encontros culturais no Quintal Garatuja",
                },
                {
                  src: "/photos/garatuja/principal-ultimo-tipo.webp",
                  alt: "Grupo Último Tipo no Quintal Garatuja",
                  caption: "Teatro popular e convivência comunitária em Campinas/SP",
                },
                {
                  src: "/photos/garatuja/principal-coro-cenico.webp",
                  alt: "Coro Cênico no Quintal Garatuja",
                  caption: "Coro Cênico — Criação coletiva e vozes no território",
                },
                {
                  src: "/photos/garatuja/principal-aya.webp",
                  alt: "Apresentação AYA no Quintal Garatuja",
                  caption: "Música, ancestralidade e cultura viva desde 2016",
                },
                {
                  src: "/photos/garatuja/principal-primeiro-evento.webp",
                  alt: "Primeiro evento do Quintal Garatuja (Foto: Gabriela Zanardi)",
                  caption: "Artistas e comunidade — Foto: Gabriela Zanardi",
                },
                {
                  src: "/photos/garatuja/principal-grupo-grito.webp",
                  alt: "Grupo Grito no Quintal Garatuja",
                  caption: "Intercâmbio entre grupos e Pontos de Cultura",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Amarela à Direita */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
                  Ponto de Cultura Quintal Garatuja
                </h2>
              </BrushBanner>
            </div>

            <p className="text-base sm:text-xl text-[#3A1D40] font-semibold leading-relaxed">
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

            <div className="flex justify-end pt-2">
              <Link
                href="/quintal-garatuja"
                className="cta-editorial text-[#3A1D40] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                Conheça o Quintal Garatuja →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 3 — A HISTÓRIA DE ARU (Amarelo Ipê Acrílico) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texto + Pincelada Carmim à Esquerda */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  A História de Aru
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#532E5A] font-semibold leading-relaxed">
              <p>
                <strong className="font-black">A História de Aru</strong> é um
                projeto de arte-educação ambiental que apresenta os 12
                princípios da Permacultura por meio de uma história em cordel,
                ilustrada com personagens e cenários criados a partir de
                materiais naturais e objetos descartados.
              </p>
              <p>
                O projeto reúne e-book ilustrado, cordel musicado, materiais
                pedagógicos e recursos criativos disponibilizados gratuitamente
                para educadores, escolas, famílias e projetos educativos.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/aru"
                className="cta-editorial text-[#532E5A] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                Acesse os materiais →
              </Link>
            </div>
          </div>

          {/* Fotos Reais dos Personagens e Elementos de Aru */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/photos/aru/aru-cenario-1.webp",
                  alt: "Animal artesanal de A História de Aru criado com tecidos, sementes e fibras naturais",
                  caption: "Personagens criados com fibras naturais e materiais reaproveitados",
                },
                {
                  src: "/photos/aru/povoado-1.webp",
                  alt: "Personagem do Povoado de Aru feito com folhas, sementes e tampinhas",
                  caption: "Povoado de Aru — Sementes, folhas secas e tampinhas ressignificadas",
                  fit: "contain",
                },
                {
                  src: "/photos/aru/aru-cenario-2.webp",
                  alt: "Ilustração tridimensional de A História de Aru",
                  caption: "Os 12 princípios da Permacultura contados em cordel ilustrado",
                },
                {
                  src: "/photos/aru/povoado-2.webp",
                  alt: "Rosto artesanal de personagem de A História de Aru",
                  caption: "Arte-educação ambiental gratuita para escolas e famílias",
                  fit: "contain",
                },
                {
                  src: "/photos/aru/aru-1.webp",
                  alt: "Aru — personagem central criada com elementos da natureza e recicláveis",
                  caption: "Aru — Poética visual da terra e do reaproveitamento",
                  fit: "contain",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 4 — ESPETÁCULOS (Roxo Acrílico + Pasta PÁGINA INICIAL/FAIXA ESPETÁCULOS) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos exatas da subpasta: PÁGINA INICIAL / FAIXA ESPETÁCULOS */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/photos/home/espetaculos-6.webp",
                  alt: "Histórias que a Passarinha me contou — Episódio Terra (Foto: Mauro Machado)",
                  caption: "Histórias que a Passarinha me contou — Foto: Mauro Machado",
                },
                {
                  src: "/photos/home/espetaculos-1.webp",
                  alt: "Cena de Plástico, um mito contemporâneo",
                  caption: "Plástico, um mito contemporâneo — Teatro-fórum socioambiental",
                },
                {
                  src: "/photos/home/espetaculos-3.webp",
                  alt: "Histórias do Bosque dos Guarantãs (Foto: Dalton Yatabe)",
                  caption: "Histórias do Bosque dos Guarantãs — Foto: Dalton Yatabe",
                },
                {
                  src: "/photos/home/espetaculos-7.webp",
                  alt: "Episódio Terra (Foto: Nina Pires)",
                  caption: "Contação de histórias e música autoral — Foto: Nina Pires",
                },
                {
                  src: "/photos/home/espetaculos-2.webp",
                  alt: "Passeio cênico no Bosque dos Guarantãs",
                  caption: "Encontros cênicos para praças, escolas, SESCs e teatros",
                },
                {
                  src: "/photos/home/espetaculos-8.webp",
                  alt: "Arte visual de Plástico, um mito contemporâneo",
                  caption: "Criações para públicos diversos, de crianças a adultos",
                },
                {
                  src: "/photos/home/espetaculos-4.webp",
                  alt: "Vivência teatral ao ar livre da Passarinha",
                  caption: "Arte, imaginação e diálogo com o território",
                },
                {
                  src: "/photos/home/espetaculos-5.webp",
                  alt: "Criança interagindo em espetáculo da Passarinha",
                  caption: "Afeto, encantamento e reflexão socioambiental",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Carmim avançando sobre a borda da foto */}
          <div className="lg:col-span-7 space-y-6 relative z-20">
            <div>
              <BrushBanner
                color="crimson"
                shape="bridge"
                className="-ml-2 lg:-ml-20 lg:pl-20"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  Espetáculos
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#FDBC2E] font-medium leading-relaxed">
              <p>
                A Passarinha desenvolve espetáculos que dialogam com teatro,
                música, histórias e experimentações artísticas para públicos
                diversos, de crianças a adultos.
              </p>
              <p>
                Suas criações exploram temas ligados à imaginação, à cultura
                popular, às relações humanas e às questões socioambientais,
                adaptando-se a diferentes espaços de apresentação.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/espetaculos"
                className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                Conheça nossos espetáculos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 5 — OFICINAS / PRÁTICAS FORMATIVAS (Vermelho Acrílico + Pasta Inicial/PRÁTICAS FORMATIVAS) */}
      <section className="canvas-vermelho py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texto + Pincelada Amarela Inclinada à Esquerda */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <BrushBanner color="yellow" shape="tilted" className="-ml-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
                  Oficinas
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#FDF6E4] font-semibold leading-relaxed drop-shadow-[0_1px_2px_rgba(45,18,50,0.28)]">
              <p>
                As oficinas da Passarinha aproximam arte, educação e meio
                ambiente, criando espaços de experimentação, criação coletiva e
                aprendizagem para diferentes públicos e idades.
              </p>
              <p>
                Entre as propostas estão práticas de reutilização criativa de
                materiais (
                <strong className="text-[#FDBC2E]">Ateliê Jogar Dentro</strong> e{" "}
                <strong className="text-[#FDBC2E]">Ecobrinquedoteca</strong>) e
                vivências musicais, como a{" "}
                <strong className="text-[#FDBC2E]">Orquestra de Pandeiros</strong>
                , que podem acontecer em escolas, instituições culturais,
                eventos e projetos educativos.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/praticas-formativas"
                className="cta-editorial text-[#FDBC2E] text-lg sm:text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                Conheça nossas oficinas →
              </Link>
            </div>
          </div>

          {/* Fotos da subpasta: Inicial / PRÁTICAS FORMATIVAS + Jogar Dentro & Ecobrinquedoteca */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/photos/home/formativas-1.webp",
                  alt: "Prática formativa coletiva da Orquestra de Pandeiros",
                  caption: "Orquestra de Pandeiros — Educação musical intergeracional",
                },
                {
                  src: "/photos/home/formativas-2.webp",
                  alt: "Vivência formativa conduzida pelo Coletivo Passarinha",
                  caption: "Encontros formativos em escolas, universidades e Pontos de Cultura",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-1.webp",
                  alt: "Experimentação criativa no Ateliê Jogar Dentro",
                  caption: "Ateliê Jogar Dentro — Reaproveitamento criativo de materiais",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-dobra-39.webp",
                  alt: "Crianças e famílias na Ecobrinquedoteca Jogar Dentro",
                  caption: "Ecobrinquedoteca — Cultura do brincar livre e sustentável",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 6 — AUDIOVISUAL (Amarelo Ipê Acrílico + Pasta PÁGINA INICIAL/FAIXA AUDIOVISUAL) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Fotos exatas da subpasta: PÁGINA INICIAL / FAIXA AUDIOVISUAL */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/photos/home/audiovisual-deusa.webp",
                  alt: "Deusa Reduza na produção audiovisual Fora de onde? (Foto: Mauro Machado)",
                  caption: "Fora de onde? — Deusa Reduza (Foto: Mauro Machado)",
                },
                {
                  src: "/photos/home/audiovisual-formigueiro.webp",
                  alt: "Produção audiovisual O que se passa no formigueiro?",
                  caption: "O que se passa no formigueiro? — Agroecologia e infâncias",
                },
                {
                  src: "/photos/audiovisual/caixa-magica-1.webp",
                  alt: "Curta A Caixa Mágica com Pirulita e Pouca Sombra",
                  caption: "A Caixa Mágica — Palhaçaria e ressignificação de objetos",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Carmim avançando sobre a borda da foto */}
          <div className="lg:col-span-7 space-y-6 relative z-20">
            <div>
              <BrushBanner
                color="crimson"
                shape="bridge"
                className="-ml-2 lg:-ml-20 lg:pl-20"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#FDBC2E] leading-tight">
                  Audiovisual
                </h2>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#532E5A] font-semibold leading-relaxed">
              <p>
                A Passarinha também explora o audiovisual como linguagem de
                criação artística, desenvolvendo vídeos e curtas que dialogam
                com teatro, música, infâncias e questões socioambientais.
              </p>
              <p>
                As produções reúnem narrativas poéticas, humor e reflexão
                crítica, ampliando o alcance das pesquisas e criações do
                coletivo para diferentes públicos e telas — incluindo recursos
                de acessibilidade em Libras.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/audiovisual"
                className="cta-editorial text-[#532E5A] text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity"
              >
                Conheça nossas produções →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selo da Ave Passarinha antes do Rodapé */}
      <section className="canvas-roxo py-12 px-4 border-t-4 border-[#FDBC2E]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0 bg-[#FDF6E4] p-1.5 rounded-sm border-2 border-[#3A1D40] shadow-[4px_4px_0px_rgba(25,10,30,0.45)]">
              <Image
                src="/brand/passarinha-ave.webp"
                alt="Ave Passarinha"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#FDBC2E]">
                Quer levar a Passarinha para sua escola, evento ou festival?
              </h3>
              <p className="text-sm text-[#FDF6E4] font-semibold">
                Circulamos com espetáculos, oficinas e vivências socioambientais
                por todo o Brasil.
              </p>
            </div>
          </div>
          <Link
            href="/contato"
            className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-sm px-7 py-3.5 shrink-0"
          >
            Solicitar Proposta
          </Link>
        </div>
      </section>
    </main>
  );
}
