"use client";

import React, { useState, useEffect, useCallback } from "react";
import PassarinhaAnimada from "./PassarinhaAnimada";
import BrushBanner from "./BrushBanner";
import { ArrowRight } from "lucide-react";

interface IntroPassarinhaProps {
  autoDismissMs?: number;
}

export default function IntroPassarinha({
  autoDismissMs = 2800,
}: IntroPassarinhaProps) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  const handleDismiss = useCallback(() => {
    setFading(true);
    try {
      sessionStorage.setItem("passarinha_intro_seen", "true");
    } catch {
      // safe fallback se sessionStorage estiver bloqueado
    }
    setTimeout(() => {
      setVisible(false);
    }, 700);
  }, []);

  useEffect(() => {
    let dismissTimer: NodeJS.Timeout | null = null;

    const checkTimer = setTimeout(() => {
      let alreadySeen = false;
      try {
        alreadySeen = !!sessionStorage.getItem("passarinha_intro_seen");
      } catch {
        alreadySeen = false;
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          document.documentElement.dataset.a11yMotion === "reduced");

      if (!alreadySeen && !prefersReducedMotion) {
        setVisible(true);
        dismissTimer = setTimeout(() => {
          handleDismiss();
        }, autoDismissMs);
      }
    }, 0);

    // Permite escutar evento customizado para reexecutar a animação a qualquer momento
    const handleReplay = () => {
      setVisible(true);
      setFading(false);
      setTimeout(() => {
        handleDismiss();
      }, autoDismissMs);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("replay-passarinha-intro", handleReplay);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(checkTimer);
      if (dismissTimer) clearTimeout(dismissTimer);
      window.removeEventListener("replay-passarinha-intro", handleReplay);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [autoDismissMs, handleDismiss]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] canvas-amarelo flex flex-col items-center justify-center p-6 cursor-pointer select-none transition-opacity duration-700 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Animação de abertura — Pressione Esc ou clique para entrar no site"
    >
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
        {/* Passarinha batendo asas em Stop-Motion */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <PassarinhaAnimada size="hero" flapping={true} />
        </div>

        {/* Letreiro e Identidade */}
        <div className="space-y-3">
          <p className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
            Coletivo Passarinha
          </p>
          <div className="flex justify-center">
            <BrushBanner color="crimson" shape="wave">
              <span className="text-sm sm:text-base font-bold lowercase tracking-wider text-[#FDBC2E] px-2">
                arte • educação • ambiental
              </span>
            </BrushBanner>
          </div>
        </div>

        {/* Botão de Entrar / Pular */}
        <div className="pt-4 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs sm:text-sm px-6 py-2.5 shadow-xl flex items-center gap-2"
          >
            <span>Entrar no site</span>
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-bold text-[#532E5A]/80 uppercase tracking-widest">
            Clique ou pressione Esc para pular
          </span>
        </div>
      </div>
    </div>
  );
}
