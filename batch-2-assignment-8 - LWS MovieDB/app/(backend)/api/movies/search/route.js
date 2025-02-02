import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
        );

        if (response.ok) {
            const data = await response.json();

            if (data.results.length > 0) {
                return NextResponse.json(data, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            } else {
                return NextResponse.json(
                    { message: "No Data found", results: [] },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                        status: 404,
                        statusText: "NOT FOUND",
                    }
                );
            }
        } else {
            throw new Error(
                "There was an error while loading searched Movie's data"
            );
        }
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            results: [],
        });
    }
}
