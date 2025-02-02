import axios from "axios";
import { server_base_url } from "../../constant";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const api = axios.create({
        baseURL: server_base_url,
    });

    useEffect(() => {
        // Request interceptor
        // Intercept the request before sent to the server and set Acsses token to the Header.
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const accessToken = auth?.accessToken;

                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error) // Simplified error rejection.
        );

        // Response interceptor
        // check the response, if response is okay then return the response, but if error while eccesToken expired, call new token by using refresh token and set to the request header and retry the request.

        // if refresh token expires return user to the login page and clear the auth from state and localstorage

        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;
                        if (!refreshToken) {
                            // check for missing refreshToken.
                            throw new Error("Refresh token is missing");
                        }

                        const response = await axios.post(
                            `${server_base_url}/auth/refresh-token`,
                            { refreshToken }
                        );
                        console.log(`generated new accessToken`, response);

                        const {
                            accessToken: newAccessToken,
                            refreshToken: newRefreshToken,
                        } = response.data?.data; // Destructured response.

                        const updatedAuth = {
                            ...auth,
                            accessToken: newAccessToken,
                            refreshToken: newRefreshToken,
                        };

                        setAuth(updatedAuth);
                        localStorage.setItem(
                            "auth",
                            JSON.stringify(updatedAuth)
                        );

                        //retry the request with new Token
                        originalRequest.headers = originalRequest.headers || {};
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axios(originalRequest);
                    } catch (err) {
                        // if refresh token fail or expired, return user to the login page
                        console.log(`refresh token fails logouting....`);
                        setAuth({});
                        navigate("/login", { replace: true });
                        localStorage.removeItem("auth");

                        return Promise.reject(err);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [auth, navigate, setAuth]);

    return { api };
};
export default useAxios;
