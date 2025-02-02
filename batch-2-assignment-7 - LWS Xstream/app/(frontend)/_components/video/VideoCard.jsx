import Image from "next/image";
import React from "react";

const VideoCard = ({ video }) => {
    return (
        <div className='rounded-lg overflow-hidden bg-color-gray min-h-[265px]'>
            <Image
                src={video?.thumbnail}
                alt={video?.title}
                height={160}
                width={260}
                className='w-full h-40 object-cover'
            />
            <div className='p-2'>
                <p className='font-semibold line-clamp-2'>{video?.title}</p>
                <p className='text-sm text-gray-400'>{video?.channelTitle}</p>
            </div>
        </div>
    );
};

export default VideoCard;
