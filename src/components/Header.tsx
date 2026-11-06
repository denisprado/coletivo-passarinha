"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Quintal Garatuja", href: "/quintal-garatuja" },
    { name: "A História de Aru", href: "/aru" },
    {
      name: "Espetáculos",
      href: "/espetaculos",
      subItems: [
        { name: "Histórias que a Passarinha me contou", href: "/espetaculos#historias-que-a-passarinha-me-contou" },
        { name: "Plástico, um mito contemporâneo", href: "/espetaculos#plastico-um-mito-contemporaneo" },
        { name: "Show Nascente", href: "/espetaculos#show-nascente" },
        { name: "Histórias do Bosque dos Guarantãs", href: "/espetaculos#historias-do-bosque-dos-guarantas" },
      ],
    },
    {
      name: "Práticas Formativas",
      href: "/praticas-formativas",
      subItems: [
        { name: "Ateliê Jogar Dentro", href: "/praticas-formativas#atelie-jogar-dentro" },
        { name: "Ecobrinquedoteca Jogar Dentro", href: "/praticas-formativas#ecobrinquedoteca-jogar-dentro" },
        { name: "Orquestra de Pandeiros", href: "/praticas-formativas#orquestra-de-pandeiros" },
      ],
    },
    { name: "Audiovisual", href: "/audiovisual" },
    { name: "Contato", href: "/contato" },
  ];

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b-2 border-[#F2BF27]/40 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" ref={dropdownRef}>
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
              <span className="block text-[11px] font-bold text-[#02BF9B] -mt-1 tracking-widest uppercase">
                Arte • Educação • Ambiental
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const hasSub = !!item.subItems;
              const isOpen = openDropdown === item.name;

              if (hasSub) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs lg:text-sm font-bold transition-all ${
                        active
                          ? "bg-[#F21B54] text-white shadow-sm"
                          : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 mt-1 w-64 rounded-2xl bg-white shadow-2xl border-2 border-[#F2BF27]/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-[#F28F16]">
                          {item.name}
                        </div>
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-3.5 py-2 text-xs font-semibold text-[#22211E] hover:bg-[#FAF7F0] hover:text-[#F21B54] transition-colors"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-xs lg:text-sm font-bold transition-all ${
                    active
                      ? "bg-[#F21B54] text-white shadow-sm"
                      : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Contato Rápido no Desktop intermediário */}
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
        <div className="xl:hidden bg-[#FAF7F0] border-b-2 border-[#F2BF27]/40 px-4 pt-2 pb-6 space-y-1 shadow-lg max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const hasSub = !!item.subItems;
            const isSubOpen = mobileSubmenu === item.name;

            if (hasSub) {
              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex-1 px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                        active
                          ? "bg-[#F21B54] text-white"
                          : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(isSubOpen ? null : item.name)}
                      className="p-2 text-[#22211E] hover:text-[#F21B54]"
                      aria-label={`Expandir ${item.name}`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {isSubOpen && (
                    <div className="pl-6 pr-2 py-1 space-y-1 bg-white/70 rounded-xl border-l-4 border-[#F2BF27] my-1">
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-xs font-semibold text-[#22211E]/90 hover:text-[#F21B54]"
                        >
                          → {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  active
                    ? "bg-[#F21B54] text-white"
                    : "text-[#22211E] hover:bg-[#F2BF27]/20 hover:text-[#F21B54]"
                }`}
              >
                {item.name}
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
