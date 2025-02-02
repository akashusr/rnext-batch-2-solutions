import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getImgURL } from "../../utils";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useResult from "../../hooks/useResult";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";

const bgImage = [1, 2, 3, 4, 5, 6, 7, 8];

// get dynamic image url
const UsersQuizsetCard = ({ quizSet }) => {
    const { auth } = useAuth();

    const [image] = useState(
        bgImage[Math.floor(Math.random() * bgImage.length)]
    );

    // handle quiz click
    const { getAttempts } = useUsersApiHandlers();

    //attempt query===============
    const { data } = useQuery({
        queryFn: getAttempts,
        queryKey: ["quizzes", quizSet.id, "attempts"],
        enabled: !!auth?.user, // enables when user logged in
    });

    //check that user already attemted this quiz or not
    const allAttempts = data?.data?.attempts;
    const isIattempted =
        allAttempts &&
        allAttempts.find((attemped) => attemped?.user?.id === auth?.user?.id);

    //get users result on this quiz
    const { totalCorrectMarks } = useResult(data?.data);

    return (
        <div className=' rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer '>
            <div className='absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4'>
                <h1 className=' text-5xl' style={{ fontFamily: "Jaro" }}>
                    {quizSet.title}
                </h1>
                <p className='mt-2 text-lg'>{quizSet.description}</p>
            </div>

            {!auth.accessToken ? (
                <Link to='/login'>
                    <div className='hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center'>
                        <div>
                            <h3 className='text-xl '>
                                Total Questions: {quizSet?.total_questions}
                            </h3>

                            <h1 className='text-3xl font-bold'>
                                Sign in To Take Quiz
                            </h1>
                        </div>
                    </div>
                </Link>
            ) : auth?.user?.role === "admin" ? (
                <div className='hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center'>
                    <div>
                        <h1 className='text-3xl font-bold'>Preview</h1>
                        <h3 className='text-xl'>
                            Total Questions: {quizSet?.total_questions}
                        </h3>
                        <h3 className='text-xl mb-4'>
                            Total Marks: {data?.data?.quiz?.total_marks}
                        </h3>
                        <Link
                            to={`/quizzes/${quizSet.id}`}
                            className=' rounded'>
                            <h4 className='text-lg underline underline-offset-2 hover:text-dark-textSecondary cursor-pointer font-bold'>
                                See the quiestions
                            </h4>
                        </Link>
                        <br />
                        <Link
                            to={`/leaderboard/${quizSet.id}`}
                            className=' rounded '>
                            <h4 className='text-lg underline underline-offset-2 hover:text-dark-textSecondary cursor-pointer font-bold'>
                                See the leaderboard
                            </h4>
                        </Link>
                    </div>
                </div>
            ) : auth?.user && isIattempted ? (
                <Link to={`/result/${quizSet.id}`}>
                    <div className='hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center'>
                        <div>
                            <h1 className='text-3xl font-bold'>
                                Already Participated
                            </h1>
                            <h3 className='text-xl'>
                                Total Questions: {quizSet?.total_questions}
                            </h3>
                            <h3 className='text-xl '>
                                Total Marks: {data?.data?.quiz?.total_marks}
                            </h3>

                            <p className='text text-xl'>
                                You got {totalCorrectMarks && totalCorrectMarks}{" "}
                                out of {data?.data?.quiz?.total_marks}
                            </p>
                            <Link
                                to={`/result/${quizSet.id}`}
                                className='text-xl'>
                                Click to view result
                            </Link>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link to={`/quizzes/${quizSet.id}`}>
                    <div className='hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center'>
                        <div>
                            <h3 className='text-xl'>
                                Total Questions: {quizSet?.total_questions}
                            </h3>
                            <h3 className='text-xl '>
                                Total Marks: {data?.data?.quiz?.total_marks}
                            </h3>
                            <h1 className='text-3xl font-bold'>
                                Ready To Take Quiz
                            </h1>
                        </div>
                    </div>
                </Link>
            )}

            <img
                src={getImgURL(`${image}.jpg`)}
                alt='JavaScript Hoisting'
                className='w-full h-full object-cover rounded mb-4 '
            />
        </div>
    );
};

export default UsersQuizsetCard;
