import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";
import PraticasFilterBar from "@/components/PraticasFilterBar";
import CustomDocumentRenderer from "@/components/CustomDocumentRenderer";
import { getWorkshops } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Práticas Formativas & Oficinas | Coletivo Passarinha",
  description:
    "Oficinas de arte-educação ambiental, reutilização de materiais, Ateliê Jogar Dentro, Ecobrinquedoteca e a Orquestra de Pandeiros do Coletivo Passarinha.",
  openGraph: {
    title: "Práticas Formativas & Oficinas | Coletivo Passarinha",
    description:
      "Vivências de arte-educação, reaproveitamento criativo e música coletiva: Ateliê Jogar Dentro, Ecobrinquedoteca e Orquestra de Pandeiros.",
    images: [{ url: "/photos/oficinas/pandeiros-c1-1.webp" }],
  },
};

export default async function PraticasFormativasPage() {
  const workshops = await getWorkshops();
  const workshopMap = new Map(workshops.map((w) => [w.id, w]));

  const atelieWorkshop = workshopMap.get("atelie-jogar-dentro");
  const ecobrinquedoWorkshop = workshopMap.get("ecobrinquedoteca-jogar-dentro");
  const pandeirosWorkshop = workshopMap.get("orquestra-de-pandeiros");

  // Outras oficinas/práticas cadastradas dinamicamente no CMS
  const extraWorkshops = workshops.filter(
    (w) =>
      ![
        "atelie-jogar-dentro",
        "ecobrinquedoteca-jogar-dentro",
        "orquestra-de-pandeiros",
      ].includes(w.id)
  );

  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Vermelha Acrílica + Pincelada Amarela Inclinada */}
      <section className="canvas-vermelho py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Hammer className="w-4 h-4 text-[#FDBC2E]" /> Formação, Criação Coletiva & Aprendizagem
          </div>
          <div>
            <BrushBanner color="yellow" shape="tilted">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                Práticas Formativas
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDF6E4] max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-[0_1px_2px_rgba(45,18,50,0.28)]">
            A Passarinha desenvolve oficinas que aproximam arte, educação e meio
            ambiente, criando experiências de experimentação, criação coletiva e
            aprendizagem. Temos propostas já estruturadas, como o Ateliê Jogar
            Dentro, a Ecobrinquedoteca Jogar Dentro e a Orquestra de Pandeiros,
            e também criamos e adaptamos oficinas de acordo com as demandas, os
            públicos e os contextos de cada espaço.
          </p>
        </div>
      </section>

      {/* Barra Interativa de Filtro Rápido de Ações Formativas */}
      <PraticasFilterBar />

      {/* =====================================================================
          1. ATELIÊ JOGAR DENTRO (Amarelo Ipê Acrílico - TEXTO INTEGRAL DO DOC)
         ===================================================================== */}
      <section
        id="atelie-jogar-dentro"
        className="scroll-mt-24 canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Topo */}
          <div className="space-y-4">
            <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
              Prática Formativa 01
            </span>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {atelieWorkshop?.title || "Ateliê Jogar Dentro"}
                </h2>
              </BrushBanner>
              <p className="text-lg sm:text-2xl font-black text-[#3A1D40] mt-2">
                Arte, criação e reaproveitamento de materiais
              </p>
            </div>

            <div className="painel-rustico p-5 text-base sm:text-xl font-black text-[#E91C47] italic border-l-8 border-l-[#E91C47]">
              &ldquo;E se aquilo que seria descartado se transformasse em
              fantasia, figurino, adereço, instrumento musical ou
              brinquedo?&rdquo;
            </div>
          </div>

          {/* Bloco 1: Parágrafos 1, 2 e 3 + Fotos 1 e 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              {atelieWorkshop?.content && atelieWorkshop.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={atelieWorkshop.content}
                  theme="yellow"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <>
                  <p>
                    O Ateliê Jogar Dentro é um espaço de experimentação e criação
                    artística que convida os participantes a explorar as
                    possibilidades dos materiais reaproveitados, transformando-os em
                    objetos para brincar, imaginar, inventar personagens, criar sons
                    e contar histórias.
                  </p>
                  <p>
                    O ateliê reúne materiais em diferentes estados e possibilidades
                    de uso: alguns preservam suas características originais; outros
                    já chegam ressignificados, recortados, combinados ou preparados
                    para novas experimentações. Plásticos de diferentes cores e
                    formatos, embalagens laminadas, retalhos de tecidos e outros
                    materiais compõem um repertório aberto à investigação, no qual
                    cada forma, textura, cor e característica pode despertar novas
                    ideias.
                  </p>
                  <p>
                    A seleção dos materiais também faz parte da proposta. Damos
                    preferência àqueles que apresentam maiores dificuldades de
                    reciclagem, como determinados plásticos coloridos e embalagens
                    laminadas, buscando explorar suas possibilidades de uso e
                    criação antes que sejam descartados. Assim, o reaproveitamento
                    se torna também uma oportunidade de refletir sobre os materiais
                    que circulam em nosso cotidiano e sobre os destinos que damos a
                    eles.
                  </p>
                </>
              )}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/oficinas/jogar-dentro-1.webp"
                  alt="Crianças e adultos criando no Ateliê Jogar Dentro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/oficinas/jogar-dentro-2.webp"
                  alt="Materiais reaproveitados no Ateliê Jogar Dentro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: Fotos 3 e 4 + Parágrafos 4, 5 e 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/oficinas/jogar-dentro-jaque-17.webp"
                  alt="Vivência do Ateliê Jogar Dentro (Foto: Jaqueline Vital)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/oficinas/jogar-dentro-jaque-32.webp"
                  alt="Processo de criação coletiva (Foto: Jaqueline Vital)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                No Ateliê Jogar Dentro, não existe uma única maneira de criar.
                Os materiais podem se transformar em fantasias, figurinos,
                adereços, instrumentos musicais, brinquedos e tantas outras
                invenções que surgem durante o processo. A experimentação abre
                espaço para diferentes linguagens artísticas, para a expressão
                individual e para as descobertas coletivas.
              </p>
              <p>
                Mais do que ensinar a produzir objetos a partir de materiais
                reaproveitados, o ateliê propõe uma mudança de olhar: perceber
                que aquilo que parece não ter mais utilidade pode guardar outras
                possibilidades estéticas, lúdicas e expressivas. É um convite
                para experimentar, combinar, transformar e descobrir que a
                criação artística pode começar com aquilo que já temos à mão.
              </p>
              <p className="font-black text-[#E91C47] text-lg sm:text-xl pt-1">
                Jogar dentro é mergulhar nas possibilidades dos materiais e
                deixar a imaginação encontrar novos caminhos.
              </p>
            </div>
          </div>

          {/* Galeria Completa + Botão WhatsApp */}
          <div className="space-y-4">
            <PhotoMosaic
              variant="grid"
              photos={[
                {
                  src: "/photos/oficinas/jogar-dentro-1.webp",
                  alt: "Crianças e adultos criando no Ateliê Jogar Dentro",
                  caption: "Ateliê Jogar Dentro — Criação de brinquedos, adereços e fantasias",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-jaque-17.webp",
                  alt: "Vivência do Ateliê Jogar Dentro (Foto: Jaqueline Vital)",
                  caption: "Experimentação estética com materiais reaproveitados — Foto: Jaqueline Vital",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-jaque-32.webp",
                  alt: "Processo de criação coletiva (Foto: Jaqueline Vital)",
                  caption: "Descobertas coletivas e expressão lúdica — Foto: Jaqueline Vital",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-2.webp",
                  alt: "Materiais coloridos e texturas no Ateliê Jogar Dentro",
                  caption: "Repertório aberto de plásticos, tecidos e embalagens ressignificadas",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-oficina-1.webp",
                  alt: "Oficina Jogar Dentro em ação",
                  caption: "Invenção de personagens e instrumentos musicais",
                },
                {
                  src: "/photos/oficinas/jogar-dentro-oficina-2.webp",
                  alt: "Participantes na Oficina Jogar Dentro",
                  caption: "Arte-educação ambiental na prática",
                },
              ]}
            />

            <div className="pt-2">
              <a
                href="https://wa.me/5588981085939?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ateli%C3%AA%20Jogar%20Dentro."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                Contratar via WhatsApp (88) 98108-5939
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ECOBRINQUEDOTECA JOGAR DENTRO (Roxo Acrílico - TODOS OS 11 PARÁGRAFOS INTEGRAIS DO DOC)
         ===================================================================== */}
      <section
        id="ecobrinquedoteca-jogar-dentro"
        className="scroll-mt-24 canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Topo */}
          <div className="space-y-4">
            <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#FDBC2E] text-[#3A1D40]">
              Prática Formativa 02
            </span>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {ecobrinquedoWorkshop?.title || "Ecobrinquedoteca Jogar Dentro"}
                </h2>
              </BrushBanner>
              <p className="text-lg sm:text-2xl font-black text-[#FDBC2E] mt-2">
                Arte Educação Ambiental
              </p>
            </div>

            <div className="painel-rustico p-5 text-base sm:text-xl font-black text-[#E91C47] italic border-l-8 border-l-[#E91C47]">
              &ldquo;Existe lixo de fato? Fora de onde?&rdquo;
            </div>
          </div>

          {/* Bloco 1: Parágrafos 1 a 4 + 2 Fotos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                A Ecobrinquedoteca Jogar Dentro nasceu dessa inquietação: o que
                acontece quando mudamos nosso olhar para aquilo que descartamos?
                O que pode surgir quando materiais que perderam sua função
                original encontram novas possibilidades nas mãos de quem brinca?
              </p>
              <p>
                Itinerante e aberta ao encontro, a Ecobrinquedoteca reúne
                brinquedos, jogos, materiais reaproveitados, elementos naturais
                e brincadeiras, convidando pessoas de diferentes idades a
                experimentar, imaginar, criar e descobrir outras formas de se
                relacionar com os objetos, com o ambiente e com as pessoas ao
                redor.
              </p>
              <p className="font-black text-[#E91C47] text-lg">
                Mais do que reunir brinquedos, a Ecobrinquedoteca reúne
                possibilidades de brincar.
              </p>
              <p>
                A proposta nasce do encontro entre a Cultura do Brincar e a Arte
                Educação Ambiental. Compreendemos o brincar como linguagem,
                experiência artística e patrimônio cultural vivo, que se
                transforma e se reinventa a cada encontro. Brincar é
                experimentar o mundo, construir relações, inventar regras,
                compartilhar descobertas e produzir sentidos coletivamente.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-dobra-39.webp"
                  alt="Ecobrinquedoteca Jogar Dentro (Foto: Estúdio Dobra)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-dobra-50.webp"
                  alt="Brinquedos artesanais na Ecobrinquedoteca (Foto: Estúdio Dobra)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: 2 Fotos à Esquerda + Parágrafos 5 a 8 à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-dobra-90.webp"
                  alt="Convivência e brincar livre na Ecobrinquedoteca (Foto: Estúdio Dobra)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-ocupacao.webp"
                  alt="Ocupação da Ecobrinquedoteca"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                Na Ecobrinquedoteca, os materiais descartados deixam de ser
                apenas sobras e passam a integrar novas experiências estéticas,
                lúdicas e educativas. Texturas, formas, cores, pesos e sons
                despertam a curiosidade e ampliam as possibilidades de criação.
                O convite não é apenas reutilizar materiais, mas também
                questionar os modos como produzimos, consumimos, descartamos e
                atribuímos valor às coisas.
              </p>
              <p>
                Como fazer mais com menos? Essa pergunta também orienta a
                concepção dos brinquedos. Buscamos soluções construtivas
                simples, que evitem materiais e intervenções desnecessárias,
                favoreçam a durabilidade e, sempre que possível, permitam que os
                componentes retornem aos seus ciclos de reaproveitamento ou
                reciclagem ao final de sua vida útil.
              </p>
              <p>
                A simplicidade, aqui, não significa ausência de cuidado ou de
                elaboração estética. Pelo contrário: acreditamos que materiais
                simples, com poucas intervenções, podem produzir objetos
                visualmente instigantes, cheios de possibilidades e abertos à
                imaginação. Formas, texturas, cores e características próprias
                dos materiais são valorizadas, revelando que a potência de um
                brinquedo não depende do excesso, mas das relações que ele é
                capaz de despertar.
              </p>
              <p>
                Essa escolha também busca aproximar a experiência do cotidiano
                dos participantes. Ao conhecer brinquedos construídos com
                materiais acessíveis e soluções que podem ser reproduzidas em
                casa, cada pessoa é convidada a experimentar suas próprias
                criações, reconhecer possibilidades no que já tem à disposição e
                descobrir que brincar não precisa depender de objetos complexos
                ou de muitos recursos.
              </p>
            </div>
          </div>

          {/* Bloco 3: Parágrafos 9, 10 e 11 + 2 Fotos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                A experiência também se constrói na diversidade de pessoas e de
                maneiras de brincar. Diferentes idades, corpos, repertórios,
                tempos e formas de participação encontram espaço nessa vivência
                coletiva. A inclusão, nesse sentido, vai além de permitir o
                acesso: envolve acolher diferentes modos de experimentar,
                interagir, criar e participar.
              </p>
              <p>
                A Ecobrinquedoteca Jogar Dentro é uma experiência de Arte
                Educação Ambiental que transforma o brincar em oportunidade de
                encontro, investigação e criação. Ao deslocar o olhar sobre
                aquilo que descartamos e reconhecer a potência do simples,
                abrimos espaço para novas perguntas, relações e possibilidades.
              </p>
              <p className="font-black text-[#E91C47] text-lg sm:text-xl pt-1">
                Porque brincar também é uma forma de imaginar e construir outros
                mundos.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-biblioteca.webp"
                  alt="Ocupação na Biblioteca Pública"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/oficinas/ecobrinquedoteca-1.webp"
                  alt="Jogos e brinquedos construídos com materiais acessíveis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Galeria Completa da pasta Ecobrinquedoteca + Botão WhatsApp */}
          <div className="space-y-4">
            <PhotoMosaic
              variant="grid"
              photos={[
                {
                  src: "/photos/oficinas/ecobrinquedoteca-dobra-39.webp",
                  alt: "Ecobrinquedoteca Jogar Dentro (Foto: Estúdio Dobra)",
                  caption: "Ecobrinquedoteca Jogar Dentro — Foto: Estúdio Dobra",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-dobra-50.webp",
                  alt: "Brinquedos artesanais na Ecobrinquedoteca (Foto: Estúdio Dobra)",
                  caption: "Cultura do Brincar e Arte-Educação Ambiental — Foto: Estúdio Dobra",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-dobra-90.webp",
                  alt: "Convivência e brincar livre na Ecobrinquedoteca (Foto: Estúdio Dobra)",
                  caption: "Inclusão e encontro entre diferentes idades — Foto: Estúdio Dobra",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-ocupacao.webp",
                  alt: "Ocupação da Ecobrinquedoteca em espaço cultural",
                  caption: "Ocupação artística e educativa aberta à comunidade",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-biblioteca.webp",
                  alt: "Ocupação na Biblioteca Pública",
                  caption: "Ocupação na Biblioteca Pública — Brincar como patrimônio vivo",
                },
                {
                  src: "/photos/oficinas/ecobrinquedoteca-1.webp",
                  alt: "Jogos e brinquedos construídos com materiais acessíveis",
                  caption: "Soluções construtivas simples e visualmente instigantes",
                },
              ]}
            />

            <div className="pt-2">
              <a
                href="https://wa.me/5588981085939?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Ecobrinquedoteca%20Jogar%20Dentro."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                Contratar via WhatsApp (88) 98108-5939
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ORQUESTRA DE PANDEIROS (Laranja Acrílico - TEXTO INTEGRAL DO DOC + CARROSSEL 1 & 2 INTERCALADOS)
         ===================================================================== */}
      <section
        id="orquestra-de-pandeiros"
        className="scroll-mt-24 canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Topo com Logo na Pasta */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="relative w-24 h-24 rounded-xl bg-[#FDF6E4] p-2 border border-[#3A1D40]/25 shadow-lg shrink-0">
              <Image
                src="/photos/oficinas/pandeiros-logo.webp"
                alt="Logo Orquestra de Pandeiros"
                fill
                sizes="96px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E] mb-2">
                Prática Formativa 03 • Educação Musical & Cultura Popular
              </span>
              <div>
                <BrushBanner color="yellow" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                    {pandeirosWorkshop?.title || "Orquestra de Pandeiros"}
                  </h2>
                </BrushBanner>
              </div>
            </div>
          </div>

          {/* Sinopse + Cards de Perguntas do Doc */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-5">
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Sinopse
                </h3>
                <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-semibold">
                  A Orquestra de Pandeiros é uma ação artístico-pedagógica de
                  educação musical que tem como fundamento as manifestações
                  percussivas da cultura popular brasileira e a prática musical
                  coletiva. De caráter intergeracional, reúne pessoas com e sem
                  experiência musical em processos de criação, escuta e
                  aprendizagem compartilhada, tendo o pandeiro como instrumento
                  de encontro, expressão e convivência. Idealizado em 2021, o
                  projeto nasceu em Londrina/PR e, em 2023, tornou-se objeto de
                  pesquisa no curso de Mestrado em Música da UNICAMP.
                  Atualmente, desenvolve uma atuação itinerante por festivais,
                  universidades e espaços culturais, difundindo a riqueza das
                  tradições percussivas brasileiras e fortalecendo a música como
                  experiência coletiva, inclusiva e transformadora.
                </p>
              </div>

              <div className="pt-4 border-t border-[#3A1D40]/15 space-y-2">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#E91C47]">
                  Princípios
                </h3>
                <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed font-medium">
                  A Orquestra de Pandeiros fundamenta-se nas manifestações
                  percussivas da cultura popular brasileira e no fazer musical
                  coletivo, compreendendo a música como uma experiência
                  construída com e para as pessoas. Respeitando diferentes
                  tempos, trajetórias e formas de fazer e aprender, o projeto
                  promove processos de criação artística compartilhada,
                  dissemina a riqueza das tradições percussivas brasileiras e
                  fortalece o encontro entre educação, cultura e produção
                  artística por meio da prática coletiva.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="painel-rustico p-6 space-y-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#E91C47]">
                  Para quem é a Oficina Orquestra de Pandeiros?
                </h3>
                <p className="text-sm sm:text-base text-[#3A1D40] font-semibold">
                  A oficina é recomendada para pessoas de todas as idades a
                  partir dos 12 anos, com ou sem experiência musical anterior.
                </p>
              </div>

              <div className="painel-rustico p-6 space-y-2.5 text-sm sm:text-base text-[#3A1D40] font-medium">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#E91C47]">
                  Qual o limite de público da Oficina Orquestra de Pandeiros?
                </h3>
                <p>
                  Será disponibilizado pela oficineira os instrumentos para a
                  prática musical, portanto a contratação da oficina garante o
                  acesso de pelo menos 15 pessoas à oficina.
                </p>
                <p>
                  De acordo com a realidade de cada espaço/evento e havendo o
                  oferecimento de mais instrumentos (por parte dos próprios
                  participantes ou do espaço), o limite pode ser ampliado.
                </p>
                <p className="font-black text-[#3A1D40]">
                  Recomenda-se o número máximo de 25 pessoas.
                </p>
              </div>

              <div className="painel-rustico-roxo p-6 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
                  Como levar a Oficina Orquestra de Pandeiros no seu espaço/evento?
                </h3>
                <p className="text-xs sm:text-sm text-[#FDF6E4] font-semibold">
                  Para informações de contratação: Contato (WhatsApp Maria) (18)
                  99611-5002
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://wa.me/5518996115002?text=Ol%C3%A1%20Maria!%20Gostaria%20de%20informações%20sobre%20a%20Oficina%20Orquestra%20de%20Pandeiros."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs py-2.5 px-4"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                    WhatsApp (18) 99611-5002
                  </a>
                  <a
                    href="https://www.instagram.com/orquestra.pandeiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-xs py-2.5 px-4"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E91C47]" />
                    @orquestra.pandeiros
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* HISTÓRICO + GALERIA 1 (CARROSSEL 1) + GALERIA 2 (CARROSSEL 2) INTERCALADAS EXATAMENTE COMO NO DOC */}
          <div className="space-y-8">
            <div className="painel-rustico p-7 sm:p-9 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#E91C47]">
                Histórico
              </h3>
              <p className="text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                Idealizada em 2021, a iniciativa realizou suas primeiras edições
                em 2022 por meio do Programa Municipal de Incentivo à Cultura
                (PROMIC), de Londrina/PR, surgindo como uma resposta ao desejo
                de reconstrução dos encontros presenciais e da prática musical
                coletiva após a pandemia de COVID-19.
              </p>
            </div>

            {/* Galeria 1 (Pasta Carrossel 1) */}
            <PhotoMosaic
              variant="editorial"
              photos={[
                {
                  src: "/photos/oficinas/pandeiros-c1-1.webp",
                  alt: "Cortejo e apresentação da Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Orquestra de Pandeiros — Prática musical coletiva (Foto: Nina Pires)",
                },
                {
                  src: "/photos/oficinas/pandeiros-c1-2.webp",
                  alt: "Vivência coletiva da Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Encontro intergeracional ao redor do pandeiro — Foto: Nina Pires",
                },
                {
                  src: "/photos/oficinas/pandeiros-c1-3.webp",
                  alt: "Maria Carolina Thomé conduzindo a Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Condução de Maria Carolina Thomé — Foto: Nina Pires",
                },
                {
                  src: "/photos/oficinas/pandeiros-c1-4.webp",
                  alt: "Roda percussiva da Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Ritmos populares brasileiros e escuta compartilhada — Foto: Nina Pires",
                },
                {
                  src: "/photos/oficinas/pandeiros-c1-5.webp",
                  alt: "Participantes da Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Afetividade, aprendizagem e criação coletiva — Foto: Nina Pires",
                },
              ]}
            />

            <div className="painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                Em 2023, a Orquestra de Pandeiros ampliou sua atuação ao
                tornar-se objeto de pesquisa no curso de Mestrado em Música da
                UNICAMP, integrando o Programa UniversIDADE (50+). A
                investigação aborda as relações entre afetividade, aprendizagem
                e envolvimento musical de pessoas adultas e idosas, reafirmando
                o projeto como um espaço de pesquisa, formação e produção
                artística.
              </p>
              <p>
                Atualmente, a Orquestra de Pandeiros desenvolve uma atuação
                itinerante, realizando oficinas e ações formativas em festivais,
                pontos de cultura, universidades e congressos de educação
                musical. Entre os espaços que já receberam o projeto estão o
                CultSP, em Itacaré/BA (E. E. Tomé Teixeira), o Ponto de Cultura
                Quintal Garatuja, em Campinas/SP, o Festival Obaxirê, em
                Maringá/PR, o Congresso Regional Sul da Associação Brasileira de
                Educação Musical (ABEM), em Maringá/PR, a Licenciatura em Música
                da Universidade Estadual de Londrina (UEL), o Grupo deCanta, em
                Campinas/SP, e o Congresso Internacional da ABEM, em Ouro
                Preto/MG.
              </p>
            </div>

            {/* Galeria 2 (Pasta Carrossel 2) */}
            <PhotoMosaic
              variant="editorial"
              photos={[
                {
                  src: "/photos/oficinas/pandeiros-c2-1.webp",
                  alt: "Apresentação da Orquestra de Pandeiros (Foto: Nina Pires)",
                  caption: "Orquestra de Pandeiros em cena — Foto: Nina Pires",
                },
                {
                  src: "/photos/oficinas/pandeiros-c2-2.webp",
                  alt: "Oficina Orquestra de Pandeiros em universidade",
                  caption: "Formação musical em universidades, congressos e festivais",
                },
                {
                  src: "/photos/oficinas/pandeiros-c2-3.webp",
                  alt: "Roda de pandeiros aberta à comunidade",
                  caption: "Prática percussiva acessível para pessoas com e sem experiência",
                },
                {
                  src: "/photos/oficinas/pandeiros-c2-4.webp",
                  alt: "Encontro da Orquestra de Pandeiros",
                  caption: "Difusão das tradições percussivas brasileiras",
                },
                {
                  src: "/photos/oficinas/pandeiros-c2-5.webp",
                  alt: "Grupo reunido após oficina da Orquestra de Pandeiros",
                  caption: "Música como experiência coletiva, inclusiva e transformadora",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Práticas Formativas Adicionais Cadastradas no Keystatic CMS */}
      {extraWorkshops.length > 0 && (
        <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#FDBC2E] text-[#3A1D40]">
                Mais Práticas Formativas & Oficinas
              </span>
              <div>
                <BrushBanner color="yellow" shape="tilted" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                    Novas Oficinas
                  </h2>
                </BrushBanner>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {extraWorkshops.map((workshop) => (
                <div
                  key={workshop.id}
                  id={workshop.id}
                  className="painel-rustico p-7 sm:p-9 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase px-3 py-1 rounded-lg bg-[#3A1D40] text-[#FDBC2E]">
                        {workshop.targetAudience}
                      </span>
                      {workshop.audienceLimit && (
                        <span className="text-xs font-black text-[#3A1D40] bg-[#FDBC2E]/30 px-3 py-1 rounded-lg">
                          Vagas: {workshop.audienceLimit}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black text-[#E91C47] uppercase">
                      {workshop.title}
                    </h3>
                    {workshop.subtitle && (
                      <p className="text-sm font-bold text-[#532E5A] italic">
                        {workshop.subtitle}
                      </p>
                    )}
                    {workshop.content && workshop.content.length > 0 ? (
                      <CustomDocumentRenderer
                        document={workshop.content}
                        theme="yellow"
                        className="text-sm sm:text-base leading-relaxed"
                      />
                    ) : (
                      <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed">
                        {workshop.concept}
                      </p>
                    )}
                  </div>

                  {workshop.photos && workshop.photos.length > 0 && (
                    <PhotoMosaic photos={workshop.photos} variant="grid" />
                  )}

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${workshop.whatsappContact || "5519992510921"}?text=Ol%C3%A1!%20Gostaria%20de%20uma%20proposta%20para%20a%20oficina%20${encodeURIComponent(
                        workshop.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                      Contratar via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
