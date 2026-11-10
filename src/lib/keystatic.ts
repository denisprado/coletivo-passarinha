import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';
import {
  SHOWS,
  WORKSHOPS,
  TEAM_MEMBERS,
  TIMELINE,
  AUDIOVISUAL_WORKS,
  type Show,
  type Workshop,
  type TeamMember,
  type HistoryMilestone,
  type AudiovisualWork,
  type SlideItem,
} from '@/data/siteData';

export interface SiteConfig {
  phone: string;
  whatsappNumber: string;
  emailGeral: string;
  emailGaratuja: string;
  instagramUrl: string;
  instagramGaratujaUrl: string;
  spotifyUrl: string;
  youtubeUrl: string;
  address: string;
}

export interface GaratujaProject {
  id: string;
  title: string;
  tag: string;
  shortDescription: string;
  paragraphs: string[];
  accentColor: string;
  externalLink?: string;
  externalLinkLabel?: string;
  photos: SlideItem[];
}

export interface GaratujaSiteContent {
  title: string;
  tag: string;
  leadText: string;
  paragraphs: string[];
  street: string;
  neighborhood: string;
  email: string;
  instagram: string;
  linktree: string;
  whatsappGroup: string;
}

export interface AruContent {
  title: string;
  tagline: string;
  paragraphs: string[];
  originalAuthor: string;
  cordelAdaptation: string;
  ebookUrl?: string;
  cartilhaUrl?: string;
  principles: string[];
}

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  introParagraphs: string[];
  ctaText: string;
}

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  phone: '(19) 99251-0921',
  whatsappNumber: '5519992510921',
  emailGeral: 'coletivopassarinha@gmail.com',
  emailGaratuja: 'garatuja.decultura@gmail.com',
  instagramUrl: 'https://instagram.com/coletivopassarinha',
  instagramGaratujaUrl: 'https://instagram.com/quintalgaratuja',
  spotifyUrl: 'https://open.spotify.com/artist/7z5Nn5mGqKqgQvKq1',
  youtubeUrl: 'https://www.youtube.com/@coletivopassarinha',
  address: 'Rua São Tomé, 56 - Vila Nogueira, Campinas - SP',
};

export const DEFAULT_HOME_CONTENT: HomePageContent = {
  heroTitle: 'Coletivo Interdisciplinar Passarinha',
  heroSubtitle: 'arte educação ambiental',
  introParagraphs: [
    'Somos o Coletivo Interdisciplinar Passarinha, artistas da cena, música, design e permacultura. Há anos, realizamos ações de arte educação ambiental em projetos itinerantes e também conservando relações com territórios.',
    'Promovemos práticas artísticas e discutimos urgências socioambientais relacionadas a essa sociedade do consumo e do descarte - que nos apavora.',
    'O Coletivo Passarinha trabalha em várias frentes e em diferentes lugares. Somos uma plataforma de criação e circulação, que tem a inclusão e atenção às problemáticas socioambientais como temáticas transversais. Temos interesse em costurar nossas práticas de arte e cultura com os lugares e pessoas que cruzamos. Fazemos arte educação ambiental desde 2014.',
    'Trabalhamos em parceria com instituições públicas e particulares, com Pontos de Cultura e outros espaços culturais. Já realizamos projetos com apoio de esferas federais, estaduais, municipais e de alianças internacionais, sempre entregando excelência em todas as ações realizadas.',
  ],
  ctaText: 'Conheça quem somos →',
};

export const DEFAULT_GARATUJA_SITE: GaratujaSiteContent = {
  title: 'Ponto de Cultura Quintal Garatuja',
  tag: 'Ponto de Cultura • Campinas / SP',
  leadText:
    'Sede do Coletivo Passarinha, o Garatuja é um espaço de criação, convivência, pesquisa e formação localizado no Jardim Nova Europa, em Campinas (SP). Reconhecido como Ponto de Cultura pela Política Nacional Cultura Viva, o Quintal nasceu do desejo de transformar uma casa em um território vivo de encontros, onde arte, cultura, educação e meio ambiente se entrelaçam como práticas de cuidado com as pessoas e com o lugar onde vivemos.',
  paragraphs: [
    'Mais do que um espaço físico, o Quintal Garatuja é um laboratório permanente de experimentação artística e cidadã. Aqui, artistas, pesquisadoras, educadoras, moradoras, crianças, jovens e pessoas adultas compartilham processos criativos, investigações e experiências que aproximam arte e vida cotidiana.',
    'Nossa atuação parte do território. Desenvolvemos projetos que dialogam com a memória, a paisagem, os saberes populares e as histórias da comunidade, compreendendo o bairro como um espaço de aprendizagem, criação e pertencimento. Caminhadas, pesquisas de campo, cartografias afetivas, rodas de conversa e ações comunitárias fazem parte da metodologia que construímos ao longo dos anos, fortalecendo vínculos entre cultura, natureza e participação social.',
    'A pesquisa é um dos pilares do Quintal Garatuja. Investigamos as relações entre arte, ecologia, território e sociedade, desenvolvendo processos que resultam em espetáculos, performances, intervenções urbanas, publicações, exposições e ações educativas. Temas como a crise ambiental, os resíduos, a biodiversidade, a memória dos lugares e as formas de convivência aparecem como questões centrais de nossas criações, entendendo a arte como estratégia de sensibilização, reflexão e transformação.',
    'O espaço também abriga uma programação contínua de formação. Oferecemos oficinas, cursos, laboratórios, residências artísticas, vivências, encontros e intercâmbios que estimulam práticas colaborativas e o desenvolvimento de artistas, educadoras, pesquisadoras e agentes culturais. Valorizamos metodologias participativas, o aprendizado coletivo e a troca de conhecimentos entre diferentes gerações e áreas do saber.',
    'Ao longo de sua trajetória, o Quintal Garatuja consolidou uma ampla rede de parcerias com coletivos, universidades, escolas, movimentos sociais, instituições culturais e organizações comunitárias, promovendo ações que fortalecem a cultura como direito, a educação como prática emancipadora e o cuidado com o meio ambiente como compromisso cotidiano.',
    'Cultivamos um espaço onde as perguntas são tão importantes quanto as respostas, onde a criação nasce do encontro e onde cada projeto contribui para imaginar formas mais sensíveis, sustentáveis e solidárias de habitar o mundo.',
    'O Garatuja promove pesquisas em continuidade, acerca da mediação cultural, da acessibilidade cultural, das urgências socioambientais do nosso tempo, de práticas artísticas que unem teatro e música, e na construção constante de conexões entre artistas e públicos. Neste lugar em que estamos, procuramos estabelecer vínculos com o território, cultivando a sensação de pertencimento ao bairro, à cidade, ao nosso contexto latinoamericano, e ao mundo.',
  ],
  street: 'Rua São Miguel Arcanjo, 1520',
  neighborhood: 'Jardim Nova Europa • Campinas / SP',
  email: 'garatuja.decultura@gmail.com',
  instagram: 'https://www.instagram.com/quintalgaratuja',
  linktree:
    'https://linktr.ee/quintalgaratuja?utm_source=linktree_profile_share&ltsid=13c4d9bd-4553-4e38-9e9f-b3d0dc1a05d0',
  whatsappGroup: 'https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK',
};

export const DEFAULT_ARU_CONTENT: AruContent = {
  title: 'A História de Aru',
  tagline: 'Arte-Educação Ambiental & Cordel',
  paragraphs: [
    'A História de Aru é um projeto de arte-educação ambiental que apresenta os 12 princípios da Permacultura por meio de uma história em cordel, escrita por Paulo Roberto Amaral Lencioni e adaptada para cordel por Mari Rebelo e Sarah Gregorio.',
    'O projeto nasceu da vontade de experimentar possibilidades de criação artística com materiais naturais e objetos que seriam descartados. A partir desses materiais, foram criados personagens, cenários e elementos que dão forma visual à história de Aru, explorando texturas, cores, volumes e outras possibilidades estéticas.',
    'Aru é uma jovem que aprende observando o mundo ao seu redor. Ao longo de sua jornada, encontra diferentes povoados, conhece outros modos de viver e descobre formas de lidar com questões como o uso da água, a produção de alimentos, o aproveitamento dos recursos, a diversidade e a vida em comunidade. Cada experiência apresenta um dos 12 princípios da Permacultura, sistematizados por David Holmgren.',
    'O cordel, com suas rimas e métricas populares, aproxima esses conceitos do público de maneira acessível, lúdica e poética. A linguagem simples e imagética convida leitoras e leitores de todas as idades a refletir sobre a relação entre o ser humano e o meio ambiente, mostrando que a sustentabilidade não é uma ideia abstrata, mas uma prática possível e necessária no dia a dia.',
    'A História de Aru é um convite para olhar para a natureza com mais atenção, reconhecer a sabedoria dos ciclos naturais e imaginar formas mais cuidadosas, justas e integradas de viver no planeta.',
    'O projeto inclui livro impresso, e-book gratuito, audiolivro e cartilha de atividades pedagógicas voltadas para educadores, escolas e famílias.',
  ],
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
    '12. Use Criativamente e Responda às Mudanças',
  ],
};

export const reader = createReader(process.cwd(), config);

export async function getShows(): Promise<Show[]> {
  try {
    const entries = await reader.collections.espetaculos.all();
    if (!entries || entries.length === 0) return SHOWS;

    return entries.map(({ slug, entry }) => ({
      id: slug,
      title: entry.title,
      subtitle: entry.subtitle || undefined,
      synopsis: entry.synopsis,
      releaseText: entry.releaseText,
      category: entry.category,
      accentColor: entry.accentColor || '#F95922',
      ageRating: entry.ageRating || 'Livre',
      duration: entry.duration || '50 min',
      videoUrl: entry.videoUrl || undefined,
      technicalSheet: (entry.technicalSheet || []).map((item) => ({
        label: item.label,
        value: item.value,
      })),
      photos: (entry.photos || []).map((photo) => ({
        src: photo.src || '/brand/passarinha-ave.webp',
        alt: photo.alt || entry.title,
        caption: photo.caption || undefined,
      })),
    }));
  } catch (error) {
    console.error('Error reading Keystatic shows, falling back to static data:', error);
    return SHOWS;
  }
}

export async function getWorkshops(): Promise<Workshop[]> {
  try {
    const entries = await reader.collections.praticasFormativas.all();
    if (!entries || entries.length === 0) return WORKSHOPS;

    return entries.map(({ slug, entry }) => ({
      id: slug,
      title: entry.title,
      subtitle: entry.subtitle || '',
      concept: entry.concept,
      accentColor: entry.accentColor || '#FDBC2E',
      targetAudience: entry.targetAudience,
      audienceLimit: entry.audienceLimit || undefined,
      whatsappContact: entry.whatsappContact || '5519992510921',
      fullDescription: (entry.fullDescription || []) as string[],
      highlights: entry.highlights?.length ? (entry.highlights as string[]) : undefined,
      principles: entry.principles?.length ? (entry.principles as string[]) : undefined,
      photos: (entry.photos || []).map((photo) => ({
        src: photo.src || '/brand/passarinha-ave.webp',
        alt: photo.alt || entry.title,
        caption: photo.caption || undefined,
      })),
    }));
  } catch (error) {
    console.error('Error reading Keystatic workshops, falling back to static data:', error);
    return WORKSHOPS;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const entries = await reader.collections.equipe.all();
    if (!entries || entries.length === 0) return TEAM_MEMBERS;

    return entries.map(({ slug, entry }) => ({
      id: slug,
      name: entry.name,
      role: entry.role,
      bio: entry.bio,
      avatarColor: entry.avatarColor || '#FDBC2E',
      photoUrl: entry.photoUrl || undefined,
      instagramUrl: entry.instagramUrl || undefined,
      spotifyUrl: entry.spotifyUrl || undefined,
      portfolioUrl: entry.portfolioUrl || undefined,
    }));
  } catch (error) {
    console.error('Error reading Keystatic team, falling back to static data:', error);
    return TEAM_MEMBERS;
  }
}

export async function getTimeline(): Promise<HistoryMilestone[]> {
  try {
    const entries = await reader.collections.historico.all();
    if (!entries || entries.length === 0) return TIMELINE;

    return entries.map(({ entry }) => ({
      year: entry.year,
      title: entry.title,
      description: entry.description,
      location: entry.location || undefined,
      tag: entry.tag || undefined,
      photoUrl: entry.photoUrl || undefined,
    }));
  } catch (error) {
    console.error('Error reading Keystatic timeline, falling back to static data:', error);
    return TIMELINE;
  }
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const configData = await reader.singletons.configuracoes.read();
    if (!configData) return DEFAULT_SITE_CONFIG;

    return {
      phone: configData.phone || DEFAULT_SITE_CONFIG.phone,
      whatsappNumber: configData.whatsappNumber || DEFAULT_SITE_CONFIG.whatsappNumber,
      emailGeral: configData.emailGeral || DEFAULT_SITE_CONFIG.emailGeral,
      emailGaratuja: configData.emailGaratuja || DEFAULT_SITE_CONFIG.emailGaratuja,
      instagramUrl: configData.instagramUrl || DEFAULT_SITE_CONFIG.instagramUrl,
      instagramGaratujaUrl:
        configData.instagramGaratujaUrl || DEFAULT_SITE_CONFIG.instagramGaratujaUrl,
      spotifyUrl: configData.spotifyUrl || DEFAULT_SITE_CONFIG.spotifyUrl,
      youtubeUrl: configData.youtubeUrl || DEFAULT_SITE_CONFIG.youtubeUrl,
      address: configData.address || DEFAULT_SITE_CONFIG.address,
    };
  } catch (error) {
    console.error('Error reading Keystatic site config, falling back to static defaults:', error);
    return DEFAULT_SITE_CONFIG;
  }
}

export async function getAudiovisualWorks(): Promise<AudiovisualWork[]> {
  try {
    const entries = await reader.collections.audiovisual.all();
    if (!entries || entries.length === 0) return AUDIOVISUAL_WORKS;

    return entries.map(({ slug, entry }) => ({
      id: slug,
      title: entry.title,
      synopsis: entry.synopsis,
      context: entry.context,
      videoUrl: entry.videoUrl || undefined,
      youtubeId: entry.youtubeId || undefined,
      accentColor: entry.accentColor || '#E91C47',
      technicalSheet: (entry.technicalSheet || []).map((item) => ({
        label: item.label,
        value: item.value,
      })),
      photos: (entry.photos || []).map((photo) => ({
        src: photo.src || '/photos/audiovisual/caixa-magica-cartaz.webp',
        alt: photo.alt || entry.title,
        caption: photo.caption || undefined,
      })),
    }));
  } catch (error) {
    console.error('Error reading Keystatic audiovisual, falling back to static data:', error);
    return AUDIOVISUAL_WORKS;
  }
}

export async function getGaratujaProjects(): Promise<GaratujaProject[]> {
  try {
    const entries = await reader.collections.projetosGaratuja.all();
    if (!entries || entries.length === 0) return [];

    return entries.map(({ slug, entry }) => ({
      id: slug,
      title: entry.title,
      tag: entry.tag || 'Projeto de Continuidade',
      shortDescription: entry.shortDescription || '',
      paragraphs: (entry.paragraphs || []) as string[],
      accentColor: entry.accentColor || '#FDBC2E',
      externalLink: entry.externalLink || undefined,
      externalLinkLabel: entry.externalLinkLabel || undefined,
      photos: (entry.photos || []).map((photo) => ({
        src: photo.src || '/brand/passarinha-ave.webp',
        alt: photo.alt || entry.title,
        caption: photo.caption || undefined,
      })),
    }));
  } catch (error) {
    console.error('Error reading Keystatic Garatuja projects, falling back to empty list:', error);
    return [];
  }
}

export async function getGaratujaContent(): Promise<GaratujaSiteContent> {
  try {
    const data = await reader.singletons.quintalGaratuja.read();
    if (!data) return DEFAULT_GARATUJA_SITE;

    return {
      title: data.title || DEFAULT_GARATUJA_SITE.title,
      tag: data.tag || DEFAULT_GARATUJA_SITE.tag,
      leadText: data.leadText || DEFAULT_GARATUJA_SITE.leadText,
      paragraphs: (data.paragraphs?.length ? data.paragraphs : DEFAULT_GARATUJA_SITE.paragraphs) as string[],
      street: data.street || DEFAULT_GARATUJA_SITE.street,
      neighborhood: data.neighborhood || DEFAULT_GARATUJA_SITE.neighborhood,
      email: data.email || DEFAULT_GARATUJA_SITE.email,
      instagram: data.instagram || DEFAULT_GARATUJA_SITE.instagram,
      linktree: data.linktree || DEFAULT_GARATUJA_SITE.linktree,
      whatsappGroup: data.whatsappGroup || DEFAULT_GARATUJA_SITE.whatsappGroup,
    };
  } catch (error) {
    console.error('Error reading Keystatic Quintal Garatuja, falling back to static data:', error);
    return DEFAULT_GARATUJA_SITE;
  }
}

export async function getAruContent(): Promise<AruContent> {
  try {
    const data = await reader.singletons.aru.read();
    if (!data) return DEFAULT_ARU_CONTENT;

    return {
      title: data.title || DEFAULT_ARU_CONTENT.title,
      tagline: data.tagline || DEFAULT_ARU_CONTENT.tagline,
      paragraphs: (data.paragraphs?.length ? data.paragraphs : DEFAULT_ARU_CONTENT.paragraphs) as string[],
      originalAuthor: data.originalAuthor || DEFAULT_ARU_CONTENT.originalAuthor,
      cordelAdaptation: data.cordelAdaptation || DEFAULT_ARU_CONTENT.cordelAdaptation,
      ebookUrl: data.ebookUrl || DEFAULT_ARU_CONTENT.ebookUrl,
      cartilhaUrl: data.cartilhaUrl || DEFAULT_ARU_CONTENT.cartilhaUrl,
      principles: (data.principles?.length ? data.principles : DEFAULT_ARU_CONTENT.principles) as string[],
    };
  } catch (error) {
    console.error('Error reading Keystatic Aru, falling back to static data:', error);
    return DEFAULT_ARU_CONTENT;
  }
}

export async function getHomePageContent(): Promise<HomePageContent> {
  try {
    const data = await reader.singletons.paginaInicial.read();
    if (!data) return DEFAULT_HOME_CONTENT;

    return {
      heroTitle: data.heroTitle || DEFAULT_HOME_CONTENT.heroTitle,
      heroSubtitle: data.heroSubtitle || DEFAULT_HOME_CONTENT.heroSubtitle,
      introParagraphs: (data.introParagraphs?.length ? data.introParagraphs : DEFAULT_HOME_CONTENT.introParagraphs) as string[],
      ctaText: data.ctaText || DEFAULT_HOME_CONTENT.ctaText,
    };
  } catch (error) {
    console.error('Error reading Keystatic home page content, falling back to static data:', error);
    return DEFAULT_HOME_CONTENT;
  }
}
