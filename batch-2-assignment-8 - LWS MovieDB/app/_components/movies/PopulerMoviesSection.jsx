import { getPopularMovies } from "@/app/_lib/api";
import SectionTitle from "../common/SectionTitle";
import MovieCard from "./MovieCard";

const PopulerMoviesSection = async () => {
    const populerMovies = await getPopularMovies();
    return (
        <section className='mb-8'>
            <SectionTitle title='Popular on MOVIE DB' />
            <div
                id='popularMovies'
                className='flex space-x-4 overflow-x-auto pb-4'>
                {populerMovies?.results?.length > 0 &&
                    populerMovies?.results?.map((movie) => (
                        <MovieCard key={movie?.id} movie={movie} />
                    ))}
            </div>
        </section>
    );
};

export default PopulerMoviesSection;
