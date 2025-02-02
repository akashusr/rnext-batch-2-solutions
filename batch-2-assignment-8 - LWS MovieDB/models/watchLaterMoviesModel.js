import mongoose, { Schema } from "mongoose";

const watchLaterMoviesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        release_date: {
            type: String,
            required: true,
        },
        poster_path: {
            type: String,
            required: true,
        },
        movieId: {
            type: Number,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
    },
    { timestamps: true }
);

export const WatchListedMoviesModel =
    mongoose?.models?.Watchlist ??
    mongoose.model("Watchlist", watchLaterMoviesSchema);
