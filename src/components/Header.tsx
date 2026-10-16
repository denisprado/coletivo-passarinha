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
    <header className="sticky top-0 z-50 bg-[#faf7f0]/95 backdrop-blur-md border-b border-[#e2d8c3] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border border-[#e2d8c3] group-hover:scale-105 transition-transform flex items-center justify-center p-0.5">
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
              <span className="block font-black tracking-wider text-base sm:text-lg text-[#22211e] uppercase">
                Coletivo Passarinha
              </span>
              <span className="block text-xs font-semibold text-[#2e6f40] -mt-1 tracking-widest uppercase">
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
                  className={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                    active
                      ? "bg-[#c85028] text-white shadow-sm"
                      : "text-[#22211e] hover:bg-[#eee6d3] hover:text-[#c85028]"
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
              className="btn-foca bg-[#c85028] hover:bg-[#a63f1d] text-white text-xs px-4 py-2"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#22211e] hover:bg-[#eee6d3] focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      {isOpen && (
        <div className="xl:hidden bg-[#faf7f0] border-b border-[#e2d8c3] px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  active
                    ? "bg-[#c85028] text-white"
                    : "text-[#22211e] hover:bg-[#eee6d3] hover:text-[#c85028]"
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
              className="w-full btn-foca bg-[#2e6f40] hover:bg-[#235431] text-white py-3 text-sm flex items-center justify-center gap-2"
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
