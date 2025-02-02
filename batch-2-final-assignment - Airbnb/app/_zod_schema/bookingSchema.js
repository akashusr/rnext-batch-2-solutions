import { z } from "zod";

export const billingAddressSchema = z.object({
    street: z.string({
        required_error: "Street is required.",
    }),
    house_number: z.string().optional(),
    city: z.string({
        required_error: "City is required.",
    }),
    state: z.string({
        required_error: "State is required.",
    }),
    zip: z.string().optional(),
});

export const bookingSchema = z.object({
    hotel: z.string({
        required_error: "Hotel is required.",
    }),
    user: z.string({
        required_error: "User is required.",
    }),
    checkin: z.string({
        required_error: "Check-in date is required.",
    }),

    checkout: z.string({
        required_error: "Check-out date is required.",
    }),

    totalDays: z.number({
        required_error: "Total reserved day is required",
    }),

    guests: z.number().min(1, "There must be at least 1 guest.").optional(),
    billing_address: billingAddressSchema,
    rent: z
        .number({
            required_error: "Rent amount is required.",
        })
        .min(0, "Rent cannot be negative."),
    cleaning_fee: z.number().optional(),
    service_fee: z.number().optional(),
    total_payable: z
        .number({
            required_error: "Total payable amount is required.",
        })
        .min(0, "Total payable cannot be negative."),
});
