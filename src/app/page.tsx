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
          {/* Moldura Branca Arredondada à Esquerda */}
          <div className="lg:col-span-5">
            <PhotoCarouselFrame
              badgeLogoSrc="/images/garatuja/GARATUJA_logo_hor colorido.png"
              badgeLogoAlt="Logo Ponto de Cultura Quintal Garatuja"
              photos={[
                {
                  src: "/images/image8.jpg",
                  alt: "Criança explorando estrutura sonora de panelas reaproveitadas no Quintal Garatuja",
                  caption: "Experimentação sonora e brincar livre no Quintal Garatuja",
                },
                {
                  src: "/images/image5.jpg",
                  alt: "Apresentação cênica no Ponto de Cultura Quintal Garatuja",
                  caption: "Encontros cênicos e mostras abertas em Campinas/SP",
                },
                {
                  src: "/images/image1.jpg",
                  alt: "Vivência comunitária com crianças e artistas sobre tapete colorido de retalhos",
                  caption: "Convivência intergeracional, arte e território desde 2016",
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

          {/* Moldura Branca Arredondada à Direita */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/images/image9.jpg",
                  alt: "Esteira circular de palha com sementes, favas naturais e objetos reaproveitados",
                  caption: "Materiais naturais, sementes e objetos ressignificados",
                },
                {
                  src: "/images/image7.jpg",
                  alt: "Criação artesanal com papelão, tampinhas e materiais descartados",
                  caption: "Poéticas visuais a partir do reaproveitamento criativo",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 4 — ESPETÁCULOS (Roxo Acrílico + Pincelada em Ponte sobre a Foto) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Moldura Branca Arredondada à Esquerda */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/images/image3.jpg",
                  alt: "Pamella Villanova e Dudu Ferraz atrás do tecido com fitas coloridas em Histórias que a Passarinha me contou",
                  caption: "Histórias que a Passarinha me contou — Episódio Terra",
                },
                {
                  src: "/images/image4.jpg",
                  alt: "Dudu Ferraz interagindo com crianças em mar de tiras azuis no Episódio Água",
                  caption: "Histórias que a Passarinha me contou — Episódio Água",
                },
                {
                  src: "/images/image10.jpg",
                  alt: "Criança brincando imersa em mar de tiras azuis reaproveitadas (Foto: Camila Guinatti)",
                  caption: "Plástico, um mito contemporâneo — Residência Cênica",
                },
              ]}
            />
          </div>

          {/* Texto + Pincelada Carmim avançando sobre a borda da foto no Desktop */}
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

      {/* FAIXA 5 — OFICINAS / PRÁTICAS FORMATIVAS (Vermelho Acrílico + Pincelada Amarela Inclinada) */}
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
                materiais (<strong className="text-[#FDBC2E]">Ateliê Jogar Dentro</strong> e{" "}
                <strong className="text-[#FDBC2E]">Ecobrinquedoteca</strong>) e
                vivências musicais, como a{" "}
                <strong className="text-[#FDBC2E]">Orquestra de Pandeiros</strong>,
                que podem acontecer em escolas, instituições culturais, eventos
                e projetos educativos.
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

          {/* Moldura Branca Arredondada à Direita */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "/images/image6.jpg",
                  alt: "Turma da Orquestra de Pandeiros com Maria Thomé",
                  caption: "Orquestra de Pandeiros — Música e Percussão Popular",
                },
                {
                  src: "/images/image7.jpg",
                  alt: "Fogãozinho de brinquedo construído com papelão, CDs e tampinhas",
                  caption: "Ateliê Jogar Dentro — Criação de Brinquedos com Reutilizáveis",
                },
                {
                  src: "/images/image9.jpg",
                  alt: "Esteira com elementos naturais e objetos reaproveitados na Ecobrinquedoteca",
                  caption: "Ecobrinquedoteca — Espaço de Brincar Livre e Sustentável",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAIXA 6 — AUDIOVISUAL (Amarelo Ipê Acrílico + Pincelada em Ponte sobre a Foto) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Moldura Branca Arredondada à Esquerda */}
          <div className="lg:col-span-5 relative z-10">
            <PhotoCarouselFrame
              photos={[
                {
                  src: "https://i.ytimg.com/vi/FkMBMPGgpHw/hqdefault.jpg",
                  alt: "Frame da obra audiovisual Fora de onde? com acessibilidade em Libras",
                  caption: "Fora de onde? — Reflexão poética com Libras",
                },
                {
                  src: "https://i.ytimg.com/vi/mnlxnn_4HPg/hqdefault.jpg",
                  alt: "Frame da obra audiovisual O que se passa no formigueiro?",
                  caption: "O que se passa no formigueiro? — Vídeo para infâncias",
                },
                {
                  src: "/images/image1.jpg",
                  alt: "Registro audiovisual comunitário do Coletivo Passarinha",
                  caption: "A Caixa Mágica — Curta-metragem nascido no Bosque dos Guarantãs",
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

      {/* Selo Sutil da Ave Passarinha antes do Rodapé */}
      <section className="bg-[#FDF6E4] py-10 px-4 border-t-4 border-[#532E5A]/15">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/brand/passarinha-ave.webp"
                alt="Ave Passarinha"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#532E5A]">
                Quer levar a Passarinha para sua escola, evento ou festival?
              </h3>
              <p className="text-sm text-[#532E5A]/80 font-semibold">
                Circulamos com espetáculos, oficinas e vivências socioambientais por todo o Brasil.
              </p>
            </div>
          </div>
          <Link
            href="/contato"
            className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-[#FDF6E4] text-sm px-7 py-3.5 shrink-0"
          >
            Solicitar Proposta
          </Link>
        </div>
      </section>
    </main>
  );
}
