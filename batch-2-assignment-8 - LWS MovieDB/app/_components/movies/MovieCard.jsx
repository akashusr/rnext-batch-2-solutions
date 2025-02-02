import Image from "next/image";
import Link from "next/link";
import fallbackImage from "@/public/fallbackImage.png";

const MovieCard = ({ movie, trending }) => {
    return (
        <div className='flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform'>
            <Link href={`/movie/${movie?.id}`}>
                <Image
                    quality={50}
                    src={
                        movie?.poster_path
                            ? `${process.env.TMDB_POSTER_IMAGE_BASE_URL}/${movie?.poster_path}`
                            : fallbackImage
                    }
                    alt={movie?.title}
                    className='w-full rounded-lg min-h-[287px]'
                    width={200}
                    height={300}
                />
                {trending && (
                    <div className='mt-2'>
                        <h3 className='text-light text-sm font-bold truncate'>
                            {movie?.title}
                        </h3>
                        <p className='text-primary text-xs'>
                            {movie?.release_date?.split("-")[0]}
                        </p>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default MovieCard;
