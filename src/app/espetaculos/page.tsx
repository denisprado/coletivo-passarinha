import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Theater,
  Clock,
  MessageCircle,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";
import EspetaculosFilterBar from "@/components/EspetaculosFilterBar";
import CustomDocumentRenderer from "@/components/CustomDocumentRenderer";
import { AdminEditLink } from "@/components/AdminEditSystem";
import { getShows } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Espetáculos | Coletivo Passarinha",
  description:
    "Repertório cênico e musical do Coletivo Passarinha: Histórias que a Passarinha me contou, Plástico um mito contemporâneo, Show Nascente e Histórias do Bosque dos Guarantãs.",
  openGraph: {
    title: "Espetáculos Teatrais & Musicais | Coletivo Passarinha",
    description:
      "Apresentações de teatro, contação de histórias, música e palhaçaria para infâncias, escolas, festivais e todas as idades.",
    images: [{ url: "/photos/espetaculos/passarinha-nina-197.webp" }],
  },
};

export default async function EspetaculosPage() {
  const shows = await getShows();
  const showMap = new Map(shows.map((s) => [s.id, s]));

  const passarinhaShow = showMap.get("historias-que-a-passarinha-me-contou");
  const plasticoShow = showMap.get("plastico-um-mito-contemporaneo");
  const nascenteShow = showMap.get("show-nascente");
  const guarantasShow = showMap.get("historias-do-bosque-dos-guarantas");

  // Outros espetáculos cadastrados dinamicamente no CMS
  const extraShows = shows.filter(
    (s) =>
      ![
        "historias-que-a-passarinha-me-contou",
        "plastico-um-mito-contemporaneo",
        "show-nascente",
        "historias-do-bosque-dos-guarantas",
      ].includes(s.id)
  );

  const submenuItems = [
    {
      id: "historias-que-a-passarinha-me-contou",
      label: passarinhaShow?.title || "Histórias que a Passarinha me contou",
    },
    {
      id: "plastico-um-mito-contemporaneo",
      label: plasticoShow?.title || "Plástico, um mito contemporâneo",
    },
    {
      id: "historias-do-bosque-dos-guarantas",
      label: guarantasShow?.title || "Histórias do Bosque dos Guarantãs",
    },
    {
      id: "show-nascente",
      label: nascenteShow?.title || "Show Nascente",
    },
    ...extraShows.map((s) => ({ id: s.id, label: s.title })),
  ];

  return (
    <main className="w-full overflow-x-clip">
      {/* Header em Textura Roxa Acrílica */}
      <section className="canvas-roxo pt-16 pb-10 sm:pt-20 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40]">
            <Theater className="w-4 h-4" /> Criações Cênico-Musicais
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Espetáculos
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDBC2E] max-w-3xl mx-auto leading-relaxed font-semibold">
            Teatro, música, histórias e experimentações artísticas que ganham
            vida em diferentes formatos e linguagens. A Passarinha cria e
            apresenta espetáculos para públicos diversos, de crianças a adultos,
            convidando cada pessoa a vivenciar o encontro com a arte, a
            imaginação e as questões do nosso tempo.
          </p>
        </div>
      </section>

      {/* Submenu de Espetáculos Fixo na Rolagem */}
      <EspetaculosFilterBar items={submenuItems} />

      {/* =====================================================================
          1. HISTÓRIAS QUE A PASSARINHA ME CONTOU (Amarelo Ipê Acrílico)
         ===================================================================== */}
      <section
        id="historias-que-a-passarinha-me-contou"
        className="scroll-mt-36 canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Cabeçalho */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
                Contação de Histórias, Música & Teatro
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#3A1D40] font-black">
                <span className="flex items-center gap-1 bg-[#FDF6E4] px-3 py-1 rounded-lg border border-[#3A1D40]/25 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#E91C47]" /> 40 a 50 minutos por episódio
                </span>
                <span className="bg-[#FDF6E4] px-3 py-1 rounded-lg border border-[#3A1D40]/25 shadow-sm">
                  Classificação: Livre (0 a 100 anos)
                </span>
              </div>
            </div>

            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {passarinhaShow?.title || "Histórias que a Passarinha me contou"}
                  <AdminEditLink
                    collection="espetaculos"
                    slug="historias-que-a-passarinha-me-contou"
                    field="Título do Espetáculo"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>
          </div>

          {/* Texto Geral Integral + 2 Fotos Intercaladas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="espetaculos"
                  slug="historias-que-a-passarinha-me-contou"
                  field="Apresentação, Sinopse e Rider Técnico"
                  label="Editar texto"
                />
              </div>
              {passarinhaShow?.content && passarinhaShow.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={passarinhaShow.content}
                  theme="yellow"
                  className="text-base sm:text-lg font-medium leading-relaxed"
                />
              ) : (
                <>
                  <p>
                    Uma série de espetáculos criada por{" "}
                    <strong className="font-bold">Pamella Villanova</strong> e{" "}
                    <strong className="font-bold">Dudu Ferraz</strong>, que unem
                    contação de histórias, música, teatro e sensibilização
                    ambiental.
                  </p>
                  <p>
                    A Passarinha é uma viajante que espalha pelo vento contos e
                    cantos. Ela voa e se transforma em contato com os lugares e
                    personagens que encontra pelo mundo e assim segue sua viagem,
                    sempre buscando trocar sementes e conhecimentos por onde passa.
                    Os objetos cênicos são feitos com aquilo que fora considerado
                    sem utilidade, exercitando o repensar e a reutilização de forma
                    lúdica e criativa.
                  </p>
                  <p>
                    São dois episódios, cada um com duração total de 40 a 50
                    minutos, que convidam crianças de zero a cem anos a imaginar a
                    vida na água e a vida no solo.
                  </p>
                </>
              )}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/passarinha-nina-197.webp"
                  alt="Histórias que a Passarinha me contou (Foto: Nina Pires)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/passarinha-ccbb.webp"
                  alt="Apresentação no CCBB (Foto: Camila Cequetin)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Episódios Completos (Episódio Terra & Episódio Água) */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-black uppercase flex items-center gap-2 text-[#3A1D40]">
              <Sparkles className="w-5 h-5 text-[#E91C47]" />
              Episódios Disponíveis para Circulação
            </h3>

            {/* EPISÓDIO TERRA (Texto Integral + Fotos + Tabelas) */}
            <div className="painel-rustico p-7 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3A1D40]/15 pb-4">
                <h4 className="text-2xl sm:text-3xl font-black text-[#E91C47] uppercase">
                  Episódio Terra
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-black text-[#3A1D40]">
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    Duração: 50 minutos
                  </span>
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    Classificação: Livre
                  </span>
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    Montagem: 1 hora | Desmontagem: 40 minutos
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  <p>
                    A Passarinha conta uma de suas viagens em que se depara com
                    a transição entre uma paisagem de diversidade e o deserto.
                    No meio do deserto, encontra um oásis, se delicia com as
                    frutas maravilhosas e logo encontra as responsáveis pelo
                    trabalho de adubar aquele solo: as minhocas. Esse encontro
                    fértil rende muitas aventuras cantadas e contadas, inclusive
                    sobre o tal do cocô de minhoca.
                  </p>
                  <p>
                    No episódio terra, são apresentados conceitos como
                    &lsquo;adubação verde&rsquo; e &lsquo;deserto verde&rsquo;
                    de forma lúdica, no contexto da história. Após a despedida
                    das personagens, atriz e cantautor conversam com a plateia
                    de maneira descontraída, aprofundando os conhecimentos
                    construídos durante a peça.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative w-full aspect-[16/10] foto-organica-3 bg-[#241128]">
                    <Image
                      src="/photos/espetaculos/passarinha-teia-2.webp"
                      alt="Episódio Terra — Histórias que a Passarinha me contou"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ficha Técnica Episódio Terra */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                  Ficha Técnica — Episódio Terra
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {[
                    {
                      label: "Concepção, criação e atuação Cênica",
                      value: "Pamella Villanova e Dudu Ferraz",
                    },
                    {
                      label: "Composição de trilha sonora",
                      value: "Dudu Ferraz e Pamella Villanova",
                    },
                    {
                      label: "Produção",
                      value: "Coletivo Passarinha e Quintal Garatuja",
                    },
                    { label: "Gravação de Vídeo", value: "Nina Pires" },
                    {
                      label: "Gravação e mixagem de áudio",
                      value: "Pedro Florio",
                    },
                    { label: "Fotos", value: "Nina Pires e Mauro Machado" },
                    { label: "Figurino", value: "Graciete Mary dos Santos" },
                    {
                      label: "Iluminação",
                      value: "Pamella Villanova e Monica Lovato",
                    },
                  ].map((it, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FDBC2E]/25 p-3 rounded-lg border border-[#3A1D40]/20"
                    >
                      <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                        {it.label}
                      </span>
                      <span className="font-bold text-[#3A1D40]">
                        {it.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Necessidades Técnicas Episódio Terra */}
              <div className="bg-[#FDBC2E]/30 p-5 rounded-xl border-l-4 border-[#E91C47] space-y-2 text-sm text-[#3A1D40]">
                <strong className="text-xs font-black uppercase tracking-wider text-[#E91C47] block">
                  Necessidades Técnicas — Episódio Terra:
                </strong>
                <p className="font-medium leading-relaxed">
                  Esse espetáculo pode acontecer em diversos ambientes. Já foi
                  apresentado em sala de aula, teatro, praça, parque pátios e
                  etc. A estrutura técnica pode variar de acordo com a proposta,
                  espaço e quantidade de público em cada sessão. Pode ser
                  realizado com ou sem iluminação cênica.
                </p>
                <p className="text-xs font-bold text-[#3A1D40]">
                  ***As necessidades técnicas podem ser supridas pelo Coletivo
                  Passarinha mediante acordo na contratação
                </p>
              </div>
            </div>

            {/* EPISÓDIO ÁGUA (Texto Integral + Fotos + Tabelas) */}
            <div className="painel-rustico p-7 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3A1D40]/15 pb-4">
                <h4 className="text-2xl sm:text-3xl font-black text-[#E91C47] uppercase">
                  Episódio Água
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-black text-[#3A1D40]">
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    20 min de histórias + 30 min de brincadeiras (Total: 50 min)
                  </span>
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    Classificação: Livre
                  </span>
                  <span className="bg-[#FDBC2E]/40 px-3 py-1 rounded-lg">
                    Montagem: 40 min | Desmontagem: 30 min
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative w-full aspect-[16/10] foto-organica-4 bg-[#241128]">
                    <Image
                      src="/photos/espetaculos/passarinha-teia-6.webp"
                      alt="Episódio Água — Histórias que a Passarinha me contou"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
                  <p>
                    A Passarinha conta sobre um peixe de mar que amava o rio. As
                    aventuras são contadas com música autoral e recursos
                    teatrais. De forma lúdica narrando a vida no mar, a subida
                    da Piracema e a lagoa. Após a contação, a separação entre
                    palco e plateia é dissolvida e as crianças de zero a cem
                    anos presentes são convidadas a mergulhar no mundo da
                    imaginação para compor com os elementos da história em
                    convites para o livre brincar no espaço cênico, com os
                    materiais utilizados na peça.
                  </p>
                  <p>
                    A magia da brincadeira e do espaço cênico se fundem de
                    maneira sutil abrindo espaço para a imaginação e
                    ressignificação de objetos simples presentes no cotidiano.
                    Ideal para a primeira infância e todas as famílias!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h5 className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
                    Ficha Técnica — Episódio Água
                  </h5>
                  <div className="grid grid-cols-1 gap-2.5 text-xs">
                    {[
                      {
                        label: "Concepção, criação e atuação",
                        value: "Pâmella Villanova e Dudu Ferraz",
                      },
                      {
                        label: "Adereços e brinquedos",
                        value: "Coletivo Passarinha",
                      },
                      { label: "Fotos", value: "Mauro Machado" },
                    ].map((it, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FDBC2E]/25 p-3 rounded-lg border border-[#3A1D40]/20"
                      >
                        <span className="font-black text-[#E91C47] block uppercase text-[11px]">
                          {it.label}
                        </span>
                        <span className="font-bold text-[#3A1D40]">
                          {it.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FDBC2E]/30 p-5 rounded-xl border-l-4 border-[#E91C47] space-y-2.5">
                  <strong className="text-xs font-black uppercase tracking-wider text-[#E91C47] block">
                    Necessidades Técnicas — Episódio Água:
                  </strong>
                  <ul className="text-xs sm:text-sm text-[#3A1D40] space-y-1.5 font-semibold">
                    {[
                      "Palco mínimo de 3m²",
                      "2 microfones headset",
                      "1 entrada P10 para violão",
                      "Equipamento de som compatível com espaço e quantidade de público",
                      "Não necessita de estrutura de iluminação.",
                    ].map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E91C47] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria Completa de Histórias que a Passarinha me contou */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-[#3A1D40]">
              Mais Registros de Histórias que a Passarinha me contou (Clique para ampliar)
            </h3>
            <PhotoMosaic
              variant="grid"
              photos={[
                {
                  src: "/photos/espetaculos/passarinha-nina-197.webp",
                  alt: "Histórias que a Passarinha me contou (Foto: Nina Pires)",
                  caption: "Contação de histórias e música autoral — Foto: Nina Pires",
                },
                {
                  src: "/photos/espetaculos/passarinha-teia-2.webp",
                  alt: "Episódio Terra no Espaço Teia (Foto: Mauro Machado)",
                  caption: "Episódio Terra — Foto: Mauro Machado",
                },
                {
                  src: "/photos/espetaculos/passarinha-teia-6.webp",
                  alt: "Interação e brincar livre no Espaço Teia (Foto: Mauro Machado)",
                  caption: "Episódio Água e livre brincar — Foto: Mauro Machado",
                },
                {
                  src: "/photos/espetaculos/passarinha-ccbb.webp",
                  alt: "Apresentação no CCBB (Foto: Camila Cequetin)",
                  caption: "Circulação no CCBB — Foto: Camila Cequetin",
                },
                {
                  src: "/photos/espetaculos/passarinha-camila.webp",
                  alt: "Público e vivência cênica (Foto: Camila Cequetin)",
                  caption: "Encontros intergeracionais — Foto: Camila Cequetin",
                },
              ]}
            />
          </div>

          {/* Botões de Contratação */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20espet%C3%A1culo%20Hist%C3%B3rias%20que%20a%20Passarinha%20me%20contou."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
              Contratar via WhatsApp
            </a>
            <Link
              href="/contato?interesse=Hist%C3%B3rias%20que%20a%20Passarinha%20me%20contou"
              className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs sm:text-sm px-6 py-3"
            >
              Solicitar Proposta por E-mail
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PLÁSTICO, UM MITO CONTEMPORÂNEO (Roxo Acrílico - TEXTO INTEGRAL DO DOC)
         ===================================================================== */}
      <section
        id="plastico-um-mito-contemporaneo"
        className="scroll-mt-36 canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Cabeçalho */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#FDBC2E] text-[#3A1D40]">
                Teatro-Fórum & Palestra-Performance
              </span>
              <span className="text-xs font-black text-[#3A1D40] bg-[#FDF6E4] px-3.5 py-1 rounded-lg">
                Mais de 6 mil espectadores em 4 países
              </span>
            </div>

            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  {plasticoShow?.title || "Plástico, um mito contemporâneo"}
                  <AdminEditLink
                    collection="espetaculos"
                    slug="plastico-um-mito-contemporaneo"
                    field="Título do Espetáculo"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
            </div>
          </div>

          {/* Sinopse + Ficha Técnica + Foto Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#FDBC2E]">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="espetaculos"
                  slug="plastico-um-mito-contemporaneo"
                  field="Apresentação, Sinopse e Rider Técnico"
                  label="Editar texto"
                />
              </div>
              {plasticoShow?.content && plasticoShow.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={plasticoShow.content}
                  theme="purple"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <p className="text-base sm:text-lg text-[#FDBC2E] leading-relaxed font-semibold">
                  Esse espetáculo propõe uma ginástica do imaginar, até culminar
                  em um exercício coletivo de imaginação. Enquanto nos divertimos,
                  vamos tentar olhar a tragédia nos olhos, perceber algo que
                  sustenta nosso estilo de vida mas que é quase invisível. Vamos
                  encontrar personagens humanas e não-humanas. Máscaras sociais e
                  teatrais. Convites ao nosso imaginário, para viagens no tempo e
                  na história dessa matéria tão abundante, comum e mágica: o
                  plástico. O plástico que estrutura nossas ações cotidianas e a
                  tragédia contemporânea do consumo: serão superáveis?
                </p>
              )}

              {/* Ficha Técnica */}
              <div className="pt-4 border-t-2 border-[#FDBC2E]/30 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#FDBC2E]">
                  Ficha Técnica
                  <AdminEditLink
                    collection="espetaculos"
                    slug="plastico-um-mito-contemporaneo"
                    field="Ficha Técnica"
                    label="Editar ficha"
                  />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { label: "Pesquisa e criação", value: "Pamella Villanova" },
                    {
                      label: "Assistência de direção e de dramaturgia",
                      value: "Dudu Ferraz",
                    },
                    {
                      label: "Orientação",
                      value:
                        "Gina Monge Aguilar (Costa Rica), Veronica Fabrini (Brasil) e Victoria Perez Royo (Espanha)",
                    },
                    {
                      label: "Figurino",
                      value: "Sarah Gregório e Coletivo Passarinha",
                    },
                    {
                      label:
                        "Consultoria em acessibilidade e descrição integrada",
                      value: "Maíra Schiavinato Massei e Lucas Carvalho Ré",
                    },
                  ].map((it, idx) => (
                    <div
                      key={idx}
                      className="bg-[#241128]/80 p-3 rounded-lg border border-[#FDBC2E]/30 text-[#FDF6E4]"
                    >
                      <span className="font-black text-[#FDBC2E] block uppercase text-[11px]">
                        {it.label}
                      </span>
                      <span className="font-bold text-[#FDF6E4]">
                        {it.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://www.instagram.com/p/DYkglu_DTpk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#FDBC2E] hover:text-white hover:underline transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Assistir matéria da TV Unicamp no Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/plastico-dalton-028.webp"
                  alt="Pamella Villanova em Plástico, um mito contemporâneo (Foto: Dalton Sala)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/plastico-dalton-054.webp"
                  alt="Objetos cênicos e plásticos reaproveitados em cena (Foto: Dalton Sala)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* SOBRE A OBRA — Todas as 5 Subseções Integrais do Doc com Fotos Intercaladas */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
              Sobre a obra
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Encenação */}
              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                  Encenação
                </h4>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  A concepção geral do projeto envolve reduzir a geração de
                  resíduos ao longo do processo de criação, ensaios e
                  apresentações.
                </p>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  Os objetos cênicos do espetáculo estão compostos por materiais
                  reutilizados ou de segunda mão e são explorados em cena de
                  modo a adquirir muitos significados durante os jogos cênicos.
                  São utilizados, ainda, alguns objetos encontrados no local ou
                  nas proximidades do espaço de apresentação.
                </p>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  Também se considera o transporte dos materiais, por isso os
                  objetos do espetáculo podem ser levados em uma mochila,
                  técnica que se mostra potente quando se considera a ocupação
                  do espaço cênico como uma oportunidade de revelar aspectos do
                  próprio espaço no tempo presente das artes vivas.
                </p>
              </div>

              {/* Interpretação + Teatro fórum */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                    Interpretação
                  </h4>
                  <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                    A interpretação está baseada no comprometimento com a
                    comunicação com a plateia. Mais do que defender uma ideia ou
                    se apresentar como uma especialista, a atuação está
                    trabalhando pela democratização, pelo acesso aos conteúdos e
                    também aos códigos teatrais. Assim aspectos de mediação
                    teatral fazem parte da interpretação, com interações,
                    improvisações e escuta ativa. A atuação joga com as
                    convenções teatrais, entre personagens e narrações.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                    Teatro fórum
                  </h4>
                  <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                    Durante todo o espetáculo o público é convidado a imaginar.
                    Pamella faz isso de maneira sutil, engraçada e respeitosa.
                    Aos poucos vai aumentando a complexidade dos convites para a
                    imaginação. O espetáculo termina com um convite à imaginação
                    política, em um fórum teatral sobre a problemática
                    apresentada ao longo da obra. A audiência é convocada a
                    imaginar personagens e discursos para uma interação ainda
                    mais surpreendente entre palco e plateia.
                  </p>
                </div>
              </div>

              {/* Necessidades Técnicas */}
              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                  Necessidades Técnicas
                </h4>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  O espetáculo foi criado para circular por diversos contextos
                  possíveis, desde teatros, caixas pretas até espaços
                  alternativos como auditórios ou salas, desde que seja um
                  espaço fechado.
                </p>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  Para a cenografia, será necessário: uma mesa, uma cadeira e
                  uma tomada 110V ou 220V. Além dos elementos que a atriz
                  carrega em uma mala.
                </p>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  Para a sonorização, será necessário ligar o notebook do palco,
                  via cabo p2 ou bluetooth.
                </p>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  Se houver iluminação cênica disponível, entrar em contato com
                  a produção para envio do mapa de luz.
                </p>
              </div>

              {/* Acessibilidade */}
              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                  Acessibilidade
                </h4>
                <p className="text-base sm:text-lg text-[#FDF6E4] leading-relaxed font-medium">
                  A descrição das imagens e ações principais do espetáculo fazem
                  parte da dramaturgia, estão integradas ao texto enunciado pela
                  atriz. Assim, um recurso inicialmente voltado para incluir
                  pessoas com deficiência visual, passa a ser uma estratégia que
                  convida todas as pessoas a se demorar nas imagens e seus
                  muitos significados. A descrição integrada das imagens contou
                  com a consultoria de Maíra Schiavinato Massei e Lucas Carvalho
                  Ré, ambas pessoas com deficiência visual.
                </p>
              </div>
            </div>
          </div>

          {/* HISTÓRICO COMPLETO (Todos os 6 parágrafos integrais do Doc + Fotos Intercaladas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/plastico-luiz-50.webp"
                  alt="Interação com o público em Plástico (Foto: Luiz Kauê)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/plastico-cena-1.webp"
                  alt="Cena do espetáculo Plástico, um mito contemporâneo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/plastico-cena-2.webp"
                  alt="Teatro-fórum em Plástico, um mito contemporâneo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#FDBC2E] leading-relaxed font-medium">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#FDBC2E]">
                Histórico
              </h3>
              <p className="font-bold text-base sm:text-lg text-white">
                Desde sua estreia em 2023, mais de 6 mil pessoas já assistiram
                ao espetáculo.
              </p>
              <p>
                A obra vem sendo construída há anos, a partir de pesquisa de
                doutorado em Artes da Cena na Unicamp, com pequenas intervenções
                no XIV Feverestival (Festival Internacional de Teatro de
                Campinas) em 2022 e junto ao Sindipetro (Sindicato dos
                Petroleiros).
              </p>
              <p>
                Em abril de 2023 estreia na Universidade de Zaragoza, na
                Espanha; e circula pelas cidades de Madrid, nos espaços La
                Horizontal e Esquina Nua; em Barcelona no Festival Tudanza;
                Algairén no Festival Regenera; e em Granada nos encontros Jiffi
                da Universidade de Granada.
              </p>
              <p>
                No Brasil, iniciou sua apresentações em espaços acadêmicos ou de
                interesse ambiental, como por exemplo o Encontro de Divulgação
                Científica e Cultural da Unicamp; I Semana Lixo Zero de
                Campinas; Unicamp de portas aberta (Museu de Ciências da
                Unicamp) e em evento de divulgação científica do Instituto de
                Física da Unicamp. Em 2024, recebe premiação no Festival de
                Teatro de Mogi Guaçu como Melhor Atriz. Em 2024 vem realizando
                circulação pelo interior de São Paulo junto ao Instituto Orizon
                Social, em diversos espaços, tais como: aterro sanitário de
                Paulínia, Teatro Municipal de Itapevi, UNESP Sorocaba e junto à
                Secretaria de Educação de Tremembé. Se apresentou na PUC
                Campinas e na UDESC em Florianópolis, compondo a programação do
                Seminário Fazendo Gênero 13. Circulou pela baixada fluminense,
                no Rio de Janeiro e pela Região Metropolitana de Recife, em
                Jaboatão dos Guararapes, dialogando com secretarias de meio
                ambiente e espaços de educação, em cidades que tem aterro
                sanitário em seus territórios. Ainda em 2024, realizou curta
                temporada no Ponto de Cultura Quintal Garatuja.
              </p>
              <p>
                Em 2025, se apresentou no SESC Presidente Prudente, parte da
                Feira de Pequenos Produtores da entidade. Também esteve em
                canteiros de obras e fábricas pelo estado de São Paulo. Compôs a
                programação do II ELLAS - Encuento de Artistas Latinoamericanas,
                em Cali, na Colômbia; do 37º SLAMC - Semana Luiz Antônio
                Martinez Corrêa, em Araraquara; do Encontro Nacional de
                Engenharia Química, na UNICAMP; e do Quizomba - festival de
                culturas populares de Londrina/PR. Em 2026, segue em circulação
                pelo Brasil, passando pelo Centro Cultural Cariri no Ceará,
                Teatro Galpão em Minas Gerais, Teatro Municipal de São Gonçalo
                no Rio de Janeiro e em Aparecida de Goiânia, em Goiás. Se
                apresentou também no Festival de Teatro Científico do Instituto
                Principia em São Paulo; no Pontão de Cultura Garapa em
                Piracicaba, no FESTA - Festival Santista de Teatro de Santos e
                na Escola Internacional de Microplásticos da UFSCAR, Unicamp e
                FAPESP.
              </p>
              <p className="font-bold text-white">
                O espetáculo &ldquo;Plástico: um mito contemporâneo&rdquo; busca
                circular nos mais diferentes espaços como centros culturais,
                teatros, escolas e instituições com o objetivo de comunicar com
                seu público: todas as pessoas que se relacionam com o plástico.
              </p>
            </div>
          </div>

          {/* Contatos Diretos de Contratação */}
          <div className="painel-rustico-roxo p-6 sm:p-8 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FDBC2E]">
              Contato — Plástico, um mito contemporâneo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <strong className="text-base block text-[#FDBC2E]">
                  Pesquisa: Pamella Villanova
                </strong>
                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-4 h-4 text-[#FDBC2E]" />
                  <a
                    href="mailto:pamellavillanova@gmail.com"
                    className="hover:text-[#FDBC2E] font-semibold"
                  >
                    pamellavillanova@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FDBC2E]" />
                  <a
                    href="https://wa.me/5519992510921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FDBC2E] font-semibold"
                  >
                    +55 19 99251-0921
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <strong className="text-base block text-[#FDBC2E]">
                  Vendas e Produção Executiva: Dudu Ferraz
                </strong>
                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-4 h-4 text-[#FDBC2E]" />
                  <a
                    href="mailto:luizeduardo.rferraz@gmail.com"
                    className="hover:text-[#FDBC2E] font-semibold"
                  >
                    luizeduardo.rferraz@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FDBC2E]" />
                  <a
                    href="https://wa.me/5519996842051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FDBC2E] font-semibold"
                  >
                    +55 19 99684-2051
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HISTÓRIAS DO BOSQUE DOS GUARANTÃS (Laranja Acrílico - TEXTO INTEGRAL DO DOC)
         ===================================================================== */}
      <section
        id="historias-do-bosque-dos-guarantas"
        className="scroll-mt-36 canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Cabeçalho */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
                Intervenção Cênica, Música & Memória Ambiental
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#3A1D40] font-black">
                <span className="flex items-center gap-1 bg-[#FDF6E4] px-3 py-1 rounded-lg border border-[#3A1D40]/25 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#E91C47]" /> Aprox. 1h30
                </span>
                <span className="bg-[#FDF6E4] px-3 py-1 rounded-lg border border-[#3A1D40]/25 shadow-sm">
                  Para pessoas de todas as idades
                </span>
              </div>
            </div>

            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                  {guarantasShow?.title || "Histórias do Bosque dos Guarantãs"}
                  <AdminEditLink
                    collection="espetaculos"
                    slug="historias-do-bosque-dos-guarantas"
                    field="Título do Espetáculo"
                    label="Editar título"
                  />
                </h2>
              </BrushBanner>
              <p className="text-lg sm:text-2xl font-black text-[#2A1230] mt-2">
                Um passeio turístico, cultural e ambiental
                <AdminEditLink
                  collection="espetaculos"
                  slug="historias-do-bosque-dos-guarantas"
                  field="Subtítulo / Chamada"
                  label="Subtítulo"
                />
              </p>
            </div>
          </div>

          {/* Bloco 1: 3 Parágrafos Iniciais + Fotos de Interações */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <div className="flex justify-end">
                <AdminEditLink
                  collection="espetaculos"
                  slug="historias-do-bosque-dos-guarantas"
                  field="Apresentação, Sinopse e Rider Técnico"
                  label="Editar texto"
                />
              </div>
              {guarantasShow?.content && guarantasShow.content.length > 0 ? (
                <CustomDocumentRenderer
                  document={guarantasShow.content}
                  theme="yellow"
                  className="text-base sm:text-lg leading-relaxed font-medium"
                />
              ) : (
                <>
                  <p>
                    Criado por <strong className="font-bold">Dudu Ferraz</strong> e{" "}
                    <strong className="font-bold">Pamella Villanova</strong>,
                    integrantes do Ponto de Cultura Quintal Garatuja, localizado à
                    700 metros do Bosque dos Guarantãs, esse projeto nasce em 2022
                    com a intenção de valorizar as memórias de nossos territórios,
                    mas também os espaços de preservação ambiental tão importantes e
                    necessários nas áreas urbanas. Durante o período de isolamento
                    social, ocasionado pela pandemia da Covid19 a dupla constatou
                    que os espaços verdes como parques e bosques se tornaram
                    refúgios de calma e respiro para a população das cidades.
                  </p>
                  <p>
                    O projeto começou com escutas de relatos da comunidade do
                    bairro, junto de pesquisa histórica e documentos oficiais a
                    respeito do Bosque dos Guarantãs. O propósito era reunir
                    material para servir de base para a criação de uma intervenção
                    artística naquele espaço comum e tão importante para a
                    comunidade local.
                  </p>
                  <p>
                    O resultado desse processo foi a realização do passeio turístico
                    e cultural &ldquo;Histórias do Bosque dos Guarantãs&rdquo; com
                    jogos, histórias, música e teatro em que são compartilhadas as
                    memórias, curiosidades e contradições encontradas no processo de
                    pesquisa.
                  </p>
                </>
              )}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/bosque-dalton-029.webp"
                  alt="Passeio Histórias do Bosque dos Guarantãs (Foto: Dalton Sala)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/bosque-dalton-079.webp"
                  alt="Interações com o público no Bosque dos Guarantãs (Foto: Dalton Sala)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: Fotos à Esquerda + Placas & Trajeto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/bosque-dalton-081.webp"
                  alt="Cenas e músicas no Bosque dos Guarantãs (Foto: Dalton Sala)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/espetaculos/bosque-plantio-41.webp"
                  alt="Plantio comunitário e placas no Bosque dos Guarantãs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                O ponto de Cultura Quintal Garatuja também produziu e instalou
                07 placas informativas no local, com a ideia de compor o
                inventário turístico do Bosque. As primeiras placas foram
                produzidas com madeira crua reutilizada. Três anos depois,
                conquistamos a instalação de placas turísticas oficiais por
                parte da Prefeitura Municipal de Campinas.
              </p>
              <p className="font-bold text-[#E91C47]">
                A história do Bosque está marcada, de forma perene, para todas
                as pessoas que visitam o lugar.
              </p>
              <p>
                Com duração de aproximadamente 1 hora e 30 minutos, essa
                atividade é voltada para pessoas de todas as idades. Durante o
                trajeto, a dupla de artistas apresenta diversas cenas teatrais e
                músicas, criadas a partir da pesquisa sobre o bosque, cuja
                história está diretamente relacionada com a criação do bairro
                Jd. Nova Europa.
              </p>
              <p>
                Ao contar a história do bosque, contamos a história do bairro,
                da nossa cidade e, porque não, a história do mundo. Juntando
                teatro, música, histórias, jogos e educação ambiental, este
                projeto propõe para artistas e público uma nova relação com
                aquele espaço, buscando reconhecer a riqueza em um local de
                resiliência, que além de proteger diversas espécies de vida,
                ainda guarda nascentes de água em meio à cidade.
              </p>
            </div>
          </div>

          {/* Galeria Completa do Bosque dos Guarantãs */}
          <PhotoMosaic
            variant="grid"
            photos={[
              {
                src: "/photos/espetaculos/bosque-dalton-029.webp",
                alt: "Passeio cênico e musical no Bosque dos Guarantãs (Foto: Dalton Sala)",
                caption: "Histórias do Bosque dos Guarantãs — Foto: Dalton Sala",
              },
              {
                src: "/photos/espetaculos/bosque-dalton-079.webp",
                alt: "Dudu Ferraz e Pâmella Villanova em cena no bosque (Foto: Dalton Sala)",
                caption: "Músicas e cenas criadas a partir da memória do bairro — Foto: Dalton Sala",
              },
              {
                src: "/photos/espetaculos/bosque-dalton-081.webp",
                alt: "Público caminhando pelo Bosque dos Guarantãs (Foto: Dalton Sala)",
                caption: "Educação ambiental e pertencimento comunitário — Foto: Dalton Sala",
              },
              {
                src: "/photos/espetaculos/bosque-dalton-108.webp",
                alt: "Roda final sob as árvores do Bosque dos Guarantãs (Foto: Dalton Sala)",
                caption: "Encontro intergeracional sob a mata nativa — Foto: Dalton Sala",
              },
              {
                src: "/photos/espetaculos/bosque-plantio-41.webp",
                alt: "Ação de plantio comunitário no Bosque dos Guarantãs",
                caption: "Plantio comunitário e cuidado com as nascentes",
              },
              {
                src: "/photos/espetaculos/bosque-plantio-64.webp",
                alt: "Comunidade reunida no Bosque dos Guarantãs",
                caption: "Preservação ecológica e memória viva em Campinas/SP",
              },
            ]}
          />
        </div>
      </section>

      {/* =====================================================================
          4. SHOW NASCENTE (Vermelho Acrílico)
         ===================================================================== */}
      <section
        id="show-nascente"
        className="scroll-mt-36 canvas-vermelho py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-wrap items-center gap-5">
            <div className="relative w-28 h-20 bg-[#FDF6E4] p-2 rounded-xl border border-[#3A1D40]/25 shadow-lg shrink-0">
              <Image
                src="/photos/espetaculos/nascente-logo.webp"
                alt="Logo Show Nascente"
                fill
                sizes="112px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E] mb-2">
                Show Musical Autoral
              </span>
              <div>
                <BrushBanner color="yellow" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#532E5A]">
                    {nascenteShow?.title || "Show Nascente"}
                    <AdminEditLink
                      collection="espetaculos"
                      slug="show-nascente"
                      field="Título do Espetáculo"
                      label="Editar título"
                    />
                  </h2>
                </BrushBanner>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl text-[#FDF6E4]">
            <div className="flex justify-end">
              <AdminEditLink
                collection="espetaculos"
                slug="show-nascente"
                field="Apresentação, Sinopse e Rider Técnico"
                label="Editar texto"
              />
            </div>
            {nascenteShow?.content && nascenteShow.content.length > 0 ? (
              <CustomDocumentRenderer
                document={nascenteShow.content}
                theme="crimson"
                className="text-base sm:text-xl leading-relaxed font-semibold"
              />
            ) : (
              <p className="text-base sm:text-xl text-[#FDF6E4] leading-relaxed font-semibold">
                Espetáculo musical do Coletivo Passarinha com direção musical e
                composições de Dudu Ferraz, celebrando a canção brasileira, a
                poesia, os cursos d&apos;água e a força dos encontros no palco.
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/5519996842051?text=Ol%C3%A1!%20Gostaria%20de%20informações%20sobre%20o%20Show%20Nascente."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm px-6 py-3"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                Contratar Show Nascente via WhatsApp
              </a>
            </div>
          </div>

          <PhotoMosaic
            variant="editorial"
            photos={[
              {
                src: "/photos/espetaculos/nascente-will-132.webp",
                alt: "Show Nascente em apresentação ao vivo (Foto: William Lima)",
                caption: "Show Nascente — Foto: William Lima",
              },
              {
                src: "/photos/espetaculos/nascente-will-148.webp",
                alt: "Banda reunida no palco do Show Nascente (Foto: William Lima)",
                caption: "Arranjos coletivos e presença cênica — Foto: William Lima",
              },
              {
                src: "/photos/espetaculos/nascente-will-235.webp",
                alt: "Performance musical no Show Nascente (Foto: William Lima)",
                caption: "Celebração da música autoral brasileira — Foto: William Lima",
              },
              {
                src: "/photos/espetaculos/nascente-dara.webp",
                alt: "Show Nascente (Foto: Dara Carvalho)",
                caption: "Registro de cena — Foto: Dara Carvalho",
              },
              {
                src: "/photos/espetaculos/nascente-dudu.webp",
                alt: "Dudu Ferraz no Show Nascente",
                caption: "Dudu Ferraz — Voz, violão e direção artística",
              },
              {
                src: "/photos/espetaculos/nascente-dudu-paulo.webp",
                alt: "Dudu e Paulo em apresentação do Show Nascente",
                caption: "Encontro musical no palco do Show Nascente",
              },
            ]}
          />
        </div>
      </section>

      {/* Espetáculos Adicionais Cadastrados no Keystatic CMS */}
      {extraShows.length > 0 && (
        <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase px-3.5 py-1 rounded-lg tracking-wider bg-[#3A1D40] text-[#FDBC2E]">
                Mais Espetáculos em Repertório
              </span>
              <div>
                <BrushBanner color="crimson" shape="wave" className="-ml-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                    Novas Criações
                  </h2>
                </BrushBanner>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {extraShows.map((show) => (
                <div
                  key={show.id}
                  id={show.id}
                  data-admin-section
                  className="painel-rustico p-7 sm:p-9 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase px-3 py-1 rounded-lg bg-[#3A1D40] text-[#FDBC2E]">
                        {show.category}
                      </span>
                      <span className="text-xs font-black text-[#3A1D40] bg-[#FDBC2E]/30 px-3 py-1 rounded-lg">
                        {show.duration} • {show.ageRating}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#E91C47] uppercase">
                      {show.title}
                      <AdminEditLink
                        collection="espetaculos"
                        slug={show.id}
                        field="Título do Espetáculo"
                        label="Editar"
                      />
                    </h3>
                    {show.subtitle && (
                      <p className="text-sm font-bold text-[#532E5A] italic">
                        {show.subtitle}
                      </p>
                    )}
                    {show.content && show.content.length > 0 ? (
                      <CustomDocumentRenderer
                        document={show.content}
                        theme="yellow"
                        className="text-sm sm:text-base leading-relaxed"
                      />
                    ) : (
                      <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed">
                        {show.synopsis}
                      </p>
                    )}
                  </div>

                  {show.photos && show.photos.length > 0 && (
                    <PhotoMosaic photos={show.photos} variant="grid" />
                  )}

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20uma%20proposta%20para%20o%20espet%C3%A1culo%20${encodeURIComponent(
                        show.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-foca bg-[#25D366] hover:bg-[#20ba59] text-white text-xs px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                      Solicitar via WhatsApp
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
