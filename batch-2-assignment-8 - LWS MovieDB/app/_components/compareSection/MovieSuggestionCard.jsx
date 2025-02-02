import Image from "next/image";
import fallbackMovieImage from "@/public/fallbackImage.png";
const MovieSuggestionCard = ({ movie }) => {
    return (
        <div className='flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded'>
            <Image
                src={movie?.poster_path?`https://image.tmdb.org/t/p/w200${movie?.poster_path}`:fallbackMovieImage}
                alt='The Social Network'
                className='w-16 h-24 object-cover rounded'
                width={100}
                height={100}
            />
            <div>
                <h3 className='font-bold'>{movie?.title}</h3>
                <p className='text-sm text-gray-400'>
                    {movie?.release_data?.split("-")[0]}
                </p>
            </div>
        </div>
    );
};

export default MovieSuggestionCard;
