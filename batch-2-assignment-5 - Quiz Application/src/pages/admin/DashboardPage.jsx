import { useQuery } from "@tanstack/react-query";
import AdminsQuizsetCard from "../../components/admin-panel/AdminsQuizsetCard";
import CreateNewQuizButton from "../../components/admin-panel/CreateNewQuizButton";
import Greetings from "../../components/admin-panel/Greetings";
import QuizsetList from "../../components/admin-panel/QuizsetList";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import QuizSkelitonCardAdmin from "../../components/skelitons/QuizSkelitonCardAdmin";
import ErrorComponent from "../../components/common/ErrorComponent";
import { getSortedByUpdatedAt, getSortedQuizList } from "../../utils";
import NoData from "../../components/common/NoData";
import PageTitle from "../../components/common/PageTitle";

const DashboardPage = () => {
    const { getAllQuizSet } = useAdminApiHandlers();

    //fatch all quiz set by react query
    const { data, isLoading, error } = useQuery({
        queryFn: getAllQuizSet,
        queryKey: ["admin", "quizzes"],
    });

    const sortedData = getSortedByUpdatedAt(data);

    return (
        <main className='flex-grow  p-10 overflow-scroll max-h-screen'>
            <PageTitle title='Quizzes - Dashboard' />
            <Greetings />
            <QuizsetList>
                <CreateNewQuizButton />

                {isLoading ? (
                    <QuizSkelitonCardAdmin />
                ) : error ? (
                    <div className='error w-[700px] p-2 bg-gray-200'>
                        <ErrorComponent />
                    </div>
                ) : data && data.length > 0 ? (
                    getSortedQuizList(sortedData).map((quizCard) => (
                        <AdminsQuizsetCard
                            key={quizCard.id}
                            quizCard={quizCard}
                        />
                    ))
                ) : (
                    <div className='flex place-content-center'>
                        <NoData text={`You don't have added ant quiz yet.`} />
                    </div>
                )}
            </QuizsetList>
        </main>
    );
};

export default DashboardPage;
