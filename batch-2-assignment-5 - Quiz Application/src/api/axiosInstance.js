import axios from "axios";
import { server_base_url } from "../../constant";

const api = axios.create({
    baseURL: server_base_url,
});
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response) {
            return Promise.reject(error.response.data.message);
        } else {
            error.message =
                "Something went wrong, Check your Internet Connection or try again later";
        }
        return Promise.reject(error);
    }
);
export { api };
