# Auditoria e Ferramentas de Acessibilidade (WCAG 2.1 AA & eMAG) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar todas as 8 páginas públicas do Coletivo Passarinha ao nível WCAG 2.1 AA / eMAG e implementar um conjunto completo de ferramentas de acessibilidade no frontend (Barra de Acessibilidade Multifuncional + VLibras + Script de Auditoria Automatizada).

**Architecture:** Combinamos correções semânticas, de teclado, foco, contraste e movimento diretamente nos componentes existentes (`Header`, `ContatoForm`, `PhotoCarouselFrame`, `PhotoMosaic`, `IntroPassarinha`, barras de submenu e `globals.css`) com três novas ferramentas: um provedor e barra flutuante de acessibilidade (`AccessibilityToolbar.tsx`) persistida em `localStorage` via atributos `data-a11y-*` no `<html>`, o widget oficial de tradução para Libras (`VLibrasWidget.tsx`), e um script de auditoria automatizada (`scripts/audit-a11y.mjs`).

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, VLibras (Gov.br).

**Spec:** Relatório de Auditoria de Acessibilidade incluso na Seção 1 deste documento.

## Global Constraints

- Manter 100% da identidade visual artesanal/acrílica do Coletivo Passarinha no modo padrão, ativando modificadores visuais (`data-a11y-contrast="high"`, `data-a11y-font="dyslexic"`, `data-a11y-links="highlight"`, `data-a11y-motion="reduced"`) apenas quando solicitados pelo usuário ou pelo sistema operacional (`prefers-reduced-motion`).
- Manter a classe `painel-rustico` estritamente restrita às 6 categorias de cards autorizadas.
- Não carregar nem exibir ferramentas de acessibilidade do site público dentro da rota administrativa `/keystatic` (`/admin`).
- Garantir `npm run lint` e `npm run build` com zero erros em todas as etapas.

## Review Focus

- Navegação completa por teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`, setas) nos submenus do `Header` e no modal Lightbox do `PhotoMosaic`.
- Persistência das preferências da Barra de Acessibilidade (`passarinha_a11y_prefs`) sem causar erro de hidratação (SSR/CSR mismatch) no Next.js.
- Respeito automático a `prefers-reduced-motion: reduce` em `IntroPassarinha`, `PassarinhaAnimada` e `PhotoCarouselFrame`.
- Associação explícita `htmlFor` + `id` em todos os campos de `ContatoForm.tsx` e substituição de `window.alert` por alerta acessível `role="alert"`.
- Contraste mínimo de 4.5:1 (WCAG AA) nos botões e rótulos de WhatsApp e nas seções de fundo colorido.

---

## 1. Diagnóstico de Acessibilidade Atual (Auditoria das 8 Páginas e 17 Componentes)

### 1.1 Problemas Globais (Afetam Todas as Páginas)
1. **Ausência de "Skip Link" (Pular para o conteúdo principal):**
   - Em `src/app/layout.tsx`, usuários de teclado e leitores de tela precisam percorrer mais de 20 links do cabeçalho e submenus antes de chegar ao `<main>` em cada troca de página.
2. **Remoção de Indicador de Foco (`focus:outline-none`):**
   - Presente em `src/components/Header.tsx` (linhas 131, 159, 250) e nos inputs de `src/components/ContatoForm.tsx` (linhas 181, 197, 214, 229, 243, 294) sem um anel `:focus-visible` de alto contraste substituto.
3. **Submenus Desktop Inacessíveis via Teclado (`src/components/Header.tsx`):**
   - Os dropdowns (*Quintal Garatuja*, *Espetáculos*, *Oficinas*, *Audiovisual*) abrem apenas com `onMouseEnter`/`onMouseLeave` (linhas 187–188). Usuários de teclado ou leitores de tela não conseguem expandir os subitens nem recebem os atributos `aria-expanded`, `aria-haspopup` ou `aria-current="page"`.
4. **Landmarks `<nav>` sem Rótulos Distintos (`Header.tsx` e `Footer.tsx`):**
   - O `<nav>` principal do `Header.tsx` (linha 176) e a lista de navegação do `Footer.tsx` (linha 88) não possuem `aria-label` diferenciando "Navegação principal" de "Navegação do rodapé".
5. **Animações Contínuas sem Suporte a `prefers-reduced-motion` (WCAG 2.3.3 / 2.2.2):**
   - `PassarinhaAnimada.tsx` e `.anim-asa-cordel` / `.anim-voo-passarinha` (`src/app/globals.css`, linhas 260–275) executam animação infinita sem media query `@media (prefers-reduced-motion: reduce)`.
   - `PhotoCarouselFrame.tsx` (linhas 50–56) troca de slide a cada 3,5s–4,5s sem botão de Pausar/Reproduzir, sem pausar ao receber foco de teclado (`onFocusCapture`/`onBlurCapture`) e sem ocultar slides inativos para leitores de tela (`aria-hidden={idx !== current}`).

### 1.2 Problemas por Página e Componente Específico
| Página / Rota | Componentes Envolvidos | Falhas Identificadas na Auditoria |
| :--- | :--- | :--- |
| **Página Inicial (`/`)** | `src/app/page.tsx`, `IntroPassarinha.tsx`, `PhotoCarouselFrame.tsx`, `ReplayIntroButton.tsx` | • `IntroPassarinha.tsx` renderiza um segundo `<h1>` na página (linha 84), não fecha com a tecla `Escape` e não pula automaticamente se o usuário tiver `prefers-reduced-motion` ativo.<br>• Setas do `PhotoCarouselFrame` têm `32x32px` (`w-8 h-8`, abaixo do alvo de toque recomendado) e ficam invisíveis ao receber foco via teclado no desktop (`sm:opacity-0` sem `focus-visible:opacity-100`). |
| **Quem Somos (`/quem-somos`)** | `src/app/quem-somos/page.tsx`, `PhotoMosaic.tsx` | • Os botões de ampliação de fotos no `PhotoMosaic.tsx` (linha 56) não têm `aria-label` descritivo informando a ação ("Ampliar foto: ...").<br>• O modal Lightbox (`role="dialog"`, linha 178) não move o foco automaticamente para o botão de fechar ao abrir nem restaura o foco ao fechar. |
| **Quintal Garatuja (`/quintal-garatuja`)** | `src/app/quintal-garatuja/page.tsx`, `PhotoMosaic.tsx` | • Ícones decorativos (`Home`, `MapPin`, `Sparkles`, `Trees`, `Theater`, `Music`, `ExternalLink`) não possuem `aria-hidden="true"`.<br>• Links externos que abrem em nova aba (`target="_blank"`) não avisam leitores de tela. |
| **A História de Aru (`/aru`)** | `src/app/aru/page.tsx` | • A grade dos 12 Princípios da Permacultura usa `<div>` genéricos em vez de uma lista ordenada semântica (`<ol>` / `<li>`). |
| **Espetáculos (`/espetaculos`)** | `src/app/espetaculos/page.tsx`, `EspetaculosFilterBar.tsx` | • Os botões do submenu fixo (`EspetaculosFilterBar.tsx`, linha 86) não possuem `aria-current="location"` para anunciar o espetáculo ativo.<br>• Na seção *Show Nascente*, o container do iframe do Spotify e os botões precisam de títulos/rótulos explícitos. |
| **Práticas Formativas (`/praticas-formativas`)** | `src/app/praticas-formativas/page.tsx`, `PraticasFilterBar.tsx` | • Botões de `PraticasFilterBar.tsx` sem `aria-current="location"`. |
| **Audiovisual (`/audiovisual`)** | `src/app/audiovisual/page.tsx`, `AudiovisualFilterBar.tsx` | • Botões de `AudiovisualFilterBar.tsx` sem `aria-current="location"`. |
| **Contato (`/contato`)** | `src/app/contato/page.tsx`, `ContatoForm.tsx`, `WhatsAppFloat.tsx` | • **Crítico (WCAG 1.3.1 / 4.1.2):** Todos os 6 campos de `ContatoForm.tsx` (`nome`, `email`, `telefone`, `cidade`, `interesse`, `mensagem`) possuem `<label>` sem `htmlFor` e inputs sem `id`.<br>• **Crítico (WCAG 1.4.3 Contraste):** Texto `text-[#25D366]` sobre fundo creme `#FDF6E4` em `contato/page.tsx` (linha 100) tem contraste **1.9:1** (mínimo exigido: 4.5:1). Botões `bg-[#25D366] text-white` têm contraste **2.1:1**.<br>• Validação usa `alert()` bloqueante em vez de mensagem `role="alert"` vinculada aos campos. |

---

## 2. Arquitetura de Arquivos a Criar e Modificar

- **Criar:**
  - `src/components/AccessibilityToolbar.tsx` — Barra e painel flutuante de acessibilidade com 6 ferramentas (Tamanho da Fonte `A-/A/A+`, Alto Contraste, Fonte Legível/Dislexia, Pausar Animações, Destacar Links, Guia de Leitura Horizontal) + atalho de teclado `Alt + A`.
  - `src/components/VLibrasWidget.tsx` — Integração oficial do tradutor VLibras (Gov.br) para Língua Brasileira de Sinais.
  - `scripts/audit-a11y.mjs` — Script automatizado de verificação estática e semântica de acessibilidade nas rotas e componentes do projeto.
- **Modificar:**
  - `src/app/globals.css` — Estilos globais de `:focus-visible`, `@media (prefers-reduced-motion: reduce)`, variáveis e regras CSS para os modos da Barra de Acessibilidade (`[data-a11y-contrast="high"]`, `[data-a11y-font="dyslexic"]`, `[data-a11y-links="highlight"]`, `[data-a11y-motion="reduced"]`) e classe `.skip-link`.
  - `src/app/layout.tsx` — Adicionar link "Pular para o conteúdo principal", envolver o container principal com destino de âncora e montar `<AccessibilityToolbar />` e `<VLibrasWidget />`.
  - `src/components/Header.tsx` — Adicionar suporte completo a teclado nos dropdowns (`Enter`, `Space`, `Escape`, `ArrowDown`, foco), `aria-expanded`, `aria-haspopup`, `aria-current="page"` e `aria-label="Navegação principal"`.
  - `src/components/Footer.tsx` — Adicionar `<nav aria-label="Navegação do rodapé">` e contraste adequado nos textos secundários.
  - `src/components/ContatoForm.tsx` e `src/app/contato/page.tsx` — Associar `htmlFor`/`id` em todos os campos, adicionar `aria-required="true"`, substituir `alert()` por banner `role="alert"`, adicionar `role="status"` na tela de sucesso e corrigir o contraste do verde do WhatsApp (`#128C47` / texto escuro `#1B0B1E`).
  - `src/components/PhotoCarouselFrame.tsx`, `src/components/PhotoMosaic.tsx`, `src/components/IntroPassarinha.tsx` — Adicionar botão Pausar/Reproduzir no carrossel, `aria-hidden` nos slides inativos, gerenciamento de foco no Lightbox (`PhotoMosaic`), fechamento com `Escape` e respeito a `prefers-reduced-motion` / `data-a11y-motion="reduced"`.
  - `src/components/EspetaculosFilterBar.tsx`, `src/components/PraticasFilterBar.tsx`, `src/components/AudiovisualFilterBar.tsx` — Adicionar `aria-current={isSelected ? "location" : undefined}`.
  - `src/app/page.tsx`, `src/app/quem-somos/page.tsx`, `src/app/quintal-garatuja/page.tsx`, `src/app/aru/page.tsx`, `src/app/espetaculos/page.tsx`, `src/app/praticas-formativas/page.tsx`, `src/app/audiovisual/page.tsx`, `src/app/contato/page.tsx` — Adicionar `id="conteudo-principal" tabIndex={-1}` no `<main>` e corrigir semântica pontual (ex: `<ol>` nos 12 princípios em `/aru`).

---

## 3. Tarefas de Implementação Passo a Passo

### Task 1: Fundações Globais de Acessibilidade, Skip Link, Focus Ring e Reduced Motion

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`, `src/app/quem-somos/page.tsx`, `src/app/quintal-garatuja/page.tsx`, `src/app/aru/page.tsx`, `src/app/espetaculos/page.tsx`, `src/app/praticas-formativas/page.tsx`, `src/app/audiovisual/page.tsx`, `src/app/contato/page.tsx`

**Interfaces:**
- Consumes: Layout raiz Next.js e folhas de estilo globais.
- Produces: Âncora `#conteudo-principal` em todas as páginas e seletores globais `html[data-a11y-*]` prontos para o `AccessibilityToolbar`.

- [ ] **Step 1: Adicionar estilos de `:focus-visible`, `.skip-link`, `prefers-reduced-motion` e modos `data-a11y-*` em `src/app/globals.css`**
  - Definir `.skip-link` oculto fora da tela até receber `:focus-visible` (aparecendo no topo esquerdo com fundo `#3A1D40`, texto `#FDBC2E` e borda `#FDBC2E`).
  - Definir estilo global `:focus-visible` com `outline: 3px solid #FDBC2E; outline-offset: 3px; box-shadow: 0 0 0 5px #3A1D40;`.
  - Adicionar `@media (prefers-reduced-motion: reduce)` e `html[data-a11y-motion="reduced"]` desativando `.anim-asa-cordel`, `.anim-asa-fantasma`, `.anim-voo-passarinha` e `scroll-behavior: smooth`.
  - Adicionar regras para `html[data-a11y-contrast="high"]` (fundo preto/roxo profundo `#120714`, remoção de `background-image` das classes `.canvas-*`, textos em `#FFFFFF` e `#FDBC2E`, `.painel-rustico` com fundo `#120714`, texto `#FFFFFF` e borda `2px solid #FDBC2E`).
  - Adicionar regras para `html[data-a11y-font="dyslexic"]` (`letter-spacing: 0.06em !important; word-spacing: 0.14em !important; line-height: 1.8 !important;`) e `html[data-a11y-links="highlight"]` (`a, button { text-decoration: underline !important; outline: 2px dashed #FDBC2E !important; outline-offset: 2px !important; }`).

- [ ] **Step 2: Adicionar Skip Link em `src/app/layout.tsx` e `id="conteudo-principal" tabIndex={-1}` nas tags `<main>` das 8 páginas**
  - Inserir `<a href="#conteudo-principal" className="skip-link">Pular para o conteúdo principal</a>` logo no início do `<body>` em `src/app/layout.tsx`.
  - Adicionar `id="conteudo-principal" tabIndex={-1}` no elemento `<main>` das 8 páginas públicas.

- [ ] **Step 3: Verificar compilação e lint**
  - Run: `npm run lint`
  - Expected: PASS com 0 erros.

---

### Task 2: Acessibilidade de Teclado, ARIA e Contraste em Navegação, Submenus e Formulário de Contato

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/EspetaculosFilterBar.tsx`
- Modify: `src/components/PraticasFilterBar.tsx`
- Modify: `src/components/AudiovisualFilterBar.tsx`
- Modify: `src/components/ContatoForm.tsx`
- Modify: `src/app/contato/page.tsx`
- Modify: `src/components/WhatsAppFloat.tsx`
- Modify: `src/app/aru/page.tsx`

**Interfaces:**
- Consumes: Componentes existentes de navegação e contato.
- Produces: Navegação 100% operável por teclado e leitores de tela, formulário compatível com WCAG 1.3.1/3.3.1/4.1.2 e cores do WhatsApp com contraste AA (> 4.5:1).

- [ ] **Step 1: Atualizar `src/components/Header.tsx` e `src/components/Footer.tsx`**
  - Em `Header.tsx`: adicionar `aria-label="Navegação principal"` no `<nav>`, remover `focus:outline-none`, adicionar botão de expansão por teclado ao lado de cada item com submenu (ou suporte a `onKeyDown` com `Enter`/`ArrowDown`/`Escape` e `onBlur` quando o foco sai do container), além de `aria-expanded`, `aria-haspopup="true"` e `aria-current={active ? "page" : undefined}`. No botão mobile, adicionar `aria-expanded={mobileOpen}` e `aria-controls="menu-mobile-drawer"`.
  - Em `Footer.tsx`: envolver os links do rodapé em `<nav aria-label="Navegação do rodapé">` e elevar a opacidade do copyright de `text-[#FDBC2E]/60` para `text-[#FDBC2E]/85` para garantir contraste > 7:1 sobre `#532E5A`.

- [ ] **Step 2: Adicionar `aria-current="location"` nas 3 barras de submenu fixas**
  - Em `EspetaculosFilterBar.tsx`, `PraticasFilterBar.tsx` e `AudiovisualFilterBar.tsx`, adicionar `aria-current={isSelected ? "location" : undefined}` em cada `<button>`.

- [ ] **Step 3: Corrigir `src/components/ContatoForm.tsx`, `src/app/contato/page.tsx`, `src/components/WhatsAppFloat.tsx` e `src/app/aru/page.tsx`**
  - Em `ContatoForm.tsx`: adicionar `id` e `htmlFor` para `contato-nome`, `contato-email`, `contato-telefone`, `contato-cidade`, `contato-interesse` e `contato-mensagem`; adicionar `aria-required="true"` nos campos obrigatórios; substituir `alert(...)` por estado `errorMessage` renderizado em `<div role="alert" aria-live="assertive">`; adicionar `role="status" aria-live="polite"` no card de confirmação; usar verde acessível `bg-[#128C47] hover:bg-[#0E6F38] text-white` (contraste 4.6:1).
  - Em `src/app/contato/page.tsx` e `src/components/WhatsAppFloat.tsx`: ajustar o rótulo `text-[#25D366]` sobre creme para `text-[#128C47]` e o fundo do botão flutuante para `bg-[#128C47] hover:bg-[#0E6F38]`.
  - Em `src/app/aru/page.tsx`: converter o grid dos 12 princípios da permacultura em `<ol>` / `<li>` semânticos.

- [ ] **Step 4: Verificar compilação e lint**
  - Run: `npm run lint`
  - Expected: PASS com 0 erros.

---

### Task 3: Acessibilidade em Componentes Multimídia (`PhotoCarouselFrame`, `PhotoMosaic`, `IntroPassarinha`)

**Files:**
- Modify: `src/components/PhotoCarouselFrame.tsx`
- Modify: `src/components/PhotoMosaic.tsx`
- Modify: `src/components/IntroPassarinha.tsx`

**Interfaces:**
- Consumes: Atributo `data-a11y-motion="reduced"` e media query `prefers-reduced-motion: reduce`.
- Produces: Carrossel com botão Pausar/Reproduzir (WCAG 2.2.2), Lightbox com foco gerenciado e abertura sem bloqueio para usuários sensíveis a movimento.

- [ ] **Step 1: Atualizar `src/components/PhotoCarouselFrame.tsx`**
  - Adicionar estados `isPaused` e `isHoveredOrFocused`, respeitando `window.matchMedia("(prefers-reduced-motion: reduce)")` e `document.documentElement.dataset.a11yMotion === "reduced"`.
  - Adicionar `role="region"`, `aria-roledescription="carrossel"` e `aria-label="Galeria de fotos em destaque"` no container.
  - Adicionar `aria-hidden={idx !== current}` nos slides inativos.
  - Aumentar área clicável dos botões Anterior/Próximo para `w-10 h-10` com `focus-visible:opacity-100` e incluir botão discreto de Pausar/Reproduzir (`Pause`/`Play` da `lucide-react`) no canto inferior direito do carrossel.

- [ ] **Step 2: Atualizar `src/components/PhotoMosaic.tsx`**
  - Adicionar `aria-label={`Ampliar foto ${idx + 1} de ${photos.length}: ${photo.alt}`}` em cada botão de miniatura.
  - Quando `lightboxIdx !== null`, focar automaticamente o botão de fechar (`closeButtonRef.current?.focus()`) e implementar ciclo de foco (`Tab` / `Shift+Tab`) dentro do modal, restaurando o foco ao botão de origem ao fechar.

- [ ] **Step 3: Atualizar `src/components/IntroPassarinha.tsx`**
  - Trocar o `<h1>` da tela de abertura por `<p className="text-3xl sm:text-4xl ...">` para não duplicar o `<h1>` da Home.
  - Pular automaticamente a abertura se `window.matchMedia("(prefers-reduced-motion: reduce)").matches` ou `localStorage` tiver `reducedMotion: true`.
  - Permitir fechar com a tecla `Escape` ou `Enter`.

---

### Task 4: Implementação das Ferramentas de Acessibilidade (`AccessibilityToolbar` + `VLibrasWidget` + Auditoria Automatizada)

**Files:**
- Create: `src/components/AccessibilityToolbar.tsx`
- Create: `src/components/VLibrasWidget.tsx`
- Create: `scripts/audit-a11y.mjs`
- Modify: `src/app/layout.tsx`
- Modify: `package.json`

**Interfaces:**
- Produces:
  - `<AccessibilityToolbar />`: Widget acessível com atalho `Alt + A`, persistido em `localStorage` (`passarinha_a11y_prefs`), controlando:
    1. Escala tipográfica (`100%`, `112%`, `125%`)
    2. Alto Contraste (`data-a11y-contrast="high"`)
    3. Fonte Legível / Dislexia (`data-a11y-font="dyslexic"`)
    4. Pausar Animações (`data-a11y-motion="reduced"`)
    5. Destacar Links e Botões (`data-a11y-links="highlight"`)
    6. Régua / Guia de Leitura Horizontal (`readingGuide: boolean`)
    7. Restaurar Padrões
  - `<VLibrasWidget />`: Widget flutuante oficial do Governo Federal para tradução em Libras.
  - `npm run audit:a11y`: Script Node.js que inspeciona todas as páginas e componentes garantindo 0 regressões de acessibilidade.

- [ ] **Step 1: Criar `src/components/AccessibilityToolbar.tsx`**
  - Implementar botão flutuante no canto inferior esquerdo (`bottom-6 left-6 z-50`) com ícone `Accessibility`, atalho `Alt + A`, `aria-expanded` e painel `role="dialog" aria-label="Ferramentas de Acessibilidade"`.
  - Sincronizar estado com `localStorage` (`passarinha_a11y_prefs`) e aplicar atributos `data-a11y-*` e `--a11y-font-scale` no `document.documentElement`.
  - Renderizar a régua horizontal de leitura quando `readingGuide` estiver ativo.

- [ ] **Step 2: Criar `src/components/VLibrasWidget.tsx` e registrar ambos em `src/app/layout.tsx`**
  - Implementar carregamento seguro no cliente do script `https://vlibras.gov.br/app/vlibras-plugin.js` e estrutura `[vw]`, ocultando-o em `/keystatic`.
  - Adicionar `<AccessibilityToolbar />` e `<VLibrasWidget />` em `src/app/layout.tsx`.

- [ ] **Step 3: Criar `scripts/audit-a11y.mjs` e script `audit:a11y` em `package.json`**
  - Implementar verificação automatizada checando: presença de Skip Link, presença de `id="conteudo-principal"` em todas as páginas, ausência de `<label>` sem `htmlFor`, ausência de `<img` ou `<Image` sem `alt`, presença de atributos ARIA nos menus e barras de filtro, e validação completa de `npm run lint` + `npm run build`.

- [ ] **Step 4: Executar auditoria, lint e build de produção**
  - Run: `npm run audit:a11y && npm run lint && npm run build`
  - Expected: PASS com 0 falhas.

- [ ] **Step 5: Commit e Push**
  - Run: `git add -A && git commit -m "feat(a11y): implement accessibility toolbar, VLibras, and WCAG 2.1 AA fixes across all pages" && git push origin main`
