"use server";
import { UserModel } from "@/models/userModel";
import { validate } from "./formValidators";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify, SignJWT } from "jose";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/service/mongoConnection";
import { revalidatePath } from "next/cache";

const key = new TextEncoder().encode(`${process.env.JWT_ACCESS_TOKEN_SECRET}`);
// manage user registration
export async function createUser(_, formData) {
    const entries = Object.fromEntries(formData);
    let errors = validate(entries);

    if (Object.keys(errors).length > 0) {
        return { error: errors };
    }

    const encodedPassWord = bcrypt.hashSync(entries.password, 10);
    const payload = {
        fname: entries.fname,
        lname: entries.lname,
        email: entries.email,
        password: encodedPassWord,
    };

    try {
        await connectMongoDB();
        const result = await UserModel.create(payload);
        return { success: true };
    } catch (err) {
        if (err.errorResponse.code === 11000) {
            return { error: { serverError: "Email already exists" } };
        }
    }
}

// manage user login
export async function loginUser(_, formData) {
    const credentials = Object.fromEntries(formData);
    let errors = validate(credentials);

    if (errors?.email || errors?.password) {
        return { error: errors };
    }

    try {
        await connectMongoDB();
        const foundUser = await UserModel.findOne({
            email: credentials?.email,
        });

        if (foundUser) {
            const isMatch = bcrypt.compareSync(
                credentials?.password,
                foundUser.password
            );
            if (isMatch) {
                const user = {
                    id: foundUser?.id,
                    name: foundUser?.fname + " " + foundUser?.lname,
                    email: foundUser?.email,
                };
                // Create the session
                const expires = new Date(Date.now() + 10 * 1000);
                const jwtToken = await encrypt({ user, expires });
                const cookieData = JSON.stringify({ user, token: jwtToken });

                // Save the session in a cookie
                cookies().set("session", cookieData, {
                    maxAge: "1h",
                    secure: true, // Secure in production
                    path: "/", // Make the cookie available for all paths}
                });

                return { success: true, data: user, token: jwtToken };
            } else {
                throw new Error("Invalid email or password");
            }
        } else {
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        return { error: { serverError: error.message } };
    }
}

//manage logout
export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });

    redirect("/");
}

//generate jwt token
export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(key);
}

// decode token
export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

// find is user loggedIn or Not
export async function isUserLoggedIn() {
    const token = cookies().get("session")?.value;
    if (!token) {
        return {
            user: null,
        };
    }
    const userInfo = decrypt(token);
    return userInfo;
}
