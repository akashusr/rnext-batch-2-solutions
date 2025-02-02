import mongoose, { Schema } from "mongoose";

const amenitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
        default: 0,
    },
    instructions: {
        type: String,
        required: false,
        default: null,
    },
    hours: {
        type: String,
        required: false,
        default: null,
    },
});

export const amenitiesModel =
    mongoose.models.amenities || mongoose.model("amenities", amenitySchema);
