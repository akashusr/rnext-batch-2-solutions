const LeaderBoardPageSkeliton = () => {
    return (
        <div className='bg-white dark:bg-dark-primary rounded-lg shadow-lg w-full max-w-6xl overflow-hidden'>
            <div className='p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left Column Skeleton */}
                <div className='bg-primary rounded-lg p-6 text-white'>
                    <div className='flex flex-col items-center mb-6'>
                        <div className='w-20 h-20 rounded-full border-4 border-white bg-gray-300 mb-4 animate-pulse'></div>
                        <div className='h-6 w-32 bg-gray-300 rounded animate-pulse mb-2'></div>
                        <div className='h-4 w-20 bg-gray-300 rounded animate-pulse'></div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                        <div className='text-center'>
                            <div className='h-4 w-12 bg-gray-300 rounded animate-pulse mb-2 mx-auto'></div>
                            <div className='h-6 w-16 bg-gray-300 rounded animate-pulse mx-auto'></div>
                        </div>
                        <div className='text-center'>
                            <div className='h-4 w-12 bg-gray-300 rounded animate-pulse mb-2 mx-auto'></div>
                            <div className='h-6 w-16 bg-gray-300 rounded animate-pulse mx-auto'></div>
                        </div>
                        <div className='text-center'>
                            <div className='h-4 w-12 bg-gray-300 rounded animate-pulse mb-2 mx-auto'></div>
                            <div className='h-6 w-16 bg-gray-300 rounded animate-pulse mx-auto'></div>
                        </div>
                    </div>
                </div>

                {/* Right Column Skeleton */}
                <div>
                    <div className='h-6 w-48 bg-gray-300 rounded animate-pulse mb-4'></div>
                    <div className='h-4 w-32 bg-gray-300 rounded animate-pulse mb-6'></div>
                    <ul className='space-y-4'>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <li
                                    key={index}
                                    className='flex items-center justify-between space-x-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-gray-300 animate-pulse mr-4'></div>
                                        <div>
                                            <div className='h-4 w-24 bg-gray-300 rounded animate-pulse mb-2'></div>
                                            <div className='h-3 w-16 bg-gray-300 rounded animate-pulse'></div>
                                        </div>
                                    </div>
                                    <div className='h-4 w-10 bg-gray-300 rounded animate-pulse'></div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardPageSkeliton;
