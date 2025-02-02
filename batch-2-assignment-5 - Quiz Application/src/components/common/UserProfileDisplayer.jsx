import defaultAvater from "../../assets/avater.webp";
import useAuth from "../../hooks/useAuth";
import cn from "../../utils/cn";

const UserProfileDisplayer = ({ textColor }) => {
    const { auth } = useAuth();

    return (
        <div className='mt-auto flex items-center'>
            <img
                src={defaultAvater}
                alt='Mr Hasan'
                className='w-10 h-10 rounded-full mr-3 object-cover'
            />

            <span
                className={cn(
                    `text-white dark:text-dark-textSecondary font-semibold`,
                    textColor
                )}>
                {auth?.user?.full_name}
            </span>
        </div>
    );
};

export default UserProfileDisplayer;
