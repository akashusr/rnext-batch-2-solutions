import { Suspense } from "react";
import { getVideos } from "../../_data/getVideos";
import ReletedVideoCard from "./ReletedVideoCard";
import ReletedVideoSkeleton from "../lodingSkelitons/ReletedVideoSceliton";

const ReletedVideos = async ({ videoId, dictionary }) => {
    const reletedVideos = await getVideos("all");
    const videos = reletedVideos
        .filter((video) => video.videoId !== videoId)
        .sort(() => Math.random() - 0.3)
        .slice(0, 6)
        .map((item) => <ReletedVideoCard key={item?.videoId} video={item} />);
    return (
        <div className='lg:w-1/4'>
            <h2 className='text-xl font-semibold mb-4'>
                {dictionary.youMayLike}
            </h2>
            <div className='space-y-4'>
                <Suspense fallback={<ReletedVideoSkeleton count={6} />}>
                    {videos}
                </Suspense>
            </div>
        </div>
    );
};

export default ReletedVideos;
