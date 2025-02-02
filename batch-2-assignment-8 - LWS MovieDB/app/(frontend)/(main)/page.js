import { Suspense } from "react";
import HeroSection from "../../_components/heroSection/HeroSection";
import HeroSkeleton from "../../_components/loadingSkelitons/HeroSkeliton";
import MovieListSkeliton from "../../_components/loadingSkelitons/MovieListSkeliton";
import PopulerMoviesSection from "../../_components/movies/PopulerMoviesSection";
import TopRatedMoviesSection from "../../_components/movies/TopRatedMoviesSection";
import TrendingMoviesSection from "../../_components/movies/TrendingMoviesSection";

export default function HomePage() {
    return (
        <>
            <Suspense fallback={<HeroSkeleton />}>
                <HeroSection />
            </Suspense>
            <div className='container mx-auto px-4 py-8'>
                <Suspense fallback={<MovieListSkeliton title='Trending Now' />}>
                    <TrendingMoviesSection />
                </Suspense>
                <Suspense
                    fallback={
                        <MovieListSkeliton title='Populer on Movie DB' />
                    }>
                    <PopulerMoviesSection />
                </Suspense>
                <Suspense fallback={<MovieListSkeliton title='Top Rated' />}>
                    <TopRatedMoviesSection />
                </Suspense>
            </div>
        </>
    );
}
