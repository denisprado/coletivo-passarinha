"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }

  const isHome = pathname === "/";

  const navItems: NavItem[] = [
    { name: "Início", href: "/" },
    { name: "Quem somos", href: "/quem-somos" },
    {
      name: "Ponto de Cultura Quintal Garatuja",
      href: "/quintal-garatuja",
      subItems: [
        { name: "O Quintal (Sede & Manifesto)", href: "/quintal-garatuja#sobre" },
        { name: "Show de Variedades", href: "/quintal-garatuja#show-de-variedades" },
        { name: "Nosso Canto", href: "/quintal-garatuja#nosso-canto" },
        { name: "Ações Formativas", href: "/quintal-garatuja#acoes-formativas" },
        { name: "Núcleo Socioambiental", href: "/quintal-garatuja#nucleo-socioambiental" },
        { name: "Endereço e Contato", href: "/quintal-garatuja#contato" },
      ],
    },
    { name: "A história de Aru", href: "/aru" },
    {
      name: "Espetáculos",
      href: "/espetaculos",
      subItems: [
        {
          name: "Histórias que a Passarinha me contou",
          href: "/espetaculos#historias-que-a-passarinha-me-contou",
        },
        {
          name: "Plástico, um mito contemporâneo",
          href: "/espetaculos#plastico-um-mito-contemporaneo",
        },
        { name: "Show Nascente", href: "/espetaculos#show-nascente" },
        {
          name: "Histórias do Bosque dos Guarantãs",
          href: "/espetaculos#historias-do-bosque-dos-guarantas",
        },
      ],
    },
    {
      name: "Oficinas",
      href: "/praticas-formativas",
      subItems: [
        { name: "Ateliê Jogar Dentro", href: "/praticas-formativas#atelie-jogar-dentro" },
        {
          name: "Ecobrinquedoteca Jogar Dentro",
          href: "/praticas-formativas#ecobrinquedoteca-jogar-dentro",
        },
        {
          name: "Orquestra de Pandeiros",
          href: "/praticas-formativas#orquestra-de-pandeiros",
        },
      ],
    },
    {
      name: "Audiovisual",
      href: "/audiovisual",
      subItems: [
        { name: "Apresentação", href: "/audiovisual#apresentacao" },
        { name: "A Caixa Mágica", href: "/audiovisual#a-caixa-magica" },
        { name: "Fora de onde?", href: "/audiovisual#fora-de-onde" },
        {
          name: "O que se passa no formigueiro?",
          href: "/audiovisual#o-que-se-passa-no-formigueiro",
        },
      ],
    },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/praticas-formativas" && pathname.startsWith("/oficinas")) return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Topo da Marca Amarelo Ipê (#FDBC2E) em destaque na Home (fiel ao layout da designer) */}
      {isHome && (
        <div className="bg-[#FDBC2E] pt-6 pb-2 px-4 hidden lg:flex justify-center">
          <Link href="/" className="group focus:outline-none">
            <div className="relative w-[340px] h-[180px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/brand/logo-horizontal-amarelo.webp"
                alt="Coletivo Passarinha"
                fill
                sizes="340px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      )}

      {/* Barra de Navegação Fixa (Sticky em todas as páginas, usando 100% da largura da tela) */}
      <header className="sticky top-0 z-50 bg-[#FDBC2E] border-b-3 border-[#3A1D40] shadow-xs w-full">
        <div className="w-full px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12" ref={navRef}>
          <div
            className={`flex items-center w-full ${
              isHome
                ? "justify-between lg:justify-center h-16"
                : "justify-between h-20 gap-2 xl:gap-6"
            }`}
          >
            {/* Logo Compacto (sempre visível no mobile e nas páginas internas) */}
            <Link
              href="/"
              className={`flex items-center gap-2.5 group focus:outline-none shrink-0 ${
                isHome ? "lg:hidden" : ""
              }`}
            >
              <div className="relative w-32 sm:w-40 xl:w-44 h-12 xl:h-14">
                <Image
                  src="/brand/logo-horizontal-amarelo.webp"
                  alt="Coletivo Passarinha"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Menu Desktop Editorial em toda a extensão da tela (#532E5A sobre #FDBC2E) */}
            <nav className="hidden lg:flex items-center flex-nowrap justify-center gap-x-1 xl:gap-x-2 2xl:gap-x-3 text-center">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const hasSub = !!item.subItems;
                const isDropOpen = openDropdown === item.name;

                if (hasSub) {
                  return (
                    <div
                      key={item.name}
                      className="relative shrink-0"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-[13.5px] xl:text-[14.5px] 2xl:text-[15.5px] tracking-wide whitespace-nowrap transition-all ${
                          active
                            ? "bg-[#532E5A] text-[#FDBC2E] font-bold shadow-sm"
                            : "text-[#532E5A] font-bold hover:bg-[#532E5A]/15 hover:text-[#E91C47]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {isDropOpen && (
                        <div className="absolute left-0 pt-1.5 w-72 z-50">
                          <div className="rounded-xl bg-[#532E5A] text-[#FDF6E4] shadow-xl border border-[#3A1D40]/40 py-2 overflow-hidden text-left">
                            <div className="px-4 py-1.5 border-b border-[#FDF6E4]/20 text-[11px] font-bold uppercase tracking-widest text-[#FDBC2E]">
                              {item.name}
                            </div>
                            {item.subItems!.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2.5 text-sm font-semibold text-[#FDF6E4] hover:bg-[#E91C47] hover:text-white transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[13.5px] xl:text-[14.5px] 2xl:text-[15.5px] tracking-wide whitespace-nowrap shrink-0 transition-all ${
                      active
                        ? "bg-[#532E5A] text-[#FDBC2E] font-bold shadow-sm"
                        : "text-[#532E5A] font-bold hover:bg-[#532E5A]/15 hover:text-[#E91C47]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Botão Mobile */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                type="button"
                className="p-2 rounded-xl text-[#532E5A] hover:bg-[#532E5A]/10 focus:outline-none"
                aria-label="Abrir menu"
              >
                {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FDBC2E] border-t border-[#532E5A]/20 px-4 pt-3 pb-6 space-y-1.5 shadow-xl max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const hasSub = !!item.subItems;
              const isSubOpen = mobileSubmenu === item.name;

              if (hasSub) {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex-1 px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                          active
                            ? "bg-[#532E5A] text-[#FDBC2E]"
                            : "text-[#532E5A] hover:bg-[#532E5A]/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileSubmenu(isSubOpen ? null : item.name)}
                        className="p-2.5 rounded-xl text-[#532E5A] bg-[#532E5A]/10"
                        aria-label={`Expandir ${item.name}`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isSubOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isSubOpen && (
                      <div className="pl-5 pr-3 py-2 space-y-1.5 bg-[#532E5A] rounded-xl text-[#FDF6E4]">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm font-medium hover:text-[#FDBC2E]"
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
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                    active
                      ? "bg-[#532E5A] text-[#FDBC2E]"
                      : "text-[#532E5A] hover:bg-[#532E5A]/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
