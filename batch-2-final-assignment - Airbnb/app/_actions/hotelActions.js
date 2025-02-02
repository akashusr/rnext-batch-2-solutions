"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const session = await auth();

// hotel create action
export async function createHotel(payload) {
    try {
        const host = session?.user?.id;
        const response = await fetch(`${process.env.API_BASE_URL}/hotels`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...payload, host }),
        });
        const result = await response.json();
        if (!response.ok) {
            throw result?.error;
        }
        revalidatePath("/");
        return {
            success: true,
            message: "Hotel Created SuccessFully",
            data: result?.data,
        };
    } catch (error) {
        return {
            error: true,
            errors: error,
        };
    }
}

// hotel delete action
export async function deleteHotel(hotelId) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/hotels/${hotelId}`,
        {
            method: "DELETE",
        }
    );
    if (response?.ok) {
        revalidatePath("/manage-hotels");
        return {
            success: true,
            message: "Deleted SuccessFully",
        };
    } else {
        return {
            success: false,
            error: "Eroor on Delete",
        };
    }
}

// hotel update action

export async function updateHotel(payload) {
    try {
        const host = session?.user?.id;
        const response = await fetch(
            `${process.env.API_BASE_URL}/hotels/${payload?.hotelId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...payload, host }),
            }
        );
        const result = await response.json();
        if (!response.ok) {
            throw result?.error;
        }
        revalidatePath("/");
        return {
            success: true,
            message: "Hotel Updated SuccessFully",
            data: result?.data,
        };
    } catch (error) {
        return {
            error: true,
            errors: error,
        };
    }
}
