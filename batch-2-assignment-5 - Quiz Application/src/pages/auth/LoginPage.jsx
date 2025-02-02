import { Link, Navigate } from "react-router-dom";
import LoginPageInfo from "./components/LoginPageInfo";
import Logo from "../../components/userPanel/Logo";
import LoginForm from "./forms/LoginForm";
import useAuth from "../../hooks/useAuth";
import PageTitle from "../../components/common/PageTitle";

const LoginPage = () => {
    const { auth } = useAuth();
    if (auth.accessToken) {
        return <Navigate to='/' />;
    }
    return (
        <div className='bg-white dark:bg-dark-primary dark:text-dark-textPrimary text-gray-800 overflow-hidden'>
            <PageTitle title='Quizzes - Login' />
            <div className='flex min-h-screen'>
                <LoginPageInfo />
                <div className='w-full lg:w-1/2 flex items-center justify-center p-12'>
                    <div className='w-full max-w-md'>
                        <h2 className='text-3xl font-bold mb-8 flex gap-2 items-center'>
                            <span>Welcome to</span>
                            <Logo />
                        </h2>
                        <h1 className='text-5xl font-bold mb-8'>Sign in</h1>
                        <LoginForm />
                        <div className='text-center'>
                            <a
                                href='#'
                                className='text-primary dark:text-dark-textSecondary'>
                                Forgot Password
                            </a>
                        </div>
                        <div className='mt-8'>
                            <p className='text-center'>
                                No Account ?{" "}
                                <Link
                                    to='/register'
                                    className='text-primary  dark:text-dark-textSecondary'>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
