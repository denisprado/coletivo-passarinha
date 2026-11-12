"use client";

import React, { useEffect } from "react";
import { makePage } from "@keystatic/next/ui/app";
import config from "../../../keystatic.config";

const KeystaticPage = makePage(config);

export default function KeystaticApp() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Mark admin session as active when inside Keystatic dashboard
    const markAdminLoggedIn = () => {
      const hasGhToken = document.cookie.includes("keystatic-gh-access-token=");
      const hasCloudToken = !!localStorage.getItem("keystatic-cloud-access-token");
      const isLocal = process.env.NODE_ENV !== "production";
      if (hasGhToken || hasCloudToken || isLocal) {
        localStorage.setItem("passarinha_admin_logged_in", "true");
        document.cookie =
          "passarinha_admin=1; path=/; max-age=604800; SameSite=Lax";
      }
    };

    markAdminLoggedIn();
    const authInterval = setInterval(markAdminLoggedIn, 1500);

    // 2. Scroll to and focus the requested field (?field=...) once Keystatic form renders
    const params = new URLSearchParams(window.location.search);
    const targetField = params.get("field");

    if (!targetField) {
      return () => clearInterval(authInterval);
    }

    const normalizedTarget = targetField.trim().toLowerCase();
    let attempts = 0;
    const maxAttempts = 40; // Up to ~8 seconds for GitHub tree + blob fetch

    const tryFocusField = () => {
      attempts += 1;
      // Search labels and spans inside main form area
      const candidates = Array.from(
        document.querySelectorAll("label, span, h2, h3, div[role='group']"),
      );

      const matchedLabel = candidates.find((el) => {
        const text = (el.textContent || "").trim().toLowerCase();
        // Match exact label or prefix before parenthesis
        return (
          text === normalizedTarget ||
          text.startsWith(normalizedTarget) ||
          (normalizedTarget.length > 5 && text.includes(normalizedTarget))
        );
      });

      if (matchedLabel instanceof HTMLElement) {
        const fieldContainer =
          matchedLabel.closest("[data-ks-path]") ||
          matchedLabel.parentElement?.parentElement ||
          matchedLabel.parentElement ||
          matchedLabel;

        matchedLabel.scrollIntoView({ behavior: "smooth", block: "center" });

        if (fieldContainer instanceof HTMLElement) {
          fieldContainer.style.transition =
            "box-shadow 0.35s ease, background-color 0.35s ease";
          fieldContainer.style.boxShadow = "0 0 0 3px #FDBC2E";
          fieldContainer.style.borderRadius = "8px";
          fieldContainer.style.backgroundColor = "rgba(253, 188, 46, 0.08)";

          setTimeout(() => {
            fieldContainer.style.boxShadow = "";
            fieldContainer.style.backgroundColor = "";
          }, 3500);

          const focusable = fieldContainer.querySelector<HTMLElement>(
            "input:not([type='hidden']), textarea, [contenteditable='true'], button",
          );
          if (focusable) {
            focusable.focus({ preventScroll: true });
          }
        }
        return true;
      }

      return false;
    };

    const focusTimer = setInterval(() => {
      if (tryFocusField() || attempts >= maxAttempts) {
        clearInterval(focusTimer);
      }
    }, 200);

    return () => {
      clearInterval(authInterval);
      clearInterval(focusTimer);
    };
  }, []);

  return <KeystaticPage />;
}
