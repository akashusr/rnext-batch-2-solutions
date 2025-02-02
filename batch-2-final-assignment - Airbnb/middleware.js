// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import NextAuth from "next-auth";
// import { NextResponse } from "next/server";
// import { authConfig } from "./auth.config";
// import { LOGIN, PRIVATE_ROUTES } from "./lib/routeList";

// const { auth } = NextAuth(authConfig);

// const defaultLocale = "en";
// export const supportedLocales = ["en", "bn"];

// // get locale depends of users browser preferances, if users prefferd locale not matched with supported locales, than use defaultLocale
// function getLocale(req) {
//     const acceptedLanguage = req.headers.get("accept-language") ?? undefined;
//     const headers = { "accept-language": acceptedLanguage };
//     const languages = new Negotiator({ headers }).languages();
//     const locale = match(languages, supportedLocales, defaultLocale);
//     return locale;
// }

// export default auth((req) => {
//     const { pathname } = req.nextUrl;
//     const isAuthenticated = !!req.auth;

//     const isPrivateRoutes = PRIVATE_ROUTES.find((route) =>
//         pathname.includes(route)
//     );
//     if (!isAuthenticated && isPrivateRoutes) {
//         return NextResponse.redirect(new URL(LOGIN, req.url));
//     }

//     // ==========  Multilangual Functionality Starts ========== //
//     // check that url has a local or not
//     const pathnameHasLocale = supportedLocales.some((locale) => {
//         const regex = new RegExp(`(^|/)${locale}(/|$)`);
//         return regex.test(pathname);
//     });

//     // if pathname has no locale redirect with a locale
//     if (!pathnameHasLocale) {
//         const locale = getLocale(req);
//         return NextResponse.redirect(
//             new URL(`/${locale}/${pathname}`, req.url)
//         );
//     }
//     // ==========   Multilangual Functionality End ========== //

//     // return response
//     return NextResponse.next();
// });

// export const config = {
//     matcher: [
//         // Skip all internal paths (_next),api routes and all assets and subfolders
//         "/((?!_next|api|assets|.*\\..*).*)",
//     ],
// };
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { LOGIN, PRIVATE_ROUTES } from "./lib/routeList";

const { auth } = NextAuth(authConfig);

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

export default auth((req) => {
    const { pathname } = req.nextUrl;
    const isAuthenticated = !!req.auth;

    const isPrivateRoutes = PRIVATE_ROUTES.find((route) =>
        pathname.includes(route)
    );
    if (!isAuthenticated && isPrivateRoutes) {
        return NextResponse.redirect(new URL(LOGIN, req.url));
    }

    // ==========  Multilangual Functionality Starts ========== //
    // check that url has a local or not
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
    // ==========   Multilangual Functionality End ========== //

    // return response
    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip all internal paths (_next),api routes and all assets and subfolders
        "/((?!_next|api|assets|.*\\..*).*)",
    ],
};
