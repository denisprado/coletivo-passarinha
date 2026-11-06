"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/5519992510921?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Coletivo%20Passarinha."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp (19) 992510921"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" />
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
