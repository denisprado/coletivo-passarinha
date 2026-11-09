"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlidePhoto {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
  position?: string;
}

interface PhotoCarouselFrameProps {
  photos: SlidePhoto[];
  badgeLogoSrc?: string;
  badgeLogoAlt?: string;
  intervalMs?: number;
  aspectClass?: string;
  showThumbnails?: boolean;
  radiusVariant?: 1 | 2 | 3 | 4;
}

const ORGANIC_CLASSES: Record<1 | 2 | 3 | 4, string> = {
  1: "foto-organica-1",
  2: "foto-organica-2",
  3: "foto-organica-3",
  4: "foto-organica-4",
};

const THUMB_RADII = [
  "rounded-[18px_6px_18px_6px]",
  "rounded-[6px_18px_6px_18px]",
  "rounded-[18px_8px_12px_6px]",
  "rounded-[8px_18px_6px_12px]",
];

export default function PhotoCarouselFrame({
  photos,
  badgeLogoSrc,
  badgeLogoAlt = "",
  intervalMs = 4500,
  aspectClass = "aspect-[4/3]",
  showThumbnails = true,
  radiusVariant = 1,
}: PhotoCarouselFrameProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [photos.length, intervalMs]);

  if (!photos.length) return null;

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <div className="w-full space-y-3">
      {/* Imagem sem borda, com border-radius orgânico assimétrico estilo Figma */}
      <div
        className={`relative w-full ${aspectClass} ${ORGANIC_CLASSES[radiusVariant]} bg-[#241128] group`}
      >
        {photos.map((photo, idx) => (
          <div
            key={photo.src + idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`${
                photo.fit === "contain"
                  ? "object-contain p-3 bg-[#FDF6E4]"
                  : `object-cover ${photo.position || "object-center"}`
              } transition-transform duration-700 group-hover:scale-[1.03]`}
            />
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B0B1E]/95 via-[#1B0B1E]/60 to-transparent pt-11 pb-3.5 pl-6 pr-6 sm:pl-7 sm:pr-7 sm:pb-4">
                <p className="text-xs sm:text-sm font-bold text-[#FDF6E4] tracking-wide drop-shadow line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Selo de Logo Opcional no Canto Superior Direito (para não colidir com a curva ampla superior esquerda) */}
        {badgeLogoSrc && (
          <div className="absolute top-3 right-3 z-20 bg-[#FDF6E4]/95 px-2.5 py-1 rounded-xl shadow-md w-28 h-12">
            <div className="relative w-full h-full">
              <Image
                src={badgeLogoSrc}
                alt={badgeLogoAlt}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Setas discretas */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-[#FDF6E4]/90 hover:bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-[#FDF6E4]/90 hover:bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Faixa de Miniaturas Sem Bordas e com Border-Radius Orgânicos */}
      {showThumbnails && photos.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {photos.slice(0, 6).map((thumb, idx) => (
            <button
              key={thumb.src + idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Ver foto: ${thumb.alt}`}
              className={`relative aspect-[4/3] ${
                THUMB_RADII[idx % THUMB_RADII.length]
              } overflow-hidden transition-all shadow-md ${
                idx === current
                  ? "scale-[1.05] opacity-100 z-10 shadow-lg"
                  : "opacity-65 hover:opacity-100"
              }`}
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                sizes="90px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
