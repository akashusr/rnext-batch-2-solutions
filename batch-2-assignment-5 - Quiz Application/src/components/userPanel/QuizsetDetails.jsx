import UserProfileDisplayer from "../common/UserProfileDisplayer";
const QuizsetDetails = ({ quizset, answers }) => {
    const totalAnswers = Object.keys(answers).length;
    return (
        <div className='lg:col-span-1 dark:bg-dark-secondary bg-white rounded-md p-6 h-full flex flex-col'>
            <div>
                <h2 className='dark:text-dark-textPrimary text-4xl font-bold mb-4'>
                    {quizset?.title}
                </h2>

                <p className='dark:text-dark-textPrimary text-gray-600 mb-4'>
                    {quizset?.description}
                </p>
                <div className='flex flex-col'>
                    <div className='w-fit bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2'>
                        Total number of questions :{" "}
                        {quizset?.stats.total_questions}
                    </div>
                    <div className='w-fit bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2'>
                        Participation : {totalAnswers}
                    </div>
                    <div className='w-fit bg-gray-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2'>
                        Remaining :
                        {quizset?.stats.total_questions - totalAnswers}
                    </div>
                </div>
            </div>
            <UserProfileDisplayer textColor='text-primary' />
        </div>
    );
};

export default QuizsetDetails;
