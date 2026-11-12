"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Pencil, Eye, EyeOff, LayoutDashboard, LogOut } from "lucide-react";

interface AdminEditContextValue {
  isAdmin: boolean;
  showIcons: boolean;
  setShowIcons: React.Dispatch<React.SetStateAction<boolean>>;
  logoutAdminPreview: () => void;
}

const AdminEditContext = createContext<AdminEditContextValue>({
  isAdmin: false,
  showIcons: true,
  setShowIcons: () => {},
  logoutAdminPreview: () => {},
});

export function useAdminEdit() {
  return useContext(AdminEditContext);
}

function hasKeystaticAuthCookie(): boolean {
  if (typeof document === "undefined") return false;
  const cookieStr = document.cookie || "";
  return (
    cookieStr.includes("keystatic-gh-access-token=") ||
    cookieStr.includes("passarinha_admin=1")
  );
}

export function AdminEditProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const pathname = usePathname();
  const isKeystaticRoute = pathname?.startsWith("/keystatic") ?? false;

  // Ensure public site pages never inherit scroll-lock styles from Keystatic (@keystar/ui / react-aria)
  useEffect(() => {
    if (typeof document === "undefined" || isKeystaticRoute) return;

    const unlockScroll = () => {
      const htmlEl = document.documentElement;
      const bodyEl = document.body;

      htmlEl.style.removeProperty("overflow");
      htmlEl.style.removeProperty("overflow-y");
      htmlEl.style.removeProperty("height");
      htmlEl.style.removeProperty("position");
      htmlEl.style.removeProperty("padding-right");

      bodyEl.style.removeProperty("overflow");
      bodyEl.style.removeProperty("overflow-y");
      bodyEl.style.removeProperty("height");
      bodyEl.style.removeProperty("position");
      bodyEl.style.removeProperty("padding-right");

      // Remove Keystatic theme classes if left behind by client navigation
      Array.from(htmlEl.classList).forEach((cls) => {
        if (cls.startsWith("kui-")) {
          htmlEl.classList.remove(cls);
        }
      });
    };

    unlockScroll();
    const timer = window.setTimeout(unlockScroll, 100);
    return () => window.clearTimeout(timer);
  }, [pathname, isKeystaticRoute]);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (typeof window === "undefined") return;

      // 1. Check URL parameter (?admin=1 or ?admin=0 for quick testing/toggling)
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "1") {
        localStorage.setItem("passarinha_admin_logged_in", "true");
        document.cookie = "passarinha_admin=1; path=/; max-age=604800; SameSite=Lax";
      } else if (params.get("admin") === "0") {
        localStorage.removeItem("passarinha_admin_logged_in");
        document.cookie = "passarinha_admin=; path=/; max-age=0";
        setIsAdmin(false);
        return;
      }

      // 2. Check Keystatic GitHub cookie, Keystatic Cloud token, or localStorage flag set when visiting /keystatic
      const fromCookie = hasKeystaticAuthCookie();
      const fromCloudToken = !!localStorage.getItem("keystatic-cloud-access-token");
      const fromStorage = localStorage.getItem("passarinha_admin_logged_in") === "true";

      if (fromCookie || fromCloudToken || fromStorage) {
        setIsAdmin(true);
        return;
      }

      // 3. Try refreshing Keystatic GitHub token silently if user has an active HttpOnly refresh cookie
      try {
        const res = await fetch("/api/keystatic/github/refresh-token", {
          method: "POST",
        });
        if (res.ok && hasKeystaticAuthCookie()) {
          localStorage.setItem("passarinha_admin_logged_in", "true");
          setIsAdmin(true);
        }
      } catch {
        // Not logged in
      }
    };

    checkAdminStatus();
  }, [pathname]);

  // Track which section or card is currently active (hovered, focused, or tapped)
  useEffect(() => {
    if (!isAdmin || !showIcons || isKeystaticRoute) {
      document
        .querySelectorAll("[data-admin-active]")
        .forEach((el) => el.removeAttribute("data-admin-active"));
      return;
    }

    let currentActive: Element | null = null;

    const setActiveElement = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      // Prefer closest [data-admin-section] (for granular cards like team/timeline) or fallback to <section>
      const section =
        target.closest("[data-admin-section]") || target.closest("section");

      if (section === currentActive) return;

      if (currentActive) {
        currentActive.removeAttribute("data-admin-active");
      }
      if (section) {
        section.setAttribute("data-admin-active", "true");
        currentActive = section;
      } else {
        currentActive = null;
      }
    };

    const handlePointerOver = (e: PointerEvent) => setActiveElement(e.target);
    const handleFocusIn = (e: FocusEvent) => setActiveElement(e.target);
    const handleTouchStart = (e: TouchEvent) => setActiveElement(e.target);

    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("focusin", handleFocusIn, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("touchstart", handleTouchStart);
      if (currentActive) {
        currentActive.removeAttribute("data-admin-active");
      }
    };
  }, [isAdmin, showIcons, isKeystaticRoute]);

  const logoutAdminPreview = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("passarinha_admin_logged_in");
      document.cookie = "passarinha_admin=; path=/; max-age=0";
    }
    setIsAdmin(false);
  };

  return (
    <AdminEditContext.Provider
      value={{ isAdmin, showIcons, setShowIcons, logoutAdminPreview }}
    >
      {children}

      {isAdmin && !isKeystaticRoute && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full bg-[#241128]/95 border-2 border-[#FDBC2E] px-3 py-1.5 text-xs font-bold text-[#FDF6E4] shadow-[0_6px_20px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline text-[#FDBC2E] font-black uppercase tracking-wider mr-1">
            Modo Admin
          </span>

          <button
            type="button"
            onClick={() => setShowIcons((prev) => !prev)}
            className="inline-flex items-center gap-1 rounded-full bg-[#3A1D40] hover:bg-[#532E5A] px-2.5 py-1 text-[11px] font-bold text-[#FDF6E4] transition-colors cursor-pointer"
            title={
              showIcons
                ? "Ocultar ícones de edição na página"
                : "Mostrar ícones de edição nas seções ativas"
            }
          >
            {showIcons ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-[#FDBC2E]" />
                <span>Ocultar lápis</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-[#FDBC2E]" />
                <span>Mostrar lápis</span>
              </>
            )}
          </button>

          <a
            href="/keystatic"
            className="inline-flex items-center gap-1 rounded-full bg-[#FDBC2E] hover:bg-[#f79335] px-2.5 py-1 text-[11px] font-black text-[#241128] transition-colors no-underline"
            title="Abrir Painel Keystatic"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Painel</span>
          </a>

          <button
            type="button"
            onClick={logoutAdminPreview}
            className="inline-flex items-center justify-center rounded-full p-1 text-[#FDF6E4]/70 hover:text-[#E91C47] transition-colors cursor-pointer"
            title="Sair do modo de edição no site"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </AdminEditContext.Provider>
  );
}

export interface AdminEditLinkProps {
  collection?: string;
  slug?: string;
  singleton?: string;
  field: string;
  label?: string;
  className?: string;
}

export function AdminEditLink({
  collection,
  slug,
  singleton,
  field,
  label = "Editar",
  className = "",
}: AdminEditLinkProps) {
  const { isAdmin, showIcons } = useAdminEdit();

  if (!isAdmin || !showIcons) return null;

  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/keystatic/branch/main" : "/keystatic";

  let targetPath = "/keystatic";
  if (collection && slug) {
    targetPath = `${basePath}/collection/${encodeURIComponent(collection)}/item/${encodeURIComponent(slug)}`;
  } else if (singleton) {
    targetPath = `${basePath}/singleton/${encodeURIComponent(singleton)}`;
  } else if (collection) {
    targetPath = `${basePath}/collection/${encodeURIComponent(collection)}`;
  }

  const href = `${targetPath}?field=${encodeURIComponent(field)}`;

  return (
    <a
      href={href}
      title={`Editar "${field}" no Painel Admin`}
      aria-label={`Editar ${field} no Painel Admin`}
      className={`admin-edit-trigger inline-flex items-center gap-1 rounded-full bg-[#241128]/90 hover:bg-[#E91C47] text-[#FDBC2E] hover:text-white border border-[#FDBC2E]/80 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider shadow-md transition-all duration-200 align-middle ml-2 shrink-0 no-underline ${className}`}
    >
      <Pencil className="w-3 h-3 stroke-[2.5]" />
      <span>{label}</span>
    </a>
  );
}
