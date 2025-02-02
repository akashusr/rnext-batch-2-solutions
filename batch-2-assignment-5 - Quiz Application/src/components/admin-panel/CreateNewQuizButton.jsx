import { Link } from "react-router-dom";
import PlusIcon from "../../svg/PlusIcon";

const CreateNewQuizButton = () => {
    return (
        <Link to='/admin/dashboard/quizzes/add' className='group'>
            <div className='bg-white dark:bg-dark-textSecondary dark:border-dark-textSecondary dark:text-dark-textPrimary p-6 rounded-lg shadow-sm border border-gray-200 '>
                <div className='text-buzzr-purple mb-4 group-hover:scale-105 transition-all'>
                    <PlusIcon />
                </div>
                <h3 className='font-semibold text-lg mb-2 group-hover:scale-105 transition-all'>
                    Create a new quiz
                </h3>
                <p className='text-gray-600 text-sm group-hover:scale-105 transition-all'>
                    Build from the ground up
                </p>
            </div>
        </Link>
    );
};

export default CreateNewQuizButton;
