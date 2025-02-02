import { IoClose } from "react-icons/io5";

const ConfirmationPopup = ({ children, onConfirm, onCancel }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
            <div className='bg-white dark:bg-dark-textPrimary rounded-lg shadow-lg w-fit  p-6 relative'>
                {/* Close Icon */}
                <button
                    className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
                    onClick={onCancel}>
                    <IoClose size={25} />
                </button>
                {/* Warning Icon */}
                <div className=''>{children}</div>
                <div className='flex justify-end space-x-4 mt-6'>
                    <button
                        className='flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400'
                        onClick={onCancel}>
                        <span>Cancel</span>
                    </button>
                    <button
                        className='flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded hover:bg-indigo-600'
                        onClick={onConfirm}>
                        <span>Confirm</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
