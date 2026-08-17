import { defaultLocale, type Locale } from "./ui";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const basePath = stripLocalePrefix(pathname);

  if (locale === "en") {
    return basePath === "/" ? "/en/" : `/en${basePath}`;
  }

  return basePath;
}

export function getHomePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}
