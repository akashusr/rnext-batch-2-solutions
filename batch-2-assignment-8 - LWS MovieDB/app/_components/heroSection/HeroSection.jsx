import { getNowPlayingMovies } from "@/app/_lib/api";

const HeroSection = async () => {
    const nowPlayingMovies = await getNowPlayingMovies();
    const nowShowing =
        nowPlayingMovies?.results?.length > 0 &&
        nowPlayingMovies?.results[
            Math.floor(Math.random() * nowPlayingMovies?.results?.length)
        ];

    return (
        <div
            id='hero'
            className='relative h-screen'
            style={{
                backgroundImage: `url(${process.env.TMDB_BACKDROP_IMAGE_BASE_URL}/${nowShowing?.backdrop_path})`,
                backgroundSize: "cover",
            }}>
            <div className='absolute inset-0 bg-gradient-to-t from-black' />
            <div className='absolute bottom-0 left-0 p-12'>
                <h1 id='heroTitle' className='text-5xl font-bold mb-4'>
                    {nowShowing?.title}
                </h1>
                <p id='heroOverview' className='text-lg max-w-2xl mb-4'>
                    {nowShowing?.overview}
                </p>
                <button className='bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80'>
                    ▶ Play
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
