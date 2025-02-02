import videos from "@/db/videos.json";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// GET VIDEOS
export async function GET(req) {
    try {
        //data checking
        if (videos.length === 0) {
            throw new Error("No videos found!");
        }

        // get options for pagination
        const { searchParams } = new URL(req.url);
        if (
            searchParams.get("page") ||
            searchParams.get("limit") ||
            searchParams.get("start")
        ) {
            const page = parseInt(searchParams.get("page") || "1");
            const limit = parseInt(searchParams.get("limit") || 10);
            const start = (page - 1) * limit;
            const paginatedVideos = videos.slice(start, start + limit);

            // return json response
            return NextResponse.json(
                {
                    page,
                    limit,
                    data: paginatedVideos,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
        }
        return NextResponse.json(videos, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST VIDEOS
export async function POST(req) {
    const data = await req.json();
    try {
        // data validation
        if (
            !data.title ||
            !data.description ||
            !data.thumbnail ||
            !data.channelTitle ||
            !data.videoId
        ) {
            throw new Error("All fields are requried!");
        }

        // created new video data with the requested data
        const newData = {
            ...data,
            publishTime: new Date().toISOString(),
        };
        // update data file
        const dataFile = path.join(process.cwd(), "db", "videos.json");
        const fileData = fs.readFileSync(dataFile, "utf-8");
        const parsedData = JSON.parse(fileData);

        // check data with same videoId already added or not
        const isAddedAlready = parsedData.find(
            (addedData) => addedData.videoId === data.videoId
        );

        if (isAddedAlready) {
            throw new Error(
                `Data with this videoId: ${data.videoId} has been already added`
            );
        }

        // if new than push new data and update data file
        parsedData.push(newData);

        fs.writeFileSync(dataFile, JSON.stringify(parsedData, null, 2));

        // return success response
        return NextResponse.json(
            { message: "Data Created Sucesss", data: newData },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
