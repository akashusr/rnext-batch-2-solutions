import { bookingModel } from "@/models/bookings-model";
import { hotelModel } from "@/models/hotels-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { NextResponse } from "next/server";

export async function GET(req, { params: { bookingId } }) {
    try {
        await connectMongoDB();
        const response = await bookingModel
            .findById(bookingId)
            .populate({
                path: "user",
                model: userModel,
                select: "name email image",
            })
            .populate({
                path: "hotel",
                model: hotelModel,
            })
            .lean();

        if (response?.length === 0) {
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
