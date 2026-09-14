import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["id", "en"];
const defaultLocale = "id";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the pathname already starts with a supported locale
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 2. Determine target locale from cookie or accept-language header
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  let targetLocale = defaultLocale;

  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    targetLocale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage && acceptLanguage.toLowerCase().startsWith("en")) {
      targetLocale = "en";
    }
  }

  // 3. Redirect to localized path
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export default proxy;

export const config = {
  matcher: [
    // Exclude Next.js internals, API routes, static assets, and files with extensions
    "/((?!_next|api|cv\\.pdf|favicon\\.ico|.*\\..*).*)",
  ],
};
