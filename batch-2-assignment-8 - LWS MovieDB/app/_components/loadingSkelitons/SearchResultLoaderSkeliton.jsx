export default function SearchResultLoaderSkeliton() {
    return (
        <div className='max-h-96 overflow-y-auto'>
            <p>Finding Data...</p>
            {Array.from({ length: 9 }).map((_, index) => (
                <div
                    key={index}
                    className='flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded animate-pulse'>
                    {/* Image Placeholder */}
                    <div className='w-16 h-24 bg-zinc-700 rounded'></div>

                    {/* Text Placeholders */}
                    <div className='flex flex-col gap-2'>
                        <div className='h-5 w-40 bg-zinc-700 rounded'></div>
                        <div className='h-4 w-16 bg-zinc-700 rounded'></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
