import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextResponse } from "next/server";
const defaultLocale = "en";
export const supportedLocales = ["en", "bn"];

// get locale depends of users browser preferances, if users prefferd locale not matched with supported locales, than use defaultLocale
function getLocale(req) {
    const acceptedLanguage = req.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();
    const locale = match(languages, supportedLocales, defaultLocale);
    return locale;
}

export function middleware(req) {
    // check that url has a local or not
    const { pathname } = req.nextUrl;
    const pathnameHasLocale = supportedLocales.some((locale) => {
        const regex = new RegExp(`(^|/)${locale}(/|$)`);
        return regex.test(pathname);
    });

    // if pathname has no locale redirect with a locale
    if (!pathnameHasLocale) {
        const locale = getLocale(req);
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, req.url)
        );
    }

    // return response
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip all internal paths (_next),api routes and all assets and subfolders
        "/((?!_next|api|assets|.*\\..*).*)",
    ],
};
