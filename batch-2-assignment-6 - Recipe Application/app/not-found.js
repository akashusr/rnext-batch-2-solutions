import Link from "next/link";

export default function NotFound() {
    return (
        <div className='text-center min-h-[calc(100vh-300px)] flex flex-col justify-center items-center'>
            <h1 className='text-9xl font-bold text-indigo-600'>404</h1>
            <h2 className='text-3xl font-semibold text-gray-800 mt-4'>
                Page Not Found
            </h2>
            <p className='text-gray-600 mt-2'>
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <Link
                href='/'
                className='mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-500 transition'>
                Go Back Home
            </Link>
        </div>
    );
}
