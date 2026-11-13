"use client";

import React, { useEffect, useState } from "react";
import { Film } from "lucide-react";

export interface AudiovisualSubmenuItem {
  id: string;
  label: string;
}

const DEFAULT_ITEMS: AudiovisualSubmenuItem[] = [
  {
    id: "a-caixa-magica",
    label: "A Caixa Mágica",
  },
  {
    id: "fora-de-onde",
    label: "Fora de onde?",
  },
  {
    id: "o-que-se-passa-no-formigueiro",
    label: "O que se passa no formigueiro?",
  },
];

export default function AudiovisualFilterBar({
  items = DEFAULT_ITEMS,
}: {
  items?: AudiovisualSubmenuItem[];
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

  const handleSelect = (item: AudiovisualSubmenuItem) => {
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
      aria-label="Submenu de Produções Audiovisuais"
      className="sticky top-20 z-40 w-full bg-[#241128]/95 backdrop-blur-md border-b-4 border-[#3A1D40] shadow-lg py-2.5 px-3 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
        <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-black uppercase text-[#FDBC2E] tracking-wider mr-1 shrink-0">
          <Film className="w-3.5 h-3.5 text-[#FDBC2E]" />
          <span>Produções:</span>
        </span>

        {items.map((item) => {
          const isSelected = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-current={isSelected ? "location" : undefined}
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
