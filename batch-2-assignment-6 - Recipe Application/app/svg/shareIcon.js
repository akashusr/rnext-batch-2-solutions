import React from "react";

const ShareIcon = () => {
    return (
        <button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 inline-block mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
            </svg>
            Share
        </button>
    );
};

export default ShareIcon;
