import { motion } from "framer-motion";
import { easeIn } from "motion";

const QuizsetList = ({ children }) => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {children}
        </motion.div>
    );
};

export default QuizsetList;
