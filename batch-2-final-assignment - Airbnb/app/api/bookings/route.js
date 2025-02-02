import { bookingModel } from "@/models/bookings-model";
import { hotelModel } from "@/models/hotels-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { handleZodError } from "@/utils/zodUtils";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { z } from "zod";
import { bookingSchema } from "../../_zod_schema/bookingSchema";

// get all bookings
export async function GET() {
    try {
        await connectMongoDB();
        const response = await bookingModel
            .find()
            .populate({
                path: "user",
                model: userModel,
            })
            .populate({
                path: "hotel",
                model: hotelModel,
            })
            .lean();

        if (response?.length === 0) {
            return NextResponse.json(
                {
                    data: [],
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

// Create Booking
export async function POST(req) {
    try {
        await connectMongoDB();
        const data = await req.json();
        // add zod schema validation
        const validatedData = bookingSchema.parse(data);

        const response = await bookingModel.create({
            ...validatedData,
            user: new ObjectId(validatedData?.user),
            hotel: new ObjectId(validatedData?.hotel),
        });

        // Add hotel data to users collection
        const user = await userModel.findByIdAndUpdate(
            validatedData?.user,
            {
                $push: { bookings: response?._id },
            },
            { new: true }
        );

        // add booking data to hotel collection
        const hotel = await hotelModel.findByIdAndUpdate(
            validatedData?.hotel,
            {
                $push: { bookings: response?._id },
            },
            { new: true }
        );

        return NextResponse.json(
            {
                success: true,
                message: "Booking Sucesss",
                data: {
                    booking: response,
                    user,
                    hotel,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            // handle zod error
            return handleZodError(error);
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
