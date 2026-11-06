export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  instagramUrl?: string;
  spotifyUrl?: string;
  portfolioUrl?: string;
  avatarColor: string;
  photoUrl?: string;
}

export interface Show {
  id: string;
  title: string;
  subtitle?: string;
  synopsis: string;
  releaseText: string;
  photos: { src: string; alt: string; caption?: string }[];
  episodes?: {
    name: string;
    duration: string;
    ageRating: string;
    assemblyTime: string;
    disassemblyTime: string;
    photoUrl?: string;
    technicalRequirements: string[];
    technicalSheet: { label: string; value: string }[];
  }[];
  technicalSheet: {
    label: string;
    value: string;
  }[];
  duration?: string;
  ageRating?: string;
  category: string;
  accentColor: string;
  videoUrl?: string;
  contacts?: {
    name: string;
    email: string;
    phone: string;
    role: string;
  }[];
}

export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  fullDescription: string[];
  highlights?: string[];
  targetAudience: string;
  audienceLimit?: string;
  principles?: string[];
  whatsappContact: string;
  instagramUrl?: string;
  portfolioUrl?: string;
  accentColor: string;
  logoUrl?: string;
  photos: { src: string; alt: string; caption?: string }[];
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
  youtubeId?: string;
  videoUrl?: string;
  accentColor: string;
  photoUrl?: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  location?: string;
  tag?: string;
  photoUrl?: string;
}

// Nova Identidade Visual Passarinha:
// Amarelo Ipê: #FDBC2E
// Roxo Açaí:   #532E5A
// Vermelho:    #E91C47
// Laranja:     #F79335

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sarah-gregorio",
    name: "Sarah Gregorio",
    role: "Co-fundadora, Designer & Arte-educadora",
    bio: "Designer de formação, produtora e gestora cultural por vocação e arte-educadora ambiental por paixão, gosta de misturar linguagens, inventar possibilidades e encontrar arte onde muita gente só vê materiais descartados. É especialista em Gestão Estratégica do Design e Gestão da Inovação, e atualmente pesquisa as relações entre arte, cultura e práticas de baixo impacto socioambiental no Mestrado Profissional em Artes da UFC e IFCE.\n\nCo-fundadora do Coletivo Interdisciplinar Passarinha, vive entre projetos culturais, oficinas, brinquedos, histórias e experiências que aproximam arte, educação e meio ambiente. Gosta de colocar ideias em movimento, conectar pessoas e transformar inquietações em projetos — de preferência, com espaço para experimentar e um pouco de bagunça criativa.",
    avatarColor: "bg-[#E91C47]",
    photoUrl: "/images/image1.jpg",
  },
  {
    id: "pamella-villanova",
    name: "Pâmella Villanova",
    role: "Artista da Cena, Pesquisadora & Dramaturga",
    bio: "Atriz, pesquisadora e arte-educadora apaixonada pela cultura popular brasileira, pelo teatro itinerante e pelo brincar livre. Criadora e pesquisadora do espetáculo 'Plástico, um mito contemporâneo' e das vivências cênicas da Passarinha, integrando jogos teatrais, dramaturgia e reflexão ecológica profunda que acolhe crianças e adultos.",
    instagramUrl: "https://www.instagram.com/pam.villanova",
    avatarColor: "bg-[#FDBC2E]",
    photoUrl: "/images/image5.jpg",
  },
  {
    id: "maria-thome",
    name: "Maria Thomé",
    role: "Musicista, Educadora Musical & Percussionista",
    bio: "Maria Carolina Thomé é musicista e pesquisadora interiorana que encontrou nos ritmos populares brasileiros uma forma de se encantar pela vida. Formou-se professora de música, especializou-se em percussão popular e investigou aspectos do seu ensino tornando-se mestra pela UNICAMP. Atualmente, em sua pesquisa de doutorado, investiga a relação humana com a música e com o ensino da percussão popular na formação de professores. É a idealizadora e coordenadora da Orquestra de Pandeiros.",
    instagramUrl: "https://www.instagram.com/orquestra.pandeiros",
    avatarColor: "bg-[#532E5A]",
    photoUrl: "/images/image11.jpg",
  },
  {
    id: "dudu-ferraz",
    name: "Dudu Ferraz",
    role: "Músico, Diretor Teatral, Palhaço & Produtor",
    bio: "Músico, compositor, ator e palhaço. Com formação nas artes da cena e da música, é coautor das trilhas sonoras autorais da Passarinha e codiretor e produtor executivo dos espetáculos 'Histórias que a Passarinha me contou' e 'Plástico, um mito contemporâneo'. Explora a comicidade física, o som dos objetos e a poética do encontro.",
    spotifyUrl: "https://open.spotify.com/search/Dudu%20Ferraz",
    avatarColor: "bg-[#F79335]",
    photoUrl: "/images/image4.jpg",
  },
];

export const SHOWS: Show[] = [
  {
    id: "historias-que-a-passarinha-me-contou",
    title: "Histórias que a Passarinha me contou",
    subtitle: "Música, contação de histórias e brincadeiras tradicionais",
    synopsis: "Juntando contação de histórias, música autoral ao vivo e convites para brincar, a Passarinha leva ao público um espetáculo caloroso que desperta a imaginação em dois episódios temáticos: Episódio Terra e Episódio Água.",
    releaseText: "A obra já circulou por diversos SESCs do interior paulista, escolas, praças públicas, festivais pelos estados do Ceará e Piauí, e também na cidade de Cali, na Colômbia. Uma vivência afetiva e formativa para todas as gerações.",
    photos: [
      {
        src: "/images/image3.jpg",
        alt: "Pamella Villanova e Dudu Ferraz em Histórias que a Passarinha me contou",
        caption: "Histórias que a Passarinha me contou — Pamella Villanova e Dudu Ferraz",
      },
      {
        src: "/images/image4.jpg",
        alt: "Interação lúdica com crianças no Episódio Água",
        caption: "Episódio Água — Vivência lúdica e histórias para a infância",
      },
      {
        src: "/images/image5.jpg",
        alt: "Apresentação no Quintal Garatuja",
        caption: "Apresentação cênico-musical com adereços artesanais",
      },
    ],
    episodes: [
      {
        name: "Episódio Terra",
        duration: "50 minutos",
        ageRating: "Livre",
        assemblyTime: "1 hora",
        disassemblyTime: "40 minutos",
        photoUrl: "/images/image3.jpg",
        technicalRequirements: [
          "Pode acontecer em diversos ambientes (teatros, praças, escolas, áreas abertas)",
          "Espaço cênico mínimo adequado para movimentação dos atores",
          "Sistema de som compatível com a capacidade do espaço",
        ],
        technicalSheet: [
          { label: "Concepção, Criação e Atuação", value: "Pamella Villanova e Dudu Ferraz" },
          { label: "Composição da Trilha Sonora", value: "Dudu Ferraz e Pamella Villanova" },
          { label: "Produção", value: "Coletivo Passarinha e Quintal Garatuja" },
          { label: "Gravação de Vídeo", value: "Nina Pires" },
          { label: "Gravação e Mixagem de Áudio", value: "Pedro Florio" },
          { label: "Fotos", value: "Nina Pires e Mauro Machado" },
          { label: "Figurino", value: "Graciete Mary dos Santos" },
          { label: "Iluminação", value: "Pamella Villanova e Monica Lovato" },
        ],
      },
      {
        name: "Episódio Água",
        duration: "50 minutos (20 min histórias + 30 min brincadeiras)",
        ageRating: "Livre",
        assemblyTime: "40 minutos",
        disassemblyTime: "30 minutos",
        photoUrl: "/images/image4.jpg",
        technicalRequirements: [
          "Palco mínimo de 3m²",
          "2 microfones headset",
          "1 entrada P10 para violão",
          "Equipamento de som compatível com espaço e quantidade de público",
          "Não necessita de estrutura complexa de iluminação",
        ],
        technicalSheet: [
          { label: "Concepção, Criação e Atuação", value: "Pâmella Villanova e Dudu Ferraz" },
          { label: "Adereços e Brinquedos", value: "Coletivo Passarinha" },
          { label: "Fotos", value: "Mauro Machado" },
        ],
      },
    ],
    technicalSheet: [
      { label: "Criação e Atuação", value: "Pamella Villanova e Dudu Ferraz" },
      { label: "Trilha Sonora", value: "Autoral e ao vivo" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração Total", value: "50 minutos cada episódio" },
    ],
    duration: "50 min",
    ageRating: "Livre",
    category: "Contação & Música",
    accentColor: "#E91C47",
  },
  {
    id: "plastico-um-mito-contemporaneo",
    title: "Plástico, um mito contemporâneo",
    subtitle: "Espetáculo de teatro-fórum sobre consumo, descarte e transformação",
    synopsis: "O que acontece quando o que descartamos ganha voz e corpo em cena? Plástico é uma experimentação cênico-musical que problematiza o consumo desenfreado e a urgência socioambiental do nosso tempo através de uma narrativa poética e de teatro-fórum que envolve o público diretamente.",
    releaseText: "Desde sua estreia em 2023, mais de 6 mil pessoas já assistiram ao espetáculo. Utilizando adereços, cenários e instrumentos confeccionados com materiais descartados e reaproveitados, o espetáculo desafia o olhar do espectador para a sociedade do descarte por meio da poesia, do humor e da potência visual, com total acessibilidade em Libras.",
    photos: [
      {
        src: "/images/image10.jpg",
        alt: "Experimentação cênica com materiais reaproveitados",
        caption: "Poética do descarte e imersão sensorial com materiais reutilizados",
      },
      {
        src: "/images/image4.jpg",
        alt: "Interação do público com elementos cênicos",
        caption: "Diálogo direto com o público sobre consumo e resíduos",
      },
    ],
    technicalSheet: [
      { label: "Pesquisa e Criação", value: "Pamella Villanova" },
      { label: "Assistência de Direção e Dramaturgia", value: "Dudu Ferraz" },
      { label: "Figurino", value: "Sarah Gregório e Coletivo Passarinha" },
      { label: "Linguagem", value: "Teatro-fórum, Música e Arte Socioambiental" },
      { label: "Acessibilidade", value: "Tradução e Interpretação em Libras disponível" },
      { label: "Classificação", value: "Livre (Recomendado para todas as idades)" },
    ],
    videoUrl: "https://www.instagram.com/p/DYkglu_DTpk/",
    category: "Teatro & Meio Ambiente",
    accentColor: "#532E5A",
    contacts: [
      {
        name: "Pamella Villanova",
        role: "Pesquisa & Criação",
        email: "pamellavillanova@gmail.com",
        phone: "+55 19 99251-0921",
      },
      {
        name: "Dudu Ferraz",
        role: "Vendas & Produção Executiva",
        email: "luizeduardo.rferraz@gmail.com",
        phone: "+55 19 99684-2051",
      },
    ],
  },
  {
    id: "show-nascente",
    title: "Show Nascente",
    subtitle: "Concerto de ritmos populares, vozes e percussão brasileira",
    synopsis: "Um encontro musical vibrante que celebra as águas, a infância e os ritmos tradicionais brasileiros: cirandas, cocos, marchinhas e canções autorais que convidam todo mundo a cantar e dançar junto.",
    releaseText: "Com arranjos ricos em pandeiro, percussão brasileira e vozes femininas e masculinas entrelaçadas, o Show Nascente brota como um rio de afetos e sonoridades que encantam públicos de todas as idades.",
    photos: [
      {
        src: "/images/image8.jpg",
        alt: "Sonoridades e infância no Quintal Garatuja",
        caption: "Descoberta sonora, ritmos brasileiros e música viva para todas as idades",
      },
      {
        src: "/images/image6.jpg",
        alt: "Vivência musical percussiva",
        caption: "Percussão popular brasileira e celebração coletiva",
      },
    ],
    technicalSheet: [
      { label: "Direção Musical", value: "Maria Carolina Thomé" },
      { label: "Arranjos e Percussão", value: "Maria Thomé e Dudu Ferraz" },
      { label: "Classificação", value: "Livre" },
      { label: "Duração", value: "60 minutos" },
    ],
    duration: "60 min",
    ageRating: "Livre",
    category: "Música Popular",
    accentColor: "#F79335",
  },
  {
    id: "historias-do-bosque-dos-guarantas",
    title: "Histórias do Bosque dos Guarantãs",
    subtitle: "Um passeio turístico, cultural e ambiental",
    synopsis: "Uma caminhada e espetáculo poético pelo Bosque dos Guarantãs em Campinas/SP, revelando a conexão entre a natureza urbana, as árvores centenárias e a memória afetiva dos moradores da região.",
    releaseText: "Fruto das pesquisas territoriais e ambientais desenvolvidas pelo Coletivo Passarinha e Quintal Garatuja junto à comunidade do bairro Nova Europa, articulando placas educativas, contação de histórias e valorização da biodiversidade local.",
    photos: [
      {
        src: "/images/image1.jpg",
        alt: "Ação comunitária e interações lúdicas no território",
        caption: "Encontros comunitários, memória local e educação ambiental em Campinas",
      },
      {
        src: "/images/image9.jpg",
        alt: "Elementos naturais, sementes e saberes do território",
        caption: "Sementes, elementos da mata e narrativas do patrimônio natural",
      },
    ],
    technicalSheet: [
      { label: "Pesquisa Territorial e Criação", value: "Coletivo Passarinha & Quintal Garatuja" },
      { label: "Formato", value: "Passeio turístico interativo e contação cênica" },
      { label: "Classificação", value: "Livre" },
      { label: "Local de Origem", value: "Bosque dos Guarantãs (Campinas / SP)" },
    ],
    duration: "60 min",
    ageRating: "Livre",
    category: "Patrimônio & Território",
    accentColor: "#E91C47",
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
      "Mais do que ensinar a produzir objetos a partir de materiais reaproveitados, o ateliê propõe uma mudança de olhar: perceber que aquilo que parece não ter mais utilidade pode guardar outras possibilidades estéticas, lúdicas e expressivas.",
      "Jogar dentro é mergulhar nas possibilidades dos materiais e deixar a imaginação encontrar novos caminhos."
    ],
    highlights: [
      "Mais de 800 peças criadas no Reciclarnaval no SESC Campinas",
      "Reaproveitamento de plásticos e laminados de difícil reciclagem",
      "Criação autônoma de fantasias, adereços e brinquedos sonoros",
      "Totalmente adaptável para escolas, festivais, SESCs e feiras culturais",
    ],
    targetAudience: "Crianças de todas as idades, famílias, educadoras e artistas",
    whatsappContact: "https://wa.me/5588981085939?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20oficina%20Ateli%C3%AA%20Jogar%20Dentro.",
    accentColor: "#E91C47",
    photos: [
      {
        src: "/images/image7.jpg",
        alt: "Fogãozinho confeccionado com papelão, CDs e tampinhas no Jogar Dentro",
        caption: "Criação de brinquedos com papelão, CDs e tampinhas reutilizadas",
      },
      {
        src: "/images/image10.jpg",
        alt: "Criança brincando com materiais ressignificados",
        caption: "Experimentação sensorial e estética com materiais reaproveitados",
      },
    ],
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
      "Como fazer mais com menos? Essa pergunta também orienta a concepção dos brinquedos. Buscamos soluções construtivas simples, que evitem materiais e intervenções desnecessárias, favoreçam a durabilidade e permitam que os componentes retornem aos seus ciclos ao final de sua vida útil.",
      "Porque brincar também é uma forma de imaginar e construir outros mundos."
    ],
    highlights: [
      "Contemplada pelo PROMIC em Londrina/PR e Política Nacional Aldir Blanc (PNAB)",
      "Circulação em festivais como ECOH, Dobra de Arte Impressa e Festerê do MARL",
      "Acervo exclusivo de jogos de madeira, materiais naturais e recicláveis ressignificados",
      "Acessibilidade e inclusão intergeracional (crianças, famílias e idosos)",
    ],
    targetAudience: "Comunidades, escolas infantis, praças públicas e espaços culturais",
    whatsappContact: "https://wa.me/5588981085939?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Ecobrinquedoteca%20Jogar%20Dentro.",
    accentColor: "#532E5A",
    photos: [
      {
        src: "/images/image9.jpg",
        alt: "Esteira com elementos naturais, favas e objetos do brincar livre",
        caption: "Esteira lúdica com sementes naturais e objetos ressignificados",
      },
      {
        src: "/images/image8.jpg",
        alt: "Criança explorando sons em estrutura de panelas reutilizadas",
        caption: "Instalação sonora e brincar livre para a primeira infância",
      },
      {
        src: "/images/image7.jpg",
        alt: "Brinquedo artesanal da Ecobrinquedoteca",
        caption: "Acervo artesanal construído a partir do reaproveitamento criativo",
      },
    ],
  },
  {
    id: "orquestra-de-pandeiros",
    title: "Orquestra de Pandeiros",
    subtitle: "Educação musical coletiva e prática intergeracional",
    concept: "O pandeiro de couro como instrumento de encontro, escuta, afeto e convivência coletiva.",
    fullDescription: [
      "A Orquestra de Pandeiros é uma ação artístico-pedagógica que promove a educação musical por meio do pandeiro, tendo como princípio a prática coletiva, a escuta, a criação e o fortalecimento dos vínculos comunitários. De caráter intergeracional, o projeto acolhe participantes com ou sem experiência musical, utilizando o pandeiro de couro e outros instrumentos de percussão como ferramentas de musicalização, expressão artística e convivência.",
      "Idealizada em 2021 por Maria Carolina Thomé, a iniciativa realizou suas primeiras edições em 2022 por meio do Programa Municipal de Incentivo à Cultura (PROMIC), de Londrina/PR, surgindo como uma resposta ao desejo de reconstrução dos encontros presenciais e da prática musical coletiva após a pandemia de COVID-19.",
      "Em 2023, a Orquestra de Pandeiros ampliou sua atuação ao tornar-se objeto de pesquisa no curso de Mestrado em Música da UNICAMP, integrando o Programa UniversIDADE (50+). A investigação aborda as relações entre afetividade, aprendizagem e envolvimento musical de pessoas adultas e idosas, reafirmando o projeto como um espaço de pesquisa, formação e produção artística.",
      "Entre os espaços que já receberam o projeto estão o CultSP (Itararé/SP), o Ponto de Cultura Quintal Garatuja (Campinas/SP), o Festival Obaxirê (Maringá/PR), congressos da ABEM (Associação Brasileira de Educação Musical), a Universidade Estadual de Londrina (UEL) e o Grupo deCanta (Campinas/SP)."
    ],
    principles: [
      "Prática Coletiva e Escuta Ativa",
      "Acolhimento Intergeracional (Sem limite de idade)",
      "Não requer conhecimento musical prévio",
      "Valorização do pandeiro de couro e da rítmica brasileira",
    ],
    audienceLimit: "Recomenda-se o número máximo de 25 participantes por turma para garantir o acompanhamento pedagógico e afetivo.",
    targetAudience: "Pessoas jovens, adultas e idosas (50+), educadoras musicais e qualquer pessoa interessada em ritmos populares.",
    whatsappContact: "https://wa.me/5518996115002?text=Ol%C3%A1%20Maria!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20para%20contratar%20a%20Orquestra%20de%20Pandeiros.",
    instagramUrl: "https://www.instagram.com/orquestra.pandeiros",
    accentColor: "#F79335",
    logoUrl: "/images/image12.png",
    photos: [
      {
        src: "/images/image6.jpg",
        alt: "Integrantes da Orquestra de Pandeiros no Programa UniversIDADE UNICAMP",
        caption: "Orquestra de Pandeiros — Programa UniversIDADE (50+) na UNICAMP",
      },
      {
        src: "/images/image11.jpg",
        alt: "Maria Carolina Thomé, idealizadora da Orquestra de Pandeiros",
        caption: "Maria Carolina Thomé — Idealizadora e regente da Orquestra de Pandeiros",
      },
    ],
  },
];

export const AUDIOVISUAL_WORKS: AudiovisualWork[] = [
  {
    id: "caixa-magica",
    title: "A Caixa Mágica",
    synopsis: "Uma palhaça e um palhaço abrem sua caixa mágica e, com a ajuda da Mãozinha, brincam com a ressignificação de objetos, explorando criativamente suas infinitas possibilidades antes do descarte. Tudo começa quando Pirulita e Pouca Sombra percebem que estão passando tanto tempo no celular que se esqueceram de brincar! Assustados com essa descoberta, decidem encontrar uma solução: usar o próprio celular para ajudar todo mundo a ficar longe dele!",
    context: "A Caixa Mágica integrou o 'Brincando na Rede' (2021), mostra cultural on-line contemplada pelo Edital Ações em Rede da Prefeitura Municipal de Campinas, reunindo nove grupos artísticos em uma plataforma virtual gratuita voltada especialmente a crianças, famílias e escolas.",
    technicalSheet: [
      { label: "Texto, Direção, Produção e Edição", value: "Coletivo Passarinha" },
      { label: "Elenco", value: "Sarah Gregorio (mãozinha), Maria Carolina Thomé (Pirulita), Miguel Matoso (Pouca Sombra)" },
      { label: "Intérprete de Libras", value: "Karina Zonzini" },
      { label: "Classificação", value: "Livre" },
    ],
    photoUrl: "/images/image1.jpg",
    accentColor: "#E91C47",
  },
  {
    id: "fora-de-onde",
    title: "Fora de onde?",
    synopsis: "Quando jogamos algo fora, fora de onde? Um vídeo reflexivo e bem-humorado que coloca em xeque a ideia de que o lixo desaparece após o descarte, abrindo caminho para a reinvenção poética de objetos.",
    context: "Produção audiovisual concebida a partir das investigações ambientais e teatrais do Coletivo Passarinha e do Ponto de Cultura Quintal Garatuja.",
    technicalSheet: [
      { label: "Criação, Direção e Edição", value: "Pamella Villanova" },
      { label: "Assistência de Direção e Roteiro", value: "Dudu Ferraz" },
      { label: "Fotografia", value: "Mauro Machado" },
      { label: "Classificação", value: "Livre" },
    ],
    youtubeId: "mnlxnn_4HPg",
    videoUrl: "https://www.youtube.com/watch?v=mnlxnn_4HPg&t=2411s",
    accentColor: "#532E5A",
  },
  {
    id: "o-que-se-passa-no-formigueiro",
    title: "O que se passa no formigueiro?",
    synopsis: "Inspirado na obra 'Rainha Maximilliana Atta', de Ana Primavesi, este trabalho audiovisual mergulha no microcosmo do solo, na agroecologia e no papel das formigas saúvas na natureza. Uma reflexão bem-humorada sobre como a sociedade vê 'a praga' e como a natureza busca o equilíbrio ecológico.",
    context: "Realizado com acessibilidade em Libras e registros no Quintal Garatuja, integrando arte, ciência e consciência da terra.",
    technicalSheet: [
      { label: "Concepção e Realização", value: "Pamella Villanova e Dudu Ferraz" },
      { label: "Inspiração", value: "'Rainha Maximilliana Atta', de Ana Primavesi" },
      { label: "Intérprete de Libras", value: "Karina Zonzini" },
      { label: "Captação de Imagens", value: "Quintal Garatuja, Guilherme Cruz e Neader Eringuer" },
      { label: "Classificação", value: "Livre" },
    ],
    youtubeId: "FkMBMPGgpHw",
    videoUrl: "https://www.youtube.com/watch?v=FkMBMPGgpHw",
    accentColor: "#F79335",
  },
];

export const TIMELINE: HistoryMilestone[] = [
  {
    year: "2014",
    title: "Início Itinerante & Grafite na Praça",
    description: "O Coletivo Passarinha iniciou sua trajetória quando suas fundadoras partiram de Campinas/SP em direção ao Nordeste, promovendo ações artísticas e pedagógicas de intercâmbio cultural e ambiental.",
    location: "Campinas/SP e Estrada",
    tag: "Fundação",
  },
  {
    year: "2015",
    title: "Estação Permacultural Móvel (Kombi Safari)",
    description: "De janeiro a novembro de 2015, foram realizadas mais de 40 ações artísticas e pedagógicas de forma independente pelas cidades por onde a Passarinha passou. Práticas de palhaçaria, brincadeiras e reutilização de materiais estruturaram as primeiras oficinas 'Jogar Dentro'.",
    location: "Bahia, Pernambuco, Rio Grande do Norte",
    tag: "Circulação",
    photoUrl: "/images/image9.jpg",
  },
  {
    year: "2016",
    title: "Oficinas Cortejo & Gestão do Quintal Garatuja",
    description: "Quatro oficinas de cortejo com instrumentos de materiais reaproveitados em comunidades no Ceará (Aracati), São Paulo (Sussuí) e Paraná (Londrina). No mesmo ano, a Passarinha assume a gestão do Ponto de Cultura Quintal Garatuja em Campinas/SP.",
    location: "CE, SP e PR",
    tag: "Ponto de Cultura",
    photoUrl: "/images/image8.jpg",
  },
  {
    year: "2017 - 2018",
    title: "Circulação de 'Histórias que a Passarinha me contou'",
    description: "Estreia e circulação do espetáculo por diversos SESCs do interior paulista, escolas, praças, festivais no Ceará, Piauí e também na cidade de Cali, Colômbia.",
    location: "SP, CE, PI e Colômbia",
    tag: "Circulação Internacional",
    photoUrl: "/images/image3.jpg",
  },
  {
    year: "2019",
    title: "Lei Cultura Viva - Ponto de Cultura Quintal Garatuja",
    description: "Mais de 30 ações de teatro e brincadeiras no território do bairro Nova Europa em Campinas, fortalecendo a rede de Pontos de Cultura e a arte-educação local.",
    location: "Campinas/SP",
    tag: "Cultura Viva",
    photoUrl: "/images/image1.jpg",
  },
  {
    year: "2020",
    title: "Residência no FEVERESTIVAL & Pesquisas Online",
    description: "Residência artística no Festival Internacional de Teatro de Campinas em parceria com escola municipal, pesquisando a poética do descarte e ressignificação de recicláveis.",
    location: "Campinas/SP",
    tag: "Festival Internacional",
    photoUrl: "/images/image10.jpg",
  },
  {
    year: "2021 - 2022",
    title: "Criação da Orquestra de Pandeiros & A Caixa Mágica",
    description: "Criação da Orquestra de Pandeiros pelo PROMIC de Londrina/PR e produção da mostra audiovisual 'A Caixa Mágica' com intérprete de Libras.",
    location: "Londrina/PR e Campinas/SP",
    tag: "Música & Audiovisual",
  },
  {
    year: "2023",
    title: "Estreia de 'Plástico' & Mestrado na UNICAMP",
    description: "Estreia do espetáculo 'Plástico, um mito contemporâneo' (+6 mil espectadores) e pesquisa acadêmica de mestrado na UNICAMP com o Programa UniversIDADE (50+).",
    location: "Campinas/SP e circulação",
    tag: "Teatro & Pesquisa",
    photoUrl: "/images/image6.jpg",
  },
  {
    year: "2024 - 2025",
    title: "Reciclarnaval & Política Nacional Aldir Blanc (PNAB)",
    description: "Mais de 800 peças criadas no Ateliê Jogar Dentro no SESC Campinas. Circulação da Ecobrinquedoteca e do projeto 'A História de Aru' com os 12 princípios da permacultura.",
    location: "Circulação Nacional",
    tag: "PNAB & Atualidade",
    photoUrl: "/images/image7.jpg",
  },
];
