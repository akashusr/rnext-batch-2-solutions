import { hotelModel } from "@/models/hotels-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { NextResponse } from "next/server";
import { z } from "zod";
import { reviewSchema } from "../../../_zod_schema/reviewSchema";

export async function DELETE(req, { params: { reviewId } }) {
    try {
        await connectMongoDB();
        const { user, hotel } = await req.json();
        const response = await reviewModel.findByIdAndDelete(reviewId);
        if (response === null) {
            return NextResponse.json(
                {
                    success: false,
                    error: "This review is not found",
                },
                {
                    status: 404,
                }
            );
        }

        // update hotel rating
        await hotelModel.findByIdAndUpdate(hotel, {
            $pull: {
                reviews: reviewId,
            },
        });

        // update review in user
        await userModel.findByIdAndUpdate(user, {
            $pull: {
                reviews: reviewId,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Review deleted successfully",
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

export async function PATCH(req, { params: { reviewId } }) {
    try {
        await connectMongoDB();
        const data = await req.json();
        const validatedData = reviewSchema.parse(data);
        const response = await reviewModel.findByIdAndUpdate(
            reviewId,
            {
                ...validatedData,
            },
            { new: true }
        );

        if (response === null) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No review found to update",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "review updated successfully",
                data: response,
            },
            {
                status: 200,
            }
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
