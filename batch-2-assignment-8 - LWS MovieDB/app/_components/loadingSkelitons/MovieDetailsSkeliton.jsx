export default function MovieDetailsSkeleton() {
    return (
        <div id='movieDetails-skeleton' className='min-h-screen pt-20 mb-8'>
            <div className='relative h-screen'>
                {/* Background Placeholder */}
                <div className='absolute inset-0 bg-gray-700 animate-pulse'></div>

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70'></div>

                {/* Content Placeholder */}
                <div className='relative container mx-auto px-4 pt-32'>
                    <div className='flex flex-col md:flex-row gap-8'>
                        {/* Poster Placeholder */}
                        <div className='w-[400px] h-[550px] bg-gray-500 rounded-lg animate-pulse'></div>

                        {/* Details Section */}
                        <div className='md:w-2/3 space-y-6'>
                            {/* Title Placeholder */}
                            <div className='h-8 w-3/4 bg-gray-500 rounded animate-pulse'></div>

                            {/* Additional Details Placeholder */}
                            <div className='space-y-2'>
                                <div className='h-4 w-1/2 bg-gray-500 rounded animate-pulse'></div>
                                <div className='h-4 w-2/3 bg-gray-500 rounded animate-pulse'></div>
                                <div className='h-4 w-1/4 bg-gray-500 rounded animate-pulse'></div>
                            </div>

                            {/* Cast Placeholder */}
                            <div className='space-y-2'>
                                <h3 className='h-6 w-24 bg-gray-500 rounded animate-pulse'></h3>
                                <div className='flex flex-wrap gap-4'>
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <div
                                                key={index}
                                                className='flex flex-col items-center space-y-2'>
                                                <div className='w-24 h-24 bg-gray-500 rounded-full animate-pulse'></div>
                                                <div className='h-4 w-16 bg-gray-500 rounded animate-pulse'></div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Action Button Placeholder */}
                            <div className='h-10 w-32 bg-gray-500 rounded-lg animate-pulse'></div>

                            {/* Social Share Placeholder */}
                            <div className='h-6 w-48 bg-gray-500 rounded animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
