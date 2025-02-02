const QuizsetInfo = ({ quiz }) => {
    return (
        <>
            <div className='flex justify-between dark:text-dark-textPrimary'>
                <h2 className='text-3xl font-bold mb-4'>{quiz?.title}</h2>
                {quiz?.status === "draft" && (
                    <h4 className='status mr-12 bg-gray-500/80 text-white h-6 px-4 rounded-full align-middle'>
                        Draft
                    </h4>
                )}
                {quiz?.status === "published" && (
                    <h4 className='status mr-12 bg-green-500/80 text-white h-6 px-2 rounded-full align-middle'>
                        Published
                    </h4>
                )}
            </div>
            <div className='bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4'>
                Total number of questions : {quiz?.Questions?.length}
            </div>
            <p className='text-gray-600 mb-4 '>{quiz?.description}</p>
        </>
    );
};

export default QuizsetInfo;
