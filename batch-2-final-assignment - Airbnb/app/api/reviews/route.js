import { hotelModel } from "@/models/hotels-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { handleZodError } from "@/utils/zodUtils";
import { NextResponse } from "next/server";
import { z } from "zod";
import { reviewSchema } from "../../_zod_schema/reviewSchema";

export async function GET(req) {
    try {
        await connectMongoDB();
        const response = await reviewModel.find().lean();
        const { searchParams } = new URL(req.url);

        if (searchParams.get("hotel")) {
            const hotelId = searchParams.get("hotel");
            const hotelReviews = await reviewModel
                .find({ hotel: hotelId })
                .populate({
                    path: "user",
                    model: userModel,
                    select: "name email image",
                })
                .lean();
            if (hotelReviews.length === 0) {
                return NextResponse.json(
                    {
                        data: [],
                        message: "No Data Found",
                    },
                    { status: 404 }
                );
            } else {
                return NextResponse.json(
                    {
                        success: true,
                        data: hotelReviews,
                    },
                    { status: 200 }
                );
            }
        } else {
            return NextResponse.json(
                {
                    success: true,
                    data: response,
                },
                { status: 200 }
            );
        }
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

export async function POST(req) {
    try {
        await connectMongoDB();
        const data = await req.json();
        const validatedData = reviewSchema.parse(data);
        const response = await reviewModel.create(validatedData);

        // update hotel rating
        await hotelModel.findByIdAndUpdate(validatedData.hotel, {
            $push: {
                reviews: response._id,
            },
        });

        // update review in user
        await userModel.findByIdAndUpdate(validatedData.user, {
            $push: {
                reviews: response._id,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Review added successfully",
                data: response,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
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
