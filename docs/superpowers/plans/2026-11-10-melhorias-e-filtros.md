# Melhorias Técnicas, Filtros e Formulário Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar as melhorias do Item A (Sitemap, Robots, Metadados OpenGraph dedicados por rota, Acessibilidade no Lightbox, Correção do ESLint em `IntroPassarinha`), as melhorias do Item B.2 (Filtros interativos por tags em `/espetaculos` e `/praticas-formativas`) e a correção do formulário de contato em `/contato` com suporte a envio direto e WhatsApp.

**Architecture:** Next.js 16 App Router com Server Components para SEO e OpenGraph dinâmico por rota, Client Components focados para filtros interativos e formulário de contato com feedback claro de envio.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React.

## Global Constraints
- Preservar 100% dos textos integrais dos espetáculos e práticas sem resumos.
- Manter o visual rústico, cores da paleta Passarinha e border-radius calibrados sem cortes de legendas.
- Zero dependência externa paga no formulário (geração estruturada para WhatsApp e cliente de e-mail / cópia de dados com confirmação visual).

## Tasks

### Task 1: Correções de Lint e Limpeza de Código
- [ ] Refatorar `src/components/IntroPassarinha.tsx` eliminando `setMounted(true)` síncrono no efeito, organizando `handleDismiss` e removendo `Sparkles` não utilizado.
- [ ] Excluir componente obsoleto `src/components/AudioPlayer.tsx`.
- [ ] Ignorar pasta `scratch/**` em `eslint.config.mjs` e remover arquivos temporários de teste.
- [ ] Verificar com `npm run lint`.

### Task 2: SEO Técnico — Sitemap e Robots Automáticos
- [ ] Criar `src/app/sitemap.ts` com todas as 8 rotas canônicas e prioridades.
- [ ] Criar `src/app/robots.ts` apontando para `https://coletivo-passarinha.vercel.app/sitemap.xml`.
- [ ] Testar geração com `npm run build`.

### Task 3: Metadados OpenGraph Específicos por Página
- [ ] Remover `"use client"` desnecessário de `src/app/page.tsx` e exportar `metadata` com OpenGraph específico da Home.
- [ ] Exportar `metadata` específico em `src/app/quem-somos/page.tsx`.
- [ ] Exportar `metadata` específico em `src/app/espetaculos/page.tsx`.
- [ ] Exportar `metadata` específico em `src/app/praticas-formativas/page.tsx`.
- [ ] Exportar `metadata` específico em `src/app/quintal-garatuja/page.tsx`.
- [ ] Exportar `metadata` específico em `src/app/audiovisual/page.tsx`.
- [ ] Exportar `metadata` específico em `src/app/aru/page.tsx`.
- [ ] Extrair formulário de contato para `src/components/ContatoForm.tsx` e exportar `metadata` em `src/app/contato/page.tsx`.

### Task 4: Acessibilidade no Lightbox (PhotoMosaic)
- [ ] Atualizar `src/components/PhotoMosaic.tsx` adicionando `role="dialog"`, `aria-modal="true"` e `aria-label` descritivo.

### Task 5: Reconfiguração e Modernização do Formulário de Contato
- [ ] Reestruturar `src/components/ContatoForm.tsx`:
  - Botão principal de envio com opção direta para WhatsApp formatado (ideal para contratantes no Brasil).
  - Opção de envio por E-mail com corpo completo estruturado.
  - Cópia rápida dos dados da proposta com 1 clique.
  - Tela de confirmação moderna com status claro e botão direto para abrir no WhatsApp com os dados preenchidos caso o e-mail não abra.

### Task 6: Filtros Interativos por Tags em Espetáculos e Práticas Formativas (Item B.2)
- [ ] Criar componente `src/components/CategoryFilter.tsx` com botões de tags temáticas e contagem de itens.
- [ ] Integrar filtro em `src/app/espetaculos/page.tsx` (Tags: *Todos*, *Infância & Famílias*, *Música & Cortejo*, *Meio Ambiente*, *Adultos & 50+*).
- [ ] Integrar filtro em `src/app/praticas-formativas/page.tsx` (Tags: *Todas*, *Artes Visuais & Brincar*, *Educação Musical & Percussão*, *Intergeracional*).
- [ ] Suportar scroll suave e highlight ao clicar na tag correspondente.

### Task 7: Verificação Geral e Build
- [ ] Executar `npm run lint`.
- [ ] Executar `npm run build`.
- [ ] Commit e push para `main` no GitHub.
