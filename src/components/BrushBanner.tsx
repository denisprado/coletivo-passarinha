import React from "react";

interface BrushBannerProps {
  children: React.ReactNode;
  color?: "crimson" | "yellow" | "purple";
  shape?: "wave" | "tilted" | "bridge";
  className?: string;
}

const FILL_COLORS = {
  crimson: "#A60F31",
  yellow: "#FDBC2E",
  purple: "#532E5A",
};

export default function BrushBanner({
  children,
  color = "crimson",
  shape = "wave",
  className = "",
}: BrushBannerProps) {
  const fill = FILL_COLORS[color];

  return (
    <div
      className={`relative inline-block py-3 px-6 sm:px-9 select-none ${
        shape === "tilted" ? "-rotate-2" : ""
      } ${className}`}
    >
      {/* Pincelada Orgânica Vetorial ao Fundo */}
      {shape === "wave" && (
        <svg
          viewBox="0 0 600 110"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
        >
          <path
            d="M8,16 C85,4 175,6 265,18 C365,30 465,8 588,14 C595,24 598,38 594,52 C599,68 595,86 589,96 C470,92 365,78 255,95 C155,108 68,94 14,94 C6,78 9,60 4,44 C2,30 4,21 8,16 Z"
            fill={fill}
          />
          <path
            d="M586,22 L598,25 L592,33 L600,39 L591,46 L597,56 L588,64 L595,76 L586,86 Z"
            fill={fill}
            opacity="0.85"
          />
        </svg>
      )}

      {shape === "tilted" && (
        <svg
          viewBox="0 0 600 105"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
        >
          <path
            d="M12,24 C140,14 340,8 584,6 C594,18 591,34 597,48 C590,62 595,78 585,88 C390,88 195,96 16,100 C5,86 10,68 3,54 C8,38 4,30 12,24 Z"
            fill={fill}
          />
          <path
            d="M2,42 L15,34 L12,56 L3,64 Z M582,14 L599,18 L590,32 L599,42 L584,54 Z"
            fill={fill}
            opacity="0.75"
          />
        </svg>
      )}

      {shape === "bridge" && (
        <svg
          viewBox="0 0 680 105"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md"
        >
          <path
            d="M6,14 C135,10 255,28 380,14 C485,4 585,8 672,12 C678,28 675,46 678,64 C675,78 674,90 668,94 C545,88 430,90 315,98 C195,104 90,88 10,92 C3,74 5,52 2,34 C3,22 4,17 6,14 Z"
            fill={fill}
          />
        </svg>
      )}

      {/* Conteúdo Tipográfico sobre a Pincelada */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
