import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Hotel name is required."],
        },
        description: {
            type: String,
            required: [true, "Hotel description is required."],
        },
        location: {
            type: String,
            required: [true, "Hotel location is required."],
        },
        rate: {
            type: Number,
            required: [true, "Rate per night is required."],
            min: [0, "Rate cannot be negative."],
        },
        cleaning_fee: {
            type: Number,
            required: false,
            min: [0, "Cleaning fee cannot be negative."],
            default: 0,
        },
        thumbnail: {
            type: String,
            required: [true, "Hotel thumbnail is required."],
            validate: {
                validator: (value) => /(https?:\/\/.*)/i.test(value),
                message: (props) => `${props.value} is not a valid image URL!`,
            },
        },
        gallery: {
            type: [String],
            required: false,
            default: [],
            validate: {
                validator: function (values) {
                    // Validate each URL in the array
                    return values.every((value) =>
                        /(https?:\/\/.*)/i.test(value)
                    );
                },
                message: (props) =>
                    `One or more URLs in the gallery are invalid! Received: ${props.value}`,
            },
        },
        host: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        guest_capacity: {
            type: Number,
            required: true,
            min: [1, "Guest capacity must be at least 1."],
            default: 1,
        },
        bedrooms: {
            type: Number,
            required: true,
            min: [1, "There must be at least 1 bedroom."],
        },
        beds: {
            type: Number,
            required: false,
            min: [1, "There must be at least 1 bed."],
            default: 1,
        },
        rooms: {
            type: Number,
            required: false,
            min: [1, "There must be at least 1 Room."],
            default: 1,
        },
        amenities: {
            type: [String],
            required: false,
            default: [],
        },
        bookings: {
            type: [Schema.Types.ObjectId],
            ref: "bookings",
            required: false,
            default: [],
        },
        reviews: {
            type: [Schema.Types.ObjectId],
            ref: "reviews",
            required: false,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const hotelModel =
    mongoose.models.hotels || mongoose.model("hotels", hotelSchema);
