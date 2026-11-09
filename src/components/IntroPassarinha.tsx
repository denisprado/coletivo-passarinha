"use client";

import React, { useState, useEffect } from "react";
import PassarinhaAnimada from "./PassarinhaAnimada";
import BrushBanner from "./BrushBanner";
import { ArrowRight, Sparkles } from "lucide-react";

interface IntroPassarinhaProps {
  autoDismissMs?: number;
}

export default function IntroPassarinha({
  autoDismissMs = 2800,
}: IntroPassarinhaProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verifica se o visitante já viu a introdução nesta sessão
    const alreadySeen = sessionStorage.getItem("passarinha_intro_seen");

    // Para teste e primeira visualização: exibe a intro se não vista
    if (!alreadySeen) {
      setVisible(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoDismissMs);

      return () => clearTimeout(timer);
    }

    // Permite escutar evento customizado para reexecutar a animação a qualquer momento
    const handleReplay = () => {
      setVisible(true);
      setFading(false);
      setTimeout(() => {
        handleDismiss();
      }, autoDismissMs);
    };

    window.addEventListener("replay-passarinha-intro", handleReplay);
    return () =>
      window.removeEventListener("replay-passarinha-intro", handleReplay);
  }, [autoDismissMs]);

  const handleDismiss = () => {
    setFading(true);
    try {
      sessionStorage.setItem("passarinha_intro_seen", "true");
    } catch {
      // safe fallback se sessionStorage estiver bloqueado
    }
    setTimeout(() => {
      setVisible(false);
    }, 700);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] canvas-amarelo flex flex-col items-center justify-center p-6 cursor-pointer select-none transition-opacity duration-700 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Animação de abertura — Clique para entrar no site"
    >
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
        {/* Passarinha batendo asas em Stop-Motion */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <PassarinhaAnimada size="hero" flapping={true} />
        </div>

        {/* Letreiro e Identidade */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#532E5A] leading-tight">
            Coletivo Passarinha
          </h1>
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
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-bold text-[#532E5A]/70 uppercase tracking-widest">
            Clique em qualquer lugar para pular
          </span>
        </div>
      </div>
    </div>
  );
}
