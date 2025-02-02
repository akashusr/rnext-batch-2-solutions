export const revalidate = 0;
import { hotelModel } from "@/models/hotels-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { handleZodError } from "@/utils/zodUtils";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hotelSchema } from "../../_zod_schema/hotelSchema";

export async function GET(req) {
    try {
        await connectMongoDB();

        const { searchParams } = new URL(req.url);

        const query = searchParams.get("query") || "";
        const regexQuery = new RegExp(query, "i");

        let response = await hotelModel
            .find({ name: regexQuery })
            .select([
                "name",
                "thumbnail",
                "location",
                "bedrooms",
                "rate",
                "reviews",
            ])
            .populate({
                path: "reviews",
                model: reviewModel,
                select: "rating",
            })
            .populate({
                path: "host",
                model: userModel,
                select: "name image email",
            })
            .lean();

        let page = parseInt(searchParams.get("page") ?? 1);
        if (page === 0) {
            page = 1;
        }
        const limit = parseInt(searchParams.get("limit") ?? 8);
        const start = (page - 1) * limit;
        const totalPage = Math.ceil(response.length / limit);
        const totalData = response?.length || 0;
        const paginatedResponse = response
            .reverse()
            .slice(start, start + limit);

        if (paginatedResponse && paginatedResponse.length === 0) {
            return NextResponse.json(
                {
                    page,
                    limit,
                    totalPage,
                    totalData,
                    query,
                    data: [],
                    message: "No Data Found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                page,
                limit,
                totalPage,
                totalData,
                query,
                data: paginatedResponse,
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

export async function POST(req) {
    try {
        await connectMongoDB();
        const data = await req.json();
        // add zod schema validation
        const validatedData = hotelSchema.parse(data);
        const response = await hotelModel.create({
            ...validatedData,
            host: new ObjectId(validatedData?.host),
        });

        // Add hotel data to users collection
        await userModel.findByIdAndUpdate(
            validatedData?.host,
            {
                $push: { hotels: response?._id },
            },
            { new: true }
        );

        return NextResponse.json(
            {
                success: true,
                message: "hotel Created Sucesss",
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
