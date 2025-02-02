import { Link, useLocation } from "react-router-dom";
import notFoundSvg from "../../assets/notFound.svg";
import { motion } from "motion/react";
import { easeIn } from "motion";
const NoContentPage = () => {
    const { pathname } = useLocation();
    const homeRoute = pathname.includes("/dashboard")
        ? "/admin/dashboard/quizzes"
        : "/";
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='flex dark:text-dark-textPrimary dark:bg-dark-primary  min-w-screen items-center place-content-center justify-center min-h-screen bg-gray-100 text-gray-800'>
            <div className='mt-8'>
                <img
                    src={notFoundSvg}
                    alt='Not Found Illustration'
                    className='max-w-full h-auto'
                />
            </div>

            <div className='text-center'>
                <h1 className='text-9xl font-bold dark:text-dark-textPrimary text-primary'>
                    Sorry !
                </h1>
                <h2 className='mt-4 text-3xl font-semibold'>
                    No Content Found In This Page
                </h2>
                <p className='mt-2 text-lg text-gray-600'>
                    We are trying to update the pages soon..
                </p>
                <Link
                    to={homeRoute}
                    className='mt-6 inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-indigo-600 transition'>
                    Go Back Home
                </Link>
            </div>
        </motion.div>
    );
};

export default NoContentPage;
