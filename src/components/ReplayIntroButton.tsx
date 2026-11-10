"use client";

import React from "react";

export default function ReplayIntroButton() {
  const handleReplay = () => {
    try {
      sessionStorage.removeItem("passarinha_intro_seen");
    } catch {
      // safe fallback
    }
    window.dispatchEvent(new Event("replay-passarinha-intro"));
  };

  return (
    <button
      type="button"
      onClick={handleReplay}
      className="text-xs font-bold text-[#FDBC2E]/80 hover:text-[#FDBC2E] underline underline-offset-4 cursor-pointer"
    >
      ✨ Rever animação inicial de voo da Passarinha
    </button>
  );
}
