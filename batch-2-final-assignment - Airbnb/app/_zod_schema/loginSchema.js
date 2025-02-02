import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is Required" })
        .email({ message: "Please provide a valid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 carecter long" }),
});
