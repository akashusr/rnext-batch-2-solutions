import React from "react";
import { getVideos } from "../../_data/getVideos";

const FeaturedVideo = async ({ dictionary }) => {
    const featuredVideo = await getVideos("featured");
    return (
        <div className='lg:col-span-2'>
            <div className='relative rounded-lg '>
                <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo?.videoId}`}
                    title='YouTube video player'
                    frameBorder={0}
                    className='w-full aspect-video'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen=''
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4'>
                    <div className='text-right'>
                        <span className='bg-color-purple text-white px-2 py-1 rounded text-sm'>
                            {dictionary?.commingSoon}
                        </span>
                    </div>
                    <div>
                        <div className='text-4xl font-bold mb-2'>04:03</div>
                        <p className='text-sm text-white font-semibold'>
                            {dictionary.brodcastStartsIn}
                        </p>
                    </div>
                </div>
            </div>
            <p className='mt-2 text-sm text-gray-400'>{featuredVideo.title}</p>
        </div>
    );
};

export default FeaturedVideo;
