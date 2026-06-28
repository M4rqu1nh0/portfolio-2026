import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { Lang } from "./types";
import { dictionaries, type Dictionary } from "./dictionary";

interface LanguageContextValue {
  lang: Lang;
  /** Active dictionary for UI chrome strings. */
  t: Dictionary;
  /** Prefixes a canonical (Spanish) app path with /en when English is active. Pass paths starting with "/". */
  localePath: (path: string) => string;
  /** The other available language (for the toggle). */
  otherLang: Lang;
  /** The current location expressed in the other language (for the toggle link). */
  otherLangPath: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

function withPrefix(path: string, lang: Lang): string {
  if (lang === "es") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  const lang = langFromPath(pathname);

  // Canonical (Spanish) version of the current path, without the /en prefix.
  const canonical = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;

  const localePath = (path: string) => withPrefix(path, lang);

  const otherLang: Lang = lang === "en" ? "es" : "en";
  const otherLangPath = withPrefix(canonical, otherLang) + (hash ?? "");

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], localePath, otherLang, otherLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
