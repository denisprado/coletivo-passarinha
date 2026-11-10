# Keystatic CMS Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Keystatic CMS into the Coletivo Passarinha Next.js App Router project so the client can manage shows, workshops, team, timeline, and site settings directly through `/keystatic` with zero server costs, while preserving 100% of the handcrafted organic layout, alternating text/photo rhythm, and styling.

**Architecture:** Keystatic runs as an embedded admin interface within Next.js App Router (`/keystatic`), persisting data as Git-backed JSON files under `src/content/`. A dedicated content reader utility (`src/lib/keystatic.ts`) provides async getters with seamless fallback to `src/data/siteData.ts`. Navigation chrome (Header, Footer, WhatsAppFloat) automatically unmounts under `/keystatic` to provide a dedicated, uncluttered editing environment.

**Tech Stack:** Next.js 16 (App Router), React 19, `@keystatic/core`, `@keystatic/next`, Tailwind CSS, TypeScript.

**Spec:** User request turn 9 & 10 ("Vamos de Keystatic então! Mas é possível manter o layout que temos com ele? Alguns textos são dispostos alternando com fotos...").

## Global Constraints

- Preserve 100% of the existing organic design (curved borders, brush banners, color palettes #FDF6E4, #532E5A, #FDBC2E, #F95922, #E91C47, #1EB77C).
- Preserve all existing verbatim texts from `siteData.ts` by seeding them into Keystatic content on initialization.
- In case a Keystatic content file is missing or unreadable, smoothly fall back to `siteData.ts` so the public site never breaks.
- Full TypeScript strictness; `npm run lint` and `npm run build` must pass with 0 errors and 0 warnings.
- Keep all internal and external links formatted with markdown links.

## Review Focus

1. **Storage Mode Fallback:** When running locally, Keystatic uses `kind: 'local'`; in production without GitHub OAuth credentials configured, it gracefully operates without throwing build errors.
2. **Layout Isolation:** Navigating to `/keystatic` must not render the public site's Header, Footer, or floating WhatsApp button.
3. **Array and Gallery Fields:** Managing multiple photos with captions and alternative texts must maintain the exact structure required by `PhotoMosaic` and `PhotoCarouselFrame`.
4. **Content Continuity:** If a user edits one show in Keystatic, all other shows remain intact and render properly.
5. **Build Time Rendering:** Static and dynamic pages must compile cleanly with `npm run build` on Next.js 16 / React 19.

---

### Task 1: Keystatic Configuration File

**Files:**
- Create: `keystatic.config.ts`
- Test: `scratch/test-keystatic-config.js`

**Interfaces:**
- Produces: Default export of `config(...)` from `@keystatic/core` with collections (`espetaculos`, `praticasFormativas`, `equipe`, `historico`) and singleton (`configuracoes`).

- [ ] **Step 1: Write test script to verify Keystatic config syntax and collections**

Create `scratch/test-keystatic-config.mjs` verifying that `keystatic.config.ts` loads with `@keystatic/core` and declares the expected collections and singletons.

- [ ] **Step 2: Run test to verify it fails**

Run: `node scratch/test-keystatic-config.mjs`
Expected: FAIL because `keystatic.config.ts` does not yet exist.

- [ ] **Step 3: Implement `keystatic.config.ts`**

Define `config({ storage, collections: { espetaculos, praticasFormativas, equipe, historico }, singletons: { configuracoes } })`. Configure image storage in `public/photos/cms/`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scratch/test-keystatic-config.mjs`
Expected: PASS with 4 collections and 1 singleton verified.

- [ ] **Step 5: Commit**

```bash
git add keystatic.config.ts scratch/test-keystatic-config.mjs
git commit -m "feat(keystatic): define keystatic.config.ts with collections and singletons"
```

---

### Task 2: Keystatic App Router Routes

**Files:**
- Create: `src/app/keystatic/[[...params]]/page.tsx`
- Create: `src/app/keystatic/layout.tsx`
- Create: `src/app/api/keystatic/[...params]/route.ts`

**Interfaces:**
- Consumes: `keystatic.config.ts`
- Produces: App Router GET/POST route handlers for Keystatic API and UI page handler.

- [ ] **Step 1: Write test script to verify Keystatic route exports**

Create `scratch/test-keystatic-routes.mjs` to test route handler imports and export signatures.

- [ ] **Step 2: Run test to verify it fails**

Run: `node scratch/test-keystatic-routes.mjs`
Expected: FAIL because routes do not exist yet.

- [ ] **Step 3: Implement App Router page, layout, and API route**

Create:
- `src/app/keystatic/[[...params]]/page.tsx` using `makePage(config)` from `@keystatic/next/ui/app`.
- `src/app/keystatic/layout.tsx` returning simple wrapper for isolated admin UI.
- `src/app/api/keystatic/[...params]/route.ts` using `makeRouteHandler({ config })` from `@keystatic/next/route-handler`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scratch/test-keystatic-routes.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/keystatic src/app/api/keystatic scratch/test-keystatic-routes.mjs
git commit -m "feat(keystatic): add App Router page and API route handlers"
```

---

### Task 3: Layout Isolation for `/keystatic` Admin UI

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/WhatsAppFloat.tsx`

**Interfaces:**
- Consumes: Next.js `usePathname()`
- Produces: Conditional rendering that returns `null` when `pathname?.startsWith("/keystatic")`.

- [ ] **Step 1: Write test script to verify component isolation logic**

Create `scratch/test-layout-isolation.mjs` checking that Header, Footer, and WhatsAppFloat inspect `pathname` and return `null` on `/keystatic`.

- [ ] **Step 2: Run test to verify failure**

Run: `node scratch/test-layout-isolation.mjs`
Expected: FAIL (Footer does not yet check pathname).

- [ ] **Step 3: Update `Header.tsx`, `Footer.tsx`, and `WhatsAppFloat.tsx`**

Add `usePathname()` check at the top of each component:
```tsx
const pathname = usePathname();
if (pathname?.startsWith("/keystatic")) return null;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scratch/test-layout-isolation.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx src/components/WhatsAppFloat.tsx
git commit -m "feat(ui): hide site chrome on /keystatic admin route"
```

---

### Task 4: Content Seeding & Content Reader Service

**Files:**
- Create: `scripts/seed-keystatic-content.mjs`
- Create: `src/lib/keystatic.ts`
- Create initial data files under `src/content/`:
  - `src/content/espetaculos/*.json`
  - `src/content/praticas-formativas/*.json`
  - `src/content/equipe/*.json`
  - `src/content/historico/*.json`
  - `src/content/configuracoes.json`

**Interfaces:**
- Consumes: `src/data/siteData.ts`, `keystatic.config.ts`
- Produces: Typed helper functions in `src/lib/keystatic.ts`:
  - `getShows(): Promise<Show[]>`
  - `getWorkshops(): Promise<Workshop[]>`
  - `getTeamMembers(): Promise<TeamMember[]>`
  - `getTimeline(): Promise<HistoryMilestone[]>`
  - `getSiteConfig(): Promise<SiteConfig>`

- [ ] **Step 1: Write test script for content reader service**

Create `scratch/test-reader.mjs` verifying that `getShows()`, `getWorkshops()`, `getTeamMembers()`, `getTimeline()`, and `getSiteConfig()` return valid arrays and objects matching `siteData.ts` types.

- [ ] **Step 2: Run test to verify it fails**

Run: `node scratch/test-reader.mjs`
Expected: FAIL (`src/lib/keystatic.ts` missing).

- [ ] **Step 3: Implement seeding script and execute it**

Write `scripts/seed-keystatic-content.mjs` to convert `siteData.ts` items into individual JSON files in `src/content/`, then run it.

- [ ] **Step 4: Implement `src/lib/keystatic.ts`**

Implement reader with fallback to `siteData.ts` so all data is guaranteed present even before any CMS edit.

- [ ] **Step 5: Run test to verify it passes**

Run: `node scratch/test-reader.mjs`
Expected: PASS (all functions return seeded data).

- [ ] **Step 6: Commit**

```bash
git add scripts/seed-keystatic-content.mjs src/content src/lib/keystatic.ts scratch/test-reader.mjs
git commit -m "feat(keystatic): seed initial content and implement typed reader service"
```

---

### Task 5: Connect Public Pages to Keystatic Reader

**Files:**
- Modify: `src/app/espetaculos/page.tsx`
- Modify: `src/app/praticas-formativas/page.tsx`
- Modify: `src/app/quem-somos/page.tsx`

**Interfaces:**
- Consumes: `getShows()`, `getWorkshops()`, `getTeamMembers()`, `getTimeline()` from `src/lib/keystatic.ts`.
- Produces: Dynamic Server Components rendering content loaded from Keystatic with automatic fallback.

- [ ] **Step 1: Write test script to verify page integrations**

Create `scratch/test-pages-integration.mjs` testing that pages import and call reader functions.

- [ ] **Step 2: Run test to verify failure**

Run: `node scratch/test-pages-integration.mjs`
Expected: FAIL (pages still import static constant arrays directly).

- [ ] **Step 3: Update `espetaculos/page.tsx`, `praticas-formativas/page.tsx`, and `quem-somos/page.tsx`**

Make pages async Server Components, call `await getShows()`, `await getWorkshops()`, `await getTeamMembers()`, `await getTimeline()`, and pass to existing presentation components.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scratch/test-pages-integration.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/espetaculos/page.tsx src/app/praticas-formativas/page.tsx src/app/quem-somos/page.tsx
git commit -m "feat(pages): connect espetaculos, praticas, and quem-somos to Keystatic reader"
```

---

### Task 6: End-to-End Build Verification & Deployment Readiness

**Files:**
- Test: Full Next.js build and lint suite

- [ ] **Step 1: Run linter**

Run: `npm run lint`
Expected: 0 errors, 0 warnings.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Successful Next.js build generating `/keystatic`, `/espetaculos`, `/praticas-formativas`, `/quem-somos`, `/api/keystatic/[...params]`, and all other routes.

- [ ] **Step 3: Cleanup scratch test files**

Remove temporary test scripts from `scratch/`.

- [ ] **Step 4: Commit and push**

```bash
git add .
git commit -m "chore: complete Keystatic CMS integration with zero-downtime fallback"
git push origin main
```
