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
    <div className="w-full max-w-full mx-auto px-1 sm:px-2">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase text-[#FDBC2E] tracking-wider">
          <Hammer className="w-4 h-4 text-[#FDBC2E]" />
          <span>Filtro de Ações Formativas:</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {OPTIONS.map((opt) => {
            const isSelected = active === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`text-[11px] sm:text-xs font-bold px-2.5 py-1.5 rounded-xl transition-all duration-200 border flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] shadow-md scale-[1.02]"
                    : "bg-[#241128]/70 hover:bg-[#FDBC2E]/20 text-[#FDF6E4] hover:text-[#FDBC2E] border-[#FDBC2E]/30 hover:border-[#FDBC2E]/70"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[9px] sm:text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-md transition-colors ${
                    isSelected
                      ? "bg-[#3A1D40] text-[#FDBC2E]"
                      : "bg-[#FDBC2E]/20 text-[#FDBC2E]"
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
