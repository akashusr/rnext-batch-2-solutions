import { NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";

const SECRET_KEY = new TextEncoder().encode(
    `${process.env.JWT_ACCESS_TOKEN_SECRET}`
);
const COOKIE_NAME = "session";
const COOKIE_EXPIRY_SECONDS = 30 * 60; // 30 minutes

export async function middleware(req) {
    const res = NextResponse.next();
    const token = req.cookies.get(COOKIE_NAME)?.value;

    // protect auth route when user loggedin
    if (req.url.includes("/login") || req.url.includes("/register")) {
        if (token) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    // protect watch later route when user not logged in
    if (req.url.includes("/watch-later")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    if (token) {
        try {
            const parsedCookieData = JSON.parse(token);
            // Verify the JWT
            const { payload } = await jwtVerify(
                parsedCookieData?.token,
                SECRET_KEY
            );
            // Create a new JWT with the same payload but updated expiration time
            const newToken = await new SignJWT(payload)
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime(`${COOKIE_EXPIRY_SECONDS}s`)
                .sign(SECRET_KEY);

            const newCookieData = JSON.stringify({
                user: parsedCookieData?.user,
                token: newToken,
            });
            // Update the cookie with the new token
            res.cookies.set(COOKIE_NAME, newCookieData, {
                maxAge: COOKIE_EXPIRY_SECONDS,
                secure: true,
                path: "/", // Make the cookie available for all paths
            });
        } catch (error) {
            console.error("JWT verification failed:", error.message);
        }
    }

    return res;
}

export const config = {
    matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
