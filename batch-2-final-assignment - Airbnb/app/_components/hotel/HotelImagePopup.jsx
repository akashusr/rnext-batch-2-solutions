import { IoCloseOutline } from "react-icons/io5";

const HotelImagePopup = ({ children, onDismiss }) => {
    return (
        <div className='bg-gray-50'>
            {/* Modal Backdrop */}
            <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'>
                {/* Modal Container */}
                <div className='rounded shadow-sm h-full py-5 relative'>
                    {/* Close Button */}
                    <button
                        onClick={onDismiss}
                        id='closeModalBtn'
                        className='absolute top-8 right-4 text-gray-500 hover:text-gray-800'>
                        <IoCloseOutline color='red' size={40} />
                    </button>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default HotelImagePopup;
