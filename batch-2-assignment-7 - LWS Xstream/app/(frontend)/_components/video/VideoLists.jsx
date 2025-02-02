import Link from "next/link";

const VideoLists = async ({ children, dictionary, lang }) => {
    return (
        <section className='mt-12'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-semibold'>
                    {dictionary?.streamsOfTheDay}
                </h2>
                <Link
                    href={`${lang}/videos`}
                    className='bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full'>
                    {dictionary?.viewAll}
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {children}
            </div>
        </section>
    );
};

export default VideoLists;
