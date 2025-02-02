"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='flex flex-col  justify-center items-center place-content-center min-h-screen'>
                <h2 className='text-red-500 text-4xl'>
                    OPPS! Something went wrong!
                </h2>
                <button
                    className='bg-indigo-500 hover:bg-indigo-600 px-5 my-8 py-3 rounded'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }>
                    Try again
                </button>
            </div>
        </div>
    );
}
