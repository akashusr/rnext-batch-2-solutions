import { useState } from "react";
import QuizIcon from "../../svg/QuizIcon";
import cn from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import CardActions from "./CardActions";
import { motion } from "motion/react";
import { easeIn } from "motion";

const AdminsQuizsetCard = ({ quizCard }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className={cn(
                `bg-white relative dark:text-dark-textPrimary ring-primary p-6 rounded-lg shadow-sm border  border-gray-200 group cursor-pointer `,
                quizCard.status === "draft" &&
                    "bg-gray-800/50 dark:border-dark-secondary",
                quizCard.status === "published" &&
                    "bg-purple-800 text-white dark:bg-dark-optimal dark:border-dark-textSecondary"
            )}
            onMouseEnter={() => {
                setMenuOpen(true);
            }}
            onMouseLeave={() => {
                setMenuOpen(false);
            }}
            onClick={() =>
                navigate(`/admin/dashboard/quizzes/${quizCard?.id}`)
            }>
            <div>
                {/* Status Tag */}
                <div className='status absolute bottom-1 -right-[20px] z-20'>
                    {quizCard.status === "draft" && (
                        <h4 className='status mr-8 bg-gray-500/80 text-white w-128 h-6 px-4 rounded-full align-middle'>
                            Draft
                        </h4>
                    )}
                    {quizCard.status === "published" && (
                        <h4 className='status mr-8 bg-green-500/80 text-white w-120 h-6 px-2 rounded-full align-middle'>
                            Published
                        </h4>
                    )}
                </div>
                <div className='questionCount absolute bottom-1 left-[10px] z-20'>
                    <h4 className='status mr-8 bg-gray-500/80 text-white w-128 h-6 px-4 rounded-full align-middle'>
                        {quizCard?.Questions.length} Questions
                    </h4>
                </div>

                {/* Icon */}
                <div className='text-buzzr-purple mb-4 group-hover:scale-105 transition-all'>
                    <QuizIcon />
                </div>

                {/* Title */}
                <h3 className='font-semibold text-lg mb-2 group-hover:scale-105 transition-all'>
                    {quizCard?.title}
                </h3>

                {/* Description */}
                <p
                    className={cn(
                        `text-gray-600 text-sm group-hover:scale-105 truncate text-clip transition-all`,
                        quizCard.status === "published" &&
                            "text-white !truncate !text-clip"
                    )}>
                    {quizCard?.description}
                </p>

                <div className='absolute top-4 right-4'>
                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <CardActions
                            quizCard={quizCard}
                            setMenuOpen={setMenuOpen}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default AdminsQuizsetCard;
