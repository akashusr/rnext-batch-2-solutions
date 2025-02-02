const SkeletonLoader = () => {
    return (
        <div className='animate-pulse dark:bg-dark-secondary'>
            <div className='bg-white dark:bg-dark-primary p-4 w-72 rounded-lg shadow-sm border border-gray-200 group'>
                <div className='bg-gray-300 dark:bg-gray-800 h-8 w-8 mb-4 rounded'></div>
                <div className='bg-gray-300 dark:bg-gray-800 h-6 w-3/4 mb-2 rounded'></div>
                <div className='bg-gray-300 dark:bg-gray-800 h-4 w-full mb-2 rounded'></div>
                <div className='bg-gray-300 dark:bg-gray-800 h-4 w-5/6 rounded'></div>
            </div>
        </div>
    );
};

const QuizSkelitonCardAdmin = () => {
    return (
        <div className='flex gap-6'>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
        </div>
    );
};

export default QuizSkelitonCardAdmin;
