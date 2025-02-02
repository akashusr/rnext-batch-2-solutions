export default function CompareDataSkeliton() {
    return (
        <div className='bg-zinc-900 rounded-lg p-4 flex flex-col animate-pulse'>
            {/* Close Button Placeholder */}
            <div className='flex justify-end mb-4'>
                <div className='h-4 w-4 bg-zinc-800 rounded-full'></div>
            </div>

            <div className='grid grid-cols-5 gap-8'>
                {/* Poster Section Placeholder */}
                <div className='col-span-2 h-full'>
                    <div className='w-full h-[600px] bg-zinc-800 rounded-lg mb-4'></div>
                    <div className='h-6 w-3/4 bg-zinc-800 rounded mx-auto'></div>
                </div>

                {/* Details Section Placeholder */}
                <div className='w-full space-y-4 col-span-3'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className='bg-zinc-800 h-10 rounded'></div>
                    ))}

                    {/* Genres Placeholder */}
                    <div className='bg-zinc-800 p-3 rounded space-y-2'>
                        <div className='h-4 w-1/4 bg-zinc-700 rounded'></div>
                        <div className='mt-2 flex flex-wrap gap-2'>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className='h-6 w-16 bg-zinc-700 rounded-full'></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
