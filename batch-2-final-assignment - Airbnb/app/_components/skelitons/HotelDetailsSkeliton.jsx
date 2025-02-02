export default function HotelDetailsSkeliton() {
    return (
        <div className='max-w-7xl mx-auto px-6 py-8 animate-pulse'>
            {/* Property Title and Rating */}
            <div className='mb-6'>
                <div className='h-8 w-2/5 bg-gray-300 rounded mb-2'></div>
                <div className='flex items-center gap-2 text-gray-300'>
                    <div className='h-6 w-6 bg-gray-300 rounded-full'></div>
                    <div className='h-6 w-10 bg-gray-300 rounded'></div>
                    <div className='h-6 w-16 bg-gray-300 rounded ml-2'></div>
                    <div className='h-6 w-12 bg-gray-300 rounded mx-2'></div>
                </div>
            </div>

            {/* Image Gallery */}
            <div className='grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]'>
                <div className='col-span-2 row-span-2 bg-gray-300 rounded-lg'></div>
                <div className='bg-gray-300 rounded-lg'></div>
                <div className='bg-gray-300 rounded-lg'></div>
                <div className='bg-gray-300 rounded-lg'></div>
                <div className='bg-gray-300 rounded-lg'></div>
            </div>

            {/* Property Details */}
            <div className='grid grid-cols-3 gap-8'>
                {/* Left Column */}
                <div className='col-span-2'>
                    <div className='border-b pb-6 mb-6'>
                        <div className='h-6 w-2/5 bg-gray-300 rounded mb-4'></div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className='h-6 w-1/3 bg-gray-300 rounded mb-4'></div>
                        <div className='h-5 w-full bg-gray-300 rounded mb-2'></div>
                        <div className='h-5 w-4/5 bg-gray-300 rounded mb-2'></div>
                        <div className='h-5 w-3/4 bg-gray-300 rounded'></div>
                    </div>
                    <div>
                        <div className='h-6 w-1/3 bg-gray-300 rounded mb-4'></div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                            <div className='h-6 w-full bg-gray-300 rounded'></div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className='bg-white shadow-lg rounded-xl p-6 border'>
                        <div className='flex justify-between items-center mb-4'>
                            <div className='h-6 w-16 bg-gray-300 rounded'></div>
                            <div className='h-6 w-12 bg-gray-300 rounded'></div>
                        </div>
                        <div className='border rounded-lg mb-4'>
                            <div className='grid grid-cols-2 border-b'>
                                <div className='h-10 w-full bg-gray-300 rounded'></div>
                                <div className='h-10 w-full bg-gray-300 rounded'></div>
                            </div>
                            <div className='h-10 w-full bg-gray-300 rounded'></div>
                        </div>
                        <div className='h-10 w-full bg-gray-300 rounded mb-4'></div>
                        <div className='text-center text-gray-300'>
                            <div className='h-6 w-2/3 bg-gray-300 mx-auto rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
