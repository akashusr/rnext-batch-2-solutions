import { NextResponse } from "next/server";

export async function GET(_req, { params: { movieId } }) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US'&api_key=${process.env.TMDB_API_KEY}`
        );

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        } else {
            throw new Error("There was an error while loading videos");
        }
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            results: {},
        });
    }
}
