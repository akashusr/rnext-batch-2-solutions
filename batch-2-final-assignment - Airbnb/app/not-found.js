import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
            <div className='max-w-md text-center'>
                <h1 className='text-9xl font-bold text-red-500'>404</h1>
                <h2 className='text-2xl font-semibold mt-4 text-gray-800'>
                    Oops! Page not found
                </h2>
                <p className='mt-2 text-gray-600'>
                    The page you’re looking for doesn’t exist or was removed.
                    Please check the URL or go back to the homepage.
                </p>
                <div className='mt-6'>
                    <Link
                        href='/'
                        className='px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition'>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
