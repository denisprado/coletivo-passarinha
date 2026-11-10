import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTeamMembers } from "@/lib/keystatic";
import {
  Users,
  Sparkles,
  ExternalLink,
  Music,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata: Metadata = {
  title: "Quem Somos & Histórico | Coletivo Passarinha",
  description:
    "Conheça a trajetória completa do Coletivo Passarinha desde 2014, nossas pesquisas em arte, educação ambiental e as artistas e criadores integrantes.",
  openGraph: {
    title: "Quem Somos & Histórico | Coletivo Passarinha",
    description:
      "Conheça a trajetória do Coletivo Passarinha desde 2014, nossas artistas, pesquisas e atuações.",
    images: [{ url: "/photos/historico/inicio-1.webp" }],
  },
};

interface HistoricalBlock {
  period: string;
  title: string;
  paragraphs: string[];
  photos: { src: string; alt: string; caption?: string }[];
}

const FULL_HISTORY_BLOCKS: HistoricalBlock[] = [
  {
    period: "2014 – 2015",
    title: "Fundação, Grafite na Praça & Estação Permacultural Móvel (Kombi Safari)",
    paragraphs: [
      "Somos o Coletivo Interdisciplinar Passarinha, artistas da cena, música, design e permacultura. Há anos, realizamos ações de arte educação ambiental em projetos itinerantes e também conservando relações com territórios. Trabalhamos com e para crianças de zero a cem anos. Também discutimos bastante sobre as problemáticas relacionadas ao lixo e essa sociedade do consumo e do descarte - que nos apavora.",
      "Fundado em 2014, Coletivo Passarinha promoveu sua primeira ação em Campinas/SP: o evento “Grafite na praça”, uma intervenção artística como preparação para a jornada artística que aconteceu no ano seguinte a bordo de uma Kombi grafitada.",
      "Em 2015, a Passarinha colocou na estrada sua Estação Permacultural Móvel, uma Kombi Safari 1980 transformada em casa e laboratório itinerante de experiências permaculturais. Equipada com tecnologias de baixo impacto, como energia solar, forno solar, minhocário, banheiro seco e sistemas de aproveitamento de recursos, a Kombi foi o ponto de partida para uma jornada de criação, aprendizado e compartilhamento de práticas voltadas a modos de vida mais harmônicos com o meio ambiente.",
    ],
    photos: [
      {
        src: "/photos/historico/inicio-1.webp",
        alt: "Kombi Safari Estação Permacultural Móvel do Coletivo Passarinha",
        caption: "Estação Permacultural Móvel — Kombi Safari 1980 na estrada",
      },
      {
        src: "/photos/historico/inicio-2.webp",
        alt: "Início da jornada itinerante do Coletivo Passarinha",
        caption: "2014–2015 — Intercâmbios artísticos e permaculturais pelo Brasil",
      },
    ],
  },
  {
    period: "2015",
    title: "Mais de 40 Ações na Estrada & Nascimento das Oficinas “Jogar Dentro”",
    paragraphs: [
      "De janeiro a novembro de 2015, foram realizadas mais de quarenta ações artísticas e pedagógicas, de forma independente, pelas cidades por onde a Passarinha passou. Práticas de palhaçaria, brincadeiras e reutilização de materiais foram estruturadas em oficinas chamadas “Jogar Dentro”, promovendo reflexão acerca da cultura do consumo e do descarte, brincando.",
    ],
    photos: [
      {
        src: "/photos/historico/jogar-dentro-1.webp",
        alt: "Primeiras oficinas Jogar Dentro em 2015",
        caption: "2015 — Oficinas Jogar Dentro pelas cidades do percurso",
      },
    ],
  },
  {
    period: "2016",
    title: "Projeto “Oficinas Cortejo” (Ceará, São Paulo e Paraná)",
    paragraphs: [
      "O projeto “Oficinas Cortejo” aconteceu em 2016 com financiamento via Lei Rouanet, pelos estados do Ceará, São Paulo e Paraná. Foram quatro oficinas na comunidade quilombola Córrego de Ubaranas, em Aracati (CE), na comunidade Sussuí em Palmital (SP), em Porecatu (PR) e na Vila Cultural ALMA, em Londrina (PR). Cada grupo definiu, em parceria com as arte educadoras, os temas que queriam cortejar e assim foram criados os cortejos apresentados para as comunidades, utilizando material reaproveitado para construção de instrumentos musicais e alegorias.",
    ],
    photos: [
      {
        src: "/photos/historico/oficina-cortejo-4.webp",
        alt: "Oficinas Cortejo em 2016",
        caption: "Oficinas Cortejo — Instrumentos e alegorias com materiais reaproveitados",
      },
      {
        src: "/photos/historico/oficina-cortejo-6.webp",
        alt: "Cortejo comunitário de 2016",
        caption: "Apresentação coletiva nas comunidades (CE, SP e PR)",
      },
    ],
  },
  {
    period: "2017 – 2018",
    title: "Arte-Educação Ambiental e Permacultura no Ceará (CREDE 4 e IFCE Camocim)",
    paragraphs: [
      "Durante 2017 e 2018, foram realizadas diversas atividades voluntárias de arte educação ambiental em parceria com a Coordenadoria Regional de Desenvolvimento Educação- CREDE 4 da Secretaria da Educação do Governo Estadual do Ceará e Instituto Federal do Ceará – Campus de Camocim.",
    ],
    photos: [
      {
        src: "/photos/historico/permacultura-1.webp",
        alt: "Vivências de Permacultura no Ceará",
        caption: "Permacultura e arte-educação ambiental no Ceará",
      },
      {
        src: "/photos/historico/permacultura-4.webp",
        alt: "Ações educativas e permaculturais na Morada",
        caption: "Práticas colaborativas junto a estudantes e educadores",
      },
    ],
  },
  {
    period: "2016 – 2019",
    title: "Gestão do Ponto de Cultura Quintal Garatuja & Lei Cultura Viva",
    paragraphs: [
      "Desde 2016, a Passarinha faz a gestão de um espaço cultural na cidade de Campinas/SP. Entre os focos das pesquisas-ações realizadas no Ponto de Cultura Quintal Garatuja, destacam-se: a formação teatral e mediação cultural, a educação ambiental, a difusão musical, a acessibilidade cultural, a construção e fortalecimento de redes de artistas, a valorização da cultura popular e o pertencimento à cidade de Campinas, com ações de identificação com os patrimônios naturais, materiais, imateriais e suas histórias.",
      "Em 2019, o Garatuja foi contemplado com um projeto via Lei Cultura Viva, pela Prefeitura de Campinas, na ocasião, foram promovidas mais de 30 ações envolvendo teatro e brincadeiras, articulando a rede com outros Pontos de Cultura, escolas municipais, artistas e coletivos parceiros, em diversos espaços. Apresentações teatrais, convites para o livre brincar, ações formativas para educadoras e eventos abertos à comunidade foram desenvolvidos fortalecendo a presença da arte educação no território vizinho do Ponto de Cultura.",
    ],
    photos: [
      {
        src: "/photos/garatuja/principal-primeiro-evento.webp",
        alt: "Ponto de Cultura Quintal Garatuja em Campinas/SP",
        caption: "Quintal Garatuja — Encontros artísticos e comunitários desde 2016",
      },
    ],
  },
  {
    period: "Desde 2018",
    title: "Circulação de “Histórias que a Passarinha me contou”",
    paragraphs: [
      "O projeto “Histórias que a Passarinha me contou”, juntando contação de histórias, música autoral e convites para brincar, desde 2018 se apresenta em diversas escolas, espaços culturais, festivais e eventos em geral. A obra já circulou por diversos contextos, entre SESCs do interior de São Paulo, pelos estados do Ceará, Piauí e também na cidade de Cali/ Colombia.",
    ],
    photos: [
      {
        src: "/photos/espetaculos/passarinha-nina-197.webp",
        alt: "Histórias que a Passarinha me contou",
        caption: "Histórias que a Passarinha me contou — Circulação nacional e internacional",
      },
    ],
  },
  {
    period: "2020 – 2021",
    title: "Residência Passarinhas (Feverestival) & Mostra Brincando na Rede",
    paragraphs: [
      "Em 2020, foi promovida a Residência Passarinhas, parte do FEVERESTIVAL, Festival Internacional de Teatro de Campinas, em parceria com escola de Ed. Infantil da rede Municipal de Ensino de Campinas, na qual foram desenvolvidas poéticas de reflexão sobre o descarte e reutilização de recicláveis. Tal ação resultou em um dia de evento na escola junto de crianças e famílias, além de planos para futuras formações.",
      "Desde 2016, o Coletivo Passarinha faz a gestão do Ponto de Cultura Quintal Garatuja, na cidade de Campinas/SP. Desde sua inauguração, tem como missão a articulação de redes de artistas e públicos, a atenção ao território e inclusão de crianças, mulheres e pessoas com deficiências.",
      "Nos últimos anos, o Garatuja e o Coletivo Passarinha realizaram diversos projetos de continuidade em sua sede, em articulação com outros Pontos de Cultura e entidades relacionadas às artes e meio ambiente.",
      "Em 2021, produziu a plataforma digital Brincando na rede, que reuniu curta metragens criados por coletivos de arte e cultura, oferecendo programação de qualidade para crianças e famílias durante o isolamento na pandemia de COVID-19. As obras foram criadas em residência artística, tendo como provocação transversal o estudo em acessibilidade comunicacional.",
      "Desde então, estudos e práticas em acessibilidade fazem parte do trabalho em continuidade do Garatuja e do Coletivo Passarinha. São obras de arte e práticas formativas que promovem ampliação e aprofundamento de ferramentas poéticas de inclusão e acessibilidade.",
    ],
    photos: [
      {
        src: "/photos/historico/feverestival-2.webp",
        alt: "Residência Passarinhas no Feverestival",
        caption: "2020 — Residência Passarinhas no Feverestival",
      },
      {
        src: "/photos/audiovisual/caixa-magica-1.webp",
        alt: "Brincando na Rede — A Caixa Mágica",
        caption: "2021 — Plataforma digital Brincando na Rede com acessibilidade",
      },
    ],
  },
  {
    period: "2022 – 2028",
    title: "Formação Gratuita, Mostras Artísticas & Histórias do Bosque dos Guarantãs",
    paragraphs: [
      "Entre 2022 e 2028, o Garatuja oferece cursos de teatro gratuitos, além de formações de curta duração em Acessibilidade Cultural, práticas em dança, música e primeiros socorros. Além de promover mostras artísticas como Show de Variedades, Nosso Canto e apresentações de teatro e música em sua sede e também em parceria com outros espaços como a rede municipal de ensino de Campinas, o Bosque dos Guarantãs e outros Pontos de Cultura do país.",
      "Desde 2022, promovemos o passeio artístico-cultural Histórias do Bosque dos Guarantãs, que traz memórias sociais e de preservação de uma mata nativa em meio à cidade. A obra surgiu de uma profunda pesquisa com a comunidade e em meios oficiais. Ao longo dos anos, as sessões do passeio foram trazendo melhorias estruturais para o próprio bosque, em diálogo facilitado pelo Garatuja entre a população que frequenta o parque e a prefeitura, como a instalação de placas turísticas e de bebedouros de água gelada.",
    ],
    photos: [
      {
        src: "/photos/espetaculos/bosque-dalton-029.webp",
        alt: "Histórias do Bosque dos Guarantãs",
        caption: "Histórias do Bosque dos Guarantãs — Memória e preservação desde 2022",
      },
    ],
  },
  {
    period: "2021 – Hoje",
    title: "Orquestra de Pandeiros & Pesquisa em Educação Musical",
    paragraphs: [
      "Idealizado em 2021 e com duas realizações em 2022 por meio do Programa Municipal de Incentivo à Cultura (PROMIC – Londrina/PR), criamos o projeto Orquestra de Pandeiros. Como uma ação artístico-pedagógica de educação musical por meio do pandeiro, a proposta, de caráter intergeracional, surgiu como uma forma de retomada do fazer musical e da experiência coletiva após a pandemia de COVID-19.",
      "Em 2023, o projeto tornou-se objeto de investigação no curso de Mestrado em Música da UNICAMP, em Campinas/SP, passando a integrar o Programa UniversIDADE (50+), onde investiga a afetividade e o envolvimento musical de pessoas adultas e idosas.",
      "Atualmente, a Orquestra de Pandeiros desenvolve-se de forma itinerante, circulando por festivais, pontos de cultura, universidades e congressos de música. Entre suas participações destacam-se: CultSP, em Itararé/SP (E. E. Tomé Teixeira); Ponto de Cultura Quintal Garatuja, em Campinas/SP; Festival Obaxirê, em Maringá/PR; Congresso Regional Sul da ABEM (Associação Brasileira de Educação Musical), em Maringá/PR; aula para a graduação em Licenciatura em Música da UEL (Universidade Estadual de Londrina); aula para o Grupo deCanta, em Campinas/SP; e Congresso Internacional da ABEM, em Ouro Preto/MG.",
    ],
    photos: [
      {
        src: "/photos/oficinas/pandeiros-c1-1.webp",
        alt: "Orquestra de Pandeiros",
        caption: "Orquestra de Pandeiros — Educação musical intergeracional",
      },
      {
        src: "/photos/oficinas/pandeiros-c2-1.webp",
        alt: "Apresentação da Orquestra de Pandeiros",
        caption: "Circulação por festivais, universidades e congressos",
      },
    ],
  },
  {
    period: "2023 – 2026",
    title: "Plástico, um mito contemporâneo, Reciclarnaval & Ecobrinquedoteca",
    paragraphs: [
      "Em 2023, estreamos o espetáculo Plástico, um mito contemporâneo, uma palestra-performance que aborda a problemática da poluição plástica. A obra é parte da pesquisa de doutorado de Pamella Villanova em Artes da Cena na Unicamp. Reune tecnologias teatrais como teatro científico, mediação teatral e acessibilidade comunicacional. A peça já foi assistida por mais de 6 mil pessoas em 4 países diferentes.",
      "Durante o Carnaval de 2024, foi realizado o Reciclarnaval – Ateliê de Fantasias de Material Reaproveitado, no SESC Campinas (SP), oferecendo um ateliê de criação de fantasias e alegorias com material reaproveitado. A proposta promoveu um ateliê colaborativo no qual crianças e famílias participaram da criação de fantasias e adereços a partir de materiais reaproveitados. Ao longo da ação, foram produzidas mais de 800 peças, estimulando a experimentação artística, a criatividade e a reflexão sobre a cultura do consumo e do descarte por meio da criação e da brincadeira.",
      "A Ecobrinquedoteca Jogar Dentro se formaliza em 2024, a partir do projeto contemplado pelo PROMIC, em Londrina (PR), reunindo experiências que o Coletivo Passarinha vinha desenvolvendo desde 2015 com as oficinas Jogar Dentro, a criação de brinquedos a partir de materiais reaproveitados e as investigações sobre a cultura do brincar e do descarte. Em 2024, o projeto foi realizado na Escola Municipal Carlos Kraemer, envolvendo a construção coletiva de brinquedos para uso pessoal das crianças e para o acervo da escola.",
      "Em 2025, a Ecobrinquedoteca foi contemplada pela Política Nacional Aldir Blanc (PNAB), possibilitando sua circulação por diferentes eventos abertos ao público de Londrina, como o ECOH, a Dobra de Arte Impressa e o Festerê do MARL, além de espaços de convivência de Londrina. Essa trajetória consolidou a Ecobrinquedoteca como uma proposta de arte-educação ambiental que aproxima a Cultura do Brincar da experimentação artística, da ressignificação de materiais e da reflexão sobre o consumo e o descarte, ampliando as possibilidades de criação, convivência e aprendizagem.",
    ],
    photos: [
      {
        src: "/photos/espetaculos/plastico-dalton-028.webp",
        alt: "Plástico, um mito contemporâneo",
        caption: "2023 — Estreia internacional de Plástico, um mito contemporâneo",
      },
      {
        src: "/photos/historico/reciclarnaval-1.webp",
        alt: "Reciclarnaval no SESC Campinas",
        caption: "2024 — Reciclarnaval no SESC Campinas (+800 peças criadas)",
      },
      {
        src: "/photos/historico/ecobrinquedoteca-3.webp",
        alt: "Ecobrinquedoteca Jogar Dentro em Londrina",
        caption: "2024–2025 — Ecobrinquedoteca Jogar Dentro (PROMIC e PNAB)",
      },
    ],
  },
  {
    period: "2027 e Adiante",
    title: "Próxima Estreia Teatral: “Fora de onde?”",
    paragraphs: [
      "Para 2027, preparamos a estreia de nosso mais novo espetáculo, Fora de onde?, que aborda a problemática do lixo na cidade de Campinas, no Brasil e no mundo. A obra já estreou como longa metragem em 2022, com participação em festivais de cinema e indicação como melhor longa metragem no X FESTCINE Pinhais. Também faz parte da pesquisa de doutorado em Artes da Cena pela Unicamp de Pamella Villanova e terá uma breve temporada a ser realizada na cidade de Campinas em 2027.",
      "O Coletivo Passarinha trabalha em várias frentes e em diferentes territórios. Somos uma plataforma de criação e circulação, que tem a inclusão e atenção às urgências socioambientais como temáticas transversais. Temos interesse em costurar nossas práticas de arte e cultura com os lugares e pessoas que cruzamos. Fazemos arte educação ambiental desde 2014.",
    ],
    photos: [
      {
        src: "/photos/audiovisual/fora-de-onde-cena.webp",
        alt: "Fora de onde? (Foto: Mauro Machado)",
        caption: "Fora de onde? — Nova montagem teatral prevista para 2027",
      },
    ],
  },
];

export default async function QuemSomosPage() {
  const teamMembers = await getTeamMembers();

  return (
    <main className="w-full overflow-x-hidden">
      {/* FAIXA 1 — TEXTO INTEGRAL DE APRESENTAÇÃO DO COLETIVO (Roxo Acrílico + Fotos Intercaladas) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40]">
              <Users className="w-4 h-4" /> Desde 2014 na Estrada
            </div>

            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  Coletivo Passarinha
                </h1>
              </BrushBanner>
            </div>
          </div>

          {/* Bloco 1: Parágrafos 1 a 4 do Doc + Fotos Iniciais */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                Desde 2014, o{" "}
                <strong className="font-black">Coletivo Passarinha</strong> atua
                como uma plataforma de criação, articulação e circulação
                artística, conectando linguagens, saberes, pessoas e
                territórios.
              </p>
              <p>
                Teatro, música, design, reutilização de materiais, contação de
                histórias, ações formativas e ambientais, brinquedos,
                artesanato, festivais e mostras culturais integram seu
                repertório plural, que ultrapassa as fronteiras entre as
                disciplinas e estabelece diálogos com as questões
                socioambientais contemporâneas.
              </p>
              <p>
                Com propostas destinadas a diferentes faixas etárias, o coletivo
                reconhece na educação, em suas múltiplas possibilidades, um
                campo estratégico para a experimentação, a troca de
                conhecimentos e a construção de novas formas de interação.
              </p>
              <p>
                De origem itinerante, o Coletivo Passarinha iniciou sua
                trajetória em 2014, quando suas fundadoras partiram de
                Campinas/SP em direção ao Nordeste, viajando de kombi e
                promovendo intercâmbios artísticos e culturais ao longo do
                percurso. Desde então, o coletivo mantém sua atuação voltada à
                conexão entre pessoas, linguagens e territórios. Atualmente, tem
                sede no Ponto de Cultura Quintal Garatuja, em Campinas/SP, a
                partir de onde articula e desenvolve projetos e ações que também
                alcançam outros estados brasileiros, como Ceará e Paraná,
                preservando sua vocação para a circulação artística, a
                experimentação e a construção de parcerias.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-1 bg-[#241128]">
                <Image
                  src="/photos/historico/inicio-1.webp"
                  alt="Kombi Safari do Coletivo Passarinha em 2014"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-2 bg-[#241128]">
                <Image
                  src="/photos/historico/permacultura-4.webp"
                  alt="Vivências de arte-educação ambiental do Coletivo Passarinha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2: Fotos à Esquerda + Parágrafos 5 a 8 do Doc à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="relative aspect-[16/10] foto-organica-3 bg-[#241128]">
                <Image
                  src="/photos/historico/oficina-cortejo-4.webp"
                  alt="Oficinas Cortejo do Coletivo Passarinha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] foto-organica-4 bg-[#241128]">
                <Image
                  src="/photos/historico/reciclarnaval-2.webp"
                  alt="Reciclarnaval SESC Campinas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 painel-rustico p-7 sm:p-9 space-y-4 text-base sm:text-lg text-[#3A1D40] leading-relaxed font-medium">
              <p>
                Somos o{" "}
                <strong className="font-black">
                  Coletivo Interdisciplinar Passarinha
                </strong>
                , artistas da cena, música, design e permacultura. Há anos,
                realizamos ações de arte educação ambiental em projetos
                itinerantes e também conservando relações com territórios.
              </p>
              <p>
                Promovemos práticas artísticas e discutimos urgências
                socioambientais relacionadas a essa sociedade do consumo e do
                descarte - que nos apavora.
              </p>
              <p>
                O Coletivo Passarinha trabalha em várias frentes e em diferentes
                lugares. Somos uma plataforma de criação e circulação, que tem a
                inclusão e atenção às problemáticas socioambientais como
                temáticas transversais. Temos interesse em costurar nossas
                práticas de arte e cultura com os lugares e pessoas que
                cruzamos. Fazemos arte educação ambiental desde 2014.
              </p>
              <p className="bg-[#FDBC2E]/35 p-4 rounded-xl border-l-4 border-[#E91C47] font-bold">
                Trabalhamos em parceria com instituições públicas e particulares,
                com Pontos de Cultura e outros espaços culturais. Já realizamos
                projetos com apoio de esferas federais, estaduais, municipais e
                de alianças internacionais, sempre entregando excelência em
                todas as ações realizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA 2 — AS PASSARINHAS / INTEGRANTES (Amarelo Ipê Acrílico - BIOS INTEGRAIS DO DOC) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
              <Sparkles className="w-4 h-4 text-[#FDBC2E]" /> Equipe & Criadores
            </div>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                  As Passarinhas
                </h2>
              </BrushBanner>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, mIdx) => {
              const memberRadiusClass = [
                "foto-organica-1",
                "foto-organica-2",
                "foto-organica-3",
                "foto-organica-4",
              ][mIdx % 4];
              return (
              <div
                key={member.id}
                className="painel-rustico p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b-2 border-[#3A1D40]/15 pb-5">
                    {member.photoUrl ? (
                      <div className={`relative w-36 h-36 sm:w-40 sm:h-40 ${memberRadiusClass} shrink-0 bg-[#3A1D40]`}>
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-28 h-28 ${memberRadiusClass} ${member.avatarColor} text-white font-black text-2xl flex items-center justify-center shrink-0`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <span className="inline-block bg-[#E91C47] text-[#FDF6E4] text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {member.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase tracking-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed whitespace-pre-line font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Links Sociais / Portfólio do Integrante */}
                {(member.instagramUrl || member.spotifyUrl) && (
                  <div className="pt-4 border-t-2 border-[#3A1D40]/15 flex flex-wrap items-center gap-3">
                    {member.instagramUrl && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-xs py-2 px-4"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-[#E91C47]" />
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {member.spotifyUrl && (
                      <a
                        href={member.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs py-2 px-4"
                      >
                        <Music className="w-3.5 h-3.5 text-[#1DB954]" />
                        <span>Spotify Dudu Ferraz</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAIXA 3 — HISTÓRICO COLETIVO PASSARINHA (Laranja Acrílico - TEXTO 100% INTEGRAL DO DOC COM FOTOS INTERCALADAS) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="inline-block bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg">
              Memória Viva • 2014 a 2027
            </span>
            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
                  Histórico Coletivo Passarinha
                </h2>
              </BrushBanner>
            </div>
          </div>

          <div className="relative border-l-4 border-[#3A1D40] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {FULL_HISTORY_BLOCKS.map((block, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[36px] sm:-left-[52px] top-5 w-6 h-6 rounded-lg bg-[#FDBC2E] border-2 border-[#3A1D40] shadow-md" />

                <div className="painel-rustico p-6 sm:p-9 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3A1D40]/15 pb-4">
                    <span className="text-sm font-black text-[#FDBC2E] bg-[#3A1D40] px-3.5 py-1 rounded-lg">
                      {block.period}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-[#E91C47] uppercase">
                      {block.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#3A1D40] leading-relaxed font-medium">
                      {block.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <div className="lg:col-span-5">
                      <PhotoMosaic photos={block.photos} variant="grid" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
