"use client";

import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-300px)] bg-gray-50'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-red-600'>
                    Opps! Something Went Wrong
                </h1>
                <p className='text-gray-700 mt-4'>
                    We&apos;re sorry, but an unexpected error occurred. Please
                    try again later.
                </p>
                <div className='mt-6 flex justify-center space-x-4'>
                    <button
                        onClick={() => reset()}
                        className='px-6 py-3 bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-gray-500 transition'>
                        Try again
                    </button>
                    <Link
                        href='/'
                        className='px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-300 transition'>
                        Go to Home page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
