"use client";
import notFoundSvg from "@/public/assets/notFound.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const NotFoundPage = () => {
    const { movieId } = useParams();
    return (
        <div className='flex min-w-screen items-center place-content-center justify-center min-h-screen text-gray-800'>
            <div className='mt-8'>
                <Image
                    src={notFoundSvg}
                    alt='Not Found Illustration'
                    className='max-w-full h-auto'
                />
            </div>
            <div className='text-center text-gray-200'>
                <h1 className='text-9xl font-bold '>404</h1>
                <h2 className='mt-4 text-3xl font-semibold'>Movie Not Found</h2>
                <p className='mt-2 text-lg text-gray-200'>
                    Sorry, your requested movie with this id{" "}
                    <b>
                        <q>{movieId}</q>{" "}
                    </b>
                    is not found.
                </p>
                <Link
                    href='/'
                    className='mt-6 bg-indigo-500 inline-block px-6 py-3 text-white rounded-lg shadow-md hover:bg-indigo-600 transition'>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
