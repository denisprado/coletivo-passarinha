import { createReader } from '@keystatic/core/reader';
import type { DocumentRendererProps } from '@keystatic/core/renderer';
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

export type KeystaticDocument = DocumentRendererProps['document'];

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
  shortDescription?: string;
  paragraphs: string[];
  accentColor: string;
  externalLink?: string;
  externalLinkLabel?: string;
  photos: SlideItem[];
  content?: KeystaticDocument;
}

export interface GaratujaSiteContent {
  title: string;
  tag: string;
  leadText: string;
  paragraphs?: string[];
  street: string;
  neighborhood: string;
  email: string;
  instagram: string;
  linktree: string;
  whatsappGroup: string;
  photos?: SlideItem[];
  content?: KeystaticDocument;
}

export interface AruContent {
  title: string;
  tagline: string;
  paragraphs?: string[];
  originalAuthor: string;
  cordelAdaptation: string;
  ebookUrl?: string;
  cartilhaUrl?: string;
  principles: string[];
  photos?: SlideItem[];
  content?: KeystaticDocument;
}

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  introParagraphs: string[];
  ctaText: string;
  content?: KeystaticDocument;
  garatujaTitle: string;
  garatujaText: string;
  garatujaCta: string;
  aruTitle: string;
  aruText: string;
  aruCta: string;
  espetaculosTitle: string;
  espetaculosText: string;
  espetaculosCta: string;
  formativasTitle: string;
  formativasText: string;
  formativasCta: string;
  audiovisualTitle: string;
  audiovisualText: string;
  audiovisualCta: string;
  footerBannerTitle: string;
  footerBannerSubtitle: string;
  footerBannerCta: string;
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
  garatujaTitle: 'Ponto de Cultura Quintal Garatuja',
  garatujaText:
    'Desde 2016, a Passarinha faz a gestão do Ponto de Cultura Quintal Garatuja, em Campinas/SP, um espaço de criação artística, formação e convivência. Em diálogo com a comunidade e o território, desenvolve cursos, oficinas, apresentações e projetos que aproximam teatro, música, cultura popular e educação ambiental, fortalecendo os encontros entre artistas, público e histórias locais.',
  garatujaCta: 'Conheça o Quintal Garatuja →',
  aruTitle: 'A história de Aru',
  aruText:
    'Os 12 princípios da Permacultura contados por Aru! Uma história em cordel que ganha vida por meio de ilustrações criadas artesanalmente com materiais naturais e objetos descartados, explorando cores, texturas e formas para construir personagens e cenários. Um projeto artístico que entrelaça literatura, música e arte-educação ambiental, convidando a imaginar outras formas de se relacionar com o mundo.',
  aruCta: 'Conheça a História de Aru →',
  espetaculosTitle: 'Espetáculos',
  espetaculosText:
    'Teatro, música, histórias e experimentações artísticas que ganham vida em diferentes formatos e linguagens. A Passarinha cria e apresenta espetáculos para públicos diversos, de crianças a adultos, convidando cada pessoa a vivenciar o encontro com a arte, a imaginação e as questões do nosso tempo.',
  espetaculosCta: 'Conheça nossos espetáculos →',
  formativasTitle: 'Práticas Formativas',
  formativasText:
    'A Passarinha desenvolve oficinas que aproximam arte, educação e meio ambiente, criando experiências de experimentação, criação coletiva e aprendizagem. Temos propostas já estruturadas, como o Ateliê Jogar Dentro, a Ecobrinquedoteca Jogar Dentro e a Orquestra de Pandeiros, e também criamos e adaptamos oficinas de acordo com as demandas, os públicos e os contextos de cada espaço.',
  formativasCta: 'Conheça nossas práticas formativas →',
  audiovisualTitle: 'Audiovisual',
  audiovisualText:
    'A Passarinha também já experimentou o audiovisual como linguagem de criação artística. Entre essas experiências estão Caixa Mágica, Fora de onde? e O que se passa no formigueiro?, trabalhos que integram a trajetória do coletivo.',
  audiovisualCta: 'Conheça nossas produções →',
  footerBannerTitle: 'Quer levar a Passarinha para sua escola, evento ou festival?',
  footerBannerSubtitle:
    'Circulamos com espetáculos, oficinas e vivências socioambientais por todo o Brasil.',
  footerBannerCta: 'Solicitar Proposta',
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

interface DocChildNode {
  type?: string;
  text?: string;
  children?: DocChildNode[];
}

export function extractParagraphsFromDocument(doc: unknown): string[] {
  if (!doc || !Array.isArray(doc)) return [];
  const paragraphs: string[] = [];
  for (const node of doc as DocChildNode[]) {
    if (node?.type === 'paragraph' && Array.isArray(node.children)) {
      const text = node.children
        .map((c) => c.text || '')
        .join('')
        .trim();
      if (text) paragraphs.push(text);
    }
  }
  return paragraphs;
}

export function extractTextFromDocument(doc: unknown): string {
  if (!doc || !Array.isArray(doc)) return '';
  function walk(node: DocChildNode): string {
    if (typeof node?.text === 'string') return node.text;
    if (Array.isArray(node?.children)) {
      return node.children.map(walk).join('');
    }
    return '';
  }
  return (doc as DocChildNode[]).map(walk).filter(Boolean).join('\n\n');
}

export async function getShows(): Promise<Show[]> {
  try {
    const entries = await reader.collections.espetaculos.all();
    if (!entries || entries.length === 0) return SHOWS;

    const shows = await Promise.all(
      entries.map(async ({ slug, entry }) => {
        const content = await entry.content();
        const plainText = extractTextFromDocument(content);
        return {
          id: slug,
          title: entry.title,
          subtitle: entry.subtitle || undefined,
          synopsis: plainText || entry.title,
          releaseText: plainText || entry.title,
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
          content,
        };
      })
    );

    return shows;
  } catch (error) {
    console.error('Error reading Keystatic shows, falling back to static data:', error);
    return SHOWS;
  }
}

export async function getWorkshops(): Promise<Workshop[]> {
  try {
    const entries = await reader.collections.praticasFormativas.all();
    if (!entries || entries.length === 0) return WORKSHOPS;

    const workshops = await Promise.all(
      entries.map(async ({ slug, entry }) => {
        const content = await entry.content();
        const paragraphs = extractParagraphsFromDocument(content);
        return {
          id: slug,
          title: entry.title,
          subtitle: entry.subtitle || '',
          concept: paragraphs[0] || entry.title,
          accentColor: entry.accentColor || '#FDBC2E',
          targetAudience: entry.targetAudience,
          audienceLimit: entry.audienceLimit || undefined,
          whatsappContact: entry.whatsappContact || '5519992510921',
          fullDescription: paragraphs.length > 0 ? paragraphs : [entry.title],
          highlights: entry.highlights?.length ? (entry.highlights as string[]) : undefined,
          principles: entry.principles?.length ? (entry.principles as string[]) : undefined,
          photos: (entry.photos || []).map((photo) => ({
            src: photo.src || '/brand/passarinha-ave.webp',
            alt: photo.alt || entry.title,
            caption: photo.caption || undefined,
          })),
          content,
        };
      })
    );

    return workshops;
  } catch (error) {
    console.error('Error reading Keystatic workshops, falling back to static data:', error);
    return WORKSHOPS;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const entries = await reader.collections.equipe.all();
    if (!entries || entries.length === 0) return TEAM_MEMBERS;

    const members = await Promise.all(
      entries.map(async ({ slug, entry }) => {
        const bioDoc = await entry.bio();
        const bioText = extractTextFromDocument(bioDoc);
        return {
          id: slug,
          name: entry.name,
          role: entry.role,
          bio: bioText,
          bioDoc,
          avatarColor: entry.avatarColor || '#FDBC2E',
          photoUrl: entry.photoUrl || undefined,
          instagramUrl: entry.instagramUrl || undefined,
          spotifyUrl: entry.spotifyUrl || undefined,
          portfolioUrl: entry.portfolioUrl || undefined,
        };
      })
    );

    return members;
  } catch (error) {
    console.error('Error reading Keystatic team, falling back to static data:', error);
    return TEAM_MEMBERS;
  }
}

export async function getTimeline(): Promise<HistoryMilestone[]> {
  try {
    const entries = await reader.collections.historico.all();
    if (!entries || entries.length === 0) return TIMELINE;

    const milestones = await Promise.all(
      entries.map(async ({ entry }) => {
        const content = await entry.content();
        const description = extractTextFromDocument(content);
        return {
          year: entry.year,
          periodLabel: entry.periodLabel || entry.year,
          title: entry.title,
          description,
          location: entry.location || undefined,
          tag: entry.tag || undefined,
          photoUrl: entry.photos?.[0]?.src || undefined,
          photos: (entry.photos || []).map((p) => ({
            src: p.src || '/photos/historico/inicio-1.webp',
            alt: p.alt || entry.title,
            caption: p.caption || undefined,
          })),
          photoVariant: (entry.photoStacked ? 'stacked' : 'grid') as 'stacked' | 'grid',
          content,
        };
      })
    );

    return milestones;
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

    const works = await Promise.all(
      entries.map(async ({ slug, entry }) => {
        const content = await entry.content();
        const paragraphs = extractParagraphsFromDocument(content);
        return {
          id: slug,
          title: entry.title,
          synopsis: paragraphs[0] || entry.title,
          context: paragraphs.slice(1).join('\n\n'),
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
          content,
        };
      })
    );

    return works;
  } catch (error) {
    console.error('Error reading Keystatic audiovisual, falling back to static data:', error);
    return AUDIOVISUAL_WORKS;
  }
}

export async function getGaratujaProjects(): Promise<GaratujaProject[]> {
  try {
    const entries = await reader.collections.projetosGaratuja.all();
    if (!entries || entries.length === 0) return [];

    const projects = await Promise.all(
      entries.map(async ({ slug, entry }) => {
        const content = await entry.content();
        const paragraphs = extractParagraphsFromDocument(content);
        return {
          id: slug,
          title: entry.title,
          tag: entry.tag || 'Projeto de Continuidade',
          shortDescription: paragraphs[0] || '',
          paragraphs,
          accentColor: entry.accentColor || '#FDBC2E',
          externalLink: entry.externalLink || undefined,
          externalLinkLabel: entry.externalLinkLabel || undefined,
          photos: (entry.photos || []).map((photo) => ({
            src: photo.src || '/brand/passarinha-ave.webp',
            alt: photo.alt || entry.title,
            caption: photo.caption || undefined,
          })),
          content,
        };
      })
    );

    return projects;
  } catch (error) {
    console.error('Error reading Keystatic Garatuja projects, falling back to empty list:', error);
    return [];
  }
}

export async function getGaratujaContent(): Promise<GaratujaSiteContent> {
  try {
    const data = await reader.singletons.quintalGaratuja.read();
    if (!data) return DEFAULT_GARATUJA_SITE;

    const content = await data.content();
    const paragraphs = extractParagraphsFromDocument(content);

    return {
      title: data.title || DEFAULT_GARATUJA_SITE.title,
      tag: data.tag || DEFAULT_GARATUJA_SITE.tag,
      leadText: data.leadText || DEFAULT_GARATUJA_SITE.leadText,
      street: data.street || DEFAULT_GARATUJA_SITE.street,
      neighborhood: data.neighborhood || DEFAULT_GARATUJA_SITE.neighborhood,
      email: data.email || DEFAULT_GARATUJA_SITE.email,
      instagram: data.instagram || DEFAULT_GARATUJA_SITE.instagram,
      linktree: data.linktree || DEFAULT_GARATUJA_SITE.linktree,
      whatsappGroup: data.whatsappGroup || DEFAULT_GARATUJA_SITE.whatsappGroup,
      photos: (data.photos || []).map((p) => ({
        src: p.src || '/brand/passarinha-ave.webp',
        alt: p.alt || data.title || 'Quintal Garatuja',
        caption: p.caption || undefined,
      })),
      paragraphs: paragraphs.length > 0 ? paragraphs : DEFAULT_GARATUJA_SITE.paragraphs,
      content,
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

    const content = await data.content();
    const paragraphs = extractParagraphsFromDocument(content);

    return {
      title: data.title || DEFAULT_ARU_CONTENT.title,
      tagline: data.tagline || DEFAULT_ARU_CONTENT.tagline,
      originalAuthor: data.originalAuthor || DEFAULT_ARU_CONTENT.originalAuthor,
      cordelAdaptation: data.cordelAdaptation || DEFAULT_ARU_CONTENT.cordelAdaptation,
      ebookUrl: data.ebookUrl || DEFAULT_ARU_CONTENT.ebookUrl,
      cartilhaUrl: data.cartilhaUrl || DEFAULT_ARU_CONTENT.cartilhaUrl,
      principles: (data.principles?.length ? data.principles : DEFAULT_ARU_CONTENT.principles) as string[],
      photos: (data.photos || []).map((p) => ({
        src: p.src || '/brand/passarinha-ave.webp',
        alt: p.alt || data.title || 'A História de Aru',
        caption: p.caption || undefined,
      })),
      paragraphs: paragraphs.length > 0 ? paragraphs : DEFAULT_ARU_CONTENT.paragraphs,
      content,
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

    const content = await data.content();
    const introParagraphs = extractParagraphsFromDocument(content);

    return {
      heroTitle: data.heroTitle || DEFAULT_HOME_CONTENT.heroTitle,
      heroSubtitle: data.heroSubtitle || DEFAULT_HOME_CONTENT.heroSubtitle,
      ctaText: data.ctaText || DEFAULT_HOME_CONTENT.ctaText,
      introParagraphs:
        introParagraphs.length > 0 ? introParagraphs : DEFAULT_HOME_CONTENT.introParagraphs,
      content,
      garatujaTitle: data.garatujaTitle || DEFAULT_HOME_CONTENT.garatujaTitle,
      garatujaText: data.garatujaText || DEFAULT_HOME_CONTENT.garatujaText,
      garatujaCta: data.garatujaCta || DEFAULT_HOME_CONTENT.garatujaCta,
      aruTitle: data.aruTitle || DEFAULT_HOME_CONTENT.aruTitle,
      aruText: data.aruText || DEFAULT_HOME_CONTENT.aruText,
      aruCta: data.aruCta || DEFAULT_HOME_CONTENT.aruCta,
      espetaculosTitle: data.espetaculosTitle || DEFAULT_HOME_CONTENT.espetaculosTitle,
      espetaculosText: data.espetaculosText || DEFAULT_HOME_CONTENT.espetaculosText,
      espetaculosCta: data.espetaculosCta || DEFAULT_HOME_CONTENT.espetaculosCta,
      formativasTitle: data.formativasTitle || DEFAULT_HOME_CONTENT.formativasTitle,
      formativasText: data.formativasText || DEFAULT_HOME_CONTENT.formativasText,
      formativasCta: data.formativasCta || DEFAULT_HOME_CONTENT.formativasCta,
      audiovisualTitle: data.audiovisualTitle || DEFAULT_HOME_CONTENT.audiovisualTitle,
      audiovisualText: data.audiovisualText || DEFAULT_HOME_CONTENT.audiovisualText,
      audiovisualCta: data.audiovisualCta || DEFAULT_HOME_CONTENT.audiovisualCta,
      footerBannerTitle: data.footerBannerTitle || DEFAULT_HOME_CONTENT.footerBannerTitle,
      footerBannerSubtitle:
        data.footerBannerSubtitle || DEFAULT_HOME_CONTENT.footerBannerSubtitle,
      footerBannerCta: data.footerBannerCta || DEFAULT_HOME_CONTENT.footerBannerCta,
    };
  } catch (error) {
    console.error('Error reading Keystatic home page content, falling back to static data:', error);
    return DEFAULT_HOME_CONTENT;
  }
}
