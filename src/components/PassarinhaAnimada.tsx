"use client";

import React from "react";
import Image from "next/image";

interface PassarinhaAnimadaProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  flapping?: boolean;
  showTrail?: boolean;
  className?: string;
  onClick?: () => void;
}

const SIZE_CLASSES = {
  sm: "w-16 h-14",
  md: "w-28 h-24",
  lg: "w-40 h-36",
  xl: "w-56 h-48",
  hero: "w-64 sm:w-80 h-56 sm:h-72",
};

export default function PassarinhaAnimada({
  size = "md",
  flapping = true,
  showTrail = true,
  className = "",
  onClick,
}: PassarinhaAnimadaProps) {
  const containerSize = SIZE_CLASSES[size] || size;

  return (
    <div
      onClick={onClick}
      className={`relative inline-block select-none ${containerSize} ${
        flapping ? "anim-voo-passarinha" : ""
      } ${className}`}
      style={{ filter: "drop-shadow(0 8px 18px rgba(45, 18, 50, 0.22))" }}
    >
      {/* 1. Camada de Rastro / Vibração de Risografia (Stop-Motion Trail) */}
      {flapping && showTrail && (
        <div className="absolute inset-0 z-0 anim-asa-fantasma pointer-events-none">
          <Image
            src="/brand/passarinha-asa.webp"
            alt=""
            fill
            sizes="320px"
            className="object-contain"
            style={{
              filter: "hue-rotate(290deg) saturate(1.8) brightness(0.9)",
            }}
          />
        </div>
      )}

      {/* 2. Corpo, Cabeça e Cauda (Base Estável) */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/brand/passarinha-corpo.webp"
          alt="Coletivo Passarinha"
          fill
          sizes="320px"
          className="object-contain"
          priority
        />
      </div>

      {/* 3. Asa Batendo em Stop-Motion (Efeito Cordel) */}
      <div
        className={`absolute inset-0 z-20 ${
          flapping ? "anim-asa-cordel" : ""
        }`}
      >
        <Image
          src="/brand/passarinha-asa.webp"
          alt=""
          fill
          sizes="320px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
