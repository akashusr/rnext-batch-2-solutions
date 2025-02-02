import { getSearchedMovie } from "@/app/_lib/api";
import { redirect } from "next/navigation";
import MovieCardLarge from "../../../_components/movies/MovieCardLarge";

export default async function SearchResultPage({ searchParams }) {
    if (!searchParams?.query) {
        redirect("/");
    }
    const queryText = searchParams?.query;
    const searchedMovies = await getSearchedMovie(queryText);

    return (
        <main className='container mx-auto px-4 pt-24 pb-8'>
            <div className='mb-6'>
                <h1 className='text-2xl font-bold'>
                    Search Results for{" "}
                    <b>
                        <q>{queryText}</q>
                    </b>
                </h1>
                <p className='text-gray-400'>
                    Found{" "}
                    {searchedMovies?.results?.length
                        ? searchedMovies?.results?.length
                        : "0"}{" "}
                    results
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                {searchedMovies?.results?.length > 0 &&
                    searchedMovies?.results?.map((movie) => (
                        <MovieCardLarge
                            key={movie?.id}
                            showInfo={true}
                            movie={movie}
                        />
                    ))}
            </div>
        </main>
    );
}
