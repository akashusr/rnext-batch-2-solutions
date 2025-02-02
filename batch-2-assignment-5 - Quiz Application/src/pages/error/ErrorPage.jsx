import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <h1> OPPS ! There was an error || {error.message}</h1>
        </>
    );
};

export default ErrorPage;
