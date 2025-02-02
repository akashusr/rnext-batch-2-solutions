const QuizCardSkeleton = () => {
    return (
        <main className='bg-white dark:bg-dark-secondary dark:text-dark-textPrimary  p-6 rounded-md h-full'>
            <section>
                {/* Skeleton Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {[1, 2, 3, 4].map((key) => (
                        <div
                            key={key}
                            className='rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative animate-pulse   bg-gray-100 dark:bg-dark-primary'>
                            <div className='w-full h-[200px]  dark:bg-gray-800  bg-gray-300 rounded-t-lg'></div>
                            <div className=''>
                                <div className='h-6 mt-3  dark:bg-gray-800  bg-gray-300 rounded mb-2'></div>
                                <div className='h-4   dark:bg-gray-800 bg-gray-300 rounded  mb-4'></div>
                                <div className='h-12  dark:bg-gray-800  bg-gray-300 rounded '></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default QuizCardSkeleton;
