import MovieListSkeliton from "@/app/_components/loadingSkelitons/MovieListSkeliton";
import DeatilsArea from "@/app/_components/movieDetails/DeatilsArea";
import SimilerMovies from "@/app/_components/movieDetails/SimilerMovies";
import {
    getMovieDetailsById,
    getPopularMovies,
    getSimilarMoviesById,
    getTopRatedMovies,
    getTrendingNowMovies,
} from "@/app/_lib/api";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params: { movieId } }) {
    // fetch data
    const movieDetails = await getMovieDetailsById(movieId);

    return {
        title: `${movieDetails?.title}: ${movieDetails?.overview}`,
        description: movieDetails?.overview,
        openGraph: {
            title:
                `${movieDetails?.title}` ||
                "MovieDB | Best Resources for Movies and TV Shows",
            description:
                `${movieDetails?.overview}` ||
                "A one Place movie information site for stay updated with Trending Movies and Latest releases.",
            locale: "en_US",
            siteName: "MovieDB",
            url: `https://next-lws-movie-db.vercel.app/movie/${movieDetails?.id}`,
            images: [
                {
                    url: `https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`,
                    width: 1200,
                    height: 630,
                    alt: "OG Image for Twitter",
                },
                {
                    url: `https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`,
                    width: 1000,
                    height: 1000,
                    alt: "OG Image for Facebook",
                },
                {
                    url: `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`,
                    width: 800,
                    height: 800,
                    alt: "OG Image for Facebook",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            site: "@MdShahadatHuss5",
            title:
                `${movieDetails?.title} : ${movieDetails?.overview}` ||
                "MovieDB | Best Resources for Movies and TV Shows",
            description:
                `${movieDetails?.overview}` ||
                "A one Place movie information site for stay updated with Trending Movies and Latest releases.",
            creator: "@MdShahadatHuss5",
            images: {
                url: `https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`,
                alt: "og image",
            },
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

        keywords: [
            "Next.js",
            "SEO",
            "Social Sharing",
            "Open Graph",
            "Twitter Card",
            "LinkedIn Optimization",
            "Web Development",
        ],
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
    };
}

export async function generateStaticParams() {
    const trendingMovies = await getTrendingNowMovies();
    const topRatedMovies = await getTopRatedMovies();
    const populerMovies = await getPopularMovies();
    let ids = [];
    trendingMovies?.result?.map((movie) => ids.push(movie?.id));
    topRatedMovies?.result?.map((movie) => ids.push(movie?.id));
    populerMovies?.result?.map((movie) => ids.push(movie?.id));
    return ids.map((id) => ({
        movieId: id,
    }));
}

export default async function MovieDeatilsPage({ params: { movieId } }) {
    const movieDetailsPromise = getMovieDetailsById(movieId);
    const similerMovieDataPromise = getSimilarMoviesById(movieId);
    const details = await movieDetailsPromise;

    if (details?.error) {
        return notFound();
    }
    return (
        <>
            <DeatilsArea details={details} />
            <Suspense
                fallback={
                    <div className='container mx-auto px-4 py-8 my-20'>
                        <MovieListSkeliton title='More Like This' />
                    </div>
                }>
                <SimilerMovies similerMoviesData={similerMovieDataPromise} />
            </Suspense>
        </>
    );
}
