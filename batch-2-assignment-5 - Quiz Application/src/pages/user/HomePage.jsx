import { useQuery } from "@tanstack/react-query";
import QuizListSection from "../../components/userPanel/QuizListSection";
import UsersQuizsetCard from "../../components/userPanel/UsersQuizsetCard";
import UserWelcomeSection from "../../components/userPanel/UserWelcomeSection";
import useAuth from "../../hooks/useAuth";
import QuizCardSkeleton from "../../components/skelitons/QuizCardSkeliton";
import ErrorComponent from "../../components/common/ErrorComponent";
import useUsersApiHandlers from "../../hooks/useUsersApiHandlers";
import PageTitle from "../../components/common/PageTitle";

const HomePage = () => {
    const { auth } = useAuth();

    const { getQuizsetList } = useUsersApiHandlers();

    //get quiz list by React Query
    const { isLoading, data, error } = useQuery({
        queryFn: getQuizsetList,
        queryKey: ["quizzes"],
    });
    const quizList = data?.data;

    return (
        <>
            <PageTitle title='Quizzes - Home' />
            {auth?.user && <UserWelcomeSection />}
            <main className='bg-white dark:bg-dark-secondary p-6 rounded-md h-full'>
                <section>
                    <h3 className='text-2xl dark:text-dark-textSecondary font-bold mb-6'>
                        Participate In Quizees
                    </h3>

                    {isLoading ? (
                        <QuizCardSkeleton />
                    ) : error ? (
                        <ErrorComponent />
                    ) : (
                        <QuizListSection>
                            {quizList &&
                                quizList.length > 0 &&
                                quizList.map((quizSet) => (
                                    <UsersQuizsetCard
                                        key={quizSet?.id}
                                        quizSet={quizSet}
                                    />
                                ))}
                        </QuizListSection>
                    )}
                </section>
            </main>
        </>
    );
};

export default HomePage;
