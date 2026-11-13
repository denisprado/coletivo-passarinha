import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const failures = [];

function readFile(relPath) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    failures.push(`[MISSING FILE] ${relPath}`);
    return "";
  }
  return fs.readFileSync(fullPath, "utf8");
}

function assertMatch(relPath, content, regex, message) {
  if (!regex.test(content)) {
    failures.push(`[${relPath}] ${message}`);
  }
}

function assertNotMatch(relPath, content, regex, message) {
  if (regex.test(content)) {
    failures.push(`[${relPath}] ${message}`);
  }
}

// 1. Check globals.css
const globalsCss = readFile("src/app/globals.css");
assertMatch("src/app/globals.css", globalsCss, /\.skip-link\b/, "Missing .skip-link class");
assertMatch("src/app/globals.css", globalsCss, /:focus-visible\b/, "Missing global :focus-visible style");
assertMatch("src/app/globals.css", globalsCss, /prefers-reduced-motion:\s*reduce/, "Missing @media (prefers-reduced-motion: reduce)");
assertMatch("src/app/globals.css", globalsCss, /data-a11y-contrast="high"/, "Missing high contrast mode styles");
assertMatch("src/app/globals.css", globalsCss, /html\[data-a11y-contrast="high"\][\s\S]*strong,\s*b,\s*em/, "High contrast mode must override strong/b/em emphasis tags");
assertMatch("src/app/globals.css", globalsCss, /\.canvas-vermelho[\s\S]*linear-gradient/, ".canvas-vermelho must include contrast wash overlay");
assertMatch("src/app/globals.css", globalsCss, /\.canvas-laranja[\s\S]*linear-gradient/, ".canvas-laranja must include contrast wash overlay");
assertMatch("src/app/globals.css", globalsCss, /data-a11y-font="dyslexic"/, "Missing dyslexic/readable font mode styles");
assertMatch("src/app/globals.css", globalsCss, /data-a11y-links="highlight"/, "Missing highlight links mode styles");
assertMatch("src/app/globals.css", globalsCss, /data-a11y-motion="reduced"/, "Missing reduced motion attribute styles");

// 2. Check layout.tsx
const layoutTsx = readFile("src/app/layout.tsx");
assertMatch("src/app/layout.tsx", layoutTsx, /href="#conteudo-principal"/, "Missing Skip Link to #conteudo-principal");
assertMatch("src/app/layout.tsx", layoutTsx, /AccessibilityToolbar/, "Missing <AccessibilityToolbar /> in RootLayout");
assertMatch("src/app/layout.tsx", layoutTsx, /VLibrasWidget/, "Missing <VLibrasWidget /> in RootLayout");

// 3. Check all 8 public pages for <main id="conteudo-principal"
const publicPages = [
  "src/app/page.tsx",
  "src/app/quem-somos/page.tsx",
  "src/app/quintal-garatuja/page.tsx",
  "src/app/aru/page.tsx",
  "src/app/espetaculos/page.tsx",
  "src/app/praticas-formativas/page.tsx",
  "src/app/audiovisual/page.tsx",
  "src/app/contato/page.tsx",
];

for (const pagePath of publicPages) {
  const pageContent = readFile(pagePath);
  assertMatch(
    pagePath,
    pageContent,
    /<main[^>]*id="conteudo-principal"/,
    'Missing id="conteudo-principal" on <main>'
  );
}

// 4. Check Header.tsx & Footer.tsx
const headerTsx = readFile("src/components/Header.tsx");
assertMatch("src/components/Header.tsx", headerTsx, /aria-label="Navegação principal"/, "Missing aria-label on main <nav>");
assertMatch("src/components/Header.tsx", headerTsx, /aria-expanded=/, "Missing aria-expanded on dropdown/mobile buttons");
assertMatch("src/components/Header.tsx", headerTsx, /aria-haspopup=/, "Missing aria-haspopup on submenu triggers");
assertMatch("src/components/Header.tsx", headerTsx, /aria-current=/, "Missing aria-current on active navigation links");

const footerTsx = readFile("src/components/Footer.tsx");
assertMatch("src/components/Footer.tsx", footerTsx, /aria-label="Navegação do rodapé"/, "Missing aria-label on footer <nav>");

// 5. Check Sticky Submenu Filter Bars
for (const barPath of [
  "src/components/EspetaculosFilterBar.tsx",
  "src/components/PraticasFilterBar.tsx",
  "src/components/AudiovisualFilterBar.tsx",
]) {
  const barContent = readFile(barPath);
  assertMatch(barPath, barContent, /aria-current=/, "Missing aria-current on active submenu button");
}

// 6. Check Color Contrast Across Pages & Components
function walkTsxFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      results = results.concat(walkTsxFiles(rel));
    } else if (/\.tsx?$/.test(entry.name)) {
      results.push(rel);
    }
  }
  return results;
}

for (const file of walkTsxFiles("src")) {
  const content = readFile(file);
  assertNotMatch(file, content, /#25D366/i, "Low-contrast WhatsApp green #25D366 must be replaced with accessible #0E7339");
  assertNotMatch(file, content, /#128C47/i, "#128C47 fails normal-text AA on white/cream; upgrade to #0E7339");
}

const aruPageTsx = readFile("src/app/aru/page.tsx");
assertNotMatch("src/app/aru/page.tsx", aruPageTsx, /bg-\[#F79335\][^"]*text-white/, "bg-[#F79335] with text-white fails contrast (2.29:1); use dark text-[#241128]");

const brushBannerTsx = readFile("src/components/BrushBanner.tsx");
assertNotMatch("src/components/BrushBanner.tsx", brushBannerTsx, /crimson:\s*["']#E91C47["']/i, "BrushBanner crimson fill must be darkened (#A60F31) for AA contrast with #FDBC2E");

const docRendererTsx = readFile("src/components/CustomDocumentRenderer.tsx");
assertNotMatch("src/components/CustomDocumentRenderer.tsx", docRendererTsx, /text-\[#E91C47\]/i, "CustomDocumentRenderer must use high-contrast crimson (#8C0A26 / #6B071C) on light/yellow themes");

const contatoFormTsx = readFile("src/components/ContatoForm.tsx");
assertNotMatch("src/components/ContatoForm.tsx", contatoFormTsx, /<label\s+className=/, "Found orphaned <label> without htmlFor");
assertMatch("src/components/ContatoForm.tsx", contatoFormTsx, /htmlFor="contato-nome"/, "Missing htmlFor='contato-nome'");
assertMatch("src/components/ContatoForm.tsx", contatoFormTsx, /role="alert"/, "Missing role='alert' for validation errors");
assertMatch("src/components/ContatoForm.tsx", contatoFormTsx, /role="status"/, "Missing role='status' for submission confirmation");
assertNotMatch("src/components/ContatoForm.tsx", contatoFormTsx, /\balert\s*\(/, "Should not use blocking window.alert()");

// 7. Check PhotoCarouselFrame, PhotoMosaic, IntroPassarinha
const carouselTsx = readFile("src/components/PhotoCarouselFrame.tsx");
assertMatch("src/components/PhotoCarouselFrame.tsx", carouselTsx, /aria-roledescription="carrossel"/, "Missing aria-roledescription='carrossel'");
assertMatch("src/components/PhotoCarouselFrame.tsx", carouselTsx, /aria-hidden=/, "Missing aria-hidden on inactive slides");
assertMatch("src/components/PhotoCarouselFrame.tsx", carouselTsx, /Pausar carrossel|Reproduzir carrossel/, "Missing Pause/Play button on carousel");

const mosaicTsx = readFile("src/components/PhotoMosaic.tsx");
assertMatch("src/components/PhotoMosaic.tsx", mosaicTsx, /Ampliar foto/, "Missing descriptive aria-label on PhotoMosaic tile buttons");

const introTsx = readFile("src/components/IntroPassarinha.tsx");
assertNotMatch("src/components/IntroPassarinha.tsx", introTsx, /<h1\b/, "IntroPassarinha should not render a duplicate <h1>");
assertMatch("src/components/IntroPassarinha.tsx", introTsx, /Escape/, "IntroPassarinha should close on Escape key");

// 8. Check AccessibilityToolbar.tsx & VLibrasWidget.tsx
const toolbarTsx = readFile("src/components/AccessibilityToolbar.tsx");
assertMatch("src/components/AccessibilityToolbar.tsx", toolbarTsx, /passarinha_a11y_prefs/, "Missing localStorage persistence in AccessibilityToolbar");
assertMatch("src/components/AccessibilityToolbar.tsx", toolbarTsx, /Alto Contraste/, "Missing Alto Contraste toggle in AccessibilityToolbar");

const vlibrasTsx = readFile("src/components/VLibrasWidget.tsx");
assertMatch("src/components/VLibrasWidget.tsx", vlibrasTsx, /vlibras-plugin\.js/, "Missing official VLibras plugin script in VLibrasWidget");

if (failures.length > 0) {
  console.error(`\n❌ Accessibility Audit Failed with ${failures.length} issue(s):`);
  for (const f of failures) {
    console.error(`  - ${f}`);
  }
  process.exit(1);
} else {
  console.log("\n✅ Accessibility Audit Passed! All 8 pages and components meet WCAG 2.1 AA & eMAG checks.");
}
