"use server";

import { WatchListedMoviesModel } from "@/models/watchLaterMoviesModel";
import { connectMongoDB } from "@/service/mongoConnection";
import { getSerializedDataObject } from "@/utils";
import { revalidatePath } from "next/cache";

// find all from watchlist
export async function findAllWatchlistedMovies() {
    await connectMongoDB();
    try {
        return await WatchListedMoviesModel.find();
    } catch (error) {
        throw error;
    }
}

// add movie to watchlist
export async function addToWatchList(movie) {
    await connectMongoDB();
    try {
        await WatchListedMoviesModel.create(movie);
        revalidatePath("/watch-later");
        return { success: "added to watchlist" };
    } catch (error) {
        throw new Error("Failed to add movie to watchlist");
    }
}

// find one from watclist
export async function findFromWatchListbyId(id) {
    await connectMongoDB();
    try {
        const data = await WatchListedMoviesModel.findOne({
            movieId: id,
        }).lean();
        if (data) {
            const serializeData = getSerializedDataObject(data);
            return serializeData;
        }
    } catch (error) {
        throw error;
    }
}

//delete from watchlist
export async function deleteFromWatchlist(id) {
    await connectMongoDB();
    try {
        return await WatchListedMoviesModel.deleteOne({ movieId: id });
    } catch (error) {
        throw error;
    }
}
