import ChannelInfo from "@/app/(frontend)/_components/video/ChannelInfo";
import ReletedVideos from "@/app/(frontend)/_components/video/ReletedVideos";
import SingleVideo from "@/app/(frontend)/_components/video/SingleVideo";
import { getVideos } from "@/app/(frontend)/_data/getVideos";
import { getDictionary } from "../../_dictionaries/dictionaries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const videos = await getVideos("all");
    return videos.map((video) => ({ id: video.videoId }));
}

export default async function SingleVideoPage({ params: { id, lang } }) {
    const dictionary = await getDictionary(lang || "en");
    const video = await getVideos("single", id);
    if (!video) {
        return notFound();
    }
    return (
        <div className='flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-3/4'>
                <SingleVideo dictionary={dictionary} video={video} />
                <h1 className='text-2xl font-bold mt-4'>{video?.title}</h1>
                <ChannelInfo
                    dictionary={dictionary}
                    title={video?.channelTitle}
                />
            </div>
            <ReletedVideos dictionary={dictionary} videoId={video?.videoId} />
        </div>
    );
}
