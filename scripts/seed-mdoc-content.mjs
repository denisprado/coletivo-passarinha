import fs from 'fs';
import path from 'path';

const contentDir = path.resolve('src/content');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function yamlStringify(val, indent = 0) {
  const spaces = ' '.repeat(indent);
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') {
    if (
      /^\d+$/.test(val) ||
      val.includes('\n') ||
      val.includes(':') ||
      val.includes('"') ||
      val.includes("'") ||
      val.includes('#') ||
      val === 'true' ||
      val === 'false' ||
      val === 'null'
    ) {
      return JSON.stringify(val);
    }
    return val;
  }
  if (typeof val === 'number' || typeof val === 'boolean') {
    return String(val);
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    return '\n' + val.map(item => {
      if (typeof item === 'object' && item !== null) {
        const entries = Object.entries(item);
        const first = entries[0];
        const rest = entries.slice(1);
        let str = `${spaces}  - ${first[0]}: ${yamlStringify(first[1], indent + 4)}`;
        for (const [k, v] of rest) {
          str += `\n${spaces}    ${k}: ${yamlStringify(v, indent + 4)}`;
        }
        return str;
      }
      return `${spaces}  - ${yamlStringify(item, indent + 4)}`;
    }).join('\n');
  }
  if (typeof val === 'object') {
    return '\n' + Object.entries(val).map(([k, v]) => {
      return `${spaces}${k}: ${yamlStringify(v, indent + 2)}`;
    }).join('\n');
  }
  return String(val);
}

function writeMdoc(filePath, frontmatter, content) {
  let fm = '---\n';
  for (const [k, v] of Object.entries(frontmatter)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      fm += `${k}:${yamlStringify(v, 0)}\n`;
    } else if (typeof v === 'object' && v !== null) {
      fm += `${k}:${yamlStringify(v, 2)}\n`;
    } else {
      fm += `${k}: ${yamlStringify(v)}\n`;
    }
  }
  fm += '---\n\n' + content.trim() + '\n';
  fs.writeFileSync(filePath, fm, 'utf8');
  console.log(`Created: ${filePath}`);
}

// 1. ESPETÁCULOS
ensureDir(path.join(contentDir, 'espetaculos'));

writeMdoc(
  path.join(contentDir, 'espetaculos', 'historias-que-a-passarinha-me-contou.mdoc'),
  {
    title: 'Histórias que a Passarinha me contou',
    subtitle: 'Contação de Histórias, Música & Teatro para Infâncias e Famílias',
    category: 'Contação & Música',
    accentColor: '#F95922',
    ageRating: 'Livre (0 a 100 anos)',
    duration: '40 a 50 min por episódio',
    videoUrl: 'https://www.youtube.com/watch?v=FkMBMPGgpHw',
    technicalSheet: [
      { label: 'Texto, Direção e Produção', value: 'Coletivo Passarinha' },
      { label: 'Elenco', value: 'Pamella Villanova e Dudu Ferraz' },
      { label: 'Músicas Originais', value: 'Dudu Ferraz e Coletivo Passarinha' },
      { label: 'Figurinos e Cenografia', value: 'Sarah Gregorio e Coletivo Passarinha' }
    ],
    photos: [
      { src: '/photos/espetaculos/passarinha-nina-197.webp', alt: 'Histórias que a Passarinha me contou — Foto: Nina Pires', caption: 'Histórias que a Passarinha me contou — Foto: Nina Pires' },
      { src: '/photos/espetaculos/passarinha-mauro-147.webp', alt: 'Cena de Histórias que a Passarinha me contou — Foto: Mauro Machado', caption: 'Cena da Passarinha — Foto: Mauro Machado' },
      { src: '/photos/espetaculos/passarinha-nina-190.webp', alt: 'Apresentação ao ar livre — Foto: Nina Pires', caption: 'Encontro poético com crianças e famílias' }
    ]
  },
  `Uma série de espetáculos criada por **Pamella Villanova** e **Dudu Ferraz**, que unem contação de histórias, música, teatro e *sensibilização ambiental*.

A **Passarinha** é uma viajante que espalha pelo vento contos e cantos. Ela voa e se transforma em contato com os lugares e pessoas que encontra pelo caminho. Com causos populares, brincadeiras tradicionais e canções autorais, o espetáculo dialoga com crianças de todas as idades, cultivando afeto, memória e respeito aos ciclos da natureza.

### Episódios do Repertório
- **Episódio Terra:** causos sobre o solo fértil, o plantio e a sabedoria das árvores.
- **Episódio Água:** histórias das nascentes, rios voadores e a pureza das águas.
- **Episódio Fogo:** o calor do sol, a fogueira e a chama da imaginação.
- **Episódio Ar:** o vento mensageiro e o voo das sementes.`
);

writeMdoc(
  path.join(contentDir, 'espetaculos', 'plastico-um-mito-contemporaneo.mdoc'),
  {
    title: 'Plástico, um mito contemporâneo',
    subtitle: 'Palestra-performance socioambiental sobre consumo e descarte',
    category: 'Teatro & Meio Ambiente',
    accentColor: '#532E5A',
    ageRating: '12 anos',
    duration: '60 min',
    videoUrl: 'https://www.youtube.com/watch?v=mnlxnn_4HPg',
    technicalSheet: [
      { label: 'Concepção, Atuação e Pesquisa', value: 'Pamella Villanova' },
      { label: 'Assistência de Direção e Trilha', value: 'Dudu Ferraz' },
      { label: 'Consultoria de Acessibilidade', value: 'Maíra Schiavinato Massei e Lucas Carvalho Ré' },
      { label: 'Fotografia', value: 'Dalton Sala' }
    ],
    photos: [
      { src: '/photos/espetaculos/plastico-dalton-028.webp', alt: 'Plástico, um mito contemporâneo — Foto: Dalton Sala', caption: 'Cena de Plástico, um mito contemporâneo — Foto: Dalton Sala' },
      { src: '/photos/espetaculos/plastico-dalton-030.webp', alt: 'Performance com material plástico', caption: 'Reflexão sobre resíduos sólidos e sociedade de consumo' },
      { src: '/photos/espetaculos/plastico-cartaz.webp', alt: 'Cartaz Oficial de Plástico, um mito contemporâneo', caption: 'Cartaz Oficial da Obra' }
    ]
  },
  `Em 2023, estreamos o espetáculo **Plástico, um mito contemporâneo**, uma palestra-performance que aborda com contundência poética a problemática da poluição plástica e da sociedade do descarte.

A obra é parte da pesquisa de doutorado de **Pamella Villanova** em Artes da Cena na Unicamp. Reúne tecnologias teatrais contemporâneas como *teatro científico*, *mediação teatral* e *acessibilidade comunicacional integrada à dramaturgia*.

> "A descrição das imagens e ações principais faz parte da própria dramaturgia, convidando todas as pessoas a se demorar nos significados e nos sentidos do que criamos e descartamos no mundo."

A peça já foi assistida por mais de **6 mil pessoas em 4 países**, circulando por festivais, teatros, universidades e fóruns socioambientais internacionais.`
);

writeMdoc(
  path.join(contentDir, 'espetaculos', 'historias-do-bosque-dos-guarantas.mdoc'),
  {
    title: 'Histórias do Bosque dos Guarantãs',
    subtitle: 'Passeio artístico-cultural em mata nativa urbana',
    category: 'Patrimônio & Território',
    accentColor: '#EF5A3C',
    ageRating: 'Livre',
    duration: '70 min',
    technicalSheet: [
      { label: 'Criação e Mediação', value: 'Pamella Villanova e Dudu Ferraz' },
      { label: 'Pesquisa Histórica e Comunitária', value: 'Ponto de Cultura Quintal Garatuja' },
      { label: 'Fotografia', value: 'Dalton Sala' }
    ],
    photos: [
      { src: '/photos/espetaculos/bosque-dalton-029.webp', alt: 'Passeio cênico no Bosque dos Guarantãs', caption: 'Passeio pelo Bosque dos Guarantãs — Foto: Dalton Sala' },
      { src: '/photos/espetaculos/bosque-dalton-079.webp', alt: 'Dudu Ferraz e Pamella Villanova em cena', caption: 'Músicas e cenas a partir da memória do bairro' },
      { src: '/photos/espetaculos/bosque-plantio-41.webp', alt: 'Ação comunitária no bosque', caption: 'Plantio e preservação das nascentes em Campinas/SP' }
    ]
  },
  `Desde 2022, o **Coletivo Passarinha** realiza o passeio cênico e musical **Histórias do Bosque dos Guarantãs**, trazendo as memórias sociais, culturais e ecológicas de uma das últimas matas nativas de Campinas (SP).

Conduzido por artistas e moradores, o público caminha pelas trilhas do bosque ouvindo histórias, canções e participando de intervenções poéticas que celebram a biodiversidade e a preservação das *nascentes de água* em meio à cidade.

A ação resultou em conquistas concretas para o parque, como a instalação de placas informativas e bebedouros em diálogo facilitado pelo Garatuja entre a população e o poder público.`
);

writeMdoc(
  path.join(contentDir, 'espetaculos', 'show-nascente.mdoc'),
  {
    title: 'Show Nascente',
    subtitle: 'Show musical de MPB e canções autorais',
    category: 'Show Musical',
    accentColor: '#E91C47',
    ageRating: 'Livre',
    duration: '60 min',
    technicalSheet: [
      { label: 'Composições e Voz', value: 'Dudu Ferraz' },
      { label: 'Percussão e Arranjos', value: 'Maria Carolina Thomé e Coletivo Passarinha' },
      { label: 'Produção', value: 'Quintal Garatuja' }
    ],
    photos: [
      { src: '/photos/espetaculos/nascente-1.webp', alt: 'Show Nascente no palco', caption: 'Apresentação ao vivo do Show Nascente' },
      { src: '/photos/espetaculos/nascente-2.webp', alt: 'Dudu Ferraz e Maria Thomé em cena musical', caption: 'Música popular brasileira e poesia autoral' }
    ]
  },
  `**Show Nascente** é um encontro musical que passeia pelas canções autorais de **Dudu Ferraz** e releituras da *música popular brasileira*.

Com sonoridades que remetem às águas, à terra e aos ritmos tradicionais como o baião, o samba e o xote, o show celebra a força da canção como instrumento de encontro, memória afetiva e consciência ecológica.`
);

// 2. PRÁTICAS FORMATIVAS
ensureDir(path.join(contentDir, 'praticas-formativas'));

writeMdoc(
  path.join(contentDir, 'praticas-formativas', 'atelie-jogar-dentro.mdoc'),
  {
    title: 'Ateliê Jogar Dentro',
    subtitle: 'Arte, criação e reaproveitamento criativo de materiais',
    accentColor: '#FDBC2E',
    targetAudience: 'Crianças, educadores e famílias (a partir de 4 anos)',
    audienceLimit: 'Até 30 participantes por turma',
    whatsappContact: '5519992510921',
    highlights: [
      'Experimentação livre de texturas e volumes',
      'Descarte Zero e ressignificação de resíduos',
      'Criação de brinquedos e adereços com as próprias mãos'
    ],
    principles: [
      'Investigação sensível da matéria',
      'Autonomia criativa da criança',
      'Pensamento ecológico na prática'
    ],
    photos: [
      { src: '/photos/oficinas/jogar-dentro-1.webp', alt: 'Ateliê Jogar Dentro em ação', caption: 'Reaproveitamento criativo com crianças e famílias' },
      { src: '/photos/oficinas/jogar-dentro-2.webp', alt: 'Criação de adereços', caption: 'Construção coletiva de brinquedos e alegorias' }
    ]
  },
  `> "E se aquilo que seria descartado se transformasse em fantasia, figurino, adereço, instrumento musical ou brinquedo?"

O **Ateliê Jogar Dentro** convida crianças e pessoas adultas a mudar o olhar sobre os materiais que habitam nosso cotidiano. Em vez de "jogar fora" — entendendo que no planeta Terra não existe "fora" —, jogamos para dentro do jogo, da imaginação e da criação.

Com tampinhas, papelões, tecidos, sementes e embalagens limpas, os participantes aprendem a construir suas próprias criações artísticas, aliando diversão e sensibilização ambiental profunda.`
);

writeMdoc(
  path.join(contentDir, 'praticas-formativas', 'ecobrinquedoteca-jogar-dentro.mdoc'),
  {
    title: 'Ecobrinquedoteca Jogar Dentro',
    subtitle: 'Espaço itinerante de livre brincar com materiais naturais e sustentáveis',
    accentColor: '#EF5A3C',
    targetAudience: 'Bebês, primeira infância, crianças e famílias',
    audienceLimit: 'Espaço aberto e fluxo contínuo',
    whatsappContact: '5519992510921',
    highlights: [
      'Brinquedos construídos artesanalmente',
      'Ambiente acolhedor e estimulante',
      'Cultura do brincar intergeracional'
    ],
    principles: [
      'Brincar livre sem telas',
      'Cuidado com a primeira infância',
      'Integração com a comunidade'
    ],
    photos: [
      { src: '/photos/oficinas/ecobrinquedoteca-dobra-39.webp', alt: 'Crianças na Ecobrinquedoteca', caption: 'Ecobrinquedoteca — Cultura do brincar livre e sustentável' },
      { src: '/photos/oficinas/ecobrinquedoteca-dobra-41.webp', alt: 'Famílias interagindo', caption: 'Brinquedos artesanais e convivência comunitária' }
    ]
  },
  `A **Ecobrinquedoteca Jogar Dentro** formaliza uma pesquisa contínua desenvolvida desde 2015 pelo **Coletivo Passarinha** sobre a *cultura do brincar* e os materiais reaproveitados.

Com apoio do PROMIC e da Política Nacional Aldir Blanc (PNAB), a ecobrinquedoteca circula por praças, escolas públicas, feiras de arte impressa e festivais, montando um território de encantamento onde o brinquedo não é um produto de plástico comprado pronto, mas uma invenção poética que estimula a imaginação e a partilha familiar.`
);

writeMdoc(
  path.join(contentDir, 'praticas-formativas', 'orquestra-de-pandeiros.mdoc'),
  {
    title: 'Orquestra de Pandeiros',
    subtitle: 'Educação musical intergeracional e prática de conjunto',
    accentColor: '#532E5A',
    targetAudience: 'Jovens, adultos e pessoas idosas (intergeracional)',
    audienceLimit: 'Turmas de até 25 pessoas',
    whatsappContact: '5519992510921',
    highlights: [
      'Iniciação ao pandeiro brasileiro',
      'Pesquisa vinculada ao Mestrado em Música da Unicamp',
      'Repertório de ritmos tradicionais (Samba, Baião, Coco, Ijexá)'
    ],
    principles: [
      'Fazer musical acessível a todas as pessoas',
      'Convivência e afetividade comunitária',
      'Saúde mental e memória na maturidade'
    ],
    photos: [
      { src: '/photos/oficinas/pandeiros-c1-1.webp', alt: 'Orquestra de Pandeiros em ensaio', caption: 'Orquestra de Pandeiros — Educação musical intergeracional' },
      { src: '/photos/oficinas/pandeiros-c2-1.webp', alt: 'Apresentação com pandeiros', caption: 'Prática de conjunto e ritmo coletivo' }
    ]
  },
  `Criada em 2021 por **Maria Carolina Thomé**, a **Orquestra de Pandeiros** é uma ação artístico-pedagógica de educação musical por meio do pandeiro, de caráter intergeracional.

A prática tornou-se objeto de dissertação no Mestrado em Música da **Unicamp**, integrando o Programa UniversIDADE (50+), onde investiga a afetividade e o envolvimento musical de pessoas idosas.

Com circulação em festivais, universidades e encontros da Associação Brasileira de Educação Musical (ABEM), a Orquestra demonstra que qualquer pessoa pode tocar e fazer música em conjunto com alegria e precisão rítmica.`
);

// 3. AUDIOVISUAL
ensureDir(path.join(contentDir, 'audiovisual'));

writeMdoc(
  path.join(contentDir, 'audiovisual', 'a-caixa-magica.mdoc'),
  {
    title: 'A Caixa Mágica',
    category: 'Curta-metragem • Palhaçaria & Acessibilidade',
    videoUrl: 'https://www.youtube.com/watch?v=FkMBMPGgpHw',
    youtubeId: 'FkMBMPGgpHw',
    accentColor: '#E91C47',
    technicalSheet: [
      { label: 'Texto, Direção, Produção e Edição', value: 'Coletivo Passarinha' },
      { label: 'Elenco — Mãozinha', value: 'Sarah Gregorio' },
      { label: 'Elenco — Pirulita', value: 'Maria Carolina Thomé' },
      { label: 'Elenco — Pouca Sombra', value: 'Miguel Matoso' },
      { label: 'Intérprete de Libras', value: 'Karina Zonzini' }
    ],
    photos: [
      { src: '/photos/audiovisual/caixa-magica-1.webp', alt: 'Cena de A Caixa Mágica com Pirulita e Pouca Sombra', caption: 'A Caixa Mágica — Palhaçaria e ressignificação de objetos' },
      { src: '/photos/audiovisual/caixa-magica-2.webp', alt: 'Mãozinha e os brinquedos', caption: 'Criação lúdica e descarte zero' }
    ]
  },
  `Uma palhaça e um palhaço abrem sua **caixa mágica** e, com a ajuda da Mãozinha, brincam com a ressignificação de objetos, explorando infinitas possibilidades antes do descartado!

Tudo começa quando **Pirulita** e **Pouca Sombra** percebem que estão passando tanto tempo no celular que se esqueceram de brincar! Assustados com essa descoberta, decidem encontrar uma solução.

O curta integrou o **Brincando na Rede**, mostra cultural lançada durante o período de isolamento com recursos do Edital Ações em Rede da Prefeitura Municipal de Campinas, com atenção especial à *acessibilidade comunicacional em Libras*.`
);

writeMdoc(
  path.join(contentDir, 'audiovisual', 'fora-de-onde.mdoc'),
  {
    title: 'Fora de onde?',
    category: 'Longa-metragem • Palestra-performance',
    videoUrl: 'https://www.youtube.com/watch?v=mnlxnn_4HPg&t=2411s',
    youtubeId: 'mnlxnn_4HPg',
    accentColor: '#532E5A',
    technicalSheet: [
      { label: 'Criação, Direção e Edição', value: 'Pamella Villanova' },
      { label: 'Assistência de Direção e Som', value: 'Dudu Ferraz' },
      { label: 'Fotografia', value: 'Mauro Machado' }
    ],
    photos: [
      { src: '/photos/audiovisual/fora-de-onde-cartaz.webp', alt: 'Cartaz Oficial de Fora de onde?', caption: 'Cartaz Oficial — Fora de onde?', fit: 'contain' },
      { src: '/photos/audiovisual/fora-de-onde-cena.webp', alt: 'Pamella Villanova em cena', caption: 'Cena de Fora de onde? — Foto: Mauro Machado' },
      { src: '/photos/home/audiovisual-deusa.webp', alt: 'Deusa Reduza em cena', caption: 'Deusa Reduza — Foto: Mauro Machado' }
    ]
  },
  `Quando eu jogo alguma coisa fora, eu jogo **fora de onde?** Em um convite poético ao pensamento, vamos dialogar com alguns pontos de vista sobre a problemática do lixo.

Como podemos perceber e lidar com esses rastros de consumo que deixamos diariamente? O que acontece com a sacola depois que colocamos na calçada?

O longa-metragem faz parte da pesquisa de doutorado de **Pamella Villanova** no Instituto de Artes da Unicamp e foi indicado a melhor filme na categoria longa-metragem no X FESTCINE Pinhais. Foi transmitido com debate no 8º EDICC da Unicamp.`
);

writeMdoc(
  path.join(contentDir, 'audiovisual', 'o-que-se-passa-no-formigueiro.mdoc'),
  {
    title: 'O que se passa no formigueiro?',
    category: 'Produção Audiovisual • Inspirado em Ana Primavesi',
    videoUrl: 'https://www.youtube.com/watch?v=FkMBMPGgpHw',
    youtubeId: 'FkMBMPGgpHw',
    accentColor: '#FDBC2E',
    technicalSheet: [
      { label: 'Concepção e Realização', value: 'Pamella Villanova e Dudu Ferraz' },
      { label: 'Inspiração Literária', value: 'Rainha Maximiliana Atta, de Ana Primavesi' },
      { label: 'Intérprete de Libras', value: 'Karina Zonzini' },
      { label: 'Captação de Imagens', value: 'Quintal Garatuja, Guilherme Cruz e Neader Eringuer' }
    ],
    photos: [
      { src: '/photos/audiovisual/formigueiro-cena.webp', alt: 'Cena com Libras', caption: 'O que se passa no formigueiro? — Acessibilidade em Libras' },
      { src: '/photos/home/audiovisual-formigueiro.webp', alt: 'Arte conceitual do formigueiro', caption: 'Inspirado em Rainha Maximiliana Atta, de Ana Primavesi' }
    ]
  },
  `Um formigueiro de saúvas cortadeiras passa por momentos de dificuldade: a terra está diferente, há mais seres vivendo naquele solo, as formigas estão em perigo!

Venha conhecer a vida no formigueiro com esta aventura épica inspirada nos escritos da pioneira da agroecologia **Ana Primavesi**.

Toda a concepção foi realizada por artistas do **Quintal Garatuja**, com interpretação em Libras por **Karina Zonzini** e poética visual gravada na sede do Ponto de Cultura.`
);

// 4. PROJETOS GARATUJA
ensureDir(path.join(contentDir, 'projetos-garatuja'));

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'show-de-variedades.mdoc'),
  {
    title: 'Show de Variedades',
    tag: 'Mostra Artística & Encontro Comunitário',
    accentColor: '#532E5A',
    photos: [
      { src: '/photos/garatuja/variedades-1.webp', alt: 'Show de Variedades no Quintal Garatuja', caption: 'Show de Variedades — Palco aberto para a comunidade' },
      { src: '/photos/garatuja/principal-tc-silva.webp', alt: 'Artistas no palco', caption: 'Encontros culturais e celebração artística' }
    ]
  },
  `O **Show de Variedades** é a tradicional mostra artística do **Ponto de Cultura Quintal Garatuja**, que reúne números de circo, música, teatro, poesia e contação de histórias.

Com entrada gratuita e acolhimento comunitário, o evento abre espaço tanto para artistas iniciantes quanto para mestres da cultura popular de Campinas e região, fortalecendo laços de vizinhança e pertencimento.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'nosso-canto.mdoc'),
  {
    title: 'Nosso Canto',
    tag: 'Música, Memória & Ancestralidade',
    accentColor: '#E91C47',
    photos: [
      { src: '/photos/garatuja/nosso-canto-1.webp', alt: 'Roda do Nosso Canto', caption: 'Nosso Canto — Vozes e canções tradicionais' }
    ]
  },
  `**Nosso Canto** é um projeto de difusão musical e salvaguarda da memória que valoriza o cancioneiro popular, compositores locais e tradições orais.

As apresentações e rodas de conversa convidam o público a cantar junto e a redescobrir as raízes da música brasileira em um ambiente intimista sob as árvores do Quintal.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'acoes-formativas.mdoc'),
  {
    title: 'Ações Formativas',
    tag: 'Cursos Livres, Oficinas & Acessibilidade',
    accentColor: '#FDBC2E',
    photos: [
      { src: '/photos/garatuja/formativas-1.webp', alt: 'Ação formativa no Garatuja', caption: 'Cursos gratuitos de teatro e mediação cultural' }
    ]
  },
  `O programa de **Ações Formativas** do Quintal Garatuja promove cursos e laboratórios gratuitos de teatro, acessibilidade cultural, primeiros socorros em espaços comunitários e dança.

Com apoio de leis de incentivo como o ProAC e a Política Nacional Cultura Viva, já formou centenas de educadores e jovens artistas.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'nucleo-socioambiental.mdoc'),
  {
    title: 'Núcleo Socioambiental',
    tag: 'Horta, Compostagem & Permacultura Urbana',
    accentColor: '#EF5A3C',
    photos: [
      { src: '/photos/garatuja/socioambiental-1.webp', alt: 'Horta do Quintal Garatuja', caption: 'Práticas permaculturais e agroecologia no Jardim Nova Europa' }
    ]
  },
  `O **Núcleo Socioambiental** transforma a casa do Garatuja em uma estação viva de permacultura urbana.

Conta com horta comunitária agroecológica, minhocário, compostagem de resíduos orgânicos e canteiros pedagógicos abertos a visitas de escolas e moradores do Jardim Nova Europa.`
);

// 5. HISTÓRICO (Memória Viva)
ensureDir(path.join(contentDir, 'historico'));

const timelineBlocks = [
  {
    year: '2014-2015',
    periodLabel: '2014 – 2015',
    title: 'Fundação, Grafite na Praça & Estação Permacultural Móvel (Kombi Safari)',
    location: 'Campinas (SP) e Estrada pelo Brasil',
    tag: 'Fundação & Itinerância',
    photoStacked: true,
    photos: [
      { src: '/photos/historico/inicio-1.webp', alt: 'Kombi Safari na estrada', caption: 'Estação Permacultural Móvel — Kombi Safari 1980 na estrada' },
      { src: '/photos/historico/inicio-2.webp', alt: 'Início da jornada', caption: '2014–2015 — Intercâmbios artísticos e permaculturais pelo Brasil' }
    ],
    content: `Somos o **Coletivo Interdisciplinar Passarinha**, artistas da cena, música, design e permacultura. Há anos, realizamos ações de *arte educação ambiental* em projetos itinerantes e também conservando relações com territórios. Trabalhamos com e para crianças de zero a cem anos.

Fundado em 2014, o Coletivo promoveu sua primeira ação em Campinas/SP: o evento **“Grafite na praça”**, como preparação para a jornada artística que aconteceu no ano seguinte a bordo de uma Kombi grafitada.

Em 2015, a Passarinha colocou na estrada sua **Estação Permacultural Móvel**, uma Kombi Safari 1980 transformada em casa e laboratório itinerante equipada com energia solar, forno solar, minhocário e banheiro seco.`
  },
  {
    year: '2015',
    periodLabel: '2015',
    title: 'Mais de 40 Ações na Estrada & Nascimento das Oficinas “Jogar Dentro”',
    location: 'Diversas cidades brasileiras',
    tag: 'Ações Itinerantes',
    photoStacked: true,
    photos: [
      { src: '/photos/historico/jogar-dentro-1.webp', alt: 'Oficinas Jogar Dentro', caption: '2015 — Oficinas Jogar Dentro pelas cidades do percurso' }
    ],
    content: `De janeiro a novembro de 2015, foram realizadas mais de **quarenta ações artísticas e pedagógicas**, de forma independente, pelas cidades por onde a Passarinha passou.

Práticas de palhaçaria, brincadeiras e reutilização de materiais foram estruturadas nas oficinas **“Jogar Dentro”**, promovendo reflexão lúdica acerca da cultura do consumo e do descarte.`
  },
  {
    year: '2016',
    periodLabel: '2016',
    title: 'Projeto “Oficinas Cortejo” (Ceará, São Paulo e Paraná)',
    location: 'CE, SP e PR',
    tag: 'Circulação Nacional',
    photoStacked: true,
    photos: [
      { src: '/photos/historico/oficina-cortejo-4.webp', alt: 'Oficinas Cortejo', caption: 'Oficinas Cortejo — Instrumentos e alegorias com materiais reaproveitados' },
      { src: '/photos/historico/oficina-cortejo-6.webp', alt: 'Cortejo comunitário', caption: 'Apresentação coletiva nas comunidades (CE, SP e PR)' }
    ],
    content: `O projeto **“Oficinas Cortejo”** aconteceu em 2016 com financiamento via Lei Rouanet pelos estados do Ceará, São Paulo e Paraná.

Foram quatro oficinas na comunidade quilombola Córrego de Ubaranas (Aracati/CE), na comunidade Sussuí (Palmital/SP), em Porecatu (PR) e na Vila Cultural ALMA (Londrina/PR), construindo cortejos com alegorias e instrumentos de materiais reaproveitados.`
  },
  {
    year: '2017-2018',
    periodLabel: '2017 – 2018',
    title: 'Arte-Educação Ambiental e Permacultura no Ceará',
    location: 'Camocim e Região (CE)',
    tag: 'Educação Pública',
    photoStacked: true,
    photos: [
      { src: '/photos/historico/permacultura-1.webp', alt: 'Vivências de Permacultura no Ceará', caption: 'Permacultura e arte-educação ambiental no Ceará' },
      { src: '/photos/historico/permacultura-4.webp', alt: 'Ações educativas', caption: 'Práticas colaborativas junto a estudantes e educadores' }
    ],
    content: `Durante 2017 e 2018, foram desenvolvidas diversas atividades de arte-educação ambiental voluntárias em parceria com a Coordenadoria Regional CREDE 4 e o **Instituto Federal do Ceará (IFCE)** – Campus de Camocim.`
  },
  {
    year: '2016-2019',
    periodLabel: '2016 – 2019',
    title: 'Gestão do Ponto de Cultura Quintal Garatuja & Lei Cultura Viva',
    location: 'Campinas (SP)',
    tag: 'Território & Sede',
    photoStacked: true,
    photos: [
      { src: '/photos/garatuja/principal-primeiro-evento.webp', alt: 'Quintal Garatuja', caption: 'Quintal Garatuja — Encontros artísticos e comunitários desde 2016' }
    ],
    content: `Desde 2016, a Passarinha faz a gestão do **Ponto de Cultura Quintal Garatuja** em Campinas/SP.

Em 2019, o espaço foi contemplado pela **Lei Cultura Viva**, promovendo mais de 30 ações de teatro, brincadeira livre e formação pedagógica no Jardim Nova Europa.`
  },
  {
    year: 'desde-2018',
    periodLabel: 'Desde 2018',
    title: 'Circulação de “Histórias que a Passarinha me contou”',
    location: 'Nacional e Internacional',
    tag: 'Espetáculo em Circulação',
    photoStacked: true,
    photos: [
      { src: '/photos/espetaculos/passarinha-nina-197.webp', alt: 'Histórias que a Passarinha me contou', caption: 'Histórias que a Passarinha me contou — Circulação nacional e internacional' }
    ],
    content: `Juntando contação de histórias, música autoral e convite ao brincar, o projeto circula desde 2018 por dezenas de unidades do SESC, escolas, festivais e viajou até **Cali, na Colômbia**.`
  },
  {
    year: '2020-2021',
    periodLabel: '2020 – 2021',
    title: 'Residência Passarinhas (Feverestival) & Mostra Brincando na Rede',
    location: 'Campinas (SP) / Plataforma Digital',
    tag: 'Acessibilidade & Teatro',
    photoStacked: true,
    photos: [
      { src: '/photos/historico/feverestival-2.webp', alt: 'Residência Passarinhas no Feverestival', caption: '2020 — Residência Passarinhas no Feverestival' },
      { src: '/photos/audiovisual/caixa-magica-1.webp', alt: 'Brincando na Rede', caption: '2021 — Plataforma digital Brincando na Rede com acessibilidade' }
    ],
    content: `Em 2020, foi promovida a **Residência Passarinhas** no FEVERESTIVAL em parceria com a rede municipal de ensino infantil de Campinas.

Em 2021, criou a plataforma digital **Brincando na Rede**, com residência voltada ao estudo transversal de *acessibilidade comunicacional* que se tornou pilar definitivo do coletivo.`
  },
  {
    year: '2022-2028',
    periodLabel: '2022 – 2028',
    title: 'Formação Gratuita & Histórias do Bosque dos Guarantãs',
    location: 'Campinas (SP)',
    tag: 'Patrimônio Ambiental',
    photoStacked: true,
    photos: [
      { src: '/photos/espetaculos/bosque-dalton-029.webp', alt: 'Histórias do Bosque dos Guarantãs', caption: 'Histórias do Bosque dos Guarantãs — Memória e preservação desde 2022' }
    ],
    content: `Cursos teatrais gratuitos, formações em mediação cultural e o passeio cênico **Histórias do Bosque dos Guarantãs**, aproximando comunidade, arte e preservação da mata nativa.`
  },
  {
    year: '2021-hoje',
    periodLabel: '2021 – Hoje',
    title: 'Orquestra de Pandeiros & Pesquisa em Educação Musical',
    location: 'Londrina (PR), Campinas (SP) e Circulação',
    tag: 'Educação Musical',
    photoStacked: true,
    photos: [
      { src: '/photos/oficinas/pandeiros-c1-1.webp', alt: 'Orquestra de Pandeiros', caption: 'Orquestra de Pandeiros — Educação musical intergeracional' },
      { src: '/photos/oficinas/pandeiros-c2-1.webp', alt: 'Apresentação musical', caption: 'Circulação por festivais, universidades e congressos' }
    ],
    content: `Criação da **Orquestra de Pandeiros**, ação pedagógica intergeracional desenvolvida por **Maria Carolina Thomé** com pesquisa vinculada ao Mestrado em Música da **Unicamp** e ao Programa UniversIDADE (50+).`
  },
  {
    year: '2023-2026',
    periodLabel: '2023 – 2026',
    title: 'Plástico, um mito contemporâneo, Reciclarnaval & Ecobrinquedoteca',
    location: 'Campinas, Londrina e Internacional',
    tag: 'Consolidação Artística',
    photoStacked: true,
    photos: [
      { src: '/photos/espetaculos/plastico-dalton-028.webp', alt: 'Plástico, um mito contemporâneo', caption: '2023 — Estreia internacional de Plástico, um mito contemporâneo' },
      { src: '/photos/historico/reciclarnaval-1.webp', alt: 'Reciclarnaval no SESC Campinas', caption: '2024 — Reciclarnaval no SESC Campinas (+800 peças criadas)' },
      { src: '/photos/historico/ecobrinquedoteca-3.webp', alt: 'Ecobrinquedoteca Jogar Dentro', caption: '2024–2025 — Ecobrinquedoteca Jogar Dentro (PROMIC e PNAB)' }
    ],
    content: `Estreia internacional de **Plástico, um mito contemporâneo**, realização do ateliê **Reciclarnaval** no SESC Campinas (mais de 800 fantasias criadas) e consolidação da **Ecobrinquedoteca Jogar Dentro** via editais PROMIC e PNAB.`
  },
  {
    year: '2027',
    periodLabel: '2027 e Adiante',
    title: 'Próxima Estreia Teatral: “Fora de onde?”',
    location: 'Campinas (SP)',
    tag: 'Futuras Criações',
    photoStacked: true,
    photos: [
      { src: '/photos/audiovisual/fora-de-onde-cena.webp', alt: 'Fora de onde?', caption: 'Fora de onde? — Nova montagem teatral prevista para 2027' }
    ],
    content: `Preparação da estreia teatral de **Fora de onde?**, abordando a problemática dos resíduos sólidos na cidade de Campinas, complementando a pesquisa de doutorado em Artes da Cena na Unicamp.`
  }
];

for (const block of timelineBlocks) {
  writeMdoc(
    path.join(contentDir, 'historico', `${block.year}.mdoc`),
    {
      year: block.year,
      periodLabel: block.periodLabel,
      title: block.title,
      location: block.location,
      tag: block.tag,
      photoStacked: block.photoStacked,
      photos: block.photos
    },
    block.content
  );
}

// 6. EQUIPE
ensureDir(path.join(contentDir, 'equipe'));

writeMdoc(
  path.join(contentDir, 'equipe', 'sarah-gregorio.mdoc'),
  {
    name: 'Sarah Gregorio',
    role: 'Co-fundadora, Designer, Produtora & Arte-educadora',
    avatarColor: '#FDBC2E',
    photoUrl: '/photos/passarinhas/sarah-avatar.webp',
    instagramUrl: 'https://instagram.com/coletivopassarinha'
  },
  `Designer, produtora cultural e arte-educadora. Co-fundadora do **Coletivo Passarinha**, pesquisa linguagens visuais, design gráfico sustentável, permacultura e reutilização poética de materiais.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'pamella-villanova.mdoc'),
  {
    name: 'Pâmella Villanova',
    role: 'Artista da Cena, Pesquisadora & Gestora Cultural',
    avatarColor: '#E91C47',
    photoUrl: '/photos/passarinhas/pamella-avatar.webp',
    instagramUrl: 'https://instagram.com/coletivopassarinha'
  },
  `Atriz, diretora, pesquisadora e doutoranda em Artes da Cena pela **Unicamp**. Atua na gestão do **Ponto de Cultura Quintal Garatuja** e lidera projetos com foco em acessibilidade e teatro científico.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'maria-thome.mdoc'),
  {
    name: 'Maria Carolina Thomé',
    role: 'Musicista, Educadora Musical & Percussionista',
    avatarColor: '#532E5A',
    photoUrl: '/photos/passarinhas/maria-avatar.webp',
    instagramUrl: 'https://instagram.com/coletivopassarinha'
  },
  `Musicista, percussionista e mestranda em Música na **Unicamp**. Idealizadora da **Orquestra de Pandeiros**, desenvolve pesquisas sobre educação musical comunitária e intergeracionalidade.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'dudu-ferraz.mdoc'),
  {
    name: 'Dudu Ferraz',
    role: 'Gestor Cultural, Compositor & Artista Interdisciplinar',
    avatarColor: '#F79335',
    photoUrl: '/photos/passarinhas/dudu-avatar.webp',
    instagramUrl: 'https://instagram.com/coletivopassarinha'
  },
  `Cantautor, compositor, produtor e gestor cultural. Atua na articulação de redes e na criação de trilhas e espetáculos que conectam arte e patrimônio socioambiental.`
);

// 7. SINGLETONS
writeMdoc(
  path.join(contentDir, 'pagina-inicial.mdoc'),
  {
    heroTitle: 'Coletivo Interdisciplinar Passarinha',
    heroSubtitle: 'arte educação ambiental',
    ctaText: 'Conheça quem somos →'
  },
  `Somos o **Coletivo Interdisciplinar Passarinha**, artistas da cena, música, design e permacultura. Há anos, realizamos ações de *arte educação ambiental* em projetos itinerantes e também conservando relações com territórios.

Promovemos práticas artísticas e discutimos urgências socioambientais relacionadas a essa sociedade do consumo e do descarte - que nos apavora.

O Coletivo Passarinha trabalha em várias frentes e em diferentes lugares. Somos uma plataforma de criação e circulação, que tem a inclusão e atenção às problemáticas socioambientais como temáticas transversais. Temos interesse em costurar nossas práticas de arte e cultura com os lugares e pessoas que cruzamos. **Fazemos arte educação ambiental desde 2014.**

Trabalhamos em parceria com instituições públicas e particulares, com Pontos de Cultura e outros espaços culturais. Já realizamos projetos com apoio de esferas federais, estaduais, municipais e de alianças internacionais, sempre entregando excelência em todas as ações realizadas.`
);

writeMdoc(
  path.join(contentDir, 'quintal-garatuja.mdoc'),
  {
    title: 'Ponto de Cultura Quintal Garatuja',
    tag: 'Ponto de Cultura • Campinas / SP',
    leadText: 'Sede do Coletivo Passarinha, o Garatuja é um espaço de criação, convivência, pesquisa e formação localizado no Jardim Nova Europa, em Campinas (SP). Reconhecido como Ponto de Cultura pela Política Nacional Cultura Viva, o Quintal nasceu do desejo de transformar uma casa em um território vivo de encontros, onde arte, cultura, educação e meio ambiente se entrelaçam como práticas de cuidado com as pessoas e com o lugar onde vivemos.',
    street: 'Rua São Miguel Arcanjo, 1520',
    neighborhood: 'Jardim Nova Europa • Campinas / SP',
    email: 'garatuja.decultura@gmail.com',
    instagram: 'https://www.instagram.com/quintalgaratuja',
    linktree: 'https://linktr.ee/quintalgaratuja',
    whatsappGroup: 'https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK',
    photos: [
      { src: '/photos/garatuja/principal-tc-silva.webp', alt: 'TC Silva no Quintal Garatuja', caption: 'TC Silva no Quintal Garatuja' },
      { src: '/photos/garatuja/principal-ultimo-tipo.webp', alt: 'Grupo Último Tipo no Quintal Garatuja', caption: 'Grupo Último Tipo — Teatro e cultura popular' },
      { src: '/photos/garatuja/principal-aya.webp', alt: 'Apresentação AYA', caption: 'AYA — Música e ancestralidade no Quintal' },
      { src: '/photos/garatuja/principal-aquarela.webp', alt: 'Vivência Aquarela', caption: 'Encontros poéticos e formação artística' },
      { src: '/photos/garatuja/principal-coro-cenico.webp', alt: 'Coro Cênico', caption: 'Coro Cênico — Vozes e presença coletiva' },
      { src: '/photos/garatuja/principal-primeiro-evento.webp', alt: 'Primeiro evento do Garatuja', caption: 'Primeiro Evento Garatuja — Foto: Gabriela Zanardi' },
      { src: '/photos/garatuja/principal-grupo-grito.webp', alt: 'Grupo Grito', caption: 'Grupo Grito — Rede de artistas e Pontos de Cultura' },
      { src: '/photos/garatuja/principal-quintal.webp', alt: 'Convivência comunitária', caption: 'Espaço vivo de criação e comunidade no Nova Europa' }
    ]
  },
  `Mais do que um espaço físico, o **Quintal Garatuja** é um laboratório permanente de experimentação artística e cidadã. Aqui, artistas, pesquisadoras, educadoras, moradoras, crianças, jovens e pessoas adultas compartilham processos criativos, investigações e experiências que aproximam *arte e vida cotidiana*.

Nossa atuação parte do território. Desenvolvemos projetos que dialogam com a memória, a paisagem, os saberes populares e as histórias da comunidade, compreendendo o bairro como um espaço de aprendizagem, criação e pertencimento.

A pesquisa é um dos pilares do Quintal Garatuja. Investigamos as relações entre **arte, ecologia, território e sociedade**, desenvolvendo processos que resultam em espetáculos, performances, intervenções urbanas, publicações, exposições e ações educativas.

O espaço também abriga uma programação contínua de formação. Oferecemos oficinas, cursos, laboratórios, residências artísticas, vivências, encontros e intercâmbios que estimulam práticas colaborativas e o desenvolvimento de artistas, educadoras e agentes culturais.`
);

writeMdoc(
  path.join(contentDir, 'aru.mdoc'),
  {
    title: 'A História de Aru',
    tagline: 'Arte-Educação Ambiental & Cordel',
    originalAuthor: 'Paulo Roberto Amaral Lencioni',
    cordelAdaptation: 'Mari Rebelo e Sarah Gregorio',
    ebookUrl: 'https://coletivopassarinha.com/downloads/a-historia-de-aru-ebook.pdf',
    cartilhaUrl: 'https://coletivopassarinha.com/downloads/a-historia-de-aru-cartilha.pdf',
    principles: [
      '1. Observe e Interaja',
      '2. Capte e Armazene Energia',
      '3. Obtenha Rendimento',
      '4. Pratique a Auto-regulação e Aceite Feedback',
      '5. Use e Valorize os Serviços e Recursos Renováveis',
      '6. Não Produza Lixo (Descarte Zero)',
      '7. Projete dos Padrões aos Detalhes',
      '8. Integre ao Invés de Segregar',
      '9. Use Soluções Pequenas e Lentas',
      '10. Use e Valorize a Diversidade',
      '11. Use as Bordas e Valorize os Elementos Marginais',
      '12. Use Criativamente e Responda às Mudanças'
    ],
    photos: [
      { src: '/photos/aru/aru-cenario-1.webp', alt: 'Animal artesanal de A História de Aru', caption: 'Personagens criados com retalhos, sementes e fibras', fit: 'cover' },
      { src: '/photos/aru/aru-cenario-2.webp', alt: 'Composição visual de Aru', caption: 'Fotografias originais que ilustram o e-book em cordel', fit: 'cover' },
      { src: '/photos/aru/aru-1.webp', alt: 'Personagem Aru', caption: 'Aru — Criação artesanal com elementos naturais e recicláveis', fit: 'contain' },
      { src: '/photos/aru/povoado-1.webp', alt: 'Povoado de Aru', caption: 'Povoado de Aru — Poéticas visuais de baixo impacto', fit: 'contain' },
      { src: '/photos/aru/povoado-2.webp', alt: 'Rosto artesanal de sementes', caption: 'Diversidade de texturas, sementes e materiais ressignificados', fit: 'contain' },
      { src: '/photos/aru/aru-2.webp', alt: 'Máscara artesanal com búzio', caption: 'Arte, educação e sabedoria da Permacultura', fit: 'contain' }
    ]
  },
  `**A História de Aru** é um projeto de *arte-educação ambiental* que apresenta os **12 princípios da Permacultura** por meio de uma emocionante história em cordel, escrita por **Paulo Roberto Amaral Lencioni** e adaptada para cordel por **Mari Rebelo** e **Sarah Gregorio**.

O projeto nasceu da vontade de experimentar possibilidades de criação artística com materiais naturais e objetos que seriam descartados. A partir desses materiais, foram criados personagens, cenários e elementos que dão forma visual à história de Aru, explorando texturas, cores e volumes.

Aru é uma jovem que aprende observando o mundo ao seu redor. Ao longo de sua jornada, encontra diferentes povoados, conhece outros modos de viver e descobre formas de lidar com a água, a produção de alimentos e a vida em comunidade.

O cordel, com suas rimas e métricas populares, aproxima esses conceitos do público de maneira acessível, lúdica e poética para todas as idades.`
);

console.log('Seed completed successfully!');
