"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

export default function VLibrasWidget() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || pathname?.startsWith("/keystatic")) {
      return;
    }

    const existingScript = document.getElementById("vlibras-plugin-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "vlibras-plugin-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.body.appendChild(script);
  }, [pathname]);

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }

  return (
    <div
      {...({ vw: "true" } as React.HTMLAttributes<HTMLDivElement>)}
      className="enabled"
    >
      <div
        {...({ "vw-access-button": "true" } as React.HTMLAttributes<HTMLDivElement>)}
        className="active"
      />
      <div
        {...({ "vw-plugin-wrapper": "true" } as React.HTMLAttributes<HTMLDivElement>)}
      >
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
