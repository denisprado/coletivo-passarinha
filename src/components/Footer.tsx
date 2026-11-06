import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#532E5A] text-[#FDBC2E] mt-auto border-t-4 border-[#E91C47]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center space-y-6">
        {/* Ícone da Passarinha */}
        <div className="flex justify-center">
          <Link href="/" className="relative w-20 h-18 hover:scale-105 transition-transform">
            <Image
              src="/brand/passarinha-ave.webp"
              alt="Passarinha"
              fill
              sizes="80px"
              className="object-contain drop-shadow-md"
            />
          </Link>
        </div>

        {/* Assinatura Central (Fiel ao PDF da Designer + Contatos Completos) */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider">
            Coletivo Interdisciplinar Passarinha
          </h3>

          <div className="flex flex-col items-center space-y-1.5 text-base sm:text-lg font-bold tracking-wide">
            <a
              href="mailto:coletivopassarinha@gmail.com"
              className="hover:text-white transition-colors"
            >
              coletivopassarinha@gmail.com
            </a>
            <a
              href="mailto:garatuja.decultura@gmail.com"
              className="text-sm sm:text-base text-[#FDBC2E]/85 hover:text-white transition-colors"
            >
              garatuja.decultura@gmail.com
            </a>

            <div className="pt-2 flex flex-col items-center space-y-1">
              <a
                href="https://www.instagram.com/coletivopassarinha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @coletivopassarinha
              </a>
              <a
                href="https://www.instagram.com/quintalgaratuja"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @quintalgaratuja
              </a>
              <a
                href="https://www.instagram.com/aru.permacultura"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @aru.permacultura
              </a>
              <a
                href="https://www.instagram.com/orquestra.pandeiros"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @orquestra.pandeiros
              </a>
            </div>
          </div>
        </div>

        {/* Navegação secundária discreta */}
        <div className="pt-6 border-t border-[#FDBC2E]/20 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#FDBC2E]/80">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <Link href="/quem-somos" className="hover:text-white transition-colors">
            Quem somos
          </Link>
          <Link href="/quintal-garatuja" className="hover:text-white transition-colors">
            Quintal Garatuja
          </Link>
          <Link href="/aru" className="hover:text-white transition-colors">
            A história de Aru
          </Link>
          <Link href="/espetaculos" className="hover:text-white transition-colors">
            Espetáculos
          </Link>
          <Link href="/praticas-formativas" className="hover:text-white transition-colors">
            Oficinas
          </Link>
          <Link href="/audiovisual" className="hover:text-white transition-colors">
            Audiovisual
          </Link>
          <Link href="/contato" className="hover:text-white transition-colors">
            Contato
          </Link>
        </div>

        <p className="text-xs text-[#FDBC2E]/60 pt-1">
          © 2026 Coletivo Interdisciplinar Passarinha • Sede: Ponto de Cultura Quintal Garatuja — Campinas/SP
        </p>
      </div>
    </footer>
  );
}
