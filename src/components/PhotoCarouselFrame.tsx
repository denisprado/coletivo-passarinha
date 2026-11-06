"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlidePhoto {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
}

interface PhotoCarouselFrameProps {
  photos: SlidePhoto[];
  badgeLogoSrc?: string;
  badgeLogoAlt?: string;
  intervalMs?: number;
  aspectClass?: string;
  showThumbnails?: boolean;
}

export default function PhotoCarouselFrame({
  photos,
  badgeLogoSrc,
  badgeLogoAlt = "",
  intervalMs = 4500,
  aspectClass = "aspect-[4/3]",
  showThumbnails = true,
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
    <div className="w-full space-y-2.5">
      {/* Moldura com cantos levemente arredondados (16px externa / 10px interna) */}
      <div className="relative w-full bg-[#FDF6E4] rounded-2xl p-2 sm:p-2.5 border border-[#3A1D40]/25 shadow-[0_14px_32px_rgba(45,18,50,0.28)] group">
        <div
          className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-[#241128]`}
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
                    ? "object-contain p-2 bg-[#FDF6E4]"
                    : "object-cover"
                } transition-transform duration-700 group-hover:scale-[1.03]`}
              />
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241128]/95 via-[#241128]/55 to-transparent pt-10 pb-3 px-4">
                  <p className="text-xs sm:text-sm font-bold text-[#FDF6E4] tracking-wide drop-shadow">
                    {photo.caption}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Selo de Logo Opcional no Canto Superior Esquerdo */}
          {badgeLogoSrc && (
            <div className="absolute top-2.5 left-2.5 z-20 bg-[#FDF6E4]/95 px-2.5 py-1 rounded-lg shadow-md border border-[#3A1D40]/20 w-28 h-12">
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

          {/* Setas com arredondamento leve */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-[#FDF6E4]/95 hover:bg-[#FDBC2E] text-[#3A1D40] border border-[#3A1D40]/25 flex items-center justify-center shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima foto"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-[#FDF6E4]/95 hover:bg-[#FDBC2E] text-[#3A1D40] border border-[#3A1D40]/25 flex items-center justify-center shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Faixa de Miniaturas Abertas logo abaixo */}
      {showThumbnails && photos.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 sm:gap-2">
          {photos.slice(0, 6).map((thumb, idx) => (
            <button
              key={thumb.src + idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Ver foto: ${thumb.alt}`}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                idx === current
                  ? "border-[#FDBC2E] ring-2 ring-[#3A1D40]/60 scale-[1.03] z-10"
                  : "border-[#3A1D40]/30 opacity-75 hover:opacity-100"
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
