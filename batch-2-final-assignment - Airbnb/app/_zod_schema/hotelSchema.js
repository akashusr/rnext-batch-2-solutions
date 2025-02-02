import { z } from "zod";

export const hotelSchema = z.object({
    name: z
        .string({
            required_error: "Hotel name is required.",
        })
        .min(4, "Hotel name must have atleast 4 characters."),
    description: z
        .string({
            required_error: "Hotel description is required.",
        })
        .min(10, "Hotel description must have atleast 10 characters."),
    location: z
        .string({
            required_error: "Hotel location is required.",
        })
        .min(1, "Location is Required"),
    rate: z
        .number({
            required_error: "Rate per night is required.",
        })
        .min(0, "Rate cannot be negative."),
    cleaning_fee: z
        .number()
        .min(0, "Cleaning fee cannot be negative.")
        .optional(),
    thumbnail: z
        .string({ required_error: "At least one image is required." })
        .regex(/(https?:\/\/.*)/i, "Invalid image URL")
        .min(1, { message: "Thumbnail image is required" }),
    gallery: z
        .array(
            z
                .string()
                .url()
                .regex(/(https?:\/\/.*)/i, {
                    message: "Each gallery URL must be a valid image URL.",
                })
                .min(1, "Gallery image is required.")
        )
        .optional(),
    host: z.string({ message: "Host or user id is required." }),
    guest_capacity: z
        .number({ required_error: "Please mention guest capacity" })
        .min(1, "Guest capacity must be at least 1."),
    rooms: z
        .number({ required_error: "Please mention Room Count" })
        .min(1, "Minimum 1 room is required."),

    bedrooms: z
        .number({ required_error: "PLease mension bedrooms qty" })
        .min(1, "There must be at least 1 bedroom."),
    beds: z.number().min(1, "There must be at least 1 bed.").optional(),
    amenities: z.array(z.string()).optional(),
    bookings: z.array(z.string()).optional(),
    reviews: z.array(z.string()).optional(),
});
