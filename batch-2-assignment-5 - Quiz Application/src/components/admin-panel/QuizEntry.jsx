import { easeIn } from "motion";
import QuizActions from "./QuizActions";
import { motion } from "motion/react";

const QuizEntry = ({ quizSet, question, index, handleDataToEdit }) => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [-10, 0],
                transition: { duration: 0.3, ease: easeIn },
            }}
            className='rounded-lg overflow-hidden shadow-sm mb-4 dark:text-dark-textPrimary dark:bg-dark-secondary'>
            <div className='bg-white dark:text-dark-textPrimary dark:bg-dark-secondary p-6 !pb-2'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-lg font-semibold'>
                        {index + 1}. {question.question} ?
                    </h3>
                </div>
                <div className='space-y-2'>
                    {question.options.map((option, i) => (
                        <label key={i} className='flex items-center space-x-3'>
                            <input
                                type='radio'
                                readOnly
                                disabled={option !== question.correctAnswer}
                                className='form-radio text-buzzr-purple'
                                checked={option === question.correctAnswer}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            <QuizActions
                quizSet={quizSet}
                handleDataToEdit={handleDataToEdit}
                question={question}
            />
        </motion.div>
    );
};

export default QuizEntry;
