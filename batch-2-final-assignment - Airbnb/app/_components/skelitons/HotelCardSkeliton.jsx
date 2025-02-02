const HotelCardSkeliton = () => {
    return (
        <div className='darkclass block group animate-pulse'>
            <div>
                <div className='relative'>
                    <div className='w-full h-64 bg-gray-300 rounded-xl'></div>
                    <div className='absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold h-5 w-24'></div>
                </div>
                <div className='mt-3 space-y-2'>
                    <div className='w-2/3 h-5 bg-gray-300 rounded-md'></div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                            <div className='w-10 h-4 bg-gray-300 rounded-md'></div>
                        </div>
                    </div>
                    <div className='w-full h-4 bg-gray-300 rounded-md'></div>
                    <div className='mt-2 flex justify-between items-center'>
                        <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
                        <div className='w-1/3 h-4 bg-gray-300 rounded-md'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCardSkeliton;
