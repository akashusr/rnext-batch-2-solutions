import { z } from "zod";

export const reviewSchema = z.object({
    hotel: z.string({
        required_error: "Hotel ID is required.",
    }), // Assuming ObjectId is represented as a string
    user: z.string({
        required_error: "User ID is required.",
    }), // Assuming ObjectId is represented as a string
    review: z
        .string({
            required_error: "Please write your experience with us",
        })
        .min(
            8,
            "Please say few words about your experience with us (at least 8 characters)"
        ),
    rating: z
        .number({
            required_error: "Rating is required to submit a review.",
        })
        .min(1, "Add Minimum 1 star to submit review"), // Adjust if specific bounds are required
});
