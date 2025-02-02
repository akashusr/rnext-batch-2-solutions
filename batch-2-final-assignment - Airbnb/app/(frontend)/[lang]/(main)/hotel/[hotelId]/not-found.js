"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const NotFound = () => {
    const { hotelId } = useParams();
    return (
        <div className='darkclass min-h-[calc(100vh-270px)]  flex flex-col items-center justify-center bg-white px-4'>
            <div className='max-w-md text-center'>
                <h1 className='text-9xl font-bold text-red-500'>404</h1>
                <h2 className='text-2xl font-semibold mt-4 text-gray-800'>
                    Oops! not found
                </h2>
                <p className='mt-2 text-gray-600'>
                    The Hotel with this id <b className='italic'>{hotelId}</b>{" "}
                    you’re looking for doesn’t exist or was removed.
                </p>
                <div className='mt-6'>
                    <Link
                        href='/'
                        className='px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition'>
                        See Others
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
