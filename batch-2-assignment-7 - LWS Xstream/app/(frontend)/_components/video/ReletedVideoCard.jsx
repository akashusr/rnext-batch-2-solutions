"use client";
import Image from "next/image";
import { handleVideoRedirect } from "../../_serverActions";
import { startTransition, useEffect, useState } from "react";
import { useParams } from "next/navigation";
const ReletedVideoCard = ({ video }) => {
    const params = useParams();
    const [viewsCount, setViewsCount] = useState(null);
    function handleVideo() {
        startTransition(() => {
            handleVideoRedirect(video?.videoId, params.lang); // Call the server action
        });
    }
    useEffect(() => {
        const views = Math.floor(Math.random() * 20);
        setViewsCount(views);
    }, []);

    return (
        <div
            onClick={handleVideo}
            className='flex cursor-pointer items-start space-x-4'>
            <Image
                src={video?.thumbnail}
                alt={video?.title}
                height={80}
                width={120}
                className='w-30 h-20 rounded object-cover'
            />
            <div>
                <h3 className='font-semibold'>{video?.title}</h3>
                <p className='text-sm text-gray-400'>{video?.channelTitle}</p>
                <p className='text-sm text-gray-400'>{viewsCount}k Views</p>
            </div>
        </div>
    );
};

export default ReletedVideoCard;
