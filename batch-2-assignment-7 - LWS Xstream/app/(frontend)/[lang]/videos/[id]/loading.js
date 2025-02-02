import React from "react";

export default function loading() {
    return (
        <main className='flex flex-col lg:flex-row gap-6 p-4 animate-pulse'>
            {/* Video Section Skeleton */}
            <div className='lg:w-3/4'>
                <div className='relative bg-gray-300 w-full h-[500px] rounded'></div>
                <div className='mt-4 space-y-2'>
                    <div className='bg-gray-300 h-8 w-3/4 rounded'></div>
                    <div className='flex items-center space-x-4 mt-2'>
                        <div className='bg-gray-300 w-10 h-10 rounded-full'></div>
                        <div className='bg-gray-300 w-1/3 h-4 rounded'></div>
                        <div className='ml-auto bg-gray-300 w-24 h-8 rounded-full'></div>
                    </div>
                </div>
            </div>

            {/* Recommendations Section Skeleton */}
            <div className='lg:w-1/4'>
                <div className='bg-gray-300 h-6 w-1/2 mb-4 rounded'></div>
                <div className='space-y-4'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='flex items-start space-x-4'>
                            <div className='bg-gray-300 w-30 h-20 rounded'></div>
                            <div className='flex-1 space-y-2'>
                                <div className='bg-gray-300 h-4 w-3/4 rounded'></div>
                                <div className='bg-gray-300 h-4 w-1/2 rounded'></div>
                                <div className='bg-gray-300 h-4 w-1/4 rounded'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
