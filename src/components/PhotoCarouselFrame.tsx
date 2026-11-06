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
}

export default function PhotoCarouselFrame({
  photos,
  badgeLogoSrc,
  badgeLogoAlt = "",
  intervalMs = 4000,
  aspectClass = "aspect-[4/3]",
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
    <div className="relative w-full bg-white rounded-[32px] sm:rounded-[44px] p-2.5 sm:p-3.5 shadow-[0_20px_45px_rgba(45,18,50,0.26)] group">
      <div
        className={`relative w-full ${aspectClass} rounded-[24px] sm:rounded-[34px] overflow-hidden bg-[#FDF6E4]`}
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3A1D40]/90 via-[#3A1D40]/40 to-transparent pt-10 pb-3.5 px-5">
                <p className="text-xs sm:text-sm font-bold text-[#FDF6E4] tracking-wide drop-shadow">
                  {photo.caption}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Selo de Logo Opcional no Canto Superior */}
        {badgeLogoSrc && (
          <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl shadow-md border border-[#FDBC2E]/50 w-28 h-12">
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

        {/* Setas e indicadores quando houver mais de 1 foto */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center shadow-md opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center shadow-md opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute top-3 right-3.5 z-20 flex items-center gap-1.5 bg-[#3A1D40]/55 backdrop-blur-xs px-2.5 py-1 rounded-full max-w-[75%] overflow-hidden">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Ir para foto ${idx + 1}`}
                  className={`h-2 rounded-full transition-all shrink-0 ${
                    idx === current
                      ? "w-5 bg-[#FDBC2E]"
                      : "w-2 bg-white/75 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
