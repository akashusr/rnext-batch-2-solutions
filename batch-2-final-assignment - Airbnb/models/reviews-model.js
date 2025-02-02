import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
    {
        hotel: {
            type: Schema.Types.ObjectId,
            ref: "hotels",
            required: [true, "Hotel ID is required."],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User ID is required."],
        },
        review: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: [true, "Rating is Required to submit review"],
        },
    },
    { timestamps: true }
);

export const reviewModel =
    mongoose.models.reviews || mongoose.model("reviews", reviewSchema);
