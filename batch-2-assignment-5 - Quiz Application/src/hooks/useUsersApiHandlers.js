import { server_base_url } from "../../constant";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUsersApiHandlers = () => {
    const { api } = useAxios();
    const { auth } = useAuth();

    //get all quiz set
    const getQuizsetList = async () => {
        try {
            const response = await api.get(`${server_base_url}/quizzes`, {
                headers: {
                    Authorization: `Bearer ${auth?.accessToken}`,
                },
            });
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(
                    "There was an error while fatching quizset list"
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    //get all attempts by user
    const getAttempts = async ({ queryKey }) => {
        try {
            const response = await api.get(
                `${server_base_url}/quizzes/${queryKey[1]}/attempts`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while fatching result");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // get quizset by Id
    const getQuizById = async ({ queryKey }) => {
        try {
            const response = await api.get(
                `${server_base_url}/quizzes/${queryKey[1]}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // submit quiz attempt
    const submitQuizAnswer = async (answers, quizId) => {
        try {
            const response = await api.post(
                `${server_base_url}/quizzes/${quizId}/attempt`,
                { answers },
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while submitting the quiz");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    return { getQuizsetList, getAttempts, getQuizById, submitQuizAnswer };
};

export default useUsersApiHandlers;
