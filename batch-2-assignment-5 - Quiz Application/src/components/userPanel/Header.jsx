import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/userPanel/Logo";
import useAuth from "../../hooks/useAuth";
import AvatarWithDropdown from "../common/AvatarWithDropdown";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Header = () => {
    const { auth } = useAuth();
    const { pathname } = useLocation();
    return (
        <header className='flex dark:bg-dark-primary justify-between bg-gray-100 py-3 items-center mb-12 sticky z-50 top-[-2px] pt-[20px]'>
            <Link to='/'>
                <Logo />
            </Link>
            {auth?.user?.role === "admin" && (
                <div className='dark:text-dark-textPrimary fixed max-w-96 top-20 bg-yellow-600/40 rounded text-pretty p-2 text-gray-800'>
                    <h1>
                        <span className='font-bold text-lg'>
                            {" "}
                            ℹ️ Information:
                        </span>{" "}
                        {"  "}You are in a <u>Test/Preview</u> mode.
                    </h1>
                    <h4 className='defination'>
                        You can test quiz by perticipating as real user but your
                        submittion will not store in database and your
                        leaderboard will not generate.
                    </h4>
                </div>
            )}

            <div className='flex justify-center gap-3 items-center'>
                <div className='item'>
                    {!auth.accessToken ? (
                        <div>
                            <Link
                                to='/login'
                                className='px-4 py-2 rounded dark:text-dark-textPrimary hover:bg-primary hover:text-white transition-colors'
                                style={{ fontFamily: "Jaro" }}>
                                Sign In
                            </Link>
                            <Link
                                to='/register'
                                className='px-4 py-2 rounded dark:text-dark-textPrimary hover:bg-primary hover:text-white transition-colors'
                                style={{ fontFamily: "Jaro" }}>
                                Sign Up
                            </Link>
                        </div>
                    ) : (
                        <div className='flex'>
                            {auth.user?.role === "admin" &&
                                !pathname.includes("admin") && (
                                    <Link
                                        to='/admin/dashboard/quizzes'
                                        className='px-6 mr-8 py-2 bg-indigo-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'>
                                        Go to Dashboard
                                    </Link>
                                )}

                            <AvatarWithDropdown />
                        </div>
                    )}
                </div>
                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default Header;
