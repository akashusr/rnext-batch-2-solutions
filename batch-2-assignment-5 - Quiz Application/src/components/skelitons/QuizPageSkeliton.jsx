const QuizPageSkeliton = () => {
    return (
        <div className='grid grid-cols-1 dark:bg-dark-primary  lg:grid-cols-3 gap-10 h-full animate-pulse'>
            <div className='lg:col-span-1 dark:bg-dark-secondary bg-white rounded-md p-6 h-full flex flex-col'>
                <div>
                    <div className='h-6 dark:bg-gray-800 bg-gray-200 rounded w-3/4 mb-4'></div>
                    <div className='h-4 dark:bg-gray-800 bg-gray-200 rounded w-5/6 mb-4'></div>

                    <div className='space-y-2'>
                        <div className='h-6 dark:bg-gray-800 bg-gray-200 rounded-full w-3/5'></div>
                        <div className='h-6 dark:bg-gray-800 bg-gray-200 rounded-full w-2/5'></div>
                        <div className='h-6 dark:bg-gray-800 bg-gray-200 rounded-full w-1/2'></div>
                    </div>
                </div>

                <div className='mt-auto flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-gray-200 mr-3'></div>
                    <div className='h-5 bg-gray-200 rounded w-1/3'></div>
                </div>
            </div>

            <div className='lg:col-span-2 bg-white dark:bg-dark-secondary'>
                <div className='bg-white dark:bg-dark-secondary p-6 rounded-md'>
                    <div className='h-5 dark:bg-gray-800 bg-gray-200 rounded w-3/4 mb-4'></div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='h-10 dark:bg-gray-800 bg-gray-200 rounded'></div>
                        <div className='h-10 dark:bg-gray-800 bg-gray-200 rounded'></div>
                        <div className='h-10 dark:bg-gray-800 bg-gray-200 rounded'></div>
                        <div className='h-10 dark:bg-gray-800 bg-gray-200 rounded'></div>
                    </div>

                    <div className='w-1/2 h-10 dark:bg-gray-800 bg-gray-200 rounded mt-6 ml-auto'></div>
                </div>
            </div>
        </div>
    );
};

export default QuizPageSkeliton;
