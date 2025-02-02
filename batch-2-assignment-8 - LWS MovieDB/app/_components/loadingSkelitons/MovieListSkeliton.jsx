import SectionTitle from "../common/SectionTitle";

export default function MovieListSkeliton({ title }) {
    return (
        <section className='mb-8'>
            <SectionTitle title={title} />
            <div
                id='movies-skeleton'
                className='flex space-x-4 overflow-x-auto pb-4'>
                {/* Placeholder movie cards */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className='flex flex-col' key={index}>
                        <div className='w-48 h-[300px] bg-gray-500 rounded-lg animate-pulse'></div>
                        {title === "Trending Now" && (
                            <div className='mt-2'>
                                <h3 className='animate-pulse w-8 h-2 text-light text-sm font-bold truncate'></h3>
                                <p className='animate-pulse text-primary text-xs w-4 h-2'></p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
