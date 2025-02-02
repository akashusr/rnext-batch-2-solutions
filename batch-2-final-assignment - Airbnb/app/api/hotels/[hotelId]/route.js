export const revalidate = 0;

import { bookingModel } from "@/models/bookings-model";
import { hotelModel } from "@/models/hotels-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hotelSchema } from "../../../_zod_schema/hotelSchema";

export async function GET(_req, { params: { hotelId } }) {
    try {
        await connectMongoDB();
        const response = await hotelModel
            .findById(hotelId)
            .populate({
                path: "host",
                model: userModel,
                select: "name email image",
            })
            .populate({
                path: "reviews",
                model: reviewModel,
                select: "rating user",
            })
            .populate({
                path: "bookings",
                model: bookingModel,
            })
            .lean();

        if (response === null) {
            return NextResponse.json(
                {
                    data: null,
                    message: "No Data Found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: response,
            },
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Controll-Allow-Origin": "*",
                },
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: error?.message,
                },
            },
            { status: 500 }
        );
    }
}

export async function DELETE(_req, { params: { hotelId } }) {
    try {
        await connectMongoDB();
        const response = await hotelModel.findByIdAndDelete(hotelId);
        if (response === null) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No hotel found to delete",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(
            {
                success: true,
                message: "Hotel deleted successfully",
                data: response,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error?.message,
            },
            {
                status: 500,
            }
        );
    }
}

export async function PATCH(req, { params: { hotelId } }) {
    try {
        const data = await req.json();
        await connectMongoDB();
        const validatedData = hotelSchema.parse(data);
        const response = await hotelModel.findByIdAndUpdate(
            hotelId,
            {
                ...validatedData,
            },
            { new: true }
        );
        if (response === null) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No hotel found to update",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Hotel updated successfully",
                data: response,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            // transform error into object with properties
            const fieldErrors = error.errors.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                return acc;
            }, {});

            // return zod validation error
            return NextResponse.json(
                {
                    success: false,
                    error: fieldErrors,
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: error?.message,
                },
            },
            { status: 500 }
        );
    }
}
