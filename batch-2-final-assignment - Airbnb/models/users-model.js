import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            unique: [true, "This email is already used"],
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please enter a valid email address.",
            ],
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minlength: [6, "Password must be at least 6 characters long."],
        },
        image: {
            type: String,
            required: false,
            default: null,
        },
        bookings: {
            type: [Schema.Types.ObjectId],
            ref: "bookings",
            required: false,
        },
        reviews: {
            type: [Schema.Types.ObjectId],
            ref: "reviews",
            required: false,
        },
        hotels: {
            type: [Schema.Types.ObjectId],
            ref: "hotels",
            required: false,
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt timestamps
    }
);

export const userModel =
    mongoose.models.users || mongoose.model("users", userSchema);
