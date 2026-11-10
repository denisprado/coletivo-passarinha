"use client";

import React, { useState } from "react";
import { Hammer } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  targetId: string | null;
  tag: string;
}

const OPTIONS: FilterOption[] = [
  { id: "todas", label: "Todas as Práticas (3)", targetId: null, tag: "Geral" },
  {
    id: "jogar-dentro",
    label: "Ateliê Jogar Dentro",
    targetId: "atelie-jogar-dentro",
    tag: "Reaproveitamento",
  },
  {
    id: "ecobrinquedoteca",
    label: "Ecobrinquedoteca",
    targetId: "ecobrinquedoteca-jogar-dentro",
    tag: "Brincar Livre",
  },
  {
    id: "pandeiros",
    label: "Orquestra de Pandeiros",
    targetId: "orquestra-de-pandeiros",
    tag: "Música Intergeracional",
  },
];

export default function PraticasFilterBar() {
  const [active, setActive] = useState("todas");

  const handleSelect = (opt: FilterOption) => {
    setActive(opt.id);
    if (opt.targetId && typeof window !== "undefined") {
      const el = document.getElementById(opt.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
      <div className="bg-[#FDF6E4] p-3.5 sm:p-4 rounded-2xl border-2 border-[#3A1D40]/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E91C47] tracking-wider shrink-0">
          <Hammer className="w-4 h-4 text-[#FDBC2E]" />
          <span>Filtro de Ações Formativas:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {OPTIONS.map((opt) => {
            const isSelected = active === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`text-xs font-black tracking-wide px-3.5 py-1.5 rounded-xl transition-all duration-200 border flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#3A1D40] text-[#FDBC2E] border-[#3A1D40] shadow-sm scale-[1.02]"
                    : "bg-white/80 hover:bg-[#FDBC2E]/30 text-[#3A1D40] border-[#3A1D40]/20 hover:border-[#3A1D40]/40"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected
                      ? "bg-[#FDBC2E] text-[#3A1D40]"
                      : "bg-[#3A1D40]/10 text-[#3A1D40]/80"
                  }`}
                >
                  {opt.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
