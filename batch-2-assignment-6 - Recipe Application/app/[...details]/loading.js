import React from "react";

const loading = () => {
    return (
        <>
            <article>
                {/* Title */}
                <div className='h-10 bg-gray-300 rounded w-3/4 mb-6' />
                {/* Author Section */}
                <div className='flex items-center space-x-4 mb-6'>
                    <div className='w-8 h-8 bg-gray-300 rounded-full' />
                    <div className='h-4 bg-gray-300 rounded w-24' />
                    <div className='h-4 bg-gray-300 rounded w-6' />
                    <div className='h-4 bg-gray-300 rounded w-16' />
                    <div className='h-4 bg-gray-300 rounded w-6' />
                    <div className='h-4 bg-gray-300 rounded w-20' />
                </div>
                {/* Buttons */}
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex space-x-4'>
                        <div className='h-10 bg-gray-300 rounded-full w-24' />
                        <div className='h-10 bg-gray-300 rounded-full w-24' />
                    </div>
                </div>
                {/* Image */}
                <div className='w-full h-64 bg-gray-300 rounded-lg mb-8' />
                {/* Paragraphs */}
                <div className='space-y-4'>
                    <div className='h-4 bg-gray-300 rounded w-full' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                    <div className='h-4 bg-gray-300 rounded w-3/4' />
                </div>
                {/* Subheadings */}
                <div className='h-6 bg-gray-300 rounded w-2/3 my-8' />
                <div className='space-y-4'>
                    <div className='h-4 bg-gray-300 rounded w-full' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                </div>
                <div className='h-6 bg-gray-300 rounded w-2/3 my-8' />
                <div className='space-y-4'>
                    <div className='h-4 bg-gray-300 rounded w-full' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                </div>
                {/* Blockquote */}
                <div className='h-10 bg-gray-300 rounded w-3/4 mx-auto my-12' />
                <div className='h-4 bg-gray-300 rounded w-1/4 mx-auto' />
                {/* Another Subheading */}
                <div className='h-6 bg-gray-300 rounded w-2/3 my-8' />
                <div className='space-y-4'>
                    <div className='h-4 bg-gray-300 rounded w-full' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                </div>
                {/* Another Image */}
                <div className='w-full h-64 bg-gray-300 rounded-lg mb-8 max-w-xl mx-auto' />
                <div className='space-y-4'>
                    <div className='h-4 bg-gray-300 rounded w-full' />
                    <div className='h-4 bg-gray-300 rounded w-5/6' />
                </div>
            </article>
            {/* Related Section */}
            <section className='my-12'>
                <div className='h-6 bg-gray-300 rounded w-2/3 mb-8' />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    <div>
                        <div className='w-full h-60 bg-gray-300 rounded-lg mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                    </div>
                    <div>
                        <div className='w-full h-60 bg-gray-300 rounded-lg mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                    </div>
                    <div>
                        <div className='w-full h-60 bg-gray-300 rounded-lg mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                    </div>
                    <div>
                        <div className='w-full h-60 bg-gray-300 rounded-lg mb-2' />
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default loading;
