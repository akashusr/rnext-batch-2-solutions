import { getTrendingNowMovies } from "@/app/_lib/api";
import SectionTitle from "../common/SectionTitle";
import MovieCard from "./MovieCard";

const TrendingMoviesSection = async () => {
    const trendingMovies = await getTrendingNowMovies();
    return (
        <section className='mb-8'>
            <SectionTitle title='Trending Now' />
            <div
                id='trendingMovies'
                className='flex space-x-4 overflow-x-auto pb-4'>
                {trendingMovies?.results?.length > 0 &&
                    trendingMovies?.results?.map((movie) => (
                        <MovieCard
                            key={movie?.id}
                            movie={movie}
                            trending={true}
                        />
                    ))}
            </div>
        </section>
    );
};

export default TrendingMoviesSection;
