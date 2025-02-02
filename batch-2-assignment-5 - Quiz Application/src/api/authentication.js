import { server_base_url } from "../../constant";
import { api } from "./axiosInstance";

// handle login
const login = async (credentials) => {
    try {
        const response = await api.post(
            `${server_base_url}/auth/login`,
            credentials
        );
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

// handle registration

const registration = async (formData) => {
    try {
        const response = await api.post(
            `${server_base_url}/auth/register`,
            formData
        );

        if (response?.status === 201) {
            return response.data;
        } else {
            throw new Error(
                "There was an Error while register, Please try again later"
            );
        }
    } catch (error) {
        throw new Error(error);
    }
};

export { login, registration };
