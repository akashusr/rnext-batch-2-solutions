import Image from "next/image";
import fallbackMovieImage from "@/public/fallbackImage.png";

const MoviePoster = ({ src, alt }) => {
    return (
        <div className='md:w-1/3'>
            <Image
                quality={50}
                src={src ? src : fallbackMovieImage}
                alt={alt}
                className='w-full rounded-lg shadow-lg min-h-[580px]'
                width={800}
                height={900}
            />
        </div>
    );
};

export default MoviePoster;
