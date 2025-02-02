import { NextResponse } from "next/server";

export const handleZodError = (error) => {
    const fieldErrors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
    }, {});

    return NextResponse.json(
        {
            success: false,
            error: fieldErrors,
        },
        { status: 400 }
    );
};
