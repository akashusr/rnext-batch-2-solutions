import React from "react";
import MovieCard from "../movies/MovieCard";
import SectionTitle from "../common/SectionTitle";

const SimilerMovies = async ({ similerMoviesData }) => {
    const similer = await similerMoviesData;
    if (similer?.results?.length > 0) {
        return (
            <div className='container mx-auto px-4 py-8 my-20'>
                <SectionTitle title='More Like This' />
                <div className='flex space-x-4 overflow-x-auto pb-4'>
                    {similer?.results?.length > 0 &&
                        similer?.results?.map((movie) => (
                            <MovieCard key={movie?.id} movie={movie} />
                        ))}
                </div>
            </div>
        );
    }
};

export default SimilerMovies;
