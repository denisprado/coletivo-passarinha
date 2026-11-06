"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Sparkles } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = "https://cdn.freesound.org/previews/415/415804_5121236-lq.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
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
    <div className="canvas-roxo text-[#FDF6E4] rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-[#FDBC2E]/60 max-w-2xl mx-auto">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="flex items-center justify-between gap-4">
        <div className="relative shrink-0">
          <div
            className={`w-14 h-14 rounded-full bg-[#FDBC2E] text-[#532E5A] flex items-center justify-center shadow-inner ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "6s" }}
          >
            <Music className="w-7 h-7" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDF6E4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E91C47]"></span>
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-[#E91C47] text-[#FDBC2E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
              Trilha Sonora Oficial
            </span>
            <span className="text-xs text-[#FDBC2E] hidden sm:flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3" /> Cordel Musicado
            </span>
          </div>
          <h4 className="font-extrabold text-base sm:text-lg truncate text-[#FDBC2E] mt-1">
            A História de Aru — Cordel dos 12 Princípios
          </h4>
          <p className="text-xs text-[#FDF6E4]/85 truncate">
            Música e ambientação poética • Coletivo Passarinha
          </p>

          <div className="w-full bg-white/20 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div
              className="bg-[#FDBC2E] h-full rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={togglePlay}
            type="button"
            className="w-12 h-12 rounded-full bg-[#FDBC2E] text-[#532E5A] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg"
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
            className="p-2 text-[#FDBC2E] hover:text-white transition-colors"
            title={isMuted ? "Ativar som" : "Silenciar"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-[#E91C47]" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
