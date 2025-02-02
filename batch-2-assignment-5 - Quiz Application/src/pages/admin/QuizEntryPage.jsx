import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/admin-panel/BreadCrumbs";
import QuizEntryList from "../../components/admin-panel/QuizEntryList";
import QuizsetInfo from "../../components/admin-panel/QuizsetInfo";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import { useQuery } from "@tanstack/react-query";
import QuizSetEntryPageSkeliton from "../../components/skelitons/QuizSetEntryPageSkeliton";
import ErrorComponent from "../../components/common/ErrorComponent";
import QuizForm from "../../components/admin-panel/forms/QuizForm";
import { useState } from "react";
import QuizEntry from "../../components/admin-panel/QuizEntry";
import { getSortedByUpdatedAt } from "../../utils";
import NoData from "../../components/common/NoData";
import PublishAction from "../../components/admin-panel/PublishAction";
import { motion } from "motion/react";
import { easeIn } from "motion";

const QuizEntryPage = () => {
    const { pathname } = useLocation();
    const quizsetId = pathname.split("/")[4];
    const { getAllQuizSet } = useAdminApiHandlers();
    const [dataToEdit, setDataToEdit] = useState(null);

    //get all quize sets
    const { isLoading, data, error } = useQuery({
        queryFn: getAllQuizSet,
        queryKey: ["admin", "quizzes"],
    });

    const thisQuizData = data && data?.find((quiz) => quiz.id === quizsetId);

    function handleDataToEdit(data) {
        setDataToEdit(data);
    }

    return isLoading ? (
        <QuizSetEntryPageSkeliton />
    ) : error ? (
        <ErrorComponent />
    ) : (
        <main className='md:flex-grow px-4 sm:px-6 lg:px-8 py-8'>
            <div>
                <BreadCrumbs />
                <div className=' dark:text-dark-textPrimary grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12'>
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            y: [-10, 0],
                            transition: { duration: 0.3, ease: easeIn },
                        }}
                        className=''>
                        <QuizsetInfo quiz={thisQuizData} />
                        <div className='space-y-4 mb-12'>
                            {!dataToEdit &&
                            thisQuizData?.status === "published" ? (
                                <div className='flex flex-col justify-center items-center p-4 mb-4 h-[300px] gap-3 text-gray-800 dark:bg-dark-secondary dark:text-dark-textPrimary bg-gray-200  rounded-lg'>
                                    <h2 className='text-2xl'>
                                        {" "}
                                        Published Quiz
                                    </h2>
                                    <span className='font-normal dark:text-dark-textSecondary text-lg text-pretty'>
                                        You Can not add question to a already
                                        published Quiz. If you really want to do
                                        this, you need to unpublish the quiz
                                        first.
                                    </span>
                                </div>
                            ) : (
                                <QuizForm
                                    quiz={thisQuizData}
                                    initialData={dataToEdit}
                                    setDataToEdit={setDataToEdit}
                                />
                            )}
                        </div>
                    </motion.div>
                    <PublishAction
                        status={thisQuizData?.status}
                        quiz={thisQuizData}
                    />
                    <QuizEntryList>
                        {thisQuizData?.Questions &&
                        thisQuizData?.Questions.length > 0 ? (
                            getSortedByUpdatedAt(thisQuizData.Questions).map(
                                (question, index) => (
                                    <QuizEntry
                                        quizSet={thisQuizData}
                                        key={question.id}
                                        index={index}
                                        question={question}
                                        handleDataToEdit={handleDataToEdit}
                                    />
                                )
                            )
                        ) : (
                            <div className='flex place-content-center'>
                                <NoData
                                    text={`You don't have added ant question yet.`}
                                />
                            </div>
                        )}
                    </QuizEntryList>
                </div>
            </div>
        </main>
    );
};

export default QuizEntryPage;
