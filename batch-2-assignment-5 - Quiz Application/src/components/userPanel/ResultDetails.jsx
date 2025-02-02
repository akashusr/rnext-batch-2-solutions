const ResultDetails = ({ children }) => {
    return (
        <div className='max-h-screen dark:bg-dark-secondary flex-1 lg:w-1/2  flex items-center justify-center h-full p-8'>
            <div className='h-[calc(100vh-50px)] overflow-y-scroll '>
                <div className='px-4'>{children}</div>
            </div>
        </div>
    );
};

export default ResultDetails;
