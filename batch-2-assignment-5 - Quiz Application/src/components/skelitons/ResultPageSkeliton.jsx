const ResultPageSkeliton = () => {
    return (
        <div className='bg-background dark:bg-dark-primary dark:text-dark-textPrimary text-foreground min-h-screen'>
            <div className='flex min-h-screen overflow-hidden'>
                {/* Left side skeleton */}
                <div className='max-h-screen dark:bg-dark-primary overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative'>
                    <div className='animate-pulse'>
                        <div className='bg-white/20 h-10 w-32 mb-4 rounded'></div>
                        <div className='bg-white/20 h-8 w-64 mb-6 rounded'></div>
                        <div className='my-6 flex items-center'>
                            <div className='w-1/2'>
                                <div className='flex gap-6 my-6'>
                                    <div>
                                        <div className='bg-white/20 h-8 w-8 mb-1 rounded'></div>
                                        <div className='bg-white/10 h-4 w-12 rounded'></div>
                                    </div>
                                    <div>
                                        <div className='bg-white/20 h-8 w-8 mb-1 rounded'></div>
                                        <div className='bg-white/10 h-4 w-12 rounded'></div>
                                    </div>
                                    <div>
                                        <div className='bg-white/20 h-8 w-8 mb-1 rounded'></div>
                                        <div className='bg-white/10 h-4 w-12 rounded'></div>
                                    </div>
                                </div>
                                <div className='bg-white/20 h-10 w-40 rounded'></div>
                            </div>
                            <div className='w-1/2 bg-primary/80 dark:bg-gray-800 rounded-md border border-white/20 flex items-center p-4'>
                                <div className='flex-1'>
                                    <div className='bg-white/20 h-8 w-12 mb-1 rounded'></div>
                                    <div className='bg-white/10 h-4 w-24 rounded'></div>
                                </div>
                                <div className='h-20 w-20 bg-white/20 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side skeleton */}
                <div className='max-h-screen dark:bg-dark-secondary md:w-1/2 flex items-center justify-center h-full p-8'>
                    <div className='h-[calc(100vh-50px)] overflow-y-scroll'>
                        <div className='px-4 animate-pulse'>
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className='rounded-lg overflow-hidden shadow-sm mb-4 border border-gray-200'>
                                    {/* Skeleton for the question header */}
                                    <div className='bg-white dark:bg-dark-primary p-6 !pb-2'>
                                        <div className='flex justify-between items-center mb-4'>
                                            <div className='dark:bg-gray-800 bg-gray-200 h-6 w-3/4 rounded'></div>
                                        </div>
                                        {/* Skeleton for the answer options */}
                                        <div className='space-y-2'>
                                            {[...Array(4)].map((_, j) => (
                                                <div
                                                    key={j}
                                                    className='flex items-center space-x-3'>
                                                    <div className='dark:bg-gray-800 bg-gray-200 h-5 w-5 rounded-full'></div>
                                                    <div className='dark:bg-gray-800 bg-gray-200 h-5 w-full rounded'></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Skeleton for buttons below each question */}
                                    <div className='flex space-x-4 dark:bg-gray-800 bg-gray-100 px-6 py-2'>
                                        <div className='dark:bg-gray-800 bg-gray-200 h-6 w-24 rounded'></div>
                                        <div className='dark:bg-gray-800 bg-gray-200 h-6 w-24 rounded'></div>{" "}
                                        <div className='dark:bg-gray-800 bg-gray-200 h-6 w-24 rounded'></div>
                                        <div className='dark:bg-gray-800 bg-gray-200 h-6 w-24 rounded'></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPageSkeliton;
