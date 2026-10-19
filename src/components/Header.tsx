"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Quintal Garatuja", href: "/quintal-garatuja" },
    { name: "A História de Aru", href: "/aru" },
    { name: "Espetáculos", href: "/espetaculos" },
    { name: "Oficinas", href: "/oficinas" },
    { name: "Audiovisual", href: "/audiovisual" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b-2 border-[#F2BF27]/40 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-[#F2BF27] group-hover:scale-105 transition-transform flex items-center justify-center p-0.5">
              <Image
                src="/logo-passarinha.jpg"
                alt="Logotipo Coletivo Passarinha"
                width={56}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="block font-black tracking-wider text-base sm:text-lg text-[#22211E] uppercase">
                Coletivo Passarinha
              </span>
              <span className="block text-xs font-bold text-[#02BF9B] -mt-1 tracking-widest uppercase">
                Arte • Educação • Ambiental
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-bold transition-all ${
                    active
                      ? "bg-[#F21B54] text-white shadow-sm"
                      : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Contato Rápido no Desktop */}
          <div className="hidden md:flex xl:hidden items-center gap-2">
            <Link
              href="/contato"
              className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs px-4 py-2"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#22211E] hover:bg-[#F2BF27]/20 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      {isOpen && (
        <div className="xl:hidden bg-[#FAF7F0] border-b-2 border-[#F2BF27]/40 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  active
                    ? "bg-[#F21B54] text-white"
                    : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="w-full btn-foca bg-[#02BF9B] hover:bg-[#029e80] text-white py-3 text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Entrar em Contato / Contratar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
