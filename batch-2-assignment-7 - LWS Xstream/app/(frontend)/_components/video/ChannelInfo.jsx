import Image from "next/image";
import React from "react";

const ChannelInfo = ({ title, dictionary }) => {
    return (
        <div className='flex items-center space-x-4 mt-2'>
            <Image
                src='/assets/avatar.png'
                alt='Avatar'
                height={40}
                width={40}
                className='w-10 h-10 rounded-full'
            />
            <div>
                <p className='font-semibold'>{title}</p>
            </div>
            <button className='bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto'>
                {dictionary.subscribe}
            </button>
        </div>
    );
};

export default ChannelInfo;
