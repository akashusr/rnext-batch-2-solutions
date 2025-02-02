import { motion } from "motion/react";
const QuizListSection = ({ children }) => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [10, 0],
                transition: { duration: 0.3 },
            }}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {children}
        </motion.div>
    );
};

export default QuizListSection;
