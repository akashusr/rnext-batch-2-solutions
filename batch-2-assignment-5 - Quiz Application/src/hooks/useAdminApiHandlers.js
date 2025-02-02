import { server_base_url } from "../../constant";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdminApiHandlers = () => {
    const { api } = useAxios();
    const { auth } = useAuth();
    // get all quiz set
    const getAllQuizSet = async () => {
        try {
            const response = await api.get(`${server_base_url}/admin/quizzes`, {
                headers: {
                    Authorization: `Bearer ${auth?.accessToken}`,
                },
            });
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while fatching Quiz sets");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // create new quiz set
    const createQuizSet = async (formdata) => {
        try {
            const response = await api.post(
                `${server_base_url}/admin/quizzes/`,
                formdata,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );
            if (response?.status === 201) {
                return response.data;
            } else {
                throw new Error(
                    "There was an error while while creating the Quiz"
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // Update quiz set by Id
    const updateQuizSet = async (quizSetId, payload) => {
        try {
            const response = await api.patch(
                `${server_base_url}/admin/quizzes/${quizSetId}`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while Updating Quiz set");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // delete quiz set by id
    const deleteQuizSet = async (quizSetId) => {
        try {
            const response = await api.delete(
                `${server_base_url}/admin/quizzes/${quizSetId}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while deleting Quiz set");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    //Add Questions to Quisset by Id
    const addQuestion = async (quizsetId, payload) => {
        try {
            const response = await api.post(
                `${server_base_url}/admin/quizzes/${quizsetId}/questions`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );
            if (response.status === 201) {
                return response.data;
            } else {
                throw new Error("There was an error while adding question");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // delete question  by id
    const deleteQuestion = async (questionId) => {
        try {
            const response = await api.delete(
                `${server_base_url}/admin/questions/${questionId}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while deleting Question");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    // Update quiz set by Id
    const updateQuestion = async (questionId, payload) => {
        try {
            const response = await api.patch(
                `${server_base_url}/admin/questions/${questionId}`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("There was an error while Updating Quiz set");
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    return {
        getAllQuizSet,
        createQuizSet,
        updateQuizSet,
        deleteQuizSet,
        addQuestion,
        deleteQuestion,
        updateQuestion,
    };
};

export default useAdminApiHandlers;
