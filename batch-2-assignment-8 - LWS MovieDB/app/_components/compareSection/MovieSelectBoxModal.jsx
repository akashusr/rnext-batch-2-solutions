import useDebounce from "@/app/_hooks/useDebounce";
import { getNowPlayingMovies, getSearchedMovie } from "@/app/_lib/api";
import { useCallback, useEffect, useState } from "react";
import SearchResultLoaderSkeliton from "../loadingSkelitons/SearchResultLoaderSkeliton";
import MovieSuggestionCard from "./MovieSuggestionCard";

const MovieSelectBoxModal = ({ onCloseClick, setSlots, slots, slotId }) => {
    const [query, setQuery] = useState(null);
    const [searchedMovies, setSearchedMovies] = useState({});
    const [loading, setLoading] = useState(false);

    // manage modal show/hide
    const dismiss = useCallback(() => {
        onCloseClick();
    }, [onCloseClick]);

    const escapeDown = useCallback(
        (e) => {
            if (e.key === "Escape") {
                dismiss();
            }
        },
        [dismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", escapeDown);
        return () => {
            document.removeEventListener("keydown", escapeDown);
        };
    }, [escapeDown]);
    //====================

    // handle search with debounce
    const search = useDebounce((term) => setQuery(term), 200);

    useEffect(() => {
        if (query) {
            try {
                setLoading(true);
                async function searchMovie() {
                    const movies = await getSearchedMovie(query);
                    setSearchedMovies(movies?.results);
                    setLoading(false);
                }
                searchMovie();
            } catch (error) {
                throw new Error("There was an error while fetching data");
            }
        } else {
            async function getDefaultMovies() {
                const movies = await getNowPlayingMovies();
                setSearchedMovies(movies?.results);
            }
            getDefaultMovies();
        }
    }, [query]);

    // set movies data into slot to compare
    function setMoviesToSlot(movie) {
        const foundInSlots = slots.find((slot) => slot?.data?.id === movie?.id);

        if (!foundInSlots) {
            const updatedSlots = slots.map((slot) => {
                if (slot.id === slotId) {
                    // Update the slot with the new movie data
                    return { ...slot, data: movie };
                }
                // Return the slot unchanged if it doesn't match
                return slot;
            });
            setSlots(updatedSlots);
        } else {
            return alert("This movie alrady added in a card, try different !");
        }
    }

    return (
        <div className='fixed text-white inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
            <div className='bg-zinc-900 p-6 rounded-lg w-full max-w-2xl'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold'>Search Movie</h2>
                    <button
                        onClick={onCloseClick}
                        className='text-gray-400 hover:text-white'>
                        ✕
                    </button>
                </div>

                <input
                    type='text'
                    onChange={(e) => search(e.target.value)}
                    defaultValue={query}
                    placeholder='Type movie name...'
                    className='w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600'
                />

                <div className='max-h-96 overflow-y-auto'>
                    {loading ? (
                        <SearchResultLoaderSkeliton />
                    ) : searchedMovies && searchedMovies.length > 0 ? (
                        searchedMovies.map((movie) => (
                            <div
                                onClick={() => setMoviesToSlot(movie)}
                                key={movie?.id}
                                className='suggestion cursor-pointer hover:bg-gray-600'>
                                <MovieSuggestionCard movie={movie} />
                            </div>
                        ))
                    ) : (
                        <p>
                            No Movies found based on you search query {query} .
                            Try searching with different keywords
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieSelectBoxModal;
