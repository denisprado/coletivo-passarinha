"use client";

import React from "react";

export interface FilterCategory {
  id: string;
  label: string;
  targetId?: string; // ID da âncora para scroll opcional
  count?: number;
}

interface CategoryFilterProps {
  categories: FilterCategory[];
  activeId: string;
  onSelect: (id: string) => void;
  title?: string;
  className?: string;
}

export default function CategoryFilter({
  categories,
  activeId,
  onSelect,
  title = "Filtrar por formato:",
  className = "",
}: CategoryFilterProps) {
  const handleClick = (cat: FilterCategory) => {
    onSelect(cat.id);
    if (cat.targetId && typeof window !== "undefined") {
      const el = document.getElementById(cat.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={`w-full max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3.5 rounded-2xl bg-[#FDF6E4] border-2 border-[#3A1D40]/25 shadow-md ${className}`}
    >
      {title && (
        <span className="text-xs font-black uppercase tracking-wider text-[#8C0A26] shrink-0">
          {title}
        </span>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleClick(cat)}
              className={`text-xs font-black tracking-wide px-3.5 py-1.5 rounded-xl transition-all duration-200 border ${
                isActive
                  ? "bg-[#3A1D40] text-[#FDBC2E] border-[#3A1D40] shadow-sm scale-[1.03]"
                  : "bg-white/80 hover:bg-[#FDBC2E]/40 text-[#3A1D40] border-[#3A1D40]/20 hover:border-[#3A1D40]/40"
              }`}
            >
              {cat.label}
              {cat.count !== undefined && (
                <span
                  className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[#FDBC2E] text-[#3A1D40]"
                      : "bg-[#3A1D40]/10 text-[#3A1D40]"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
