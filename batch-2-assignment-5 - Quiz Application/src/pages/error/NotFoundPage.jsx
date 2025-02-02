import { Link, useLocation } from "react-router-dom";
import notFoundSvg from "../../assets/notFound.svg";
const NotFoundPage = () => {
    const { pathname } = useLocation();
    const homeRoute = pathname.includes("/dashboard")
        ? "/admin/dashboard/quizzes"
        : "/";
    return (
        <div className='flex dark:text-dark-textPrimary dark:bg-dark-primary  min-w-screen items-center place-content-center justify-center min-h-screen bg-gray-100 text-gray-800'>
            <div className='mt-8'>
                <img
                    src={notFoundSvg}
                    alt='Not Found Illustration'
                    className='max-w-full h-auto'
                />
            </div>
            <div className='text-center'>
                <h1 className='text-9xl font-bold text-primary dark:text-dark-textPrimary'>
                    404
                </h1>
                <h2 className='mt-4 text-3xl font-semibold'>Page Not Found</h2>
                <p className='mt-2 text-lg text-gray-600'>
                    Sorry, the page you are looking for does not exist or has
                    been moved.
                </p>
                <Link
                    to={homeRoute}
                    className='mt-6 inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-indigo-600 transition'>
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
