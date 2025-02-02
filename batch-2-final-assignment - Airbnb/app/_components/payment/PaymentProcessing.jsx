import { useEffect, useState } from "react";

export default function PaymentProcessing() {
    const [isProcessing, setIsProcessing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsProcessing(false);
        }, 3000); // Simulate 2-second delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50'>
            <div className='flex items-center justify-center min-h-screen'>
                {isProcessing ? (
                    <div className='flex flex-col items-center space-y-4'>
                        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
                        <p className='text-lg font-semibold text-gray-700'>
                            Processing your payment...
                        </p>
                    </div>
                ) : (
                    <div className='text-center space-y-4'>
                        <div className='bg-green-100 p-4 rounded-full'>
                            <svg
                                className='h-12 w-12 text-green-600'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'>
                                <path
                                    fillRule='evenodd'
                                    d='M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <p className='text-2xl font-bold text-gray-800'>
                            Payment Successful!
                        </p>
                        <p className='text-gray-600'>
                            Thank you for your payment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
