import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import client from "./service/mongoDBClient";

async function refreshAccessToken(token) {
    try {
        if (token?.provider === "google") {
            const url =
                "https://oauth2.googleapis.com/token?" +
                new URLSearchParams({
                    client_id: process.env.AUTH_GOOGLE_ID,
                    client_secret: process.env.AUTH_GOOGLE_SECRET,
                    grant_type: "refresh_token",
                    refresh_token: token.refreshToken,
                });

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: "POST",
            });

            const refreshedTokens = await response.json();

            if (!response.ok) {
                throw refreshedTokens;
            }

            return {
                ...token,
                accessToken: refreshedTokens?.access_token,
                accessTokenExpires:
                    Date.now() + refreshedTokens?.expires_in * 1000,
                refreshToken: refreshedTokens?.refresh_token,
            };
        }

        if (token?.provider === "credentials") {
            const response = await fetch(
                `${process.env.API_BASE_URL}/auth/refreshToken`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        refreshToken: token?.user?.refreshToken,
                    }),
                }
            );

            const refreshedTokens = await response.json();
            if (!response.ok) {
                throw refreshedTokens;
            }

            return {
                ...token,
                accessToken: refreshedTokens?.tokens?.accessToken,
                refreshToken: refreshedTokens?.tokens?.refreshToken,
            };
        }
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    adapter: MongoDBAdapter(client),
    providers: [
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    return null;
                }
                return credentials;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account?.provider === "google") {
                if (account && user) {
                    return {
                        provider: account?.provider,
                        accessToken: account?.access_token,
                        accessTokenExpires:
                            Date.now() + account?.expires_in * 1000,
                        refreshToken: account?.refresh_token,
                        user,
                    };
                }

                if (Date.now() < token?.accessTokenExpires) {
                    return token;
                }

                return refreshAccessToken(token);
            }

            if (token?.user?.accessToken) {
                const decodedToken = jwtDecode(token?.user?.accessToken);

                token.accessTokenExpires = decodedToken?.exp * 1000;
            }

            if (account && user) {
                return {
                    provider: account?.provider,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                    user,
                };
            }

            // Return previous token if the access token has not expired yet

            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            // Access token has expired, try to update it
            //return token;
            return refreshAccessToken(token);
        },

        async session({ session, token }) {
            session.user = {
                id: token?.user?.id,
                name: token?.user?.name,
                email: token?.user?.email,
                image: token?.user?.image,
            };
            session.accessToken = token?.access_token;
            session.error = token?.error;
            return session;
        },
    },

    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/login",
    },
});
