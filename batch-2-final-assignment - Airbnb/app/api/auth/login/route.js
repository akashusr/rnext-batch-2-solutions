import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { handleZodError } from "@/utils/zodUtils";
import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { z } from "zod";
import { loginSchema } from "../../../_zod_schema/loginSchema";

const generateToken = (user, secret, expiresIn) => {
    return jwt.sign(
        { id: user._id.toString(), name: user.name, email: user.email },
        secret,
        { expiresIn }
    );
};

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Parse and validate request data
        const data = await req.json();
        const validatedData = loginSchema.parse(data);

        // Find user by email
        const user = await userModel.findOne({ email: validatedData.email });
        if (!user) {
            throw new Error("Email or password is incorrect");
        }

        // Verify password
        const isPasswordValid = compareSync(
            validatedData.password,
            user.password
        );
        if (!isPasswordValid) {
            throw new Error("Email or password is incorrect");
        }

        // Generate tokens
        const accessToken = generateToken(
            user,
            process.env.JWT_ACCESS_TOKEN_SECRET,
            process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        );
        const refreshToken = generateToken(
            user,
            process.env.JWT_REFRESH_TOKEN_SECRET,
            process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
        );

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Login Successful!",
                user,
                tokens: {
                    accessToken,
                    refreshToken,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return handleZodError(error);
        }

        // Handle other errors
        return NextResponse.json(
            {
                success: false,
                error: {
                    message: error.message,
                },
            },
            { status: 500 }
        );
    }
}
