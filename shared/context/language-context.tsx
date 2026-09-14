"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Compute active language directly from route pathname
  const lang: Language = useMemo(() => {
    if (pathname.startsWith("/en/") || pathname === "/en") {
      return "en";
    }
    return "id";
  }, [pathname]);

  // Keep HTML lang attribute and localStorage/cookie in sync
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      try {
        localStorage.setItem("app_lang", lang);
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      } catch {
        // Ignore storage access errors in restricted contexts
      }
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;

    // Persist preference in cookie & localStorage
    if (typeof document !== "undefined") {
      try {
        localStorage.setItem("app_lang", newLang);
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      } catch {
        // Ignore storage errors
      }
    }

    // Rewrite path segment: e.g. /id/about -> /en/about or /en -> /id
    let nextPath = pathname;
    if (pathname.startsWith("/id/") || pathname === "/id") {
      nextPath = pathname.replace(/^\/id(?=\/|$)/, `/${newLang}`);
    } else if (pathname.startsWith("/en/") || pathname === "/en") {
      nextPath = pathname.replace(/^\/en(?=\/|$)/, `/${newLang}`);
    } else {
      nextPath = `/${newLang}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
    }

    router.push(nextPath);
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
