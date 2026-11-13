"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  Accessibility,
  Contrast,
  Type,
  PauseCircle,
  Link2,
  ScanLine,
  RotateCcw,
  X,
} from "lucide-react";

interface A11yPreferences {
  fontScale: 100 | 112 | 125;
  highContrast: boolean;
  dyslexicFont: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
  readingGuide: boolean;
}

const DEFAULT_PREFS: A11yPreferences = {
  fontScale: 100,
  highContrast: false,
  dyslexicFont: false,
  reducedMotion: false,
  highlightLinks: false,
  readingGuide: false,
};

const STORAGE_KEY = "passarinha_a11y_prefs";

function applyPrefsToDocument(prefs: A11yPreferences) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;

  html.style.fontSize = `${prefs.fontScale}%`;

  if (prefs.highContrast) {
    html.setAttribute("data-a11y-contrast", "high");
  } else {
    html.removeAttribute("data-a11y-contrast");
  }

  if (prefs.dyslexicFont) {
    html.setAttribute("data-a11y-font", "dyslexic");
  } else {
    html.removeAttribute("data-a11y-font");
  }

  if (prefs.reducedMotion) {
    html.setAttribute("data-a11y-motion", "reduced");
  } else {
    html.removeAttribute("data-a11y-motion");
  }

  if (prefs.highlightLinks) {
    html.setAttribute("data-a11y-links", "highlight");
  } else {
    html.removeAttribute("data-a11y-links");
  }
}

export default function AccessibilityToolbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPreferences>(DEFAULT_PREFS);
  const [guideY, setGuideY] = useState<number>(240);

  const updatePrefs = useCallback((next: A11yPreferences) => {
    setPrefs(next);
    applyPrefsToDocument(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // safe fallback
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) } as A11yPreferences;
          setPrefs(parsed);
          applyPrefsToDocument(parsed);
        }
      } catch {
        // ignore invalid storage
      }
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!prefs.readingGuide) return;
    const handlePointerMove = (e: PointerEvent) => {
      setGuideY(e.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefs.readingGuide]);

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }

  const hasActiveCustomization =
    prefs.fontScale !== 100 ||
    prefs.highContrast ||
    prefs.dyslexicFont ||
    prefs.reducedMotion ||
    prefs.highlightLinks ||
    prefs.readingGuide;

  return (
    <>
      {/* Régua / Guia Horizontal de Leitura */}
      {prefs.readingGuide && (
        <div
          aria-hidden="true"
          style={{ top: `${Math.max(0, guideY - 18)}px` }}
          className="fixed inset-x-0 h-9 pointer-events-none z-[90] bg-[#FDBC2E]/25 border-y-2 border-[#FDBC2E] shadow-[0_0_20px_rgba(253,188,46,0.35)]"
        />
      )}

      <aside
        aria-label="Ferramentas de Acessibilidade"
        className="fixed bottom-6 left-6 z-50"
      >
        {open && (
          <div
            role="dialog"
            aria-modal="false"
            aria-label="Painel de recursos de acessibilidade"
            className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#241128] text-[#FDF6E4] border-2 border-[#FDBC2E] shadow-2xl p-4 sm:p-5 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#FDBC2E]/25 pb-3">
              <div className="flex items-center gap-2">
                <Accessibility aria-hidden="true" className="w-5 h-5 text-[#FDBC2E]" />
                <h2 className="text-sm font-black uppercase tracking-wider text-[#FDBC2E]">
                  Acessibilidade
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar painel de acessibilidade"
                className="p-1.5 rounded-lg bg-[#3A1D40] text-[#FDBC2E] hover:bg-[#A60F31] hover:text-white transition-colors cursor-pointer"
              >
                <X aria-hidden="true" className="w-4 h-4" />
              </button>
            </div>

            {/* Controle de Tamanho da Fonte */}
            <div className="space-y-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FDBC2E] block">
                Tamanho do Texto ({prefs.fontScale}%)
              </span>
              <div className="grid grid-cols-3 gap-2">
                {([100, 112, 125] as const).map((scale, idx) => {
                  const labels = ["A (100%)", "A+ (112%)", "A++ (125%)"];
                  const active = prefs.fontScale === scale;
                  return (
                    <button
                      key={scale}
                      type="button"
                      aria-pressed={active}
                      onClick={() => updatePrefs({ ...prefs, fontScale: scale })}
                      className={`py-2 px-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                        active
                          ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] shadow-md"
                          : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E]"
                      }`}
                    >
                      {labels[idx]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botões de Modos Assistivos */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                aria-pressed={prefs.highContrast}
                onClick={() =>
                  updatePrefs({ ...prefs, highContrast: !prefs.highContrast })
                }
                className={`p-2.5 rounded-xl text-left border flex flex-col gap-1 transition-all cursor-pointer ${
                  prefs.highContrast
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] font-black"
                    : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E] font-bold"
                }`}
              >
                <Contrast aria-hidden="true" className="w-4 h-4" />
                <span className="text-xs leading-tight">Alto Contraste</span>
              </button>

              <button
                type="button"
                aria-pressed={prefs.dyslexicFont}
                onClick={() =>
                  updatePrefs({ ...prefs, dyslexicFont: !prefs.dyslexicFont })
                }
                className={`p-2.5 rounded-xl text-left border flex flex-col gap-1 transition-all cursor-pointer ${
                  prefs.dyslexicFont
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] font-black"
                    : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E] font-bold"
                }`}
              >
                <Type aria-hidden="true" className="w-4 h-4" />
                <span className="text-xs leading-tight">Fonte Legível</span>
              </button>

              <button
                type="button"
                aria-pressed={prefs.reducedMotion}
                onClick={() =>
                  updatePrefs({ ...prefs, reducedMotion: !prefs.reducedMotion })
                }
                className={`p-2.5 rounded-xl text-left border flex flex-col gap-1 transition-all cursor-pointer ${
                  prefs.reducedMotion
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] font-black"
                    : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E] font-bold"
                }`}
              >
                <PauseCircle aria-hidden="true" className="w-4 h-4" />
                <span className="text-xs leading-tight">Pausar Animações</span>
              </button>

              <button
                type="button"
                aria-pressed={prefs.highlightLinks}
                onClick={() =>
                  updatePrefs({
                    ...prefs,
                    highlightLinks: !prefs.highlightLinks,
                  })
                }
                className={`p-2.5 rounded-xl text-left border flex flex-col gap-1 transition-all cursor-pointer ${
                  prefs.highlightLinks
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] font-black"
                    : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E] font-bold"
                }`}
              >
                <Link2 aria-hidden="true" className="w-4 h-4" />
                <span className="text-xs leading-tight">Destacar Links</span>
              </button>

              <button
                type="button"
                aria-pressed={prefs.readingGuide}
                onClick={() =>
                  updatePrefs({ ...prefs, readingGuide: !prefs.readingGuide })
                }
                className={`col-span-2 p-2.5 rounded-xl text-left border flex items-center gap-2.5 transition-all cursor-pointer ${
                  prefs.readingGuide
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] font-black"
                    : "bg-[#3A1D40] text-[#FDF6E4] border-[#FDBC2E]/30 hover:border-[#FDBC2E] font-bold"
                }`}
              >
                <ScanLine aria-hidden="true" className="w-4 h-4 shrink-0" />
                <span className="text-xs leading-tight">
                  Guia / Régua Horizontal de Leitura
                </span>
              </button>
            </div>

            {/* Restaurar Padrão */}
            <div className="pt-2 border-t border-[#FDBC2E]/25 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#FDF6E4]/80">
                Atalho: Alt + A
              </span>
              <button
                type="button"
                onClick={() => updatePrefs(DEFAULT_PREFS)}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FDBC2E] hover:underline cursor-pointer"
              >
                <RotateCcw aria-hidden="true" className="w-3.5 h-3.5" />
                Restaurar padrão
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Abrir recursos de acessibilidade (Alt + A)"
          title="Acessibilidade (Alt + A)"
          className={`flex items-center gap-2 px-3.5 py-3 rounded-2xl shadow-xl border-2 transition-all cursor-pointer ${
            hasActiveCustomization || open
              ? "bg-[#FDBC2E] text-[#3A1D40] border-[#3A1D40] font-black"
              : "bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] border-[#FDBC2E]/80 font-extrabold"
          }`}
        >
          <Accessibility aria-hidden="true" className="w-6 h-6" />
          <span className="hidden sm:inline text-xs uppercase tracking-wider">
            Acessibilidade
          </span>
        </button>
      </aside>
    </>
  );
}
