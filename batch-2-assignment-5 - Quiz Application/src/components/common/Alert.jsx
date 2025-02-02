import { useState } from "react";
import { motion } from "motion/react";

export default function Alert({ text, setState }) {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <>
            {showAlert && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
                    className='flex items-center justify-between p-4 mb-4 text-sm text-red-800 bg-red-100 border border-red-300 rounded-lg'>
                    <div className='flex items-center'>
                        <svg
                            className='w-5 h-5 mr-2 text-red-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.671 11.87c.748 1.33-.21 3-1.742 3H3.328c-1.532 0-2.49-1.67-1.742-3l6.671-11.87zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-6a1 1 0 00-.993.883L9 9v3a1 1 0 001.993.117L11 12V9a1 1 0 00-1-1z'
                                clipRule='evenodd'></path>
                        </svg>
                        <span>{text}</span>
                    </div>
                    <button
                        onClick={() => {
                            setShowAlert(false);
                            setState &&
                                setState({
                                    status: false,
                                    text: "",
                                });
                        }}
                        className='ml-4 text-red-600 hover:text-red-800 focus:outline-none'>
                        <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'></path>
                        </svg>
                    </button>
                </motion.div>
            )}
        </>
    );
}
