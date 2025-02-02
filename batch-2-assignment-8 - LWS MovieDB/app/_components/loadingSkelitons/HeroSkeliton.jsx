export default function HeroSkeleton() {
    return (
        <div
            id='hero-skeleton'
            className='relative h-screen bg-gray-700 animate-pulse'>
            {/* Simulated background */}
            <div className='absolute inset-0 bg-gray-600' />

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black' />

            {/* Skeleton content */}
            <div className='absolute bottom-0 left-0 p-12'>
                {/* Title placeholder */}
                <div className='bg-gray-500 h-12 w-1/2 rounded mb-4'></div>

                {/* Overview placeholder */}
                <div className='bg-gray-500 h-6 w-3/4 rounded mb-4'></div>
                <div className='bg-gray-500 h-6 w-2/3 rounded mb-4'></div>

                {/* Button placeholder */}
                <div className='bg-gray-500 h-10 w-32 rounded-lg'></div>
            </div>
        </div>
    );
}
