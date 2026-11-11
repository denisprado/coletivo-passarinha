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

A **Passarinha** é uma viajante que espalha pelo vento contos e cantos. Ela voa e se transforma em contato com os lugares e personagens que encontra pelo mundo e assim segue sua viagem, sempre buscando trocar sementes e conhecimentos por onde passa. Os objetos cênicos são feitos com aquilo que fora considerado sem utilidade, exercitando o repensar e a reutilização de forma lúdica e criativa.

São dois episódios, cada um com duração total de 40 a 50 minutos, que convidam crianças de zero a cem anos a imaginar a vida na água e a vida no solo.`
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
  `Esse espetáculo propõe uma ginástica do imaginar, até culminar em um exercício coletivo de imaginação. Enquanto nos divertimos, vamos tentar olhar a tragédia nos olhos, perceber algo que sustenta nosso estilo de vida mas que é quase invisível.

Vamos encontrar personagens humanas e não-humanas. Máscaras sociais e teatrais. Convites ao nosso imaginário, para viagens no tempo e na história dessa matéria tão abundante, comum e mágica: o **plástico**. O plástico que estrutura nossas ações cotidianas e a tragédia contemporânea do consumo: *serão superáveis?*`
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
  `Criado por **Dudu Ferraz** e **Pamella Villanova**, integrantes do Ponto de Cultura Quintal Garatuja, localizado a 700 metros do Bosque dos Guarantãs, esse projeto nasce em 2022 com a intenção de valorizar as memórias de nossos territórios, mas também os espaços de preservação ambiental tão importantes e necessários nas áreas urbanas. Durante o período de isolamento social, ocasionado pela pandemia da Covid-19, a dupla constatou que os espaços verdes como parques e bosques se tornaram refúgios de calma e respiro para a população das cidades.

O projeto começou com escutas de relatos da comunidade do bairro, junto de pesquisa histórica e documentos oficiais a respeito do Bosque dos Guarantãs. O propósito era reunir material para servir de base para a criação de uma intervenção artística naquele espaço comum e tão importante para a comunidade local.

O resultado desse processo foi a realização do passeio turístico e cultural **“Histórias do Bosque dos Guarantãs”** com jogos, histórias, música e teatro em que são compartilhadas as memórias, curiosidades e contradições encontradas no processo de pesquisa.`
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
  `Espetáculo musical do **Coletivo Passarinha** com direção musical e composições de **Dudu Ferraz**, celebrando a *canção brasileira*, a poesia, os cursos d'água e a força dos encontros no palco.`
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
    whatsappContact: '5588981085939',
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
  `O **Ateliê Jogar Dentro** é um espaço de experimentação e criação artística que convida os participantes a explorar as possibilidades dos materiais reaproveitados, transformando-os em objetos para brincar, imaginar, inventar personagens, criar sons e contar histórias.

O ateliê reúne materiais em diferentes estados e possibilidades de uso: alguns preservam suas características originais; outros já chegam ressignificados, recortados, combinados ou preparados para novas experimentações. Plásticos de diferentes cores e formatos, embalagens laminadas, retalhos de tecidos e outros materiais compõem um repertório aberto à investigação, no qual cada forma, textura, cor e característica pode despertar novas ideias.

A seleção dos materiais também faz parte da proposta. Damos preferência àqueles que apresentam maiores dificuldades de reciclagem, como determinados plásticos coloridos e embalagens laminadas, buscando explorar suas possibilidades de uso e criação antes que sejam descartados. Assim, o reaproveitamento se torna também uma oportunidade de refletir sobre os materiais que circulam em nosso cotidiano e sobre os destinos que damos a eles.`
);

writeMdoc(
  path.join(contentDir, 'praticas-formativas', 'ecobrinquedoteca-jogar-dentro.mdoc'),
  {
    title: 'Ecobrinquedoteca Jogar Dentro',
    subtitle: 'Espaço itinerante de livre brincar com materiais naturais e sustentáveis',
    accentColor: '#EF5A3C',
    targetAudience: 'Bebês, primeira infância, crianças e famílias',
    audienceLimit: 'Espaço aberto e fluxo contínuo',
    whatsappContact: '5588981085939',
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
  `A **Ecobrinquedoteca Jogar Dentro** nasceu dessa inquietação: o que acontece quando mudamos nosso olhar para aquilo que descartamos? O que pode surgir quando materiais que perderam sua função original encontram novas possibilidades nas mãos de quem brinca?

Itinerante e aberta ao encontro, a Ecobrinquedoteca reúne brinquedos, jogos, materiais reaproveitados, elementos naturais e brincadeiras, convidando pessoas de diferentes idades a experimentar, imaginar, criar e descobrir outras formas de se relacionar com os objetos, com o ambiente e com as pessoas ao redor.

**Mais do que reunir brinquedos, a Ecobrinquedoteca reúne possibilidades de brincar.**

A proposta nasce do encontro entre a Cultura do Brincar e a Arte Educação Ambiental. Compreendemos o brincar como linguagem, experiência artística e patrimônio cultural vivo, que se transforma e se reinventa a cada encontro. Brincar é experimentar o mundo, construir relações, inventar regras, compartilhar descobertas e produzir sentidos coletivamente.`
);

writeMdoc(
  path.join(contentDir, 'praticas-formativas', 'orquestra-de-pandeiros.mdoc'),
  {
    title: 'Orquestra de Pandeiros',
    subtitle: 'Educação musical intergeracional e prática de conjunto',
    accentColor: '#532E5A',
    targetAudience: 'Jovens, adultos e pessoas idosas (intergeracional)',
    audienceLimit: 'Turmas de até 25 pessoas',
    whatsappContact: '5518996115002',
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
  `A **Orquestra de Pandeiros** é uma ação artístico-pedagógica de educação musical que tem como fundamento as manifestações percussivas da cultura popular brasileira e a prática musical coletiva. De caráter intergeracional, reúne pessoas com e sem experiência musical em processos de criação, escuta e aprendizagem compartilhada, tendo o pandeiro como instrumento de encontro, expressão e convivência. Idealizado em 2021, o projeto nasceu em Londrina/PR e, em 2023, tornou-se objeto de pesquisa no curso de Mestrado em Música da UNICAMP. Atualmente, desenvolve uma atuação itinerante por festivais, universidades e espaços culturais, difundindo a riqueza das tradições percussivas brasileiras e fortalecendo a música como experiência coletiva, inclusiva e transformadora.`
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
  `Uma palhaça e um palhaço abrem sua **caixa mágica** e, com a ajuda da Mãozinha, brincam com a ressignificação de objetos, explorando criativamente suas infinitas possibilidades antes do descartado.

Tudo começa quando **Pirulita** e **Pouca Sombra** percebem que estão passando tanto tempo no celular que se esqueceram de brincar! Assustados com essa descoberta, decidem encontrar uma solução para que outras crianças não passem pelo mesmo. E qual é a ideia da dupla? Usar o próprio celular para ajudar todo mundo a ficar longe dele!

Um curta-metragem do **Coletivo Passarinha** que mistura humor, brincadeira e reflexão sobre o uso das telas e as possibilidades que os objetos guardam antes de serem descartados.`
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
  `Quando eu jogo alguma coisa fora, eu jogo **fora de onde?** Em um convite poético ao pensamento, vamos dialogar com alguns pontos de vista sobre a problemática do lixo. Como podemos perceber e lidar com esses rastros de consumo que fiz e sigo fazendo todos os dias? O que acontece com o saquinho de lixo depois que coloco na porta de casa? Qual o futuro dos descartados? Quantas histórias o lixo conta! Em interlocução com a Política Nacional de Resíduos Sólidos, lei 12.305/2010, este filme é tragédia, diversão e reflexão em uma palestra-performance.

O longa metragem é parte da pesquisa de doutorado de **Pamella Villanova**, em Artes da Cena na Unicamp. Foi um primeiro rascunho para uma peça de teatro prevista para estrear em 2027. O filme foi feito durante a pandemia, quando os teatros estavam fechados. Participou de festivais de teatro, como o Inverno Cultural UFSJ, o festival de cinema ambiental SARANCINE e o 10º FESTCINE, no qual foi indicado a melhor filme na categoria longa metragem. A obra audiovisual também participou de diversos eventos, ligados a temáticas socioambientais, de extensão universitária e divulgação científica.`
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
    tag: 'Saiba mais sobre alguns projetos de continuidade',
    accentColor: '#532E5A',
    photos: [
      { src: '/photos/garatuja/variedades-familia-burg.webp', alt: 'Família Burg no Show de Variedades do Quintal Garatuja', caption: 'Família Burg — Show de Variedades' },
      { src: '/photos/garatuja/variedades-grupo-ja.webp', alt: 'Grupo Já no Show de Variedades', caption: 'Grupo Já — Cabaré e encontro cênico comunitário' },
      { src: '/photos/garatuja/variedades-mestre-marquinhos.webp', alt: 'Mestre Marquinhos no Show de Variedades', caption: 'Mestre Marquinhos — Cultura popular no Quintal' },
      { src: '/photos/garatuja/variedades-criso-dudu.webp', alt: 'Criso e Dudu no Show de Variedades (Foto: Zé Netto)', caption: 'Criso e Dudu — Foto: Zé Netto' },
      { src: '/photos/garatuja/variedades-gabi-brasa.webp', alt: 'Gabi e Brasa no Show de Variedades', caption: 'Gabi e Brasa — Música e cena aberta' }
    ]
  },
  `Nossa curadoria cuidadosa transforma o palco em um panorama cultural da cidade. Com mais de **10 edições, desde 2019**, já recebemos mais de **40 artistas** de todas as partes do município, de outros estados e também de outros países.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'nosso-canto.mdoc'),
  {
    title: 'Nosso Canto',
    tag: 'Projeto de Continuidade',
    accentColor: '#E91C47',
    photos: [
      { src: '/photos/garatuja/nossocanto-ori-okan.webp', alt: 'Ori Okan no projeto Nosso Canto', caption: 'Ori Okan — Projeto Nosso Canto' },
      { src: '/photos/passarinhas/dudu-ferraz.webp', alt: 'Dudu Ferraz no Nosso Canto (Foto: @felandrade09)', caption: 'Dudu Ferraz — Foto: @felandrade09' },
      { src: '/photos/garatuja/nossocanto-ferdi.webp', alt: 'Ferdi no projeto Nosso Canto', caption: 'Ferdi — Vozes e canções no Quintal Garatuja' },
      { src: '/photos/garatuja/nossocanto-renan.webp', alt: 'Renan no Nosso Canto (Foto: Zé Neto)', caption: 'Renan — Foto: Zé Neto' },
      { src: '/photos/garatuja/nossocanto-12.webp', alt: 'Encontro musical do projeto Nosso Canto', caption: 'Canto, memória e afetividade comunitária' }
    ]
  },
  `Encontro de artistas da composição musical, com mais de **10 anos de história**, **Nosso Canto** apresenta compositoras e compositores ao público, mas também favorece novas conexões. Além das apresentações ao vivo de canções, o coletivo promoveu a gravação do primeiro álbum *Nosso Canto Volume 1*, além de entrevistas em podcast, disponibilização de vídeos de canções autorais e difusão das composições da cidade através de playlist.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'acoes-formativas.mdoc'),
  {
    title: 'Ações formativas',
    tag: 'Projeto de Continuidade',
    accentColor: '#FDBC2E',
    photos: [
      { src: '/photos/garatuja/formativas-1.webp', alt: 'Ações Formativas no Ponto de Cultura Quintal Garatuja', caption: 'Cursos, oficinas e vivências cênicas no Quintal Garatuja' },
      { src: '/photos/garatuja/formativas-2.webp', alt: 'Vivências de teatro e infância no Quintal Garatuja', caption: 'Formação artística para infâncias e juventudes' },
      { src: '/photos/garatuja/formativas-8.webp', alt: 'Encontros formativos intergeracionais no Feverestival', caption: 'Rodas formativas e trocas de saberes no território' },
      { src: '/photos/garatuja/formativas-5.webp', alt: 'Cartaz Oficina Orquestra de Pandeiros no Quintal Garatuja', caption: 'Oficina Orquestra de Pandeiros gratuita no Quintal' }
    ]
  },
  `Entre os cursos oferecidos pelo Garatuja, destacam-se as **oficinas de teatro**: cursos livres de longa duração, que conta com equipe experiente e sensível, com uma abordagem que foca em inclusão e pertencimento.

Também promovemos oficinas de curta duração, oferecendo práticas de dança, música, formação de professoras, *acessibilidade cultural* e primeiros socorros voltados a eventos culturais.`
);

writeMdoc(
  path.join(contentDir, 'projetos-garatuja', 'nucleo-socioambiental.mdoc'),
  {
    title: 'Núcleo Socioambiental do Nova Europa e Região',
    tag: 'Projeto de Continuidade',
    accentColor: '#EF5A3C',
    photos: [
      { src: '/photos/garatuja/nucleo-1.webp', alt: 'Núcleo Socioambiental do Nova Europa e Região', caption: 'Núcleo Socioambiental do Nova Europa e Região' },
      { src: '/photos/garatuja/nucleo-2.webp', alt: 'Ações ambientais no Jardim Nova Europa', caption: 'Mapeamento e proteção de áreas verdes e cursos d’água' },
      { src: '/photos/garatuja/nucleo-3.webp', alt: 'Encontro comunitário do Núcleo Socioambiental', caption: 'Articulação comunitária vinculada ao Fórum Socioambiental de Campinas' }
    ]
  },
  `As urgências socioambientais atravessam todas as práticas do **Coletivo Passarinha**. No território do Garatuja, a vizinhança vem se organizando a fim de mapear e atuar na região sul da cidade de Campinas. Assim, em 2025, nasce o **Núcleo Socioambiental do Nova Europa e Região**.

Trata-se de um coletivo formado por vizinhas e vizinhos da região do Jardim Nova Europa/Campinas, a fim de proteger as áreas verdes e cursos de água da região. Vinculado ao **Fórum Socioambiental de Campinas**, o grupo realiza ações de preservação e cultura. O Garatuja é co-fundador do núcleo.`
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
    content: `Somos o **Coletivo Interdisciplinar Passarinha**, artistas da cena, música, design e permacultura. Há anos, realizamos ações de *arte educação ambiental* em projetos itinerantes e também conservando relações com territórios. Trabalhamos com e para crianças de zero a cem anos. Também discutimos bastante sobre as problemáticas relacionadas ao lixo e essa sociedade do consumo e do descarte - que nos apavora.

Fundado em 2014, o Coletivo Passarinha promoveu sua primeira ação em Campinas/SP: o evento **“Grafite na praça”**, uma intervenção artística como preparação para a jornada artística que aconteceu no ano seguinte a bordo de uma Kombi grafitada.

Em 2015, a Passarinha colocou na estrada sua **Estação Permacultural Móvel**, uma Kombi Safari 1980 transformada em casa e laboratório itinerante de experiências permaculturais. Equipada com tecnologias de baixo impacto, como energia solar, forno solar, minhocário, banheiro seco e sistemas de aproveitamento de recursos, a Kombi foi o ponto de partida para uma jornada de criação, aprendizado e compartilhamento de práticas voltadas a modos de vida mais harmônicos com o meio ambiente.`
  },
  {
    year: '2015',
    periodLabel: '2015',
    title: 'Mais de 40 Ações na Estrada & Nascimento das Oficinas “Jogar Dentro”',
    location: 'Diversas cidades brasileiras',
    tag: 'Ações Itinerantes',
    photoStacked: false,
    photos: [
      { src: '/photos/historico/jogar-dentro-1.webp', alt: 'Oficinas Jogar Dentro', caption: '2015 — Oficinas Jogar Dentro pelas cidades do percurso' }
    ],
    content: `De janeiro a novembro de 2015, foram realizadas mais de **quarenta ações artísticas e pedagógicas**, de forma independente, pelas cidades por onde a Passarinha passou. Práticas de palhaçaria, brincadeiras e reutilização de materiais foram estruturadas em oficinas chamadas **“Jogar Dentro”**, promovendo reflexão acerca da cultura do consumo e do descarte, brincando.`
  },
  {
    year: '2016',
    periodLabel: '2016',
    title: 'Projeto “Oficinas Cortejo” (Ceará, São Paulo e Paraná)',
    location: 'CE, SP e PR',
    tag: 'Circulação Nacional',
    photoStacked: false,
    photos: [
      { src: '/photos/historico/oficina-cortejo-4.webp', alt: 'Oficinas Cortejo', caption: 'Oficinas Cortejo — Instrumentos e alegorias com materiais reaproveitados' },
      { src: '/photos/historico/oficina-cortejo-6.webp', alt: 'Cortejo comunitário', caption: 'Apresentação coletiva nas comunidades (CE, SP e PR)' }
    ],
    content: `O projeto **“Oficinas Cortejo”** aconteceu em 2016 com financiamento via Lei Rouanet, pelos estados do Ceará, São Paulo e Paraná. Foram quatro oficinas na comunidade quilombola Córrego de Ubaranas, em Aracati (CE), na comunidade Sussuí em Palmital (SP), em Porecatu (PR) e na Vila Cultural ALMA, em Londrina (PR). Cada grupo definiu, em parceria com as arte educadoras, os temas que queriam cortejar e assim foram criados os cortejos apresentados para as comunidades, utilizando material reaproveitado para construção de instrumentos musicais e alegorias.`
  },
  {
    year: '2017-2018',
    periodLabel: '2017 – 2018',
    title: 'Arte-Educação Ambiental e Permacultura no Ceará (CREDE 4 e IFCE Camocim)',
    location: 'Camocim e Região (CE)',
    tag: 'Educação Pública',
    photoStacked: false,
    photos: [
      { src: '/photos/historico/permacultura-1.webp', alt: 'Vivências de Permacultura no Ceará', caption: 'Permacultura e arte-educação ambiental no Ceará' },
      { src: '/photos/historico/permacultura-4.webp', alt: 'Ações educativas', caption: 'Práticas colaborativas junto a estudantes e educadores' }
    ],
    content: `Durante 2017 e 2018, foram realizadas diversas atividades voluntárias de *arte educação ambiental* em parceria com a Coordenadoria Regional de Desenvolvimento Educação - **CREDE 4** da Secretaria da Educação do Governo Estadual do Ceará e **Instituto Federal do Ceará (IFCE)** – Campus de Camocim.`
  },
  {
    year: '2016-2019',
    periodLabel: '2016 – 2019',
    title: 'Gestão do Ponto de Cultura Quintal Garatuja & Lei Cultura Viva',
    location: 'Campinas (SP)',
    tag: 'Território & Sede',
    photoStacked: false,
    photos: [
      { src: '/photos/garatuja/principal-primeiro-evento.webp', alt: 'Quintal Garatuja', caption: 'Quintal Garatuja — Encontros artísticos e comunitários desde 2016' }
    ],
    content: `Desde 2016, a Passarinha faz a gestão de um espaço cultural na cidade de Campinas/SP. Entre os focos das pesquisas-ações realizadas no **Ponto de Cultura Quintal Garatuja**, destacam-se: a formação teatral e mediação cultural, a educação ambiental, a difusão musical, a acessibilidade cultural, a construção e fortalecimento de redes de artistas, a valorização da cultura popular e o pertencimento à cidade de Campinas, com ações de identificação com os patrimônios naturais, materiais, imateriais e suas histórias.

Em 2019, o Garatuja foi contemplado com um projeto via **Lei Cultura Viva**, pela Prefeitura de Campinas, na ocasião, foram promovidas mais de 30 ações envolvendo teatro e brincadeiras, articulando a rede com outros Pontos de Cultura, escolas municipais, artistas e coletivos parceiros, em diversos espaços. Apresentações teatrais, convites para o livre brincar, ações formativas para educadoras e eventos abertos à comunidade foram desenvolvidos fortalecendo a presença da arte educação no território vizinho do Ponto de Cultura.`
  },
  {
    year: 'desde-2018',
    periodLabel: 'Desde 2018',
    title: 'Circulação de “Histórias que a Passarinha me contou”',
    location: 'Nacional e Internacional',
    tag: 'Espetáculo em Circulação',
    photoStacked: false,
    photos: [
      { src: '/photos/espetaculos/passarinha-nina-197.webp', alt: 'Histórias que a Passarinha me contou', caption: 'Histórias que a Passarinha me contou — Circulação nacional e internacional' }
    ],
    content: `O projeto **“Histórias que a Passarinha me contou”**, juntando contação de histórias, música autoral e convites para brincar, desde 2018 se apresenta em diversas escolas, espaços culturais, festivais e eventos em geral. A obra já circulou por diversos contextos, entre SESCs do interior de São Paulo, pelos estados do Ceará, Piauí e também na cidade de **Cali/Colômbia**.`
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
    content: `Em 2020, foi promovida a **Residência Passarinhas**, parte do FEVERESTIVAL, Festival Internacional de Teatro de Campinas, em parceria com escola de Ed. Infantil da rede Municipal de Ensino de Campinas, na qual foram desenvolvidas poéticas de reflexão sobre o descarte e reutilização de recicláveis. Tal ação resultou em um dia de evento na escola junto de crianças e famílias, além de planos para futuras formações.

Desde 2016, o Coletivo Passarinha faz a gestão do **Ponto de Cultura Quintal Garatuja**, na cidade de Campinas/SP. Desde sua inauguração, tem como missão a articulação de redes de artistas e públicos, a atenção ao território e inclusão de crianças, mulheres e pessoas com deficiências.

Nos últimos anos, o Garatuja e o Coletivo Passarinha realizaram diversos projetos de continuidade em sua sede, em articulação com outros Pontos de Cultura e entidades relacionadas às artes e meio ambiente.

Em 2021, produziu a plataforma digital **Brincando na rede**, que reuniu curta metragens criados por coletivos de arte e cultura, oferecendo programação de qualidade para crianças e famílias durante o isolamento na pandemia de COVID-19. As obras foram criadas em residência artística, tendo como provocação transversal o estudo em *acessibilidade comunicacional*.

Desde então, estudos e práticas em acessibilidade fazem parte do trabalho em continuidade do Garatuja e do Coletivo Passarinha. São obras de arte e práticas formativas que promovem ampliação e aprofundamento de ferramentas poéticas de inclusão e acessibilidade.`
  },
  {
    year: '2022-2028',
    periodLabel: '2022 – 2028',
    title: 'Formação Gratuita, Mostras Artísticas & Histórias do Bosque dos Guarantãs',
    location: 'Campinas (SP)',
    tag: 'Patrimônio Ambiental',
    photoStacked: false,
    photos: [
      { src: '/photos/espetaculos/bosque-dalton-029.webp', alt: 'Histórias do Bosque dos Guarantãs', caption: 'Histórias do Bosque dos Guarantãs — Memória e preservação desde 2022' }
    ],
    content: `Entre 2022 e 2028, o Garatuja oferece cursos de teatro gratuitos, além de formações de curta duração em Acessibilidade Cultural, práticas em dança, música e primeiros socorros. Além de promover mostras artísticas como **Show de Variedades**, **Nosso Canto** e apresentações de teatro e música em sua sede e também em parceria com outros espaços como a rede municipal de ensino de Campinas, o Bosque dos Guarantãs e outros Pontos de Cultura do país.

Desde 2022, promovemos o passeio artístico-cultural **Histórias do Bosque dos Guarantãs**, que traz memórias sociais e de preservação de uma mata nativa em meio à cidade. A obra surgiu de uma profunda pesquisa com a comunidade e em meios oficiais. Ao longo dos anos, as sessões do passeio foram trazendo melhorias estruturais para o próprio bosque, em diálogo facilitado pelo Garatuja entre a população que frequenta o parque e a prefeitura, como a instalação de placas turísticas e de bebedouros de água gelada.`
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
    content: `Idealizado em 2021 e com duas realizações em 2022 por meio do Programa Municipal de Incentivo à Cultura (PROMIC – Londrina/PR), criamos o projeto **Orquestra de Pandeiros**. Como uma ação artístico-pedagógica de educação musical por meio do pandeiro, a proposta, de caráter intergeracional, surgiu como uma forma de retomada do fazer musical e da experiência coletiva após a pandemia de COVID-19.

Em 2023, o projeto tornou-se objeto de investigação no curso de Mestrado em Música da **UNICAMP**, em Campinas/SP, passando a integrar o Programa UniversIDADE (50+), onde investiga a afetividade e o envolvimento musical de pessoas adultas e idosas.

Atualmente, a Orquestra de Pandeiros desenvolve-se de forma itinerante, circulando por festivais, pontos de cultura, universidades e congressos de música. Entre suas participações destacam-se: CultSP, em Itararé/SP (E. E. Tomé Teixeira); Ponto de Cultura Quintal Garatuja, em Campinas/SP; Festival Obaxirê, em Maringá/PR; Congresso Regional Sul da ABEM (Associação Brasileira de Educação Musical), em Maringá/PR; aula para a graduação em Licenciatura em Música da UEL (Universidade Estadual de Londrina); aula para o Grupo deCanta, em Campinas/SP; e Congresso Internacional da ABEM, em Ouro Preto/MG.`
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
    content: `Em 2023, estreamos o espetáculo **Plástico, um mito contemporâneo**, uma palestra-performance que aborda a problemática da poluição plástica. A obra é parte da pesquisa de doutorado de Pâmella Villanova em Artes da Cena na Unicamp. Reúne tecnologias teatrais como teatro científico, mediação teatral e acessibilidade comunicacional. A peça já foi assistida por mais de 6 mil pessoas em 4 países diferentes.

Durante o Carnaval de 2024, foi realizado o **Reciclarnaval – Ateliê de Fantasias de Material Reaproveitado**, no SESC Campinas (SP), oferecendo um ateliê de criação de fantasias e alegorias com material reaproveitado. A proposta promoveu um ateliê colaborativo no qual crianças e famílias participaram da criação de fantasias e adereços a partir de materiais reaproveitados. Ao longo da ação, foram produzidas mais de 800 peças, estimulando a experimentação artística, a criatividade e a reflexão sobre a cultura do consumo e do descarte por meio da criação e da brincadeira.

A **Ecobrinquedoteca Jogar Dentro** se formaliza em 2024, a partir do projeto contemplado pelo PROMIC, em Londrina (PR), reunindo experiências que o Coletivo Passarinha vinha desenvolvendo desde 2015 com as oficinas Jogar Dentro, a criação de brinquedos a partir de materiais reaproveitados e as investigações sobre a cultura do brincar e do descarte. Em 2024, o projeto foi realizado na Escola Municipal Carlos Kraemer, envolvendo a construção coletiva de brinquedos para uso pessoal das crianças e para o acervo da escola.

Em 2025, a Ecobrinquedoteca foi contemplada pela Política Nacional Aldir Blanc (PNAB), possibilitando sua circulação por diferentes eventos abertos ao público de Londrina, como o ECOH, a Dobra de Arte Impressa e o Festerê do MARL, além de espaços de convivência de Londrina. Essa trajetória consolidou a Ecobrinquedoteca como uma proposta de *arte-educação ambiental* que aproxima a Cultura do Brincar da experimentação artística, da ressignificação de materiais e da reflexão sobre o consumo e o descarte, ampliando as possibilidades de criação, convivência e aprendizagem.`
  },
  {
    year: '2027',
    periodLabel: '2027 e Adiante',
    title: 'Próxima Estreia Teatral: “Fora de onde?”',
    location: 'Campinas (SP)',
    tag: 'Futuras Criações',
    photoStacked: false,
    photos: [
      { src: '/photos/audiovisual/fora-de-onde-cena.webp', alt: 'Fora de onde?', caption: 'Fora de onde? — Nova montagem teatral prevista para 2027' }
    ],
    content: `Para 2027, preparamos a estreia de nosso mais novo espetáculo, **Fora de onde?**, que aborda a problemática do lixo na cidade de Campinas, no Brasil e no mundo. A obra já estreou como longa metragem em 2022, com participação em festivais de cinema e indicação como melhor longa metragem no X FESTCINE Pinhais. Também faz parte da pesquisa de doutorado em Artes da Cena pela Unicamp de Pâmella Villanova e terá uma breve temporada a ser realizada na cidade de Campinas em 2027.

O Coletivo Passarinha trabalha em várias frentes e em diferentes territórios. Somos uma plataforma de criação e circulação, que tem a inclusão e atenção às urgências socioambientais como temáticas transversais. Temos interesse em costurar nossas práticas de arte e cultura com os lugares e pessoas que cruzamos. **Fazemos arte educação ambiental desde 2014.**`
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
    role: 'Designer, Produtora & Arte-educadora Ambiental',
    avatarColor: '#E91C47',
    photoUrl: '/photos/passarinhas/sarah-avatar.webp',
    instagramUrl: 'https://instagram.com/coletivopassarinha'
  },
  `Sarah Gregorio é designer de formação, produtora e gestora cultural por vocação e *arte-educadora ambiental* por paixão, gosta de misturar linguagens, inventar possibilidades e encontrar arte onde muita gente só vê materiais descartados. É especialista em Gestão Estratégica do Design e Gestão da Inovação, e atualmente pesquisa as relações entre arte, cultura e práticas de baixo impacto socioambiental no Mestrado Profissional em Artes da UFC e IFCE.

Co-fundadora do **Coletivo Interdisciplinar Passarinha**, vive entre projetos culturais, oficinas, brinquedos, histórias e experiências que aproximam arte, educação e meio ambiente. Gosta de colocar ideias em movimento, conectar pessoas e transformar inquietações em projetos — de preferência, com espaço para experimentar e um pouco de bagunça criativa.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'pamella-villanova.mdoc'),
  {
    name: 'Pâmella Villanova',
    role: 'Artista da Cena & Pesquisadora Acadêmica',
    avatarColor: '#FDBC2E',
    photoUrl: '/photos/passarinhas/pamella-avatar.webp',
    instagramUrl: 'https://www.instagram.com/pam.villanova'
  },
  `Pâmella Villanova é artista da cena, da fazeção do teatro em suas múltiplas necessidades e também pesquisadora acadêmica. Entre a academia e o encontro com plateias diversas, vem desenvolvendo metodologias de criação teatral em diálogo com urgências socioambientais, às vezes invisíveis.

É gestora do **Ponto de Cultura Quintal Garatuja** em Campinas, doutora em Artes da Cena pela **Unicamp**, com estágio doutoral na Faculdade de Filosofia da UNIZAR, na Espanha. É professora colaboradora do Instituto de Física da Unicamp, ministrando disciplina de teatro científico junto a estudantes de física.

Já dirigiu espetáculos de teatro, palhaçaria, contação de histórias e música. Sua obra **“Plástico: um mito contemporâneo”** já se apresentou em 4 países (Espanha, Brasil, Colômbia e Portugal) para mais de 6 mil pessoas. Também atua como contadora de histórias na série **"Histórias que a Passarinha me contou"**, que já circulou por festivais e SESCs do interior de São Paulo.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'maria-thome.mdoc'),
  {
    name: 'Maria Thomé',
    role: 'Musicista, Pesquisadora & Percussionista',
    avatarColor: '#532E5A',
    photoUrl: '/photos/passarinhas/maria-avatar.webp',
    instagramUrl: 'https://www.instagram.com/orquestra.pandeiros'
  },
  `Maria Carolina Thomé é musicista interiorana que encontrou nos ritmos populares brasileiros uma forma de se encantar pela vida. Se formou professora de música pela Universidade Estadual de Londrina (UEL), especializou-se em percussão popular pela Faculdade Santa Marcelina (FASM), investigou aspectos da afetividade no fazer musical com pessoas adultas e idosas se tornando mestra pela **Universidade Estadual de Campinas (UNICAMP)**. Agora na sua pesquisa de doutorado investiga a relação humana com a música, especialmente no ensino da percussão popular na formação de educadores musicais. Atua como percussionista e com o ensino de percussão popular brasileira, ministrando a oficina **Orquestra de Pandeiros** e aulas de percussão em diversos espaços educativos.`
);

writeMdoc(
  path.join(contentDir, 'equipe', 'dudu-ferraz.mdoc'),
  {
    name: 'Dudu Ferraz',
    role: 'Gestor Cultural, Compositor, Músico & Artista Interdisciplinar',
    avatarColor: '#F79335',
    photoUrl: '/photos/passarinhas/dudu-avatar.webp',
    spotifyUrl: 'https://open.spotify.com/search/Dudu%20Ferraz'
  },
  `Dudu Ferraz é gestor cultural, compositor, músico, cantautor, curador de teatro e artista interdisciplinar, bacharel em Sociologia pela **Unicamp**. Sua trajetória articula arte, cultura, política, educação e meio ambiente, com atuação na criação artística, na formação, na sensibilização socioambiental e na gestão de projetos culturais. Integra o **Coletivo Interdisciplinar Passarinha**, desenvolvendo trabalhos que conectam arte e educação ambiental. É gestor do **Ponto de Cultura Quintal Garatuja**, em Campinas, coordenador geral do Feverestival (Festival Internacional de Teatro de Campinas/SP) e fundador do **Nosso Canto**, projeto dedicado à valorização da música autoral campineira. Também atua na articulação de políticas públicas de cultura, contribuindo para o fortalecimento de redes, iniciativas e espaços de participação cultural.`
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

A pesquisa é um dos pilares do Quintal Garatuja. Investigamos as relações entre **arte, ecologia, território e sociedade**, desenvolvendo processos que resultam em espetáculos, performances, intervenções urbanas, publicações, exposições e ações educativas.`
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
  `**A História de Aru** é um projeto de *arte-educação ambiental* que apresenta os **12 princípios da Permacultura** por meio de uma história em cordel, escrita por **Paulo Roberto Amaral Lencioni** e adaptada para cordel por **Mari Rebelo** e **Sarah Gregorio**.

O projeto nasceu da vontade de experimentar possibilidades de criação artística com materiais naturais e objetos que seriam descartados. A partir desses materiais, foram criados personagens, cenários e elementos que dão forma visual à história de Aru, explorando texturas, cores, volumes e outras possibilidades estéticas.

Aru é uma jovem que aprende observando o mundo ao seu redor. Ao longo de sua jornada, encontra diferentes povoados, conhece outros modos de viver e descobre formas de lidar com questões como o uso da água, a produção de alimentos, o aproveitamento dos recursos, a diversidade e a vida em comunidade. Cada experiência apresenta um dos 12 princípios da Permacultura, sistematizados por David Holmgren.`
);

console.log('Seed completed successfully!');
