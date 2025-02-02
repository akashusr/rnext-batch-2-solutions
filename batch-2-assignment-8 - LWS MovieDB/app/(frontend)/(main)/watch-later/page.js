export const dynamic = "force dynamic";
import SectionTitle from "@/app/_components/common/SectionTitle";
import EmptyStatus from "@/app/_components/watch-later/EmptyStatus";
import WatchLaterMovieCard from "@/app/_components/watch-later/WatchLaterMovieCard";
import { findAllWatchlistedMovies } from "@/app/_lib/watchlistActions";

export default async function WatchListPage() {
    const movies = await findAllWatchlistedMovies();
    return (
        <div className='container mx-auto pt-24 pb-8'>
            <header className='mb-8'>
                <SectionTitle
                    className='text-4xl font-bold text-white'
                    title='Watch Later'
                />
                <p className='text-light/70 mt-2'>
                    Movies you&apos;ve saved to watch in the future
                </p>
            </header>
            {movies && (
                <div
                    id='watchLaterList'
                    className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {movies?.length > 0 &&
                        movies?.map((movie) => (
                            <WatchLaterMovieCard
                                key={movie?.id}
                                movie={movie}
                            />
                        ))}
                </div>
            )}
            {!movies || (movies?.length === 0 && <EmptyStatus />)}
        </div>
    );
}
