const QuizSetEntryPageSkeliton = () => {
    return (
        <main className='md:flex-grow px-4 sm:px-6 dark:bg-dark-primary lg:px-8 py-8'>
            <div>
                {/* Breadcrumb */}
                <div className='text-sm mb-4'>
                    <div className='h-4 w-24 bg-gray-300 dark:bg-gray-800 rounded-md'></div>
                    <div className='h-4 w-16 bg-gray-300 dark:bg-gray-800 rounded-md mt-2'></div>
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12'>
                    {/* Left Column */}
                    <div>
                        <div className='h-8 w-48 bg-gray-300 dark:bg-gray-800 rounded-md mb-4'></div>
                        <div className='h-6 w-64 bg-gray-200 dark:bg-gray-700 rounded-md mb-4'></div>
                        <div className='h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded-md mb-4'></div>

                        <div className='space-y-4'>
                            <div className='h-6 w-40 bg-gray-300 dark:bg-gray-800 rounded-md mb-4'></div>
                            <div className='h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md'></div>
                            <div className='h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-md mt-4'></div>

                            {[1, 2, 3, 4].map((_, index) => (
                                <div
                                    key={index}
                                    className='flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse'>
                                    <div className='h-4 w-4 bg-gray-300 dark:bg-gray-800 rounded-full'></div>
                                    <div className='h-4 w-full bg-gray-300 dark:bg-gray-800 rounded-md'></div>
                                </div>
                            ))}

                            <div className='h-10 w-full bg-gray-300 dark:bg-gray-800 rounded-md mt-4'></div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-6'>
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className='rounded-lg overflow-hidden shadow-sm bg-white animate-pulse'>
                                <div className='bg-gray-200 dark:bg-gray-700 p-6'>
                                    <div className='h-6 w-80 bg-gray-300 dark:bg-gray-800 rounded-md mb-4'></div>
                                    <div className='space-y-2'>
                                        {[1, 2, 3, 4].map((_, idx) => (
                                            <div
                                                key={idx}
                                                className='flex items-center space-x-3'>
                                                <div className='h-4 w-4 bg-gray-300 dark:bg-gray-800 rounded-full'></div>
                                                <div className='h-4 w-40 bg-gray-300 dark:bg-gray-800 rounded-md'></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex space-x-4 px-6 py-2 bg-gray-100 dark:bg-gray-600'>
                                    <div className='h-6 w-20 bg-gray-300 dark:bg-gray-800 rounded-md'></div>
                                    <div className='h-6 w-24 bg-gray-300 dark:bg-gray-800 rounded-md'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default QuizSetEntryPageSkeliton;
