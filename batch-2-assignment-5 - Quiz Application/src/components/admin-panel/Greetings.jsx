import useAuth from "../../hooks/useAuth";

const Greetings = () => {
    const { auth } = useAuth();
    return (
        <header className='mb-8 dark:text-dark-textSecondary'>
            <h2 className='text-2xl font-semibold dark:text-dark-textPrimary'>
                Hey {auth?.user?.full_name} 👋!
            </h2>
            <h1 className='text-4xl font-bold'>
                Welcome Back To Your Quiz Hub!
            </h1>
        </header>
    );
};

export default Greetings;
