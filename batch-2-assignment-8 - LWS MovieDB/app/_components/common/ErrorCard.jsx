"use client";

const ErrorCard = ({ message, onClose }) => {
    return (
        message && (
            <div className='flex  bg-red-700/30 border border-red-700 text-white py-2 px-4 rounded mb-4'>
                <div className='flex items-center justify-between w-full'>
                    <span>❗ {message}</span>
                    <button
                        onClick={onClose}
                        className='text-red-400 hover:text-white'>
                        {" "}
                        ✕
                    </button>
                </div>
            </div>
        )
    );
};

export default ErrorCard;
