const ErrorComponent = ({ message }) => {
    return (
        <div className='flex flex-col w-full items-center justify-center h-[500px] dark:bg-dark-primary dark:text-dark-textPrimary bg-gray-200 text-red-800 rounded'>
            <h1 className='text-4xl font-bold mb-4'>
                Oops! Something went wrong
            </h1>
            <p className='text-lg'>
                {message ||
                    "An unexpected error occurred. Please try again later."}
            </p>
            <button
                className='mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'
                onClick={() => window.location.reload()}>
                Refresh Page
            </button>
        </div>
    );
};

export default ErrorComponent;
