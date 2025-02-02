import Image from "next/image";
import Link from "next/link";
import RemoveFromWatchListButton from "./RemoveFromWatchListButton";
import fallbackMovieImage from "@/public/fallbackImage.png";
const WatchLaterMovieCard = ({ movie }) => {
    return (
        <Link href={`/movie/${movie?.movieId}`}>
            <div className='bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative'>
                <Image
                    src={
                        movie?.poster_path
                            ? `${process.env.TMDB_POSTER_IMAGE_BASE_URL}${movie?.poster_path}`
                            : fallbackMovieImage
                    }
                    alt={movie?.title}
                    className='w-full h-[450px] object-cover'
                    width={500}
                    height={700}
                />

                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                    <h2 className='text-xl font-bold text-light mb-2'>
                        {movie?.title}
                    </h2>

                    <div className='flex justify-between items-center'>
                        <span className='text-primary'>
                            {movie?.release_date?.split("-")[0]}
                        </span>
                        <RemoveFromWatchListButton movieId={movie?.movieId} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WatchLaterMovieCard;
