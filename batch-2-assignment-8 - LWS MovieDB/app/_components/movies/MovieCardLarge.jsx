import Image from "next/image";
import Link from "next/link";
import fallbackMovieImage from "@/public/fallbackImage.png";
const MovieCardLarge = ({ movie, showInfo }) => {
    return (
        <Link
            href={`/movie/${movie?.id}`}
            className='bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform'>
            <Image
                src={
                    movie?.poster_path
                        ? `${process.env.TMDB_POSTER_IMAGE_BASE_URL}${movie?.poster_path}`
                        : fallbackMovieImage
                }
                alt={movie?.title}
                className='w-full aspect-[2/3] object-cover'
                width={600}
                height={800}
            />
            {showInfo && (
                <div className='p-4'>
                    <h3 className='font-bold mb-2'>{movie?.title}</h3>
                    <div className='flex justify-between text-sm text-gray-400'>
                        <span>{movie?.release_date?.split("-")[0]}</span>
                        <span>⭐{movie?.vote_average}</span>
                    </div>
                </div>
            )}
        </Link>
    );
};

export default MovieCardLarge;
