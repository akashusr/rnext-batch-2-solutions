import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
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
        checkin: {
            type: String,
            required: [true, "Check-in date is required."],
        },
        checkout: {
            type: String,
            required: [true, "Check-out date is required."],
        },
        totalDays: {
            type: Number,
            required: true,
        },
        guests: {
            type: Number,
            required: false,
            min: [1, "There must be at least 1 guest."],
        },
        billing_address: {
            street: { type: String, required: [true, "Street is required."] },
            house_number: { type: String, required: false },
            city: { type: String, required: [true, "City is required."] },
            state: { type: String, required: [true, "State is required."] },
            zip: {
                type: String,
                required: false,
            },
        },
        cleaning_fee: {
            type: Number,
            required: false,
            default: 0,
        },

        service_fee: {
            type: Number,
            required: false,
            default: 0,
        },
        rent: {
            type: Number,
            required: [true, "Rent amount is required."],
            min: [0, "Rent cannot be negative."],
        },
        total_payable: {
            type: Number,
            required: [true, "Total payable amount is required."],
            min: [0, "Total payable cannot be negative."],
        },
    },
    {
        timestamps: true,
    }
);

export const bookingModel =
    mongoose.models.bookings || mongoose.model("bookings", bookingSchema);
