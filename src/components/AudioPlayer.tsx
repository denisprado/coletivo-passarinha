"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Sparkles } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Exemplo de áudio lúdico/acústico royalty-free enquanto o cliente faz upload do arquivo final
  const audioSrc = "https://cdn.freesound.org/previews/415/415804_5121236-lq.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Trata bloqueio de autoplay dos navegadores
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="bg-[#2e6f40] text-white rounded-2xl p-5 shadow-xl border-2 border-[#e5a823]/40 max-w-xl mx-auto">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="flex items-center justify-between gap-4">
        {/* Ícone de Disco/Música girando */}
        <div className="relative shrink-0">
          <div
            className={`w-14 h-14 rounded-full bg-[#e5a823] text-[#22211e] flex items-center justify-center shadow-inner ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "6s" }}
          >
            <Music className="w-7 h-7" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7f4ea] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#c85028]"></span>
            </span>
          )}
        </div>

        {/* Informações da Faixa */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-[#e5a823] text-[#22211e] text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
              Trilha Sonora Oficial
            </span>
            <span className="text-xs text-[#f7f4ea]/80 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#e5a823]" /> Cordel Musicado
            </span>
          </div>
          <h4 className="font-extrabold text-base truncate text-white mt-1">
            A História de Aru — Cordel dos 12 Princípios
          </h4>
          <p className="text-xs text-[#f7f4ea]/75 truncate">
            Música e ambientação poética • Coletivo Passarinha
          </p>

          {/* Barra de Progresso */}
          <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-[#e5a823] h-full rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={togglePlay}
            type="button"
            className="w-12 h-12 rounded-full bg-[#f7f4ea] text-[#2e6f40] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
            title={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            type="button"
            className="p-2 text-[#f7f4ea]/80 hover:text-white transition-colors"
            title={isMuted ? "Desmutar" : "Mutar"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-[#c85028]" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
