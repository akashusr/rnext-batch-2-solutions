"use server";

import { signIn } from "@/auth";
import { userModel } from "@/models/users-model";
import { connectMongoDB } from "@/service/mongoConnection";
import { redirect } from "next/dist/server/api-utils";

export async function registerWithCredentials(data) {
    await connectMongoDB();
    const found = await userModel.findOne({ email: data.email });
    if (found) {
        return {
            error: {
                message: "Email already exists",
            },
        };
    }
    if (!found) {
        const res = await fetch(`${process.env.API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            return {
                error: {
                    message: "Registration Failed",
                },
            };
        }
    }

    return { status: 200, message: "User Registered" };
}

export async function loginWithCredentials(data) {
    const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        return {
            error: {
                message: result?.error.message,
            },
        };
    }
    const res = await signIn("credentials", {
        id: result?.user?._id,
        name: result?.user?.name,
        email: result?.user?.email,
        password: result?.user?.password,
        accessToken: result?.tokens?.accessToken,
        refreshToken: result?.tokens?.refreshToken,
        redirect: false,
    });
    return {
        success: true,
        message: "logged in success",
    };
}

export async function loginWithGoogle() {
    await signIn("google", { redirectTo: "/" });
}

export async function redirectTo(url) {
    return redirect(url);
}
