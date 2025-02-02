import React from "react";

const loading = () => {
    return (
        <>
            <div className='flex justify-between items-center mb-8'>
                <div>
                    {/* Title Skeleton */}
                    <div className='h-8 bg-gray-300 rounded w-2/3 mb-4' />
                    {/* Subtitle Skeleton */}
                    <div className='h-4 bg-gray-300 rounded w-1/2 mb-2' />
                    {/* Description Skeleton */}
                    <div className='h-4 bg-gray-300 rounded w-full mb-1' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* Card Skeleton */}
                <div className='bg-white rounded-lg shadow-md'>
                    <div className='w-full h-48 bg-gray-300' />
                    <div className='p-4'>
                        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-1/2' />
                    </div>
                </div>
                {/* Repeat Card Skeleton for the number of items */}
                <div className='bg-white rounded-lg shadow-md'>
                    <div className='w-full h-48 bg-gray-300' />
                    <div className='p-4'>
                        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-1/2' />
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md'>
                    <div className='w-full h-48 bg-gray-300' />
                    <div className='p-4'>
                        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-1/2' />
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md'>
                    <div className='w-full h-48 bg-gray-300' />
                    <div className='p-4'>
                        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-1/2' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default loading;
