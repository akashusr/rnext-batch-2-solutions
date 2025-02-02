import HotelInfoDetails from "@/app/_components/hotel/HotelInfoDetails";
import ReviewSection from "@/app/_components/reviews/ReviewSection";
import ReviewsLoadingSkeleton from "@/app/_components/skelitons/ReviewLoadingSkeliton";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params: { hotelId, lang } }) {
    const hotelPromise = await fetch(
        `${process.env.API_BASE_URL}/hotels/${hotelId}`,
        {
            next: { revalidate: 0 },
        }
    );

    const hotel = await hotelPromise.json();

    return {
        title: hotel?.data?.name,
        description: hotel?.data?.description,
        keywords: ["Airbnb", "hotel", "tour&travels"],
        authors: [
            {
                name: "Shahadat Hussain Ripon",
                url: "https://github.com/deveripon",
            },
        ],

        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: hotel?.data?.name,
            description: hotel?.data?.description,
            url: `https://lws-x-airbnb.vercel.app/${lang}/hotel/${hotel?.data?._id?.toString()}`,
            siteName: "LWS-X-Airbnb",
            images: [
                {
                    url: hotel?.data?.thumbnail,
                    width: 100,
                    height: 100,
                },
                {
                    url: hotel?.data?.thumbnail,
                    width: 1800,
                    height: 1600,
                    alt: hotel?.data?.name,
                },
                {
                    url: hotel?.data?.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: "OG Image for Twitter",
                },
                {
                    url: hotel?.data?.thumbnail,
                    width: 1000,
                    height: 1000,
                    alt: "OG Image for Facebook",
                },
                {
                    url: hotel?.data?.thumbnail,
                    width: 800,
                    height: 800,
                    alt: "OG Image for Facebook",
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: hotel?.data?.name,
            description: hotel?.data?.description,
            site: "@MdShahadatHuss5",
            creator: "@MdShahadatHuss5",
            images: [`${hotel?.data?.thumbnail}`],
            app: {
                name: "twitter_app",
                id: {
                    iphone: "twitter_app://iphone",
                    ipad: "twitter_app://ipad",
                    googleplay: "twitter_app://googleplay",
                },
                url: {
                    iphone: "https://iphone_url",
                    ipad: "https://ipad_url",
                },
            },
        },
    };
}

export default async function HotelDetailsPage({ params: { hotelId, lang } }) {
    const hotelPromise = await fetch(
        `${process.env.API_BASE_URL}/hotels/${hotelId}`,
        {
            next: { revalidate: 0 },
        }
    );

    const hotel = await hotelPromise.json();
    if (hotel && hotel?.data === null) {
        notFound();
    }
    if (hotel?.success === false && hotel?.error) {
        throw new Error(hotel?.error?.message);
    }

    return (
        <>
            <HotelInfoDetails lang={lang} hotelData={hotel} />

            <Suspense fallback={<ReviewsLoadingSkeleton />}>
                <ReviewSection lang={lang} hotelData={hotel} />
            </Suspense>
        </>
    );
}
