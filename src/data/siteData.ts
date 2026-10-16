export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  portfolioUrl?: string;
  curriculoUrl?: string;
  avatarColor: string;
}

export interface Show {
  id: string;
  title: string;
  subtitle?: string;
  synopsis: string;
  releaseText: string;
  technicalSheet: {
    label: string;
    value: string;
  }[];
  duration?: string;
  ageRating?: string;
  category: string;
  accentColor: string;
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  fullDescription: string[];
  highlights?: string[];
  targetAudience: string;
  whatsappContact: string;
  portfolioUrl?: string;
  accentColor: string;
}

export interface AudiovisualWork {
  id: string;
  title: string;
  synopsis: string;
  context: string;
  technicalSheet: {
    label: string;
    value: string;
  }[];
  videoUrl?: string;
  accentColor: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  location?: string;
  tag?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sarah-gregorio",
    name: "Sarah Gregorio",
    role: "Co-fundadora, Designer & Arte-educadora",
    bio: "Designer de formação, produtora e gestora cultural por vocação e arte-educadora ambiental por paixão, gosta de misturar linguagens, inventar possibilidades e encontrar arte onde muita gente só vê materiais descartados. É especialista em Gestão Estratégica do Design e Gestão da Inovação, e atualmente pesquisa as relações entre arte, cultura e práticas de baixo impacto socioambiental no Mestrado Profissional em Artes da UFC e IFCE.\n\nCo-fundadora do Coletivo Interdisciplinar Passarinha, vive entre projetos culturais, oficinas, brinquedos, histórias e experiências que aproximam arte, educação e meio ambiente. Gosta de colocar ideias em movimento, conectar pessoas e transformar inquietações em projetos — de preferência, com espaço para experimentar e um pouco de bagunça criativa.",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    curriculoUrl: "#",
    avatarColor: "bg-[#c85028]",
  },
  {
    id: "maria-thome",
    name: "Maria Thomé",
    role: "Musicista, Educadora Musical & Pesquisadora",
    bio: "Maria Carolina Thomé é musicista interiorana que encontrou nos ritmos populares brasileiros uma forma de se encantar pela vida. Formou-se professora de música, especializou-se em percussão popular e investigou aspectos do seu ensino tornando-se mestra.\n\nAtualmente, em sua pesquisa de doutorado, investiga a relação humana com a música, especialmente no ensino da percussão popular na formação de professores. É uma das forças criativas por trás da Orquestra de Pandeiros e das composições do coletivo.",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    curriculoUrl: "#",
    avatarColor: "bg-[#2e6f40]",
  },
  {
    id: "pamella-villanova",
    name: "Pâmella Villanova",
    role: "Artista da Cena & Educadora",
    bio: "Atriz, pesquisadora e arte-educadora apaixonada pela cultura popular brasileira, pelo teatro itinerante e pelo brincar livre. Integra as ações da Passarinha com jogos teatrais, cortejos e vivências pedagógicas que acolhem crianças de zero a cem anos.",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    curriculoUrl: "#",
    avatarColor: "bg-[#e5a823]",
  },
  {
    id: "dudu-ferraz",
    name: "Dudu Ferraz",
    role: "Artista da Cena & Palhaçaria",
    bio: "Ator, palhaço e pesquisador do movimento. Explora a comicidade física, a expressividade dos corpos e a poética do descarte e da imaginação. Com presença viva nas criações cênicas e audiovisuais do coletivo.",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    curriculoUrl: "#",
    avatarColor: "bg-[#1b7a82]",
  },
];

export const SHOWS: Show[] = [
  {
    id: "historias-da-passarinha",
    title: "Histórias da Passarinha",
    subtitle: "Música, contação de histórias e brincadeiras tradicionais",
    synopsis: "Juntando contação de histórias, música autoral ao vivo e convites para brincar, a Passarinha leva ao público um espetáculo caloroso que desperta a imaginação de todas as idades.",
    releaseText: "Desde 2018, a obra já circulou por diversos SESCs do interior paulista, escolas, praças públicas, festivais pelos estados do Ceará e Piauí, e inclusive na cidade de Cali, na Colômbia. Cada apresentação é um convite para desacelerar, ouvir e cantar junto.",
    technicalSheet: [
      { label: "Criação e Atuação", value: "Coletivo Interdisciplinar Passarinha" },
      { label: "Linguagem", value: "Contação de Histórias, Música e Palhaçaria" },
      { label: "Classificação", value: "Livre (Recomendado para todas as idades)" },
      { label: "Duração", value: "50 minutos" },
    ],
    duration: "50 min",
    ageRating: "Livre",
    category: "Contação & Música",
    accentColor: "#c85028",
  },
  {
    id: "plastico",
    title: "Plástico",
    subtitle: "Uma poética cênica sobre consumo, descarte e transformação",
    synopsis: "O que acontece quando o que descartamos ganha voz e corpo em cena? Plástico é uma experimentação cênico-musical que problematiza o consumo desenfreado e a urgência socioambiental do nosso tempo.",
    releaseText: "Utilizando adereços, cenários e instrumentos confeccionados com materiais descartados e reutilizados, o espetáculo desafia o olhar do espectador para a sociedade do descarte por meio da poesia, do humor e da potência visual.",
    technicalSheet: [
      { label: "Concepção", value: "Coletivo Passarinha" },
      { label: "Trilha Sonora", value: "Autoral e instrumentos de reaproveitamento" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "45 minutos" },
    ],
    duration: "45 min",
    ageRating: "Livre",
    category: "Teatro & Meio Ambiente",
    accentColor: "#2e6f40",
  },
  {
    id: "fora-de-onde",
    title: "Fora de Onde?",
    subtitle: "Questionando as fronteiras do descartável e do pertencer",
    synopsis: "Quando dizemos que jogamos algo 'fora', para onde esse fora realmente vai? Uma narrativa instigante que desconstrói a ilusão do descarte.",
    releaseText: "Inspirado nas pesquisas da Permacultura e nas vivências da Estação Permacultural Móvel, 'Fora de Onde?' transforma a reflexão ecológica em uma divertida e profunda viagem de descobertas.",
    technicalSheet: [
      { label: "Direção & Roteiro", value: "Coletivo Interdisciplinar Passarinha" },
      { label: "Elenco", value: "Passarinhas" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "50 minutos" },
    ],
    duration: "50 min",
    ageRating: "Livre",
    category: "Teatro e Ecologia",
    accentColor: "#1b7a82",
  },
  {
    id: "show-nascente",
    title: "Show Nascente",
    subtitle: "Concerto de ritmos populares, vozes e percussão brasileira",
    synopsis: "Um encontro musical vibrante que bebe na fonte dos ritmos tradicionais brasileiros: cirandas, cocos, marchinhas e cantigas autorais que colocam todo mundo para dançar.",
    releaseText: "Com arranjos ricos em pandeiro, instrumentos de percussão e vozes harmonizadas, o Show Nascente celebra a vida, as águas e a força coletiva das canções de nossa terra.",
    technicalSheet: [
      { label: "Direção Musical", value: "Maria Carolina Thomé" },
      { label: "Músicas", value: "Autorais e cancioneiro popular" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "60 minutos" },
    ],
    duration: "60 min",
    ageRating: "Livre",
    category: "Música Popular",
    accentColor: "#e5a823",
  },
  {
    id: "historias-do-bosque-dos-guarantas",
    title: "Histórias do Bosque dos Guarantãs",
    subtitle: "O patrimônio natural e imaterial de Campinas em cena",
    synopsis: "Uma homenagem poética à memória arbórea e histórica do Bosque dos Guarantãs em Campinas/SP, revelando a conexão entre a natureza urbana e as histórias dos moradores locais.",
    releaseText: "Fruto das pesquisas territoriais desenvolvidas junto ao Ponto de Cultura Quintal Garatuja, o espetáculo fortalece o sentimento de pertencimento e preservação dos patrimônios naturais comunitários.",
    technicalSheet: [
      { label: "Pesquisa e Dramaturgia", value: "Ponto de Cultura Quintal Garatuja & Passarinha" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "45 minutos" },
    ],
    duration: "45 min",
    ageRating: "Livre",
    category: "Patrimônio & Território",
    accentColor: "#583259",
  },
  {
    id: "nosso-canto",
    title: "Nosso Canto",
    subtitle: "Vozes, poéticas e encontros comunitários",
    synopsis: "Espetáculo de canto coral e percussão afetiva que integra o público na construção de paisagens sonoras acolhedoras.",
    releaseText: "Um trabalho sensível que celebra as vozes e a memória cantada dos territórios por onde a Passarinha passa.",
    technicalSheet: [
      { label: "Criação", value: "Coletivo Passarinha" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "40 minutos" },
    ],
    duration: "40 min",
    ageRating: "Livre",
    category: "Música & Coral",
    accentColor: "#c85028",
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: "atelie-jogar-dentro",
    title: "Ateliê Jogar Dentro",
    subtitle: "Arte, criação e reaproveitamento de materiais",
    concept: "E se aquilo que seria descartado se transformasse em fantasia, figurino, adereço, instrumento musical ou brinquedo?",
    fullDescription: [
      "O Ateliê Jogar Dentro é um espaço de experimentação e criação artística que convida os participantes a explorar as possibilidades dos materiais reaproveitados, transformando-os em objetos para brincar, imaginar, inventar personagens, criar sons e contar histórias.",
      "O ateliê reúne materiais em diferentes estados e possibilidades de uso: alguns preservam suas características originais; outros já chegam ressignificados, recortados, combinados ou preparados para novas experimentações. Plásticos de diferentes cores e formatos, embalagens laminadas, retalhos de tecidos e outros materiais compõem um repertório aberto à investigação, no qual cada forma, textura, cor e característica pode despertar novas ideias.",
      "A seleção dos materiais também faz parte da proposta. Damos preferência àqueles que apresentam maiores dificuldades de reciclagem, como determinados plásticos coloridos e embalagens laminadas, buscando explorar suas possibilidades de uso e criação antes que sejam descartados. Assim, o reaproveitamento se torna também uma oportunidade de refletir sobre os materiais que circulam em nosso cotidiano e sobre os destinos que damos a eles.",
      "No Ateliê Jogar Dentro, não existe uma única maneira de criar. Os materiais podem se transformar em fantasias, figurinos, adereços, instrumentos musicais, brinquedos e tantas outras invenções que surgem durante o processo. A experimentação abre espaço para diferentes linguagens artísticas, para a expressão individual e para as descobertas coletivas.",
      "Mais do que ensinar a produzir objetos a partir de materiais reaproveitados, o ateliê propõe uma mudança de olhar: perceber que aquilo que parece não ter mais utilidade pode guardar outras possibilidades estéticas, lúdicas e expressivas. É um convite para experimentar, combinar, transformar e descobrir que a criação artística pode começar com aquilo que já temos à mão.",
      "Jogar dentro é mergulhar nas possibilidades dos materiais e deixar a imaginação encontrar novos caminhos."
    ],
    highlights: [
      "Mais de 800 peças criadas no Reciclarnaval no SESC Campinas",
      "Reaproveitamento de plásticos difíceis de reciclar",
      "Confecção de figurinos, instrumentos e brinquedos",
      "Totalmente adaptável a escolas, festivais e centros culturais",
    ],
    targetAudience: "Crianças de todas as idades, educadores e famílias",
    whatsappContact: "https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ateliê%20Jogar%20Dentro",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    accentColor: "#c85028",
  },
  {
    id: "ecobrinquedoteca-jogar-dentro",
    title: "Ecobrinquedoteca Jogar Dentro",
    subtitle: "Arte Educação Ambiental e a Cultura do Brincar",
    concept: "Existe lixo de fato? Fora de onde?",
    fullDescription: [
      "A Ecobrinquedoteca Jogar Dentro nasceu dessa inquietação: o que acontece quando mudamos nosso olhar para aquilo que descartamos? O que pode surgir quando materiais que perderam sua função original encontram novas possibilidades nas mãos de quem brinca?",
      "Itinerante e aberta ao encontro, a Ecobrinquedoteca reúne brinquedos, jogos, materiais reaproveitados, elementos naturais e brincadeiras, convidando pessoas de diferentes idades a experimentar, imaginar, criar e descobrir outras formas de se relacionar com os objetos, com o ambiente e com as pessoas ao redor.",
      "Mais do que reunir brinquedos, a Ecobrinquedoteca reúne possibilidades de brincar. Compreendemos o brincar como linguagem, experiência artística e patrimônio cultural vivo, que se transforma e se reinventa a cada encontro.",
      "Na Ecobrinquedoteca, os materiais descartados deixam de ser apenas sobras e passam a integrar novas experiências estéticas, lúdicas e educativas. Texturas, formas, cores, pesos e sons despertam a curiosidade e ampliam as possibilidades de criação. O convite não é apenas reutilizar materiais, mas também questionar os modos como produzimos, consumimos, descartamos e atribuímos valor às coisas.",
      "Como fazer mais com menos? Essa pergunta também orienta a concepção dos brinquedos. Buscamos soluções construtivas simples, que evitem materiais e intervenções desnecessárias, favoreçam a durabilidade e, sempre que possível, permitam que os componentes retornem aos seus ciclos de reaproveitamento ou reciclagem ao final de sua vida útil.",
      "A experiência também se constrói na diversidade de pessoas e de maneiras de brincar. Diferentes idades, corpos, repertórios, tempos e formas de participação encontram espaço nessa vivência coletiva. A inclusão, nesse sentido, vai além de permitir o acesso: envolve acolher diferentes modos de experimentar, interagir, criar e participar.",
      "Porque brincar também é uma forma de imaginar e construir outros mundos."
    ],
    highlights: [
      "Contemplada pelo PROMIC em Londrina/PR e Política Nacional Aldir Blanc (PNAB 2025)",
      "Circulação em festivais como ECOH, Dobra de Arte Impressa e Festerê do MARL",
      "Acervo de brinquedos ecológicos e jogos com elementos naturais",
      "Acessibilidade e inclusão intergeracional",
    ],
    targetAudience: "Comunidades, escolas infantis, praças públicas e espaços culturais",
    whatsappContact: "https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Ecobrinquedoteca%20Jogar%20Dentro",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    accentColor: "#2e6f40",
  },
  {
    id: "orquestra-de-pandeiros",
    title: "Orquestra de Pandeiros",
    subtitle: "Educação musical coletiva e intergeracional",
    concept: "O pandeiro de couro como instrumento de encontro, escuta, afeto e convivência coletiva.",
    fullDescription: [
      "A Orquestra de Pandeiros é uma ação artístico-pedagógica que promove a educação musical por meio do pandeiro, tendo como princípio a prática coletiva, a escuta, a criação e o fortalecimento dos vínculos comunitários. De caráter intergeracional, o projeto acolhe participantes com ou sem experiência musical, utilizando o pandeiro de couro e outros instrumentos de percussão como ferramentas de musicalização, expressão artística e convivência.",
      "Idealizada em 2021, a iniciativa realizou suas primeiras edições em 2022 por meio do Programa Municipal de Incentivo à Cultura (PROMIC), de Londrina/PR, surgindo como uma resposta ao desejo de reconstrução dos encontros presenciais e da prática musical coletiva após a pandemia de COVID-19.",
      "Em 2023, a Orquestra de Pandeiros ampliou sua atuação ao tornar-se objeto de pesquisa no curso de Mestrado em Música da UNICAMP, integrando o Programa UniversIDADE (50+). A investigação aborda as relações entre afetividade, aprendizagem e envolvimento musical de pessoas adultas e idosas, reafirmando o projeto como um espaço de pesquisa, formação e produção artística.",
      "Atualmente, a Orquestra de Pandeiros desenvolve uma atuação itinerante, realizando oficinas, apresentações e ações formativas em festivais, pontos de cultura, universidades e congressos de educação musical.",
      "Entre os espaços que já receberam o projeto estão o CultSP (Itararé/SP), o Ponto de Cultura Quintal Garatuja (Campinas/SP), o Festival Obaxirê (Maringá/PR), congressos da ABEM (Associação Brasileira de Educação Musical), a Universidade Estadual de Londrina (UEL) e o Grupo deCanta (Campinas/SP)."
    ],
    highlights: [
      "Objeto de pesquisa acadêmica no Mestrado em Música da UNICAMP",
      "Programa UniversIDADE (50+) e prática intergeracional",
      "Circulação em congressos nacionais e internacionais da ABEM",
      "Aberto a qualquer pessoa, sem necessidade de experiência prévia",
    ],
    targetAudience: "Jovens, adultos, pessoas idosas (50+), educadores musicais e entusiastas",
    whatsappContact: "https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Orquestra%20de%20Pandeiros",
    portfolioUrl: "https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y",
    accentColor: "#e5a823",
  },
];

export const AUDIOVISUAL_WORKS: AudiovisualWork[] = [
  {
    id: "caixa-magica",
    title: "A Caixa Mágica",
    synopsis: "Uma palhaça e um palhaço abrem sua caixa mágica e, com a ajuda da Mãozinha, brincam com a ressignificação de objetos, explorando criativamente suas infinitas possibilidades antes do descarte. Tudo começa quando Pirulita e Pouca Sombra percebem que estão passando tanto tempo no celular que se esqueceram de brincar! Assustados com essa descoberta, decidem encontrar uma solução: usar o próprio celular para ajudar todo mundo a ficar longe dele!",
    context: "A Caixa Mágica integrou o 'Brincando na Rede' (2021), mostra cultural on-line contemplada pelo Edital Ações em Rede da Prefeitura Municipal de Campinas, que reuniu nove grupos artísticos em uma plataforma virtual gratuita, voltada especialmente a crianças, famílias e escolas de educação infantil.",
    technicalSheet: [
      { label: "Texto, Direção, Produção e Edição", value: "Coletivo Passarinha" },
      { label: "Elenco", value: "Sarah Gregorio (Mãozinha), Maria Carolina Thomé (Pirulita), Miguel Matoso (Pouca Sombra)" },
      { label: "Intérprete de Libras", value: "Karina Zonzini" },
      { label: "Duração", value: "Curta-metragem (15 min)" },
      { label: "Classificação", value: "Livre" },
    ],
    videoUrl: "https://www.youtube.com/results?search_query=coletivo+passarinha+a+caixa+magica",
    accentColor: "#583259",
  },
  {
    id: "fora-de-onde-video",
    title: "Fora de Onde? (Versão Audiovisual)",
    synopsis: "Adaptação audiovisual da pesquisa do coletivo sobre consumo, resíduos sólidos e o mito de jogar algo 'fora'. Uma narrativa visualmente inventiva criada com materiais reaproveitados.",
    context: "Produzido durante as experimentações da Estação Permacultural Móvel e pesquisas do Quintal Garatuja.",
    technicalSheet: [
      { label: "Realização", value: "Coletivo Interdisciplinar Passarinha" },
      { label: "Linguagem", value: "Vídeo-arte / Narrativa Lúdica" },
      { label: "Classificação", value: "Livre" },
    ],
    videoUrl: "https://www.youtube.com/results?search_query=coletivo+passarinha+fora+de+onde",
    accentColor: "#1b7a82",
  },
  {
    id: "o-que-se-passa-no-formigueiro",
    title: "O Que se Passa no Formigueiro?",
    synopsis: "Um mergulho poético e bem-humorado no microcosmo do formigueiro, observando a cooperação, o trabalho em comunidade e a sabedoria da natureza.",
    context: "Trabalho audiovisual que integra o repertório investigativo do coletivo sobre relações socioambientais e coletividade.",
    technicalSheet: [
      { label: "Direção & Animação", value: "Coletivo Passarinha" },
      { label: "Classificação", value: "Livre" },
    ],
    videoUrl: "https://www.youtube.com/results?search_query=coletivo+passarinha+o+que+se+passa+no+formigueiro",
    accentColor: "#c85028",
  },
];

export const TIMELINE: HistoryMilestone[] = [
  {
    year: "2014",
    title: "Fundação do Coletivo & Grafite na Praça",
    description: "Primeira ação pública em Campinas/SP com o evento 'Grafite na Praça', intervenção artística preparatória para a jornada que começaria no ano seguinte.",
    location: "Campinas/SP",
    tag: "Origem",
  },
  {
    year: "2015",
    title: "Estação Permacultural Móvel (Kombi Safari 1980)",
    description: "A Passarinha colocou na estrada sua Kombi Safari equipada com energia solar, forno solar, minhocário, banheiro seco e tecnologias de baixo impacto. Mais de 40 ações artísticas e pedagógicas independentes pelo Nordeste (Bahia, Pernambuco, Rio Grande do Norte), estruturando as primeiras oficinas 'Jogar Dentro'.",
    location: "Circulação Nordeste (BA, PE, RN)",
    tag: "Circulação",
  },
  {
    year: "2016",
    title: "Oficinas Cortejo (Lei Rouanet) & Gestão do Quintal Garatuja",
    description: "Quatro oficinas de cortejo com instrumentos feitos de reaproveitamento na comunidade quilombola Córrego de Ubaranas (Aracati/CE), Sussuí (Palmital/SP), Porecatu (PR) e Vila Cultural ALMA (Londrina/PR). No mesmo ano, a Passarinha assume a gestão do Ponto de Cultura Quintal Garatuja em Campinas/SP.",
    location: "CE, SP, PR",
    tag: "Território & Comunidade",
  },
  {
    year: "2017 - 2018",
    title: "Ações Formativas no Ceará & Circulação de Histórias",
    description: "Parcerias com a CREDE 4 e IFCE Camocim com atividades voluntárias de arte-educação ambiental. Estreia da circulação do espetáculo 'Histórias que a Passarinha me contou' por SESCs de SP, Ceará, Piauí e Cali (Colômbia).",
    location: "CE, PI, SP e Colômbia",
    tag: "Educação & Internacional",
  },
  {
    year: "2019",
    title: "Lei Cultura Viva - Ponto de Cultura Quintal Garatuja",
    description: "Mais de 30 ações de teatro e brincadeiras articulando escolas municipais, rede de Pontos de Cultura e coletivos parceiros no território vizinho em Campinas/SP.",
    location: "Campinas/SP",
    tag: "Ponto de Cultura",
  },
  {
    year: "2020",
    title: "Residência Passarinhas no FEVERESTIVAL",
    description: "Residência artística do Festival Internacional de Teatro de Campinas em parceria com escola municipal de Educação Infantil, pesquisando poéticas do descarte e ressignificação de recicláveis.",
    location: "Campinas/SP",
    tag: "Festival Internacional",
  },
  {
    year: "2021 - 2022",
    title: "Criação da Orquestra de Pandeiros (PROMIC Londrina)",
    description: "Ação artístico-pedagógica intergeracional de educação musical por meio do pandeiro de couro, criada no pós-pandemia para reatar a experiência coletiva e musical presencial.",
    location: "Londrina/PR",
    tag: "Música Intergeracional",
  },
  {
    year: "2023",
    title: "Orquestra de Pandeiros & Pesquisa no Mestrado da UNICAMP",
    description: "O projeto integra o Programa UniversIDADE (50+) da UNICAMP, investigando o ensino de percussão e a afetividade em pessoas adultas e idosas. Apresentações em congressos nacionais e internacionais da ABEM.",
    location: "Campinas/SP e Ouro Preto/MG",
    tag: "Pesquisa Acadêmica",
  },
  {
    year: "2024",
    title: "Reciclarnaval no SESC Campinas & Ecobrinquedoteca",
    description: "Ateliê de fantasias de material reaproveitado produzindo mais de 800 peças no SESC Campinas. Formalização da Ecobrinquedoteca Jogar Dentro na Escola Municipal Carlos Kraemer em Londrina/PR.",
    location: "Campinas/SP e Londrina/PR",
    tag: "Cultura do Brincar",
  },
  {
    year: "2025 - Presente",
    title: "Ecobrinquedoteca na Política Nacional Aldir Blanc (PNAB)",
    description: "Circulação da Ecobrinquedoteca por eventos culturais abertos (ECOH, Dobra de Arte Impressa, Festerê do MARL) e consolidação do projeto 'A História de Aru' com os 12 princípios da Permacultura.",
    location: "Londrina/PR e Circulação Nacional",
    tag: "PNAB & Futuro",
  },
];
