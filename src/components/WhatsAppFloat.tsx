"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/5519992510921?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Coletivo%20Passarinha."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp (19) 99251-0921"
        className="flex items-center gap-2.5 bg-[#0E7339] hover:bg-[#0B5A2D] text-white px-4 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 border border-white/30"
      >
        <div className="relative">
          <MessageCircle aria-hidden="true" className="w-6 h-6 fill-white stroke-[#0E7339]" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-medium leading-none text-white/90">Fale Conosco</span>
          <span className="text-xs font-black tracking-wide leading-tight text-white">(19) 99251-0921</span>
        </div>
      </a>
    </aside>
  );
}
