import React from "react";
import { DocumentRenderer, DocumentRendererProps } from "@keystatic/core/renderer";

export type DocumentTheme = "purple" | "yellow" | "orange" | "crimson" | "cream";

export interface CustomDocumentRendererProps {
  document: DocumentRendererProps["document"];
  theme?: DocumentTheme;
  className?: string;
}

export default function CustomDocumentRenderer({
  document,
  theme = "yellow",
  className = "",
}: CustomDocumentRendererProps) {
  if (!document || (Array.isArray(document) && document.length === 0)) {
    return null;
  }

  // Configurações de cores conforme o fundo
  const getThemeStyles = () => {
    switch (theme) {
      case "purple":
        return {
          text: "text-[#FDBC2E]",
          bold: "font-black text-[#FDBC2E]",
          italic: "italic text-[#FDF6E4]",
          link: "text-[#FDBC2E] underline underline-offset-4 decoration-[#FDBC2E]/60 hover:text-white hover:decoration-white font-bold transition-colors",
          blockquote: "border-l-4 border-[#FDBC2E] bg-[#241128]/70 p-4 sm:p-5 rounded-r-xl text-[#FDF6E4] my-4 italic shadow-md",
          h2: "text-2xl sm:text-3xl font-black uppercase text-[#FDBC2E] tracking-tight mt-6 mb-3",
          h3: "text-xl sm:text-2xl font-black uppercase text-[#FDF6E4] tracking-tight mt-5 mb-2",
          h4: "text-lg sm:text-xl font-bold uppercase text-[#FDBC2E] tracking-tight mt-4 mb-2",
        };
      case "crimson":
        return {
          text: "text-[#FDF6E4]",
          bold: "font-black text-[#FDBC2E]",
          italic: "italic text-[#FDF6E4]",
          link: "text-[#FDBC2E] underline underline-offset-4 decoration-[#FDBC2E]/60 hover:text-white hover:decoration-white font-bold transition-colors",
          blockquote: "border-l-4 border-[#FDBC2E] bg-[#241128]/70 p-4 sm:p-5 rounded-r-xl text-[#FDF6E4] my-4 italic shadow-md",
          h2: "text-2xl sm:text-3xl font-black uppercase text-[#FDBC2E] tracking-tight mt-6 mb-3",
          h3: "text-xl sm:text-2xl font-black uppercase text-[#FDF6E4] tracking-tight mt-5 mb-2",
          h4: "text-lg sm:text-xl font-bold uppercase text-[#FDBC2E] tracking-tight mt-4 mb-2",
        };
      case "orange":
        return {
          text: "text-[#3A1D40]",
          bold: "font-black text-[#3A1D40]",
          italic: "italic text-[#532E5A]",
          link: "text-[#3A1D40] underline underline-offset-4 decoration-[#3A1D40]/60 hover:text-[#E91C47] font-bold transition-colors",
          blockquote: "border-l-4 border-[#3A1D40] bg-[#FDF6E4]/90 p-4 sm:p-5 rounded-r-xl text-[#3A1D40] my-4 italic shadow-md",
          h2: "text-2xl sm:text-3xl font-black uppercase text-[#3A1D40] tracking-tight mt-6 mb-3",
          h3: "text-xl sm:text-2xl font-black uppercase text-[#532E5A] tracking-tight mt-5 mb-2",
          h4: "text-lg sm:text-xl font-bold uppercase text-[#3A1D40] tracking-tight mt-4 mb-2",
        };
      case "cream":
        return {
          text: "text-[#3A1D40]",
          bold: "font-black text-[#3A1D40]",
          italic: "italic text-[#532E5A]",
          link: "text-[#E91C47] underline underline-offset-4 decoration-[#E91C47]/60 hover:text-[#3A1D40] font-bold transition-colors",
          blockquote: "border-l-4 border-[#E91C47] bg-[#FDBC2E]/20 p-4 sm:p-5 rounded-r-xl text-[#3A1D40] my-4 italic shadow-sm",
          h2: "text-2xl sm:text-3xl font-black uppercase text-[#E91C47] tracking-tight mt-6 mb-3",
          h3: "text-xl sm:text-2xl font-black uppercase text-[#3A1D40] tracking-tight mt-5 mb-2",
          h4: "text-lg sm:text-xl font-bold uppercase text-[#E91C47] tracking-tight mt-4 mb-2",
        };
      case "yellow":
      default:
        return {
          text: "text-[#3A1D40]",
          bold: "font-black text-[#3A1D40]",
          italic: "italic text-[#532E5A]",
          link: "text-[#E91C47] underline underline-offset-4 decoration-[#E91C47]/60 hover:text-[#3A1D40] font-bold transition-colors",
          blockquote: "border-l-4 border-[#E91C47] bg-[#FDF6E4]/90 p-4 sm:p-5 rounded-r-xl text-[#3A1D40] my-4 italic shadow-md",
          h2: "text-2xl sm:text-3xl font-black uppercase text-[#532E5A] tracking-tight mt-6 mb-3",
          h3: "text-xl sm:text-2xl font-black uppercase text-[#E91C47] tracking-tight mt-5 mb-2",
          h4: "text-lg sm:text-xl font-bold uppercase text-[#3A1D40] tracking-tight mt-4 mb-2",
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`space-y-4 ${styles.text} leading-relaxed ${className}`}>
      <DocumentRenderer
        document={document}
        renderers={{
          inline: {
            bold: ({ children }) => <strong className={styles.bold}>{children}</strong>,
            italic: ({ children }) => <em className={styles.italic}>{children}</em>,
            underline: ({ children }) => <span className="underline underline-offset-4">{children}</span>,
            strikethrough: ({ children }) => <span className="line-through">{children}</span>,
            link: ({ children, href }) => (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={styles.link}
              >
                {children}
              </a>
            ),
          },
          block: {
            paragraph: ({ children, textAlign }) => (
              <p
                className={`${
                  textAlign === "center"
                    ? "text-center"
                    : textAlign === "end"
                    ? "text-right"
                    : "text-left"
                } leading-relaxed`}
              >
                {children}
              </p>
            ),
            blockquote: ({ children }) => (
              <blockquote className={styles.blockquote}>{children}</blockquote>
            ),
            heading: ({ level, children, textAlign }) => {
              const alignClass =
                textAlign === "center"
                  ? "text-center"
                  : textAlign === "end"
                  ? "text-right"
                  : "text-left";
              if (level === 2) {
                return <h2 className={`${styles.h2} ${alignClass}`}>{children}</h2>;
              }
              if (level === 3) {
                return <h3 className={`${styles.h3} ${alignClass}`}>{children}</h3>;
              }
              return <h4 className={`${styles.h4} ${alignClass}`}>{children}</h4>;
            },
            divider: () => <hr className="my-6 border-[#3A1D40]/20" />,
            layout: ({ children }) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">{children}</div>
            ),
          },
        }}
      />
    </div>
  );
}
