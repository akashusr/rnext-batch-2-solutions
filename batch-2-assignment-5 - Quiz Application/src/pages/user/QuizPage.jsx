import QuizsetDetails from "../../components/userPanel/QuizsetDetails";
import QuizArea from "../../components/userPanel/QuizArea";
import Quiz from "../../components/userPanel/Quiz";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ErrorComponent from "../../components/common/ErrorComponent";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import PageTitle from "../../components/common/PageTitle";
import QuizPageSkeliton from "../../components/skelitons/QuizPageSkeliton";
import { motion } from "motion/react";
import { easeIn } from "motion";
import useAuth from "../../hooks/useAuth";

const QuizPage = () => {
    const { auth } = useAuth();
    const { pathname } = useLocation();
    const quizsetId = pathname.split("/")[2];
    const [answers, setAnswers] = useState({});
    const { getQuizById } = useUsersApiHandlers();
    const navigate = useNavigate();

    // get quiz by id using react query
    const { isLoading, data, error } = useQuery({
        queryFn: getQuizById,
        queryKey: ["quizzes", quizsetId],
    });

    const isAttemped = data?.data?.user_attempt?.attempted;
    console.log(isAttemped);

    if (auth?.user?.role !== "admin") {
        isAttemped && navigate(`/result/${quizsetId}`);
    }

    return (
        <motion.main
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='max-w-8xl mx-auto lg:h-[calc(100vh-10rem)]'>
            <PageTitle title='Quizzes - Quiz' />

            {isLoading ? (
                <QuizPageSkeliton />
            ) : error ? (
                <ErrorComponent />
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 h-full '>
                    <QuizsetDetails answers={answers} quizset={data?.data} />
                    <QuizArea>
                        <Quiz
                            answers={answers}
                            setAnswers={setAnswers}
                            quiz={data?.data}
                        />
                    </QuizArea>
                </div>
            )}
        </motion.main>
    );
};

export default QuizPage;
