import { getTopRatedMovies } from "@/app/_lib/api";
import SectionTitle from "../common/SectionTitle";
import MovieCard from "./MovieCard";

const TopRatedMoviesSection = async () => {
    const topRatedMovies = await getTopRatedMovies();
    return (
        <section className='mb-8'>
            <SectionTitle title='Top Rated' />
            <div
                id='topRatedMovies'
                className='flex space-x-4 overflow-x-auto pb-4'>
                {topRatedMovies?.results?.length > 0 &&
                    topRatedMovies?.results?.map((movie) => (
                        <MovieCard key={movie?.id} movie={movie} />
                    ))}
            </div>
        </section>
    );
};

export default TopRatedMoviesSection;
