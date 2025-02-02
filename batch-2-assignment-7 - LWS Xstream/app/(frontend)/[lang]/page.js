import Link from "next/link";
import { Suspense } from "react";
import FeaturedSection from "../_components/featuredSection/FeaturedSection";
import VideoSkeleton from "../_components/lodingSkelitons/VideoCardSkeliton";
import VideoCard from "../_components/video/VideoCard";
import VideoLists from "../_components/video/VideoLists";
import { getVideos } from "../_data/getVideos";
import { getDictionary } from "./_dictionaries/dictionaries";
import { supportedLocales } from "@/middleware";

// generate static params
export async function generateStaticParams() {
    return supportedLocales.map((locale) => ({ lang: locale }));
}

export default async function HomePage({ params: { lang } }) {
    const dictionary = await getDictionary(lang || "en");
    const videosList = await getVideos("all");
    const videos = videosList
        .slice(0, 12)
        .sort(() => Math.random() - 0.5)
        .map((item, index) => (
            <Link key={item?.videoId} href={`/${lang}/videos/${item?.videoId}`}>
                <VideoCard video={item} />
            </Link>
        ));

    return (
        <>
            <main className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-center'>
                <FeaturedSection dictionary={dictionary} />
            </main>
            <VideoLists lang={lang} dictionary={dictionary}>
                <Suspense fallback={<VideoSkeleton count={12} />}>
                    {videos}
                </Suspense>
            </VideoLists>
        </>
    );
}
