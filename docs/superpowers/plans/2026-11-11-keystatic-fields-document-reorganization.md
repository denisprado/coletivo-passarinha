# Keystatic CMS: Reorganização Completa com fields.document

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganizar a arquitetura do Keystatic CMS substituindo campos de texto plano (`fields.text`) por documentos ricos (`fields.document`), conectando 100% dos textos, galerias de fotos, destaques e linhas do tempo de todas as páginas públicas ao CMS com suporte a negrito, itálico, links, citações e reordenação livre de parágrafos.

**Architecture:** Utilização do formato nativo Markdoc (`format: { contentField: 'content' }`) com arquivos `.mdoc` que combinam metadados em frontmatter YAML com corpos de texto rico gerenciados pelo editor WYSIWYG do Keystatic, renderizados no frontend através de um componente `<CustomDocumentRenderer />` baseado em `@keystatic/core/renderer`.

**Tech Stack:** Next.js 16 (App Router), React 19, Keystatic 0.6 (`@keystatic/core`, `@keystatic/next`), Tailwind CSS v4, TypeScript.

---

## Global Constraints

- Manter compatibilidade com Next.js 16 (Turbopack) e React 19.
- Preservar rigorosamente a identidade visual (fontes Saira, paleta amarela `#FDBC2E`, roxa `#532E5A`, carmim `#E91C47`, creme `#FDF6E4`, texturas acrílicas e bordas orgânicas).
- As rotas públicas (`/`, `/quem-somos`, `/espetaculos`, `/praticas-formativas`, `/oficinas`, `/aru`, `/quintal-garatuja`, `/audiovisual`, `/contato`) devem exibir 100% de seus dados vindos do leitor do Keystatic.
- Toda modificação deve passar com sucesso nos comandos `npm run lint` e `npm run build`.

---

## Tasks

- [ ] ### Task 1: Componente Reutilizável de Renderização de Documento Rico (`CustomDocumentRenderer`)
  - Criar `src/components/CustomDocumentRenderer.tsx` exportando um componente que utiliza `DocumentRenderer` de `@keystatic/core/renderer`.
  - Configurar renderers customizados para:
    - Parágrafos (`p` com classes de tipografia, leading relaxado e espaçamento consistente).
    - Formatação inline (`bold` com `font-black`, `italic` com estilo poético).
    - Títulos (`h2`, `h3`, `h4` estilizados com a estética da Passarinha).
    - Citações em bloco (`blockquote` com visual de painel rústico / borda carmim).
    - Links (`a` com hover e foco acessível).
    - Listas (`ul`, `ol`, `li`).
  - Suportar prop `theme?: 'purple' | 'yellow' | 'orange' | 'crimson' | 'cream'` para ajustar automaticamente o contraste e a cor dos textos e links de acordo com o fundo acrílico da seção.

- [ ] ### Task 2: Reestruturação do Schema em `keystatic.config.ts`
  - Atualizar coleções para usar `format: { contentField: 'content' }`:
    - `espetaculos`: `content: fields.document(...)`, metadados (título, categoria, classificação, duração, cor, fotos, ficha técnica, riders, vídeo).
    - `praticasFormativas`: `content: fields.document(...)`, metadados (título, subtítulo, público, vagas, whatsapp, fotos, destaques).
    - `audiovisual`: `content: fields.document(...)`, metadados (título, categoria, vídeo, youtubeId, cor, ficha técnica, fotos).
    - `projetosGaratuja`: `content: fields.document(...)`, metadados (título, tag, cor, link externo, fotos).
    - `historico`: `content: fields.document(...)`, metadados (ano, título, local, tag, foto, fotos em coluna única).
    - `equipe`: `bio: fields.document(...)`, metadados (nome, função, foto, avatarColor, links).
  - Atualizar singletons:
    - `paginaInicial`: `content: fields.document(...)`, heroTitle, heroSubtitle, ctaText, carrosséis de fotos das 6 faixas.
    - `quintalGaratuja`: `content: fields.document(...)`, título, tag, galeria principal de 8 fotos, contatos e endereço.
    - `aru`: `content: fields.document(...)`, título, categoria, autores, links de download, princípios da permacultura, galeria de 6 fotos.
    - `configuracoes`: contatos gerais, whatsapp, e-mails, redes sociais e endereço oficial.

- [ ] ### Task 3: Script de Migração e Carga de Conteúdo Rico (.mdoc)
  - Criar script `scripts/seed-document-content.ts` (ou converter diretamente os dados de `src/data/siteData.ts`).
  - Migrar todo o acervo para arquivos `.mdoc`:
    - Os 4 espetáculos completos (*Histórias que a Passarinha me contou*, *Plástico*, *Bosque dos Guarantãs*, *Show Nascente*).
    - As 3 práticas formativas completas (*Ateliê Jogar Dentro*, *Ecobrinquedoteca*, *Orquestra de Pandeiros*).
    - As 3 produções audiovisuais completas (*A Caixa Mágica*, *Fora de onde?*, *O que se passa no formigueiro?*).
    - A linha do tempo completa de 2014 a 2026 de Quem Somos.
    - A equipe completa do Coletivo.
    - Os conteúdos e galerias da Página Inicial, Quintal Garatuja e A História de Aru.
  - Executar o script para popular os diretórios `src/content/**/*.mdoc`.

- [ ] ### Task 4: Atualização da Camada de Leitura em `src/lib/keystatic.ts`
  - Atualizar as funções de leitura tipada (`getShows`, `getWorkshops`, `getAudiovisualWorks`, `getGaratujaProjects`, `getTeamMembers`, `getTimeline`, `getHomePageContent`, `getGaratujaContent`, `getAruContent`, `getSiteConfig`).
  - Garantir que cada função retorne o documento compilado (`await entry.content()`) pronto para ser consumido pelo `<CustomDocumentRenderer />`.
  - Fornecer fallbacks seguros caso algum arquivo esteja sendo editado no CMS.

- [ ] ### Task 5: Conexão das Páginas Públicas ao Leitor de Conteúdo Rico
  - Atualizar `src/app/page.tsx` (Página Inicial): renderizar textos e carrosséis gerenciáveis.
  - Atualizar `src/app/quem-somos/page.tsx`: renderizar a linha do tempo histórica a partir de `getTimeline()`.
  - Atualizar `src/app/espetaculos/page.tsx`: renderizar os espetáculos a partir de `getShows()`.
  - Atualizar `src/app/praticas-formativas/page.tsx`: renderizar as oficinas a partir de `getWorkshops()`.
  - Atualizar `src/app/quintal-garatuja/page.tsx`: renderizar manifesto, galeria de 8 fotos e projetos a partir do CMS.
  - Atualizar `src/app/aru/page.tsx`: renderizar apresentação, galeria de 6 fotos e princípios a partir do CMS.
  - Atualizar `src/app/audiovisual/page.tsx`: renderizar produções a partir de `getAudiovisualWorks()`.
  - Atualizar `src/app/contato/page.tsx` e `src/components/Footer.tsx`: consumir `getSiteConfig()`.

- [ ] ### Task 6: Validação Completa, Testes de Build e Deploy
  - Executar `npm run lint`.
  - Executar `npm run build` para validar as 14 páginas estáticas.
  - Testar o painel administrativo em `/keystatic` para verificar a edição com negrito, itálico e links.
  - Registrar evidências e efetuar commit e push para a branch `main`.
