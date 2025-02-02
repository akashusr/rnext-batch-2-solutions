import React from "react";

const HomePageSkelitons = () => {
    return (
        <>
            <main className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-center animate-pulse'>
                <div className='lg:col-span-2 space-y-4'>
                    <div className='h-10 bg-gray-300 rounded w-3/4'></div>
                    <div className='h-6 bg-gray-300 rounded w-2/4'></div>
                </div>
                <div className='lg:col-span-2'>
                    <div className='relative rounded-lg overflow-hidden h-[550px] bg-gray-300'>
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4'>
                            <div className='text-right'>
                                <span className='bg-gray-400 text-transparent px-2 py-1 rounded text-sm'>
                                    &nbsp;
                                </span>
                            </div>
                            <div>
                                <div className='h-6 bg-gray-400 rounded w-16'></div>
                                <div className='h-4 bg-gray-400 rounded w-24 mt-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 h-4 bg-gray-300 rounded w-3/4'></div>
                </div>
            </main>

            <section className='mt-12 space-y-4 animate-pulse'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='h-6 bg-gray-300 rounded w-1/4'></div>
                    <div className='h-8 bg-gray-300 rounded w-20'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {Array(8)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className='rounded-lg overflow-hidden bg-gray-300 h-56'></div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default HomePageSkelitons;
