import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';
import {
  SHOWS,
  WORKSHOPS,
  TEAM_MEMBERS,
  TIMELINE,
  type Show,
  type Workshop,
  type TeamMember,
  type HistoryMilestone,
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
