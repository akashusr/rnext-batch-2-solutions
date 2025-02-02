import { z } from "zod";

export const amenitySchema = z.object({
    name: z.string({
        required_error: "Amenity name is required.",
    }),
    price: z.number().optional().default(0),
    instructions: z.string().optional(),
    hours: z.string().optional(),
});
