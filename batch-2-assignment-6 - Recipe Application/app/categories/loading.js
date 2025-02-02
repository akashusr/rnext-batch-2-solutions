import React from "react";

const loading = () => {
    return (
        <>
            <div className='h-10 bg-gray-300 rounded w-1/3 mb-12' />
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {/* Skeleton Item */}
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                {/* Repeat Skeleton Items */}
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
                <div className='text-center'>
                    <div className='w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto' />
                    <div className='h-4 bg-gray-300 rounded w-20 mx-auto' />
                </div>
            </div>
        </>
    );
};

export default loading;
