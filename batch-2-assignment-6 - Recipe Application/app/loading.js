import React from "react";

const loading = () => {
    return (
        <>
            <section class='mb-16 bg-orange-50'>
                <div class='grid md:grid-cols-2 gap-8 items-center'>
                    <div class='animate-pulse'>
                        <div class='w-full h-[450px] bg-gray-300 rounded-lg'></div>
                    </div>
                    <div class='animate-pulse'>
                        <div class='h-10 bg-gray-300 rounded w-3/4 mb-4'></div>
                        <div class='h-6 bg-gray-300 rounded w-full mb-4'></div>
                        <div class='h-6 bg-gray-300 rounded w-2/3 mb-4'></div>
                        <div class='h-10 bg-gray-300 rounded w-1/3'></div>
                    </div>
                </div>
            </section>

            <section class='mb-16' id='super_delicious'>
                <h2 class='text-3xl font-bold mb-8'>Super Delicious</h2>
                <div class='grid md:grid-cols-3 gap-8'>
                    <div class='animate-pulse'>
                        <div class='w-full h-[300px] bg-gray-300 rounded-lg mb-4'></div>
                        <div class='h-6 bg-gray-300 rounded w-3/4 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/4'></div>
                    </div>
                    <div class='animate-pulse'>
                        <div class='w-full h-[300px] bg-gray-300 rounded-lg mb-4'></div>
                        <div class='h-6 bg-gray-300 rounded w-3/4 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/4'></div>
                    </div>
                    <div class='animate-pulse'>
                        <div class='w-full h-[300px] bg-gray-300 rounded-lg mb-4'></div>
                        <div class='h-6 bg-gray-300 rounded w-3/4 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
                        <div class='h-4 bg-gray-300 rounded w-1/4'></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default loading;
