import videos from "@/db/videos.json";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

//GET SINGLE DATA BY ID
export async function GET(_req, { params: { id } }) {
    const videoData = videos.find((data) => data.videoId === id);
    try {
        // check videoData matched with id or not
        if (!videoData) {
            throw new Error(`No Video found with this id : ${id}`);
        }

        //return responses if data matched
        return NextResponse.json(videoData, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 404 });
    }
}

// DELETE SINGLE DATA BY ID

export async function DELETE(_req, { params: { id } }) {
    const dataToDelete = videos.find((data) => data.videoId === id);
    try {
        if (!dataToDelete) {
            throw new Error("No data found to delete");
        }
        // manage data file and delete data from file
        const dataFile = path.join(process.cwd(), "db", "videos.json");
        const dataAfterDelete = videos.filter((item) => item.videoId !== id);

        // write file after deleting data
        fs.writeFileSync(dataFile, JSON.stringify(dataAfterDelete, null, 2));

        // return response after data delete and update data file
        return NextResponse.json({
            message: "Data deleted success",
            deletedData: dataToDelete,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 404 });
    }
}

// PATCH/UPDATE SINGLE DATA BY ID

export async function PATCH(req, { params: { id } }) {
    const reqData = await req.json();

    try {
        // validate the request
        const parameters = Object.keys(reqData);
        const hasInvalidParameter = parameters.some(
            (item) => item !== "title" && item !== "description"
        );

        if (!reqData.title && !reqData.description) {
            throw new Error("Invalid actions: No data passed or Empty data");
        } else if (hasInvalidParameter) {
            throw new Error(
                "Trying to change not permitted data, Title and Description only allowed to update"
            );
        }

        // update data
        const dataToUpdate = videos.find((data) => data.videoId === id);

        if (!dataToUpdate) {
            return NextResponse.json({
                error: `No data found with this id:${id}`,
            });
        }
        const dataFile = path.join(process.cwd(), "db", "videos.json");
        const fileData = fs.readFileSync(dataFile, "utf-8");
        const parsedData = JSON.parse(fileData);

        // replace data with updated data
        const index = parsedData.findIndex((data) => data.videoId === id);
        parsedData[index] = { ...parsedData[index], ...reqData };
        fs.writeFileSync(dataFile, JSON.stringify(parsedData, null, 2));
        return NextResponse.json({
            message: "Data updated success",
            updatedData: parsedData[index],
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
