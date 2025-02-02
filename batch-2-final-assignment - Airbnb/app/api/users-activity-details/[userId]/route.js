import { bookingModel } from "@/models/bookings-model";
import { hotelModel } from "@/models/hotels-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { NextResponse } from "next/server";

export async function GET(_req, { params: { userId } }) {
    try {
        await connectMongoDB();
        const response = await userModel
            .findById(userId)
            .populate({
                path: "reviews",
                model: reviewModel,
            })
            .populate({
                path: "bookings",
                model: bookingModel,
            })
            .populate({
                path: "hotels",
                model: hotelModel,
            })
            .lean();

        if (!response) {
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
