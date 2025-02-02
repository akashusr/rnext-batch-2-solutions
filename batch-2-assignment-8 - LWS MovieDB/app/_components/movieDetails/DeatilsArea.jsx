import Image from "next/image";
import ActionButton from "./ActionButtons";
import Details from "./Details";
import MoviePoster from "./MoviePoster";
import SocialShareHandler from "./SocialShareHandler";
import fallbackMovieImage from "@/public/fallbackImage.png";
import fallbackCastImage from "@/public/fallBackAvatar.png";

const DeatilsArea = async ({ details }) => {
    const actors = details?.credits?.cast?.filter(
        (cast) => cast?.known_for_department === "Acting"
    );

    let casts = [];
    if (actors?.length > 0 && actors?.length <= 6) {
        casts = actors;
    } else {
        casts = actors?.slice(0, 6);
    }

    return (
        <div id='movieDetails' className='min-h-screen pt-20 mb-8'>
            <div className='relative h-screen'>
                <div className='absolute inset-0'>
                    <Image
                        quality={50}
                        src={
                            details?.backdrop_path
                                ? `${process.env.TMDB_BACKDROP_IMAGE_BASE_URL}${details?.backdrop_path}`
                                : fallbackMovieImage
                        }
                        alt={details?.title}
                        className='w-full h-full object-cover '
                        width={1200}
                        height={800}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70' />
                </div>
                <div className='relative container mx-auto px-4 pt-32'>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <MoviePoster
                            src={`${process.env.TMDB_POSTER_IMAGE_BASE_URL}${details?.poster_path}`}
                            alt={details?.title}
                        />
                        <div className='md:w-2/3'>
                            <Details details={details} />
                            <div className='mb-6'>
                                <h3 className='text-gray-400 mb-2'>Cast</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {casts?.map((cast) => (
                                        <div
                                            key={cast?.id}
                                            className='text-center'>
                                            <Image
                                                src={
                                                    cast?.profile_path
                                                        ? `${process.env.TMDB_CAST_IMAGE_BASE_URL}${cast?.profile_path}`
                                                        : fallbackCastImage
                                                }
                                                alt='Naomi Scott'
                                                className='w-24 h-24 rounded-full object-cover mb-2'
                                                width={100}
                                                height={100}
                                            />
                                            <p className='text-sm'>
                                                {cast?.original_name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mb-6'>
                                <ActionButton movieId={details?.id} />
                            </div>
                            <SocialShareHandler
                                url={`${process.env.SITE_URL}/movie/${details?.id}`}
                                title={details?.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeatilsArea;
