import React, { Suspense } from "react";
import VideoCard from "../../_components/video/VideoCard";
import { getVideos } from "../../_data/getVideos";
import Link from "next/link";
import VideoSkeleton from "../../_components/lodingSkelitons/VideoCardSkeliton";
import { supportedLocales } from "@/middleware";

// generate static params
export async function generateStaticParams() {
    return supportedLocales.map((locale) => ({ lang: locale }));
}

export default async function AllVideosPage({ params: { lang } }) {
    const allVideos = await getVideos("all");
    const videos = allVideos
        .sort(() => Math.random() - 0.5)
        .map((item) => (
            <Link key={item.videoId} href={`/${lang}/videos/${item.videoId}`}>
                <VideoCard video={item} />
            </Link>
        ));

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <Suspense fallback={<VideoSkeleton count={12} />}>
                {videos}
            </Suspense>
        </div>
    );
}
