"use server";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createReview(payload) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
                next: {
                    revalidate: 0,
                },
            }
        );

        const result = await response.json();
        if (!response.ok) {
            throw result?.error;
        }
        revalidatePath(`/hotel/${payload?.hotel}`);
        return {
            success: true,
            message: "Review Added SuccessFully",
            data: result?.data,
        };
    } catch (error) {
        return {
            success: false,
            errors: error,
        };
    }
}

// review delete action
export async function deleteReview(payload) {
    const session = await auth();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews/${payload?.reviewId}`,
        {
            method: "DELETE",
            body: JSON.stringify({
                user: session?.user?.id,
                hotel: payload?.hotelId,
            }),
        }
    );
    const result = await response.json();

    if (response?.ok) {
        revalidatePath(`/hotel/${payload?.hotelId}`);
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

export async function updateReview(payload) {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/reviews/${payload?.reviewId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );
        const result = await response.json();
        if (!response.ok) {
            throw result?.error;
        }
        revalidatePath(`/hotel/${payload?.hotel}`);
        return {
            success: true,
            message: "Review Updated SuccessFully",
            data: result?.data,
        };
    } catch (error) {
        return {
            error: true,
            errors: error,
        };
    }
}
