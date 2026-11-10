import fs from 'node:fs';
import path from 'node:path';
import {
  SHOWS,
  WORKSHOPS,
  TEAM_MEMBERS,
  TIMELINE,
} from '../src/data/siteData';

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

console.log('Seeding Keystatic content from siteData.ts...');

// 1. Espetáculos
const espetaculosDir = path.resolve('src/content/espetaculos');
fs.mkdirSync(espetaculosDir, { recursive: true });

for (const show of SHOWS) {
  const slug = show.id || slugify(show.title);
  const filePath = path.join(espetaculosDir, `${slug}.json`);
  const content = {
    title: show.title,
    subtitle: show.subtitle || '',
    category: show.category || 'Espetáculo Teatral',
    accentColor: show.accentColor || '#F95922',
    ageRating: show.ageRating || 'Livre',
    duration: show.duration || '50 min',
    synopsis: show.synopsis || '',
    releaseText: show.releaseText || '',
    videoUrl: show.videoUrl || null,
    technicalSheet: (show.technicalSheet || []).map((item) => ({
      label: item.label,
      value: item.value,
    })),
    photos: (show.photos || []).map((photo) => ({
      src: photo.src,
      alt: photo.alt || '',
      caption: photo.caption || '',
    })),
  };
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Seeded show: ${slug}`);
}

// 2. Práticas Formativas
const praticasDir = path.resolve('src/content/praticas-formativas');
fs.mkdirSync(praticasDir, { recursive: true });

for (const workshop of WORKSHOPS) {
  const slug = workshop.id || slugify(workshop.title);
  const filePath = path.join(praticasDir, `${slug}.json`);
  const content = {
    title: workshop.title,
    subtitle: workshop.subtitle || '',
    concept: workshop.concept || '',
    accentColor: workshop.accentColor || '#FDBC2E',
    targetAudience: workshop.targetAudience || 'Público em geral',
    audienceLimit: workshop.audienceLimit || '30 pessoas',
    whatsappContact: workshop.whatsappContact || '5519992510921',
    fullDescription: workshop.fullDescription || [],
    highlights: workshop.highlights || [],
    principles: workshop.principles || [],
    photos: (workshop.photos || []).map((photo) => ({
      src: photo.src,
      alt: photo.alt || '',
      caption: photo.caption || '',
    })),
  };
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Seeded workshop: ${slug}`);
}

// 3. Equipe
const equipeDir = path.resolve('src/content/equipe');
fs.mkdirSync(equipeDir, { recursive: true });

for (const member of TEAM_MEMBERS) {
  const slug = member.id || slugify(member.name);
  const filePath = path.join(equipeDir, `${slug}.json`);
  const content = {
    name: member.name,
    role: member.role || '',
    bio: member.bio || '',
    avatarColor: member.avatarColor || '#FDBC2E',
    photoUrl: member.photoUrl || null,
    instagramUrl: member.instagramUrl || null,
    spotifyUrl: member.spotifyUrl || null,
    portfolioUrl: member.portfolioUrl || null,
  };
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Seeded team member: ${slug}`);
}

// 4. Histórico
const historicoDir = path.resolve('src/content/historico');
fs.mkdirSync(historicoDir, { recursive: true });

for (const item of TIMELINE) {
  const slug = slugify(item.year);
  const filePath = path.join(historicoDir, `${slug}.json`);
  const content = {
    year: item.year,
    title: item.title,
    description: item.description,
    location: item.location || '',
    tag: item.tag || '',
    photoUrl: item.photoUrl || null,
  };
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Seeded milestone: ${slug}`);
}

// 5. Configurações
const configPath = path.resolve('src/content/configuracoes.json');
const siteConfig = {
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
fs.writeFileSync(configPath, JSON.stringify(siteConfig, null, 2), 'utf8');
console.log('Seeded site configuracoes.json');

console.log('All initial content seeded successfully!');
