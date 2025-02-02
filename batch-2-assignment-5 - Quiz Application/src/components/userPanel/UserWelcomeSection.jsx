import defaultAvatar from "../../assets/avater.webp";
import useAuth from "../../hooks/useAuth";

const UserWelcomeSection = () => {
    const { auth } = useAuth();
    return (
        <div className='text-center mb-12 '>
            <img
                src={defaultAvatar}
                alt='Profile Picture'
                className='w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 object-cover'
            />
            <p className='dark:text-dark-textPrimary text-xl text-gray-600'>
                Welcome
            </p>
            <h2
                className=' dark:text-dark-textSecondary text-4xl font-bold text-gray-700'
                style={{ fontFamily: "Jaro" }}>
                {auth.user.full_name}
            </h2>
        </div>
    );
};

export default UserWelcomeSection;
