const PricingPreiewCardSkeliton = () => {
    return (
        <div>
            {/* Price Details Card */}
            <div className=' darkclass bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-0'>
                <div className='flex items-start gap-4 mb-6'>
                    <div className='w-20 h-20 bg-gray-300 rounded-lg'></div>
                    <div className='flex-1'>
                        <div className='w-32 h-4 bg-gray-300 rounded mb-2'></div>
                        <div className='w-24 h-4 bg-gray-300 rounded mb-2'></div>
                        <div className='w-16 h-4 bg-gray-300 rounded'></div>
                    </div>
                </div>

                <div className='border-t pt-4'>
                    <div className='w-36 h-5 bg-gray-300 rounded mb-4'></div>
                    <div className='space-y-3'>
                        <div className='flex justify-between'>
                            <div className='w-32 h-4 bg-gray-300 rounded'></div>
                            <div className='w-20 h-4 bg-gray-300 rounded'></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-32 h-4 bg-gray-300 rounded'></div>
                            <div className='w-20 h-4 bg-gray-300 rounded'></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-32 h-4 bg-gray-300 rounded'></div>
                            <div className='w-20 h-4 bg-gray-300 rounded'></div>
                        </div>
                        <div className='flex justify-between font-semibold pt-3 border-t'>
                            <div className='w-32 h-4 bg-gray-300 rounded'></div>
                            <div className='w-20 h-4 bg-gray-300 rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPreiewCardSkeliton;
