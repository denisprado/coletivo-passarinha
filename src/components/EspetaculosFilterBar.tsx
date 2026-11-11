"use client";

import React, { useEffect, useState } from "react";
import { Theater } from "lucide-react";

export interface SubmenuItem {
  id: string;
  label: string;
}

const DEFAULT_ITEMS: SubmenuItem[] = [
  {
    id: "historias-que-a-passarinha-me-contou",
    label: "Histórias que a Passarinha me contou",
  },
  {
    id: "plastico-um-mito-contemporaneo",
    label: "Plástico, um mito contemporâneo",
  },
  {
    id: "historias-do-bosque-dos-guarantas",
    label: "Histórias do Bosque dos Guarantãs",
  },
  {
    id: "show-nascente",
    label: "Show Nascente",
  },
];

export default function EspetaculosFilterBar({
  items = DEFAULT_ITEMS,
}: {
  items?: SubmenuItem[];
}) {
  const [active, setActive] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const handleScroll = () => {
      const offset = 180; // Header (80px) + Submenu (~56px) + margin
      let currentId = items[0].id;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = item.id;
          }
        }
      }
      setActive(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleSelect = (item: SubmenuItem) => {
    setActive(item.id);
    if (typeof window !== "undefined") {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${item.id}`);
      }
    }
  };

  return (
    <nav
      aria-label="Submenu de Espetáculos"
      className="sticky top-20 z-40 w-full bg-[#241128]/95 backdrop-blur-md border-b-4 border-[#3A1D40] shadow-lg py-2.5 px-3 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar">
        <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-black uppercase text-[#FDBC2E] tracking-wider mr-1 shrink-0">
          <Theater className="w-3.5 h-3.5 text-[#FDBC2E]" />
          <span>Espetáculos:</span>
        </span>

        {items.map((item) => {
          const isSelected = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item)}
              className={`text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-xl transition-all duration-200 border shrink-0 cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bg-[#FDBC2E] text-[#3A1D40] border-[#FDBC2E] shadow-md font-black"
                  : "bg-[#3A1D40]/75 hover:bg-[#FDBC2E]/20 text-[#FDF6E4] hover:text-[#FDBC2E] border-[#FDBC2E]/30 hover:border-[#FDBC2E]/70"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
