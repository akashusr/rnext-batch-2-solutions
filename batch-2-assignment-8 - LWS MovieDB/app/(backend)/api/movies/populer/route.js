
import { NextResponse } from "next/server";

export async function GET(_req) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=false&api_key=${process.env.TMDB_API_KEY}`
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
            throw new Error(
                "There was an error while loading Populer Movie's data"
            );
        }
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            data: [],
        });
    }
}
