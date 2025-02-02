import { Link } from "react-router-dom";
import ProgressReport from "./ProgressReport";
import useResult from "../../hooks/useResult";
import useAuth from "../../hooks/useAuth";

const ResultSummery = ({ data, isInPerviewMode }) => {
    const { auth } = useAuth();
    const { myCorrectAnswers, myIncorrectAnswers, totalCorrectMarks } =
        useResult(data);

    return (
        <div className='max-h-screen flex-1 overflow-hidden lg:flex pt-[100px] lg:pt-0  bg-primary dark:bg-dark-primary  flex-col justify-center p-12 relative'>
            {auth?.user?.role === "admin" && (
                <div className='dark:text-dark-textPrimary fixed max-w-96 top-20 bg-yellow-600/40 rounded text-pretty p-2 text-gray-800'>
                    <h1>
                        <span className='font-bold text-lg'>
                            {" "}
                            ℹ️ Information:
                        </span>{" "}
                        {"  "}You are in a <u>Test/Preview</u> mode.
                    </h1>
                    <h4 className='defination'>
                        You can test quiz by perticipating as real user but your
                        submittion will not store in database and your
                        leaderboard will not generate.
                    </h4>
                </div>
            )}

            <div>
                <div className='text-white dark:text-dark-textPrimary'>
                    <div>
                        <h2 className='text-4xl font-bold mb-2'>
                            {data?.quiz?.title}
                        </h2>
                        <p>{data?.quiz?.description}</p>
                    </div>
                    <div className='my-6 flex flex-col sm:flex-row items-center  '>
                        <div className='w-1/2 order-2 sm:order-1 '>
                            <div className='flex gap-6 my-6'>
                                <div>
                                    <p className='font-semibold text-2xl my-0'>
                                        {data?.quiz?.total_questions}
                                    </p>
                                    <p className='text-gray-300'>Questions</p>
                                </div>
                                {!isInPerviewMode && (
                                    <div>
                                        <p className='font-semibold text-2xl my-0'>
                                            {myCorrectAnswers.length}
                                        </p>
                                        <p className='text-gray-300'>Correct</p>
                                    </div>
                                )}
                                {!isInPerviewMode && (
                                    <div>
                                        <p className='font-semibold text-2xl my-0'>
                                            {myIncorrectAnswers.length}
                                        </p>
                                        <p className='text-gray-300'>Wrong</p>
                                    </div>
                                )}
                            </div>
                            <Link
                                to={`/leaderboard/${data?.quiz?.id}`}
                                className=' bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white'>
                                View Leaderboard
                            </Link>
                        </div>
                        {!isInPerviewMode && (
                            <ProgressReport
                                totalCorrectMarks={totalCorrectMarks}
                                totalMarks={data?.quiz?.total_marks}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultSummery;
