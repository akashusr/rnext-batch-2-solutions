import { z } from "zod";

export const userSchema = z.object({
    name: z
        .string({ message: "Name is Required" })
        .trim()
        .min(1, { message: "Name is Required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 carecter long" }),
    image: z
        .string()
        .transform((value) => value.trim() || null)
        .optional(),
    bookings: z.array(z.string()).optional(),
    reviews: z.array(z.string()).optional(),
    hotels: z.array(z.string()).optional(),
});
