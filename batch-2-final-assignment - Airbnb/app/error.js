"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300 px-4'>
                <div className='max-w-lg text-center'>
                    <h1 className='text-3xl font-bold text-red-600'>
                        OOPS ! Something went wrong
                    </h1>
                    <p className='mt-4 text-gray-700 text-lg'>
                        {error?.message ||
                            "An unexpected error has occurred. Please try again later."}
                    </p>
                    <div className='mt-6 flex space-x-4 justify-center'>
                        <button
                            onClick={reset}
                            className='px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition'>
                            Try Again
                        </button>
                        <Link
                            href='/'
                            className='px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition'>
                            Go to Home
                        </Link>
                    </div>
                    <div className='mt-8 text-sm text-gray-500'>
                        If the issue persists, please contact support.
                    </div>
                </div>
            </div>
        </div>
    );
}
