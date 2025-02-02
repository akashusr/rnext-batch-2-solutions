import RegistrationPageInfo from "./components/RegistrationPageInfo";
import Logo from "../../components/userPanel/Logo";
import RegistrationForm from "./forms/RegistrationForm";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RegistrationPage = () => {
    const { auth } = useAuth();
    if (auth.accessToken) {
        return <Navigate to='/' />;
    }
    return (
        <div className='bg-white dark:bg-dark-secondary dark:text-dark-textPrimary text-gray-800 '>
            <div className='flex min-h-screen max-h-screen'>
                <RegistrationPageInfo />
                <div className='fixed right-0 top-0 w-full h-full lg:w-1/2 flex items-start xl:items-center justify-center p-6 lg:p-8 xl:p-12 overflow-y-auto xl:overflow-hidden'>
                    <div className='w-full max-w-lg '>
                        <h2 className='text-3xl font-bold mb-3 flex gap-2 items-center'>
                            <span>Welcome to</span>
                            <Logo />
                        </h2>
                        <h1 className='text-4xl font-bold mb-6'>Sign Up</h1>
                        <RegistrationForm />
                        <div className='mt-2 text-gray-400'>
                            <p className='text-center'>
                                Already have account ?{" "}
                                <Link
                                    to='/login'
                                    className='text-primary dark:text-dark-textSecondary'>
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
