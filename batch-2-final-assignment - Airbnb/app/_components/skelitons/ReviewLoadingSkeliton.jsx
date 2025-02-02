export default function ReviewsLoadingSkeleton() {
    return (
        <div className=' darkclass max-w-7xl mx-auto px-6 py-12 border-t animate-pulse'>
            {/* Reviews Header with Average Rating */}
            <h3>Loading reviews....</h3>

            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-4'>
                    <div className='h-6 w-28 bg-gray-300 rounded'></div>
                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded'></div>
                        <div className='h-6 w-10 bg-gray-300 rounded'></div>
                        <div className='h-6 w-1 bg-gray-300 rounded mx-2'></div>
                        <div className='h-6 w-16 bg-gray-300 rounded'></div>
                    </div>
                </div>
                <div className='h-8 w-36 bg-gray-300 rounded'></div>
            </div>

            {/* Reviews Grid */}
            <div className='grid grid-cols-2 gap-8'>
                {/* Review Card 1 */}
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                        <div>
                            <div className='h-4 w-24 bg-gray-300 rounded mb-1'></div>
                            <div className='h-4 w-16 bg-gray-300 rounded'></div>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className='h-4 w-4 bg-gray-300 rounded'></div>
                            ))}
                    </div>
                    <div className='space-y-2'>
                        <div className='h-4 w-full bg-gray-300 rounded'></div>
                        <div className='h-4 w-4/5 bg-gray-300 rounded'></div>
                        <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                    </div>
                </div>

                {/* Review Card 2 */}
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                        <div>
                            <div className='h-4 w-24 bg-gray-300 rounded mb-1'></div>
                            <div className='h-4 w-16 bg-gray-300 rounded'></div>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className='h-4 w-4 bg-gray-300 rounded'></div>
                            ))}
                    </div>
                    <div className='space-y-2'>
                        <div className='h-4 w-full bg-gray-300 rounded'></div>
                        <div className='h-4 w-4/5 bg-gray-300 rounded'></div>
                        <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
