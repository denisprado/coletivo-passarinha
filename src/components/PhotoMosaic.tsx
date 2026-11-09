"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { SlidePhoto } from "./PhotoCarouselFrame";

interface PhotoMosaicProps {
  photos: SlidePhoto[];
  variant?: "editorial" | "grid" | "triptych";
  frameTheme?: "cream" | "dark" | "yellow";
}

const ORGANIC_RADIUS_CLASSES = [
  "foto-organica-1",
  "foto-organica-2",
  "foto-organica-3",
  "foto-organica-4",
];

export default function PhotoMosaic({
  photos,
  variant = "grid",
}: PhotoMosaicProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null));
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) =>
          i !== null ? (i - 1 + photos.length) % photos.length : null
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, photos.length]);

  if (!photos || photos.length === 0) return null;

  const renderTile = (
    photo: SlidePhoto,
    idx: number,
    aspectClass: string,
    extraClass = ""
  ) => {
    const radiusClass =
      ORGANIC_RADIUS_CLASSES[idx % ORGANIC_RADIUS_CLASSES.length];

    return (
      <button
        key={photo.src + idx}
        type="button"
        onClick={() => setLightboxIdx(idx)}
        className={`group relative block w-full text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${radiusClass} ${extraClass}`}
      >
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-[#241128]`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`${
              photo.fit === "contain"
                ? "object-contain p-3 bg-[#FDF6E4]"
                : "object-cover"
            } transition-transform duration-500 group-hover:scale-105`}
          />

          {/* Ícone discreto de ampliar no canto */}
          <div className="absolute top-3 right-3 z-10 bg-[#3A1D40]/85 text-[#FDBC2E] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-4 h-4" />
          </div>

          {/* Legenda na base da foto */}
          {photo.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241128]/95 via-[#241128]/65 to-transparent pt-9 pb-3 px-4">
              <p className="text-xs font-bold text-[#FDF6E4] leading-snug drop-shadow">
                {photo.caption}
              </p>
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <>
      {variant === "triptych" && photos.length >= 3 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <div className="md:col-span-7">
            {renderTile(photos[0], 0, "aspect-[16/11] h-full")}
          </div>
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-5 sm:gap-6">
            {renderTile(photos[1], 1, "aspect-[16/10]")}
            {renderTile(photos[2], 2, "aspect-[16/10]")}
          </div>
          {photos.length > 3 && (
            <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
              {photos.slice(3).map((p, i) =>
                renderTile(p, i + 3, "aspect-[4/3]")
              )}
            </div>
          )}
        </div>
      ) : variant === "editorial" && photos.length >= 4 ? (
        <div className="space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            <div className="md:col-span-7">
              {renderTile(photos[0], 0, "aspect-[16/10]")}
            </div>
            <div className="md:col-span-5">
              {renderTile(photos[1], 1, "aspect-[16/10] md:aspect-[4/3] h-full")}
            </div>
          </div>
          <div
            className={`grid grid-cols-2 ${
              photos.length - 2 >= 4
                ? "sm:grid-cols-4"
                : photos.length - 2 === 3
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2"
            } gap-5 sm:gap-6`}
          >
            {photos.slice(2).map((p, i) =>
              renderTile(
                p,
                i + 2,
                p.fit === "contain" ? "aspect-[3/4]" : "aspect-[4/3]"
              )
            )}
          </div>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 ${
            photos.length === 1
              ? "max-w-xl mx-auto"
              : photos.length === 2
              ? "sm:grid-cols-2"
              : photos.length === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-2 lg:grid-cols-3"
          } gap-5 sm:gap-6`}
        >
          {photos.map((p, i) =>
            renderTile(
              p,
              i,
              p.fit === "contain" ? "aspect-[4/4]" : "aspect-[4/3]"
            )
          )}
        </div>
      )}

      {/* Lightbox em Tela Cheia ao Clicar */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1B0B1E]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Fechar imagem"
            className="fixed top-4 right-4 z-50 w-11 h-11 rounded-xl bg-[#E91C47] text-[#FDF6E4] flex items-center justify-center shadow-lg hover:bg-[#FDBC2E] hover:text-[#3A1D40] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(
                    (lightboxIdx - 1 + photos.length) % photos.length
                  );
                }}
                aria-label="Foto anterior"
                className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-xl bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center shadow-lg hover:bg-[#FDF6E4] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx((lightboxIdx + 1) % photos.length);
                }}
                aria-label="Próxima foto"
                className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-xl bg-[#FDBC2E] text-[#3A1D40] flex items-center justify-center shadow-lg hover:bg-[#FDF6E4] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl w-full space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-[#1B0B1E] foto-organica-1 overflow-hidden">
              <Image
                src={photos[lightboxIdx].src}
                alt={photos[lightboxIdx].alt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#FDF6E4] rounded-xl text-[#3A1D40]">
              <p className="text-xs sm:text-sm font-black">
                {photos[lightboxIdx].caption || photos[lightboxIdx].alt}
              </p>
              <span className="text-xs font-extrabold bg-[#3A1D40] text-[#FDBC2E] px-2.5 py-0.5 rounded-md">
                {lightboxIdx + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
