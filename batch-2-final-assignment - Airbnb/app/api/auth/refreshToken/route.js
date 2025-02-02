import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function POST(req) {
    await connectMongoDB();
    try {
        const data = await req.json();
        const refreshToken = data.refreshToken;
        if (!refreshToken) {
            throw new Error("Refresh token is required");
        }
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_TOKEN_SECRET
        );

        if (!decoded) {
            throw new Error("Invalid refresh token");
        }

        const user = await userModel.findById(decoded.id);

        if (!user) {
            throw new Error("User not found");
        }

        // generate new tokens
        const accessToken = jwt.sign(
            { id: user?._id.toString(), name: user?.name, email: user?.email },
            process.env.JWT_ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN }
        );
        const newRefreshToken = jwt.sign(
            { id: user?.id.toString(), name: user?.name, email: user?.email },
            process.env.JWT_REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN }
        );

        return NextResponse.json(
            {
                success: true,
                tokens: {
                    accessToken,
                    refreshToken: newRefreshToken,
                },
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
            { status: 400 }
        );
    }
}
